import { useEffect, useState } from 'react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CustomerWebsitesMenu, { MobileCustomerWebsitesMenu } from '@/components/CustomerWebsitesMenu';
import ThemeToggle from '@/components/ThemeToggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const menuItems = {
  domains: [
    { name: 'Domain Registration', description: 'Find and register your domain', href: 'https://store.jadomainhub.jagroupservices.co.uk/products/domain-registration' },
    { name: 'Domain Transfer', description: 'Move an existing domain', href: 'https://store.jadomainhub.jagroupservices.co.uk/products/domain-transfer' },
    { name: 'Bulk Registration', description: 'Search for multiple domains', href: 'https://www.secureserver.net/domains/bulk-domain-search?plid=599857' },
    { name: 'Bulk Transfer', description: 'Transfer domains in bulk', href: 'https://www.secureserver.net/domains/bulk-domain-transfer.aspx?plid=599857' },
  ],
  websites: [
    { name: 'Website Builder', description: 'Build using guided tools', href: 'https://store.jadomainhub.jagroupservices.co.uk/products/website-builder' },
    { name: 'WordPress', description: 'WordPress products and hosting', href: 'https://store.jadomainhub.jagroupservices.co.uk/products/wordpress' },
  ],
  hosting: [
    { name: 'cPanel Hosting', description: 'Flexible shared web hosting', href: 'https://store.jadomainhub.jagroupservices.co.uk/products/cpanel' },
    { name: 'WordPress Hosting', description: 'Hosting made for WordPress', href: 'https://store.jadomainhub.jagroupservices.co.uk/products/wordpress' },
    { name: 'Web Hosting Plus', description: 'More resources and control', href: 'https://store.jadomainhub.jagroupservices.co.uk/products/business' },
    { name: 'VPS Hosting', description: 'Virtual private servers', href: 'https://store.jadomainhub.jagroupservices.co.uk/products/vps' },
  ],
  security: [
    { name: 'Website Security', description: 'Protection and monitoring', href: 'https://store.jadomainhub.jagroupservices.co.uk/products/website-security' },
    { name: 'SSL Certificates', description: 'Secure your website traffic', href: 'https://store.jadomainhub.jagroupservices.co.uk/products/ssl' },
    { name: 'Managed SSL', description: 'SSL installation and management', href: 'https://store.jadomainhub.jagroupservices.co.uk/products/ssl-managed' },
    { name: 'Website Backup', description: 'Backup and restore options', href: 'https://store.jadomainhub.jagroupservices.co.uk/products/website-backup' },
  ],
  more: [
    { name: 'Email Marketing', description: 'Reach and retain customers', href: 'https://store.jadomainhub.jagroupservices.co.uk/products/email-marketing' },
    { name: 'SEO', description: 'Improve search visibility', href: 'https://store.jadomainhub.jagroupservices.co.uk/products/seo' },
    { name: 'Microsoft 365', description: 'Professional business email', href: 'https://store.jadomainhub.jagroupservices.co.uk/products/microsoft-365' },
    { name: 'Managed Websites', description: 'A tailored service from JA Group Services', href: '/managed-websites' },
  ],
};

const labels: Record<keyof typeof menuItems, string> = {
  domains: 'Domains',
  websites: 'Websites',
  hosting: 'Hosting',
  security: 'Security',
  more: 'More Services',
};

const triggerClass =
  'rounded-xl bg-transparent px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-150 hover:bg-muted hover:text-foreground data-[state=open]:bg-muted data-[state=open]:text-foreground';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMobileMenu();
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-card/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-5 lg:px-6 2xl:px-8">
        <div className="flex h-16 items-center justify-between gap-2 md:h-[68px]">
          <a href="/" className="group flex shrink-0 items-center" aria-label="JA Domain Hub — home">
            <span className="font-heading text-lg font-extrabold tracking-tight text-foreground sm:text-xl">
              JA DOMAIN HUB
            </span>
          </a>

          <NavigationMenu className="hidden 2xl:flex">
            <NavigationMenuList className="gap-0.5">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <a href="/" className={triggerClass}>Home</a>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {(Object.keys(menuItems) as Array<keyof typeof menuItems>).map((category) => (
                <NavigationMenuItem key={category}>
                  <NavigationMenuTrigger className={triggerClass}>{labels[category]}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[320px] gap-1.5 rounded-2xl border-border bg-popover p-2 text-popover-foreground shadow-xl">
                      {menuItems[category].map((item) => {
                        const isExternal = item.href.startsWith('http');
                        return (
                          <li key={item.name}>
                            <NavigationMenuLink asChild>
                              <a
                                href={item.href}
                                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                className="block rounded-xl p-3 transition-colors hover:bg-muted focus:bg-muted"
                              >
                                <span className="block text-sm font-semibold text-foreground">{item.name}</span>
                                <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">{item.description}</span>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden shrink-0 items-center gap-2 2xl:flex">
            <a
              href="tel:02038342790"
              className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl border border-border bg-muted/70 px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Phone className="h-3.5 w-3.5 text-primary" />
              020 3834 2790
            </a>
            <ThemeToggle />
            <Button className="rounded-xl px-4" asChild>
              <a href="https://account.secureserver.net/products?plid=599857" target="_blank" rel="noopener noreferrer">Account</a>
            </Button>
            <CustomerWebsitesMenu />
          </div>

          <div className="flex shrink-0 items-center gap-2 2xl:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-menu" className="absolute left-0 right-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-card shadow-2xl 2xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
            <a href="tel:02038342790" className="mb-2 flex min-h-12 items-center gap-2 whitespace-nowrap rounded-xl border border-border bg-muted px-4 py-3 text-sm font-semibold text-foreground">
              <Phone className="h-4 w-4 text-primary" />
              020 3834 2790
            </a>

            <a href="/" onClick={closeMobileMenu} className="flex min-h-12 items-center rounded-xl px-3 py-3 text-sm font-medium text-foreground hover:bg-muted">Home</a>

            {(Object.keys(menuItems) as Array<keyof typeof menuItems>).map((category) => (
              <div key={category} className="rounded-2xl border border-border bg-muted/30 p-2">
                <button
                  type="button"
                  onClick={() => setMobileDropdownOpen(mobileDropdownOpen === category ? null : category)}
                  className="flex min-h-11 w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-semibold text-foreground hover:bg-muted"
                >
                  {labels[category]}
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdownOpen === category ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdownOpen === category && (
                  <div className="space-y-1 pt-1">
                    {menuItems[category].map((item) => {
                      const isExternal = item.href.startsWith('http');
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          onClick={closeMobileMenu}
                          className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                          {item.name}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            <a href="/about-us" onClick={closeMobileMenu} className="flex min-h-12 items-center rounded-xl px-3 py-3 text-sm font-medium text-foreground hover:bg-muted">About Us</a>
            <a href="/contact-us" onClick={closeMobileMenu} className="flex min-h-12 items-center rounded-xl px-3 py-3 text-sm font-medium text-foreground hover:bg-muted">Contact Us</a>
            <MobileCustomerWebsitesMenu onNavigate={closeMobileMenu} />

            <Button className="mt-2 w-full rounded-xl" asChild>
              <a href="https://account.secureserver.net/products?plid=599857" target="_blank" rel="noopener noreferrer">Open Account</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
