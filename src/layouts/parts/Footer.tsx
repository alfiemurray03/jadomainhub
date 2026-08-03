import { Building2, Cookie, ExternalLink, Mail, Phone, ShieldCheck } from 'lucide-react';

const linkClass = 'text-sm text-muted-foreground transition-colors hover:text-foreground';
const storefrontTermsUrl =
  'https://store.jadomainhub.jagroupservices.co.uk/legal-agreement?id=utos';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card text-card-foreground" role="contentinfo">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_repeat(3,minmax(0,1fr))]">
          <div>
            <a href="/" className="mb-5 inline-flex items-center" aria-label="JA Domain Hub — home">
              <span className="font-heading text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                JA DOMAIN HUB
              </span>
            </a>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Browse domain registration, hosting, email, security and website services before continuing to the authorised reseller storefront.
            </p>

            <div className="mt-5 flex items-start gap-2 rounded-xl border border-border bg-muted/40 p-3 text-xs leading-relaxed text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                For storefront services, JA Domain Hub acts as an agent of Wild West Domains, LLC. JA Domain Hub is not itself an ICANN-accredited registrar.
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Browse Services</h3>
            <ul className="space-y-2.5">
              <li><a href="/services" className="text-sm font-semibold text-primary transition-colors hover:text-primary/80">All Services &amp; Products</a></li>
              <li><a href="/products/domain-registration" className={linkClass}>Domain Registration</a></li>
              <li><a href="/products/domain-transfer" className={linkClass}>Domain Transfer</a></li>
              <li><a href="/products/cpanel" className={linkClass}>Web Hosting</a></li>
              <li><a href="/products/website-security" className={linkClass}>Website Security</a></li>
              <li><a href="/products/microsoft-365" className={linkClass}>Microsoft 365</a></li>
              <li><a href="/managed-websites" className={linkClass}>Managed Websites</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Support &amp; Account</h3>
            <ul className="space-y-2.5">
              <li><a href="https://store.jadomainhub.jagroupservices.co.uk" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>Open Storefront <ExternalLink className="h-3 w-3" /></a></li>
              <li><a href="https://www.secureserver.net/help?pl_id=599857&prog_id=599857" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>Help Centre <ExternalLink className="h-3 w-3" /></a></li>
              <li><a href="https://account.secureserver.net/products?plid=599857" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>My Account <ExternalLink className="h-3 w-3" /></a></li>
              <li><a href="https://www.secureserver.net/whois?plid=599857" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>WHOIS Lookup <ExternalLink className="h-3 w-3" /></a></li>
              <li><a href="/contact-us" className={linkClass}>Contact Us</a></li>
            </ul>

            <div className="mt-7 space-y-2.5 border-t border-border pt-5">
              <a href="tel:02038342790" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Phone className="h-4 w-4 text-primary" />
                020 3834 2790
              </a>
              <a href="mailto:jadomainhub@jagroupservices.co.uk" className="flex items-center gap-2 break-all text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                jadomainhub@jagroupservices.co.uk
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Company &amp; Legal</h3>
            <ul className="space-y-2.5">
              <li><a href="/about-us" className={linkClass}>About JA Domain Hub</a></li>
              <li><a href="https://jagroupservices.co.uk" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>JA Group Services Ltd <ExternalLink className="h-3 w-3" /></a></li>
              <li><a href="/terms-of-service" className={linkClass}>Legal Terms &amp; Agreements</a></li>
              <li><a href={storefrontTermsUrl} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>Storefront Universal Terms <ExternalLink className="h-3 w-3" /></a></li>
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
                  className={`${linkClass} inline-flex items-center gap-1.5 text-left`}
                >
                  <Cookie className="h-3.5 w-3.5" />
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-1.5">
              <p>© {currentYear} JA Group Services Ltd. All rights reserved.</p>
              <p className="flex flex-wrap items-center gap-x-2 text-xs leading-relaxed">
                <Building2 className="h-3.5 w-3.5 text-primary" />
                Registered in England and Wales · Company No. 16314179 · ICO Registration ZB877370
              </p>
              <p className="text-xs leading-relaxed">Registered Address: 167–169 Great Portland Street, 5th Floor, London, W1W 5PF</p>
            </div>
            <p className="max-w-xl text-xs leading-relaxed lg:text-right">
              Use of the storefront and purchases made through it are governed by the Wild West Domains/GoDaddy Universal Terms of Service and applicable product agreements. Managed Websites is a separate service supplied directly by JA Group Services Ltd under a written quotation or service agreement.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
