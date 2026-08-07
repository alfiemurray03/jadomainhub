const DEFAULT_HEAD_OFFICE_URL = 'https://customerops.jagroupservices.co.uk';

export const CENTRAL_PAYMENT_BRANDS = Object.freeze({
  domains: 'SOUSA_MURRAY_DOMAINS',
  sites: 'SOUSA_MURRAY_SITES',
});

function clean(value, max = 1000) {
  return String(value ?? '').trim().slice(0, max);
}

function headOfficeOrigin(env) {
  const configured = clean(
    env.HEAD_OFFICE_CUSTOMEROPS_URL || env.CUSTOMEROPS_BASE_URL || DEFAULT_HEAD_OFFICE_URL,
    500,
  ).replace(/\/$/, '');
  const url = new URL(configured);
  if (url.protocol !== 'https:' && !['localhost', '127.0.0.1'].includes(url.hostname)) {
    throw Object.assign(new Error('The Head Office Central Payments URL must use HTTPS.'), { code: 'CENTRAL_PAYMENTS_URL_INVALID' });
  }
  return url.origin;
}

function platformKey(env) {
  return clean(env.CUSTOMEROPS_API_KEY || env.HEAD_OFFICE_PLATFORM_KEY, 500);
}

export function centralPaymentsConfigured(env) {
  return platformKey(env).length > 20;
}

async function requestHeadOffice(env, path, init = {}) {
  const key = platformKey(env);
  if (!key) throw Object.assign(new Error('The existing Head Office platform connection is not configured.'), { code: 'CENTRAL_PAYMENTS_NOT_CONFIGURED', status: 503 });
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const response = await fetch(`${headOfficeOrigin(env)}${path}`, {
      ...init,
      signal: controller.signal,
      headers: {
        Authorization: `Bearer ${key}`,
        Accept: 'application/json',
        ...(init.body ? { 'Content-Type': 'application/json' } : {}),
        ...(init.headers || {}),
      },
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      const issue = new Error(payload?.error?.message || payload?.message || `Central Payments returned HTTP ${response.status}.`);
      issue.code = payload?.error?.code || payload?.code || 'CENTRAL_PAYMENTS_REQUEST_FAILED';
      issue.status = response.status;
      throw issue;
    }
    return payload;
  } catch (error) {
    if (error?.name === 'AbortError') throw Object.assign(new Error('Head Office Central Payments did not respond in time.'), { code: 'CENTRAL_PAYMENTS_TIMEOUT', status: 504 });
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Managed Website / Sites quotations are deliberately not arbitrary browser
 * charges. Head Office must first create/approve the product and price code.
 * GoDaddy-controlled reseller checkout remains outside this path.
 */
export async function createApprovedCentralCheckout(env, input) {
  const brand = CENTRAL_PAYMENT_BRANDS[input?.service === 'sites' ? 'sites' : 'domains'];
  const customerNumber = clean(input?.customerNumber, 20).replace(/\s/g, '');
  const productCode = clean(input?.productCode, 100).toUpperCase();
  const priceCode = clean(input?.priceCode, 100).toUpperCase();
  if (!/^\d{10}$/.test(customerNumber)) throw Object.assign(new Error('A valid JA Group Services UCN is required.'), { code: 'UCN_REQUIRED', status: 400 });
  if (!productCode || !priceCode) throw Object.assign(new Error('Head Office product and price codes are required.'), { code: 'APPROVED_PRICE_REQUIRED', status: 400 });
  return requestHeadOffice(env, '/api/v1/payments/checkout', {
    method: 'POST',
    body: JSON.stringify({
      brand,
      customerNumber,
      productCode,
      priceCode,
      orderReference: clean(input?.orderReference, 120) || undefined,
      serviceReference: clean(input?.serviceReference, 120) || undefined,
      successUrl: clean(input?.successUrl, 500),
      cancelUrl: clean(input?.cancelUrl, 500),
    }),
  });
}

export async function centralPaymentStatus(env, { customerNumber, reference, orderReference } = {}) {
  const query = new URLSearchParams();
  if (customerNumber) query.set('customerNumber', clean(customerNumber, 20));
  if (reference) query.set('reference', clean(reference, 120));
  if (orderReference) query.set('orderReference', clean(orderReference, 120));
  if (![...query.keys()].length) throw Object.assign(new Error('A Central Payments customer or payment reference is required.'), { code: 'PAYMENT_REFERENCE_REQUIRED', status: 400 });
  return requestHeadOffice(env, `/api/v1/payments/status?${query}`);
}

export async function createCentralBillingPortal(env, customerNumber, brand = CENTRAL_PAYMENT_BRANDS.domains) {
  const ucn = clean(customerNumber, 20).replace(/\s/g, '');
  if (!/^\d{10}$/.test(ucn)) throw Object.assign(new Error('A valid JA Group Services UCN is required.'), { code: 'UCN_REQUIRED', status: 400 });
  const returnUrl = brand === CENTRAL_PAYMENT_BRANDS.sites
    ? 'https://sousamurraydomains.jagroupservices.co.uk/managed-websites'
    : 'https://sousamurraydomains.jagroupservices.co.uk/';
  return requestHeadOffice(env, '/api/v1/payments/portal', {
    method: 'POST',
    body: JSON.stringify({ brand, customerNumber: ucn, returnUrl }),
  });
}

export function centralPaymentsConnection(env) {
  return {
    configured: centralPaymentsConfigured(env),
    authority: 'JA Group Services Ltd – Central Payments',
    headOfficeOrigin: headOfficeOrigin(env),
    stripeSecretHeldLocally: false,
    supplierControlledGoDaddyExcluded: true,
  };
}
