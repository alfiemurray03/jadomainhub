import { Building2, Cookie, ExternalLink, Headphones, Mail, Phone, ShieldCheck } from 'lucide-react';

import BrandWordmark from '@/components/BrandWordmark';

const linkClass = 'inline-flex min-h-10 items-center text-sm text-muted-foreground transition-colors hover:text-foreground';
const storefrontTermsUrl =
  'https://store.jadomainhub.jagroupservices.co.uk/legal-agreement?id=utos';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card text-card-foreground" role="contentinfo">
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.25fr_repeat(3,minmax(0,1fr))]">
          <div>
            <a href="/" className="group mb-5 inline-flex max-w-full items-center py-1" aria-label="Sousa Murray Domains — home">
              <BrandWordmark className="max-w-full text-lg transition-transform duration-200 group-hover:scale-[1.02] min-[380px]:text-xl sm:text-2xl" />
            </a>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Browse domain registration support and authorised reseller-based domain, hosting, email, security and self-service website products, with first-line customer support provided by JA Group Services Ltd.
            </p>

            <div className="mt-5 flex items-start gap-2 rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs leading-relaxed text-muted-foreground">
              <Headphones className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                JA Group Services Ltd is your first point of contact for Sousa Murray Domains support. We investigate and assist first, then coordinate provider escalation where required.
              </span>
            </div>

            <div className="mt-3 flex items-start gap-2 rounded-xl border border-border bg-muted/40 p-3 text-xs leading-relaxed text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                For storefront services, JA Group Services Ltd trades through Sousa Murray Domains and acts as an agent of Wild West Domains, LLC. Sousa Murray Domains is not a registry or an ICANN-accredited registrar.
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:mb-4">Browse Services</h3>
            <ul className="space-y-0.5 sm:space-y-1">
              <li><a href="/services" className="inline-flex min-h-10 items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80">All Services &amp; Products</a></li>
              <li><a href="/products/domain-registration" className={linkClass}>Domain Registration</a></li>
              <li><a href="/products/domain-transfer" className={linkClass}>Domain Transfer</a></li>
              <li><a href="/products/cpanel" className={linkClass}>Web Hosting</a></li>
              <li><a href="/products/website-security" className={linkClass}>Website Security</a></li>
              <li><a href="/products/microsoft-365" className={linkClass}>Microsoft 365</a></li>
              <li><a href="/managed-websites" className={linkClass}>Sousa Murray Sites — Coming soon</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:mb-4">Support &amp; Account</h3>
            <ul className="space-y-0.5 sm:space-y-1">
              <li><a href="/contact-us" className="inline-flex min-h-10 items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80">Contact JA Support</a></li>
              <li><a href="https://store.jadomainhub.jagroupservices.co.uk" target="_blank" rel="noopener noreferrer" className={`${linkClass} gap-1`}>Open Storefront <ExternalLink className="h-3 w-3 shrink-0" /></a></li>
              <li><a href="https://account.secureserver.net/products?plid=599857" target="_blank" rel="noopener noreferrer" className={`${linkClass} gap-1`}>My Account <ExternalLink className="h-3 w-3 shrink-0" /></a></li>
              <li><a href="https://www.secureserver.net/help?pl_id=599857&prog_id=599857" target="_blank" rel="noopener noreferrer" className={`${linkClass} gap-1`}>Provider Help Centre <ExternalLink className="h-3 w-3 shrink-0" /></a></li>
              <li><a href="https://www.secureserver.net/whois?plid=599857" target="_blank" rel="noopener noreferrer" className={`${linkClass} gap-1`}>WHOIS Lookup <ExternalLink className="h-3 w-3 shrink-0" /></a></li>
            </ul>

            <div className="mt-6 space-y-1 border-t border-border pt-5 sm:mt-7">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">First-line customer support</p>
              <a href="tel:02038342790" className="flex min-h-10 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                020 3834 2790
              </a>
              <a href="mailto:contact@jagroupservices.co.uk" className="flex min-h-10 items-center gap-2 break-all text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>contact@jagroupservices.co.uk</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:mb-4">Company &amp; Legal</h3>
            <ul className="space-y-0.5 sm:space-y-1">
              <li><a href="/about-us" className={linkClass}>About Sousa Murray Domains</a></li>
              <li><a href="https://jagroupservices.co.uk" target="_blank" rel="noopener noreferrer" className={`${linkClass} gap-1`}>JA Group Services Ltd <ExternalLink className="h-3 w-3 shrink-0" /></a></li>
              <li><a href="/terms-of-service" className={linkClass}>Legal Terms &amp; Agreements</a></li>
              <li><a href={storefrontTermsUrl} target="_blank" rel="noopener noreferrer" className={`${linkClass} gap-1`}>Storefront Universal Terms <ExternalLink className="h-3 w-3 shrink-0" /></a></li>
              <li><a href="/privacy-policy" className={linkClass}>Privacy Policy</a></li>
              <li><a href="/cookies-policy" className={linkClass}>Cookies Policy</a></li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.openCookiePreferences) {
                      window.openCookiePreferences();
                    }
                  }}
                  className={`${linkClass} gap-1.5 text-left`}
                >
                  <Cookie className="h-3.5 w-3.5 shrink-0" />
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground sm:mt-12">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-1.5">
              <p>© {currentYear} JA Group Services Ltd. All rights reserved.</p>
              <p className="flex items-start gap-2 text-xs leading-relaxed sm:flex-wrap sm:items-center">
                <Building2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary sm:mt-0" />
                <span>Registered in England and Wales · Company No. 16314179 · ICO Registration ZB877370</span>
              </p>
              <p className="text-xs leading-relaxed">Registered Address: 167–169 Great Portland Street, 5th Floor, London, W1W 5PF</p>
            </div>
            <p className="max-w-xl text-xs leading-relaxed lg:text-right">
              JA Group Services Ltd provides first-line customer support for Sousa Murray Domains. Storefront use and purchases remain governed by the Wild West Domains/GoDaddy Universal Terms of Service and applicable product agreements. Sousa Murray Sites is a separate forthcoming brand that has not yet launched for general ordering.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
