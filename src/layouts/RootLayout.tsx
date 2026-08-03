import { type ReactElement } from 'react';

import DomainSupportTroubleshootingCentre from '@/components/DomainSupportTroubleshootingCentre';
import ProductPageBar from '@/components/ProductPageBar';
import Footer from '@/layouts/parts/Footer';
import Header from '@/layouts/parts/Header';
import Website from '@/layouts/Website';

/**
 * Root layout component that wraps all pages with consistent header and footer.
 */
interface RootLayoutProps {
  children: ReactElement;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Website>
      <Header />
      <main className="flex-1 pt-16 md:pt-[68px]">
        <ProductPageBar />
        {children}
      </main>
      <Footer />
      <DomainSupportTroubleshootingCentre />
    </Website>
  );
}
