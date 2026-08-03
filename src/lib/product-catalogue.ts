import type { LucideIcon } from 'lucide-react';
import {
  ArrowLeftRight,
  BarChart3,
  Boxes,
  CloudCog,
  FileArchive,
  Globe2,
  HardDrive,
  LayoutTemplate,
  LockKeyhole,
  Mail,
  MailCheck,
  SearchCheck,
  Server,
  ShieldCheck,
  ShoppingCart,
  Wrench,
  Zap,
} from 'lucide-react';

export const STOREFRONT_URL = 'https://store.jadomainhub.jagroupservices.co.uk';
export const RESELLER_ID = '599857';

export type ProductCategoryId = 'domains' | 'websites' | 'hosting' | 'security' | 'marketing-email';

export interface ProductDefinition {
  id: string;
  category: ProductCategoryId;
  title: string;
  shortTitle: string;
  description: string;
  localPath: string;
  purchaseUrl: string | null;
  icon: LucideIcon;
  featured?: boolean;
}

export interface ProductCategory {
  id: ProductCategoryId;
  label: string;
  description: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'domains',
    label: 'Domains',
    description: 'Search, register, transfer and manage individual or bulk domain requirements.',
  },
  {
    id: 'websites',
    label: 'Websites',
    description: 'Build a website yourself or request a tailored managed website service.',
  },
  {
    id: 'hosting',
    label: 'Hosting',
    description: 'Choose hosting for standard websites, WordPress projects and higher-demand workloads.',
  },
  {
    id: 'security',
    label: 'Security',
    description: 'Protect websites, traffic and data with SSL, monitoring and backup products.',
  },
  {
    id: 'marketing-email',
    label: 'Marketing & Email',
    description: 'Professional email, Microsoft 365, email marketing and search-visibility tools.',
  },
];

