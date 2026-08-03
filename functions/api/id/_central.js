const DEFAULT_HEAD_OFFICE_URL = 'https://customerops.jagroupservices.co.uk';

function clean(value, max = 1000) {
  return String(value ?? '').trim().slice(0, max);
}

function origin(env) {
  const configured = clean(env.HEAD_OFFICE_CUSTOMEROPS_URL || env.CUSTOMEROPS_BASE_URL || DEFAULT_HEAD_OFFICE_URL, 500).replace(/\/$/, '');
  const url = new URL(configured);
  if (url.protocol !== 'https:' && !['localhost', '127.0.0.1'].includes(url.hostname)) throw new Error('Head Office URL must use HTTPS');
  return url.origin;
}

function key(env) {
  const value = clean(env.CUSTOMEROPS_API_KEY, 500);
  if (value.length < 20) throw new Error('CUSTOMEROPS_API_KEY is not configured');
  return value;
}

async function request(env, path, init = {}, allow404 = false) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const response = await fetch(`${origin(env)}${path}`, {
      ...init,
      headers: {
        authorization: `Bearer ${key(env)}`,
        accept: 'application/json',
        ...(init.body ? { 'content-type': 'application/json' } : {}),
        ...(init.headers || {}),
      },
      signal: controller.signal,
    });
    const payload = await response.json().catch(() => null);
    if (allow404 && response.status === 404) return null;
    if (!response.ok) {
      const error = new Error(payload?.error?.message || payload?.message || 'Head Office rejected the request.');
      error.status = response.status;
      error.code = payload?.error?.code || payload?.code || `HEAD_OFFICE_HTTP_${response.status}`;
      throw error;
    }
    return payload;
  } finally {
    clearTimeout(timeout);
  }
}

function client(request) {
  const agent = clean(request.headers.get('user-agent'), 500);
  const browser = /Edg\//i.test(agent) ? 'Microsoft Edge'
    : /Firefox\//i.test(agent) ? 'Mozilla Firefox'
    : /Chrome|CriOS/i.test(agent) ? 'Google Chrome'
    : /Safari\//i.test(agent) ? 'Safari' : 'Web browser';
  const os = /Windows/i.test(agent) ? 'Windows'
    : /iPhone|iPad|iPod/i.test(agent) ? 'iOS or iPadOS'
    : /Android/i.test(agent) ? 'Android'
    : /Mac OS X/i.test(agent) ? 'macOS'
    : /Linux/i.test(agent) ? 'Linux' : 'Unknown operating system';
  const category = /iPad|Tablet/i.test(agent) ? 'tablet' : /Mobi|iPhone|Android/i.test(agent) ? 'mobile' : 'computer';
  const cf = request.cf || {};
  return {
    device: { category, name: `${browser} on ${os}`, browser, operatingSystem: os, userAgentSummary: `${browser} · ${os} · ${category}` },
    location: {
      countryCode: clean(cf.country || request.headers.get('cf-ipcountry'), 8),
      countryName: clean(cf.country || request.headers.get('cf-ipcountry'), 100),
      region: clean(cf.region, 120),
      city: clean(cf.city, 120),
    },
  };
}

export async function registerSession(requestObject, env, user, reference, startedAt, expiresAt) {
  return request(env, '/api/platform/sessions', {
    method: 'POST',
    body: JSON.stringify({
      customer: {
        tenantId: user.tenantId,
        objectId: user.objectId,
        platformCustomerId: user.id,
      },
      session: {
        externalSessionId: reference,
        status: 'active',
        startedAt,
        lastSeenAt: new Date().toISOString(),
        expiresAt,
        ...client(requestObject),
        metadata: { service: 'JA Domain Hub', source: 'ja_domain_hub_identity_session' },
      },
    }),
  });
}

export function decision(env, reference) {
  return request(env, `/api/platform/sessions/${encodeURIComponent(reference)}`, { method: 'GET' }, true);
}

export function closeSession(env, reference, reason = 'Customer signed out of JA Domain Hub.') {
  if (!reference) return null;
  return request(env, `/api/platform/sessions/${encodeURIComponent(reference)}`, {
    method: 'DELETE',
    body: JSON.stringify({ reason: clean(reason, 500) }),
  }, true);
}
