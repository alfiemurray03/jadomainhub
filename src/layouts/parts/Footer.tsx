import { Shield, Cookie, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Home', href: '/' },
      { name: 'Who We Are', href: '/about-us' },
      { name: 'Managed Websites', href: '/managed-websites' },
      { name: 'Contact', href: '/contact-us' },
    ],
    resources: [
      { name: 'Help Center', href: 'https://www.secureserver.net/help?pl_id=599857&prog_id=599857', external: true },
      { name: 'My Account', href: 'https://account.secureserver.net/products?plid=599857', external: true },
      { name: 'WHOIS Lookup', href: 'https://www.secureserver.net/whois?plid=599857', external: true },
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms-of-service', external: false },
      { name: 'Privacy Policy', href: '/privacy-policy', external: false },
      { name: 'Cookies Policy', href: '/cookies-policy', external: false },
    ],
  };

  return (
    <footer className="border-t bg-primary/5 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <motion.a
                href="/"
                className="inline-block transition-opacity hover:opacity-90"
                aria-label="JA Domain Hub home"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <span className="text-xl font-black tracking-tight text-foreground md:text-2xl">
                  JA DOMAIN HUB
                </span>
              </motion.a>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>GoDaddy Reseller &middot; Domain, Hosting &amp; Email</span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2 border-t pt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Contact</p>
              <a href="tel:02038342790" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Phone className="h-3.5 w-3.5 shrink-0 text-primary" />
                020 3834 2790
              </a>
              <a href="mailto:jadomainhub@jagroupservices.co.uk" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Mail className="h-3.5 w-3.5 shrink-0 text-primary" />
                jadomainhub@jagroupservices.co.uk
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.openCookiePreferences) {
                      window.openCookiePreferences();
                    }
                  }}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Cookie className="h-3.5 w-3.5" />
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="space-y-3 text-center">
            <p className="text-sm text-muted-foreground">
              JA Domain Hub is a service operated by{' '}
              <a href="https://jagroupservices.co.uk" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-foreground hover:underline">
                JA Group Services Ltd
              </a>
              , registered in England and Wales (Company Number 16314179).
            </p>
            <p className="text-sm text-muted-foreground">
              JA Domain Hub operates as a GoDaddy Reseller, providing access to domain registration, hosting, email, SSL and related online services through GoDaddy reseller and third-party provider systems.
            </p>
            <p className="text-sm text-muted-foreground">
              JA Domain Hub is not GoDaddy. JA Domain Hub is not a registry and not an ICANN accredited registrar.
            </p>
            <p className="text-xs text-muted-foreground/80 mt-4">
              Services purchased through the JA Domain Hub shop or storefront may be subject to GoDaddy, reseller, provider or third-party terms, policies, renewal rules, cancellation rules, refund rules and technical service conditions.{' '}
              <a href="/terms-of-service" className="underline hover:text-foreground">
                Our Terms of Service
              </a>{' '}
              apply to your use of this website.
            </p>
            <p className="text-sm text-muted-foreground">© {currentYear} JA Group Services Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
