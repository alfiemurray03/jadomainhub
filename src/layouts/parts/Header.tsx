import { useEffect, useState } from 'react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';

import BrandWordmark from '@/components/BrandWordmark';
import CustomerWebsitesMenu, { MobileCustomerWebsitesMenu } from '@/components/CustomerWebsitesMenu';
import JAGroupServicesIDButton from '@/components/JAGroupServicesIDButton';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { productsForCategory, type ProductCategoryId } from '@/lib/product-catalogue';

const menuCategories: Array<{ id: ProductCategoryId; label: string }> = [
  { id: 'domains', label: 'Domains' },
  { id: 'websites', label: 'Websites' },
  { id: 'hosting', label: 'Hosting' },
  { id: 'security', label: 'Security' },
  { id: 'marketing-email', label: 'More Services' },
];

const triggerClass =
  'rounded-xl bg-transparent px-2.5 py-2 text-[13px] font-medium text-muted-foreground transition-all duration-150 hover:bg-muted hover:text-foreground data-[state=open]:bg-muted data-[state=open]:text-foreground';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMobileMenu();
    };
    const closeAtDesktop = () => {
      if (window.innerWidth >= 1280) closeMobileMenu();
    };
    window.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', closeAtDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', closeAtDesktop);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-card/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-[1540px] px-3 min-[380px]:px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-2 md:h-[68px] md:gap-3">
          <a href="/" className="group flex min-w-0 shrink items-center py-1" aria-label="Sousa Murray Domains — home">
            <BrandWordmark className="max-w-full text-[15px] transition-transform duration-200 group-hover:scale-[1.02] min-[360px]:text-base sm:text-xl" />
          </a>

          <NavigationMenu className="hidden xl:flex">
            <NavigationMenuList className="gap-0">
              <NavigationMenuItem><NavigationMenuLink asChild><a href="/" className={triggerClass}>Home</a></NavigationMenuLink></NavigationMenuItem>
              <NavigationMenuItem><NavigationMenuLink asChild><a href="/services" className={triggerClass}>All Services</a></NavigationMenuLink></NavigationMenuItem>
              {menuCategories.map((category) => {
                const categoryProducts = productsForCategory(category.id);
                return (
                  <NavigationMenuItem key={category.id}>
                    <NavigationMenuTrigger className={triggerClass}>{category.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[340px] gap-1.5 rounded-2xl border-border bg-popover p-2 text-popover-foreground shadow-xl">
                        {categoryProducts.map((product) => (
                          <li key={product.id}>
                            <NavigationMenuLink asChild>
                              <a href={product.localPath} className="block rounded-xl p-3 transition-colors hover:bg-muted focus:bg-muted">
                                <span className="block text-sm font-semibold text-foreground">{product.shortTitle}</span>
                                <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">{product.description}</span>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                        <li className="border-t border-border pt-1.5">
                          <NavigationMenuLink asChild>
                            <a href={`/services#${category.id}`} className="block rounded-xl p-3 text-sm font-semibold text-primary transition-colors hover:bg-muted focus:bg-muted">View all {category.label.toLowerCase()} services</a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            <a href="tel:02038342790" className="hidden shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl border border-border bg-muted/70 px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground 2xl:flex">
              <Phone className="h-3.5 w-3.5 text-primary" />020 3834 2790
            </a>
            <ThemeToggle />
            <JAGroupServicesIDButton />
            <Button variant="outline" className="rounded-xl px-3" asChild>
              <a href="https://account.secureserver.net/products?plid=599857" target="_blank" rel="noopener noreferrer">Provider Account</a>
            </Button>
            <CustomerWebsitesMenu />
          </div>

          <div className="flex shrink-0 items-center gap-1.5 xl:hidden">
            <JAGroupServicesIDButton />
            <ThemeToggle className="h-11 w-11" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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
        <div id="mobile-menu" className="absolute left-0 right-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-border bg-card shadow-2xl xl:hidden md:h-[calc(100dvh-4.25rem)]">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" style={{ paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))' }} aria-label="Mobile navigation">
            <JAGroupServicesIDButton mobile onNavigate={closeMobileMenu} />
            <a href="tel:02038342790" className="mb-2 flex min-h-12 items-center gap-2 rounded-xl border border-border bg-muted px-4 py-3 text-sm font-semibold text-foreground"><Phone className="h-4 w-4 text-primary" />020 3834 2790</a>
            <a href="/" onClick={closeMobileMenu} className="flex min-h-12 items-center rounded-xl px-3 py-3 text-sm font-medium text-foreground hover:bg-muted">Home</a>
            <a href="/services" onClick={closeMobileMenu} className="flex min-h-12 items-center rounded-xl px-3 py-3 text-sm font-semibold text-primary hover:bg-muted">All Services &amp; Products</a>

            {menuCategories.map((category) => {
              const categoryProducts = productsForCategory(category.id);
              return (
                <div key={category.id} className="rounded-2xl border border-border bg-muted/30 p-2">
                  <button type="button" onClick={() => setMobileDropdownOpen(mobileDropdownOpen === category.id ? null : category.id)} className="flex min-h-12 w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-semibold text-foreground hover:bg-muted" aria-expanded={mobileDropdownOpen === category.id}>
                    {category.label}<ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${mobileDropdownOpen === category.id ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileDropdownOpen === category.id && (
                    <div className="space-y-1 pt-1">
                      {categoryProducts.map((product) => (
                        <a key={product.id} href={product.localPath} onClick={closeMobileMenu} className="block min-h-11 rounded-xl px-3 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">{product.shortTitle}</a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <a href="/about-us" onClick={closeMobileMenu} className="flex min-h-12 items-center rounded-xl px-3 py-3 text-sm font-medium text-foreground hover:bg-muted">About Us</a>
            <a href="/contact-us" onClick={closeMobileMenu} className="flex min-h-12 items-center rounded-xl px-3 py-3 text-sm font-medium text-foreground hover:bg-muted">Contact Us</a>
            <MobileCustomerWebsitesMenu onNavigate={closeMobileMenu} />
            <Button variant="outline" className="mt-2 min-h-12 w-full rounded-xl" asChild>
              <a href="https://account.secureserver.net/products?plid=599857" target="_blank" rel="noopener noreferrer">Open Provider Account</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
