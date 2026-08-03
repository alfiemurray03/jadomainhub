import {
  SESSION_COOKIE,
  clearCookie,
  getMetadata,
  getOidcConfig,
  parseCookies,
  verifySignedPayload,
} from './_shared.js';
import { closeSession } from './_central.js';

const DEFAULT_RETURN = 'https://jadomainhub.jagroupservices.co.uk/ja-group-services-id?logged_out=1';

async function currentSession(request, env) {
  try {
    const config = getOidcConfig(env);
    return verifySignedPayload(parseCookies(request)[SESSION_COOKIE], config.signingSecret);
  } catch { return null; }
}

export async function onRequestGet({ request, env }) {
  let destination = '/ja-group-services-id?logged_out=1';
  try {
    const session = await currentSession(request, env);
    if (session?.sessionReference) {
      await closeSession(env, session.sessionReference, 'Customer signed out of JA Domain Hub.').catch(error => {
        console.error('ja-domain-hub.central-session.close.failed', error);
      });
    }
    const config = getOidcConfig(env);
    const metadata = await getMetadata(config);
    if (!metadata.end_session_endpoint) throw new Error('Microsoft did not publish an end-session endpoint');
    const returnUri = String(env.OIDC_POST_LOGOUT_REDIRECT_URI || DEFAULT_RETURN).trim();
    const logout = new URL(metadata.end_session_endpoint);
    logout.searchParams.set('post_logout_redirect_uri', returnUri);
    destination = logout.toString();
  } catch (error) {
    console.error('ja-domain-hub.id.sign-out.failed', error);
  }
  return new Response(null, {
    status: 302,
    headers: {
      location: destination,
      'set-cookie': clearCookie(SESSION_COOKIE),
      'cache-control': 'no-store',
      'referrer-policy': 'no-referrer',
    },
  });
}
