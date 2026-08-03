import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { productCategories, products } from '@/lib/product-catalogue';

export default function ProductPageBar() {
  const { pathname } = useLocation();
  const product = products.find((item) => item.localPath === pathname);

  if (!product) return null;

  const category = productCategories.find((item) => item.id === product.category);
  const destination = product.purchaseUrl ?? '/contact-us?enquiry=managed-website';
  const isExternal = Boolean(product.purchaseUrl);

  return (
    <div className="border-b border-border bg-card/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="min-w-0">
          <a href="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" />
            All Services &amp; Products
          </a>
          <p className="mt-1 truncate text-sm text-muted-foreground">
            {category?.label ?? 'Services'} <span aria-hidden="true">/</span>{' '}
            <span className="font-semibold text-foreground">{product.title}</span>
          </p>
        </div>

        <Button asChild size="sm" className="shrink-0 self-start md:self-auto">
          <a
            href={destination}
            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {isExternal ? 'View Plans on Storefront' : 'Request a Tailored Quote'}
            {isExternal ? <ExternalLink className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
          </a>
        </Button>
      </div>
    </div>
  );
}
