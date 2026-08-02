import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CustomerWebsitesMenu, { MobileCustomerWebsitesMenu } from '@/components/CustomerWebsitesMenu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menuItems = {
    domains: [
      { name: 'Domain Registration', href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/domain-registration' },
      { name: 'Bulk Registration', href: 'https://www.secureserver.net/domains/bulk-domain-search?plid=599857' },
      { name: 'Domain Transfer', href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/domain-transfer' },
      { name: 'Bulk Transfer', href: 'https://www.secureserver.net/domains/bulk-domain-transfer.aspx?plid=599857' },
    ],
    websites: [
      { name: 'Website Builder', href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/website-builder' },
      { name: 'WordPress', href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/wordpress' },
    ],
    hosting: [
      { name: 'cPanel Hosting', href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/cpanel' },
      { name: 'WordPress Hosting', href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/wordpress' },
      { name: 'Web Hosting Plus', href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/business' },
      { name: 'VPS Hosting', href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/vps' },
    ],
    security: [
      { name: 'Website Security', href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/website-security' },
      { name: 'SSL Certificates', href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/ssl' },
      { name: 'Managed SSL Service', href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/ssl-managed' },
      { name: 'Website Backup', href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/website-backup' },
    ],
    marketing: [
      { name: 'Email Marketing', href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/email-marketing' },
      { name: 'SEO', href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/seo' },
    ],
    email: [
      { name: 'Microsoft 365', href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/microsoft-365' },
    ],
    managed: [
      { name: 'Managed Websites', href: '/managed-websites' },
    ],
  };

  const toggleMobileDropdown = (category: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === category ? null : category);
  };

  const headerBg = scrolled
    ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-border/40'
    : 'bg-white/90 backdrop-blur-xl border-b border-white/20';

  const textColor = 'text-foreground';
  const triggerHover = 'hover:bg-muted';
  const triggerOpen = 'data-[state=open]:bg-muted';

  const triggerClass = `bg-transparent text-sm font-medium ${textColor} ${triggerHover} ${triggerOpen} data-[state=open]:${textColor} hover:${textColor} transition-colors`;

  const mobileIconColor = 'text-foreground';

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <a href="/" className="flex shrink-0 items-center">
          <span className="text-xl font-black tracking-tight text-foreground md:text-2xl">
            JA DOMAIN HUB
          </span>
        </a>

        <NavigationMenu className="hidden xl:flex">
          <NavigationMenuList>
            {(['domains', 'websites', 'hosting', 'security', 'marketing', 'email', 'managed'] as const).map((category) => (
              <NavigationMenuItem key={category}>
                <NavigationMenuTrigger className={triggerClass}>
                  {category === 'managed' ? 'Services' : category.charAt(0).toUpperCase() + category.slice(1)}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[240px] gap-1 p-3">
                    {menuItems[category].map((item) => {
                      const isExternal = item.href.startsWith('http');
                      return (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                              className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                            >
                              {item.name}
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

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <Button variant="default" className="rounded-xl" asChild>
            <a href="https://account.secureserver.net/products?plid=599857" target="_blank" rel="noopener noreferrer">
              Account
            </a>
          </Button>
          <CustomerWebsitesMenu />
        </div>

        <button
          type="button"
          className={`${mobileIconColor} transition-colors xl:hidden`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border/20 bg-white shadow-lg xl:hidden">
          <div className="container mx-auto space-y-1 px-4 py-4">
            {Object.entries(menuItems).map(([category, items]) => (
              <div key={category}>
                <button
                  onClick={() => toggleMobileDropdown(category)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <span className="capitalize">{category}</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileDropdownOpen === category ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileDropdownOpen === category && (
                  <div className="ml-4 space-y-1 border-l-2 border-border pl-4">
                    {items.map((item) => {
                      const isExternal = item.href.startsWith('http');
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="block rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            <a
              href="/contact-us"
              className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>

            <MobileCustomerWebsitesMenu onNavigate={() => setMobileMenuOpen(false)} />

            <div className="pt-4">
              <Button variant="default" className="w-full rounded-xl" asChild>
                <a href="https://account.secureserver.net/products?plid=599857" target="_blank" rel="noopener noreferrer">
                  Account
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