export const products: ProductDefinition[] = [
  {
    id: 'domain-registration',
    category: 'domains',
    title: 'Domain Registration',
    shortTitle: 'Register a Domain',
    description: 'Search for a new domain name and review the registration features available through the storefront.',
    localPath: '/products/domain-registration',
    purchaseUrl: `${STOREFRONT_URL}/products/domain-registration`,
    icon: Globe2,
    featured: true,
  },
  {
    id: 'domain-transfer',
    category: 'domains',
    title: 'Domain Transfer',
    shortTitle: 'Transfer a Domain',
    description: 'Understand the transfer process before moving an existing domain into the reseller platform.',
    localPath: '/products/domain-transfer',
    purchaseUrl: `${STOREFRONT_URL}/products/domain-transfer`,
    icon: ArrowLeftRight,
  },
  {
    id: 'bulk-registration',
    category: 'domains',
    title: 'Bulk Domain Registration',
    shortTitle: 'Bulk Registration',
    description: 'Review how to search and register multiple domain names in a single workflow.',
    localPath: '/products/bulk-registration',
    purchaseUrl: `https://www.secureserver.net/domains/bulk-domain-search?plid=${RESELLER_ID}`,
    icon: Boxes,
  },
  {
    id: 'bulk-transfer',
    category: 'domains',
    title: 'Bulk Domain Transfer',
    shortTitle: 'Bulk Transfer',
    description: 'Plan and start the transfer of multiple domains into one account.',
    localPath: '/products/bulk-transfer',
    purchaseUrl: `https://www.secureserver.net/domains/bulk-domain-transfer.aspx?plid=${RESELLER_ID}`,
    icon: ShoppingCart,
  },
  {
    id: 'website-builder',
    category: 'websites',
    title: 'Website Builder',
    shortTitle: 'Website Builder',
    description: 'Explore the guided website-building option before choosing a storefront plan.',
    localPath: '/products/website-builder',
    purchaseUrl: `${STOREFRONT_URL}/products/website-builder`,
    icon: LayoutTemplate,
    featured: true,
  },
  {
    id: 'managed-websites',
    category: 'websites',
    title: 'Managed Website Service',
    shortTitle: 'Managed Websites',
    description: 'A tailored website design, setup and management service delivered directly by JA Group Services Ltd.',
    localPath: '/managed-websites',
    purchaseUrl: null,
    icon: Wrench,
    featured: true,
  },
  {
    id: 'cpanel',
    category: 'hosting',
    title: 'cPanel Hosting',
    shortTitle: 'cPanel Hosting',
    description: 'Browse the features of conventional cPanel web hosting before viewing available plans.',
    localPath: '/products/cpanel',
    purchaseUrl: `${STOREFRONT_URL}/products/cpanel`,
    icon: Server,
    featured: true,
  },
  {
    id: 'wordpress',
    category: 'hosting',
    title: 'WordPress Hosting',
    shortTitle: 'WordPress',
    description: 'Review WordPress website and hosting options designed for easier setup and management.',
    localPath: '/products/wordpress',
    purchaseUrl: `${STOREFRONT_URL}/products/wordpress`,
    icon: Zap,
  },
  {
    id: 'web-hosting-plus',
    category: 'hosting',
    title: 'Web Hosting Plus',
    shortTitle: 'Web Hosting Plus',
    description: 'Consider higher-resource hosting for busier websites and more demanding applications.',
    localPath: '/products/web-hosting-plus',
    purchaseUrl: `${STOREFRONT_URL}/products/business`,
    icon: CloudCog,
  },
  {
    id: 'vps',
    category: 'hosting',
    title: 'VPS Hosting',
    shortTitle: 'VPS Hosting',
    description: 'Explore virtual private server features for projects requiring greater control and resources.',
    localPath: '/products/vps',
    purchaseUrl: `${STOREFRONT_URL}/products/vps`,
    icon: HardDrive,
  },
  {
    id: 'website-security',
    category: 'security',
    title: 'Website Security',
    shortTitle: 'Website Security',
    description: 'Review monitoring, malware and website-protection options before selecting a plan.',
    localPath: '/products/website-security',
    purchaseUrl: `${STOREFRONT_URL}/products/website-security`,
    icon: ShieldCheck,
    featured: true,
  },
  {
    id: 'ssl',
    category: 'security',
    title: 'SSL Certificates',
    shortTitle: 'SSL Certificates',
    description: 'Understand SSL certificate options for encrypting traffic and reassuring website visitors.',
    localPath: '/products/ssl',
    purchaseUrl: `${STOREFRONT_URL}/products/ssl`,
    icon: LockKeyhole,
  },
  {
    id: 'ssl-managed',
    category: 'security',
    title: 'Managed SSL Service',
    shortTitle: 'Managed SSL',
    description: 'Review the managed installation and maintenance option for SSL certificates.',
    localPath: '/products/ssl-managed',
    purchaseUrl: `${STOREFRONT_URL}/products/ssl-managed`,
    icon: SearchCheck,
  },
  {
    id: 'website-backup',
    category: 'security',
    title: 'Website Backup',
    shortTitle: 'Website Backup',
    description: 'Explore website backup and recovery features designed to protect important site data.',
    localPath: '/products/website-backup',
    purchaseUrl: `${STOREFRONT_URL}/products/website-backup`,
    icon: FileArchive,
  },
  {
    id: 'microsoft-365',
    category: 'marketing-email',
    title: 'Microsoft 365',
    shortTitle: 'Microsoft 365',
    description: 'Review professional email and Microsoft productivity options for your organisation.',
    localPath: '/products/microsoft-365',
    purchaseUrl: `${STOREFRONT_URL}/products/microsoft-365`,
    icon: Mail,
    featured: true,
  },
  {
    id: 'email-marketing',
    category: 'marketing-email',
    title: 'Email Marketing',
    shortTitle: 'Email Marketing',
    description: 'Explore tools for building mailing lists and sending customer email campaigns.',
    localPath: '/products/email-marketing',
    purchaseUrl: `${STOREFRONT_URL}/products/email-marketing`,
    icon: MailCheck,
  },
  {
    id: 'seo',
    category: 'marketing-email',
    title: 'Search Engine Optimisation',
    shortTitle: 'SEO',
    description: 'Review tools intended to help improve website visibility in search results.',
    localPath: '/products/seo',
    purchaseUrl: `${STOREFRONT_URL}/products/seo`,
    icon: BarChart3,
  },
];

export function productsForCategory(category: ProductCategoryId): ProductDefinition[] {
  return products.filter((product) => product.category === category);
}

export function storefrontDomainSearchUrl(domain: string): string {
  const cleanedDomain = domain
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .split('/')[0];

  const params = new URLSearchParams({
    plid: RESELLER_ID,
    domainToCheck: cleanedDomain,
  });

  return `${STOREFRONT_URL}/products/domain-registration/find?${params.toString()}`;
}
