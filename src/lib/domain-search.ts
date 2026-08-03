const RESELLER_DOMAIN_SEARCH_URL =
  'https://www.secureserver.net/products/domain-registration/find';
const RESELLER_ID = '599857';

export function resellerDomainSearchUrl(domain: string): string {
  const cleanedDomain = domain
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .split('/')[0]
    .replace(/\.$/, '');

  const params = new URLSearchParams({
    plid: RESELLER_ID,
    domainToCheck: cleanedDomain,
  });

  return `${RESELLER_DOMAIN_SEARCH_URL}?${params.toString()}`;
}
