import { type ReactElement } from 'react';

import DomainSupportTroubleshootingCentre from '@/components/DomainSupportTroubleshootingCentre';
import FirstLineSupportBanner from '@/components/FirstLineSupportBanner';
import ProductPageBar from '@/components/ProductPageBar';
import Footer from '@/layouts/parts/Footer';
import Header from '@/layouts/parts/Header';
import Website from '@/layouts/Website';

interface RootLayoutProps {
  children: ReactElement;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Website>
      <Header />
      <main className="flex-1 pt-16 md:pt-[68px]">
        <ProductPageBar />
        <FirstLineSupportBanner />
        <div className="site-page-content min-w-0 overflow-x-clip">{children}</div>
      </main>
      <Footer />
      <DomainSupportTroubleshootingCentre />
    </Website>
  );
}
