import { Building2, Cookie, ExternalLink, Globe2, Mail, Phone, ShieldCheck } from 'lucide-react';

const linkClass = 'text-sm text-muted-foreground transition-colors hover:text-foreground';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card text-card-foreground" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_repeat(3,minmax(0,1fr))]">
          <div>
            <a href="/" className="mb-5 inline-flex items-center gap-3" aria-label="JA Domain Hub — home">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md shadow-primary/20">
                <Globe2 className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-heading text-lg font-extrabold tracking-tight text-foreground">JA DOMAIN HUB</span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">A JA Group Services brand</span>
              </span>
            </a>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Domain registration, hosting, email and website services provided through authorised reseller infrastructure, with customer support from JA Group Services Ltd.
            </p>

            <div className="mt-5 flex items-start gap-2 rounded-xl border border-border bg-muted/40 p-3 text-xs leading-relaxed text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>JA Domain Hub operates as a GoDaddy Reseller and is not GoDaddy, a registry or an ICANN-accredited registrar.</span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Services</h3>
            <ul className="space-y-2.5">
              <li><a href="https://store.jadomainhub.jagroupservices.co.uk/products/domain-registration" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>Domain Registration <ExternalLink className="h-3 w-3" /></a></li>
              <li><a href="https://store.jadomainhub.jagroupservices.co.uk/products/domain-transfer" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>Domain Transfer <ExternalLink className="h-3 w-3" /></a></li>
              <li><a href="https://store.jadomainhub.jagroupservices.co.uk/products/cpanel" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>Web Hosting <ExternalLink className="h-3 w-3" /></a></li>
              <li><a href="https://store.jadomainhub.jagroupservices.co.uk/products/microsoft-365" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>Microsoft 365 <ExternalLink className="h-3 w-3" /></a></li>
              <li><a href="/managed-websites" className={linkClass}>Managed Websites</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Support &amp; Account</h3>
            <ul className="space-y-2.5">
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
              <li><a href="/terms-of-service" className={linkClass}>Terms of Service</a></li>
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
              Products purchased through the storefront may be subject to provider terms, renewal rules, cancellation rules, refund rules and technical service conditions in addition to the applicable JA Domain Hub terms.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
