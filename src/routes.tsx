import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from './pages/index';

// Lazy load components for code splitting (except HomePage for instant loading)
const isDevelopment = import.meta.env.MODE === 'development';
const NotFoundPage = isDevelopment ? lazy(() => import('../export-plugins/PageNotFound')) : lazy(() => import('./pages/_404'));

// Lazy load all other pages
const AboutUsPage = lazy(() => import('./pages/about-us'));
const ContactUsPage = lazy(() => import('./pages/contact-us'));
const DomainRegistrationPage = lazy(() => import('./pages/products/domain-registration'));
const DomainTransferPage = lazy(() => import('./pages/products/domain-transfer'));
const BulkRegistrationPage = lazy(() => import('./pages/products/bulk-registration'));
const BulkTransferPage = lazy(() => import('./pages/products/bulk-transfer'));
const WebsiteBuilderPage = lazy(() => import('./pages/products/website-builder'));
const CpanelPage = lazy(() => import('./pages/products/cpanel'));
const WordPressPage = lazy(() => import('./pages/products/wordpress'));
const WebHostingPlusPage = lazy(() => import('./pages/products/web-hosting-plus'));
const VPSPage = lazy(() => import('./pages/products/vps'));
const WebsiteSecurityPage = lazy(() => import('./pages/products/website-security'));
const SSLPage = lazy(() => import('./pages/products/ssl'));
const SSLManagedPage = lazy(() => import('./pages/products/ssl-managed'));
const WebsiteBackupPage = lazy(() => import('./pages/products/website-backup'));
const EmailMarketingPage = lazy(() => import('./pages/products/email-marketing'));
const SEOPage = lazy(() => import('./pages/products/seo'));
const Microsoft365Page = lazy(() => import('./pages/products/microsoft-365'));
const TermsOfServicePage = lazy(() => import('./pages/terms-of-service'));
const PrivacyPolicyPage = lazy(() => import('./pages/privacy-policy'));
const CookiesPolicyPage = lazy(() => import('./pages/cookies-policy'));
const ManagedWebsitesPage = lazy(() => import('./pages/managed-websites'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about-us',
    element: <AboutUsPage />,
  },
  {
    path: '/contact-us',
    element: <ContactUsPage />,
  },
  {
    path: '/products/domain-registration',
    element: <DomainRegistrationPage />,
  },
  {
    path: '/products/domain-transfer',
    element: <DomainTransferPage />,
  },
  {
    path: '/products/bulk-registration',
    element: <BulkRegistrationPage />,
  },
  {
    path: '/products/bulk-transfer',
    element: <BulkTransferPage />,
  },
  {
    path: '/products/website-builder',
    element: <WebsiteBuilderPage />,
  },
  {
    path: '/products/cpanel',
    element: <CpanelPage />,
  },
  {
    path: '/products/wordpress',
    element: <WordPressPage />,
  },
  {
    path: '/products/web-hosting-plus',
    element: <WebHostingPlusPage />,
  },
  {
    path: '/products/vps',
    element: <VPSPage />,
  },
  {
    path: '/products/website-security',
    element: <WebsiteSecurityPage />,
  },
  {
    path: '/products/ssl',
    element: <SSLPage />,
  },
  {
    path: '/products/ssl-managed',
    element: <SSLManagedPage />,
  },
  {
    path: '/products/website-backup',
    element: <WebsiteBackupPage />,
  },
  {
    path: '/products/email-marketing',
    element: <EmailMarketingPage />,
  },
  {
    path: '/products/seo',
    element: <SEOPage />,
  },
  {
    path: '/products/microsoft-365',
    element: <Microsoft365Page />,
  },
  {
    path: '/terms-of-service',
    element: <TermsOfServicePage />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicyPage />,
  },
  {
    path: '/cookies-policy',
    element: <CookiesPolicyPage />,
  },
  {
    path: '/managed-websites',
    element: <ManagedWebsitesPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

// Types for type-safe navigation
export type Path = 
  | '/'
  | '/about-us'
  | '/contact-us'
  | '/products/domain-registration'
  | '/products/domain-transfer'
  | '/products/bulk-registration'
  | '/products/bulk-transfer'
  | '/products/website-builder'
  | '/products/cpanel'
  | '/products/wordpress'
  | '/products/web-hosting-plus'
  | '/products/vps'
  | '/products/website-security'
  | '/products/ssl'
  | '/products/ssl-managed'
  | '/products/website-backup'
  | '/products/email-marketing'
  | '/products/seo'
  | '/products/microsoft-365'
  | '/terms-of-service'
  | '/privacy-policy'
  | '/cookies-policy'
  | '/managed-websites';

export type Params = Record<string, string | undefined>;
