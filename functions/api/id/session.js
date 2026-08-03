import {
  SESSION_COOKIE,
  clearCookie,
  cookie,
  getOidcConfig,
  json,
  parseCookies,
  signPayload,
  verifySignedPayload,
} from './_shared.js';
import { decision, registerSession } from './_central.js';

export async function onRequestGet({ request, env }) {
  try {
    const config = getOidcConfig(env);
    const value = parseCookies(request)[SESSION_COOKIE];
    const session = await verifySignedPayload(value, config.signingSecret);
    const now = Math.floor(Date.now() / 1000);
    if (!session?.user || Number(session.exp) <= now) {
      return json({ authenticated: false }, 200, value ? { 'set-cookie': clearCookie(SESSION_COOKIE) } : {});
    }

    let centralSessionId = session.centralSessionId || null;
    let centralStatus = session.centralStatus || 'pending';
    let replacement = null;
    try {
      let result = await decision(env, session.sessionReference);
      if (!result?.found) {
        const registered = await registerSession(
          request,
          env,
          session.user,
          session.sessionReference,
          new Date(Number(session.issuedAt) * 1000).toISOString(),
          new Date(Number(session.exp) * 1000).toISOString(),
        );
        centralSessionId = registered?.session?.id || centralSessionId;
        centralStatus = registered?.session?.status || 'active';
      } else {
        centralStatus = result.status || 'unknown';
        centralSessionId = result.sessionId || centralSessionId;
        if (result.revoke || result.active === false) {
          return json({ authenticated: false, revoked: true, reason: 'connected_session_revoked' }, 200, {
            'set-cookie': clearCookie(SESSION_COOKIE),
          });
        }
      }
      if (centralSessionId !== session.centralSessionId || centralStatus !== session.centralStatus) {
        const updated = await signPayload({ ...session, centralSessionId, centralStatus }, config.signingSecret);
        replacement = cookie(SESSION_COOKIE, updated, Math.max(0, Number(session.exp) - now));
      }
    } catch (error) {
      console.error('ja-domain-hub.central-session.check.failed', error);
      centralStatus = 'temporarily_unavailable';
    }

    return json({
      authenticated: true,
      user: session.user,
      session: {
        id: centralSessionId,
        reference: session.sessionReference,
        centralStatus,
        issuedAt: new Date(Number(session.issuedAt) * 1000).toISOString(),
        expiresAt: new Date(Number(session.exp) * 1000).toISOString(),
      },
    }, 200, replacement ? { 'set-cookie': replacement } : {});
  } catch (error) {
    console.error('ja-domain-hub.id.session.failed', error);
    return json({ authenticated: false, error: 'identity_service_unavailable' }, 503);
  }
}
