import { Helmet } from '@dr.pogodin/react-helmet';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ExternalLink,
  Globe2,
  Headphones,
  LayoutTemplate,
  LockKeyhole,
  Mail,
  Network,
  Server,
  ShieldCheck,
  ShoppingBag,
  Wrench,
} from 'lucide-react';
import { motion } from 'motion/react';

import { Button } from '@/components/ui/button';

const site = 'https://jadomainhub.jagroupservices.co.uk';
const store = 'https://store.jadomainhub.jagroupservices.co.uk';

const services: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  external?: boolean;
}> = [
  {
    icon: Globe2,
    title: 'Domains',
    description: 'Search, register or transfer domain names through our authorised reseller storefront.',
    href: `${store}/products/domain-registration`,
    external: true,
  },
  {
    icon: Server,
    title: 'Web Hosting',
    description: 'Explore cPanel, WordPress, Web Hosting Plus and VPS hosting options.',
    href: `${store}/products/cpanel`,
    external: true,
  },
  {
    icon: Mail,
    title: 'Business Email',
    description: 'Set up professional email and Microsoft 365 products for your organisation.',
    href: `${store}/products/microsoft-365`,
    external: true,
  },
  {
    icon: ShieldCheck,
    title: 'Website Security',
    description: 'Access SSL certificates, website security, backup and managed SSL services.',
    href: `${store}/products/website-security`,
    external: true,
  },
  {
    icon: LayoutTemplate,
    title: 'Website Tools',
    description: 'Choose website-builder and WordPress options from the self-service storefront.',
    href: `${store}/products/website-builder`,
    external: true,
  },
  {
    icon: Wrench,
    title: 'Managed Websites',
    description: 'A tailored design, build and management service delivered directly by JA Group Services Ltd.',
    href: '/managed-websites',
  },
];

const benefits = [
  {
    icon: Network,
    title: 'Authorised reseller infrastructure',
    description: 'Domain, hosting, email and security products are supplied through established provider systems.',
  },
  {
    icon: Headphones,
    title: 'Clear support routes',
    description: 'Use JA Domain Hub for customer enquiries and provider support for platform-level technical assistance.',
  },
  {
    icon: Building2,
    title: 'Operated by a UK company',
    description: 'JA Domain Hub is operated by JA Group Services Ltd, registered in England and Wales.',
  },
  {
    icon: LockKeyhole,
    title: 'Transparent service roles',
    description: 'We explain which services are delivered by JA Group Services and which rely on third-party platforms.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Choose the service',
    description: 'Browse the relevant domain, hosting, email, security or website category.',
  },
  {
    number: '02',
    title: 'Continue to the storefront',
    description: 'Self-service products open on the JA Domain Hub storefront for selection and purchase.',
  },
  {
    number: '03',
    title: 'Manage your products',
    description: 'Use the provider account area to manage products, renewals and technical settings.',
  },
  {
    number: '04',
    title: 'Get the right support',
    description: 'Contact JA Domain Hub or the platform support route depending on the help required.',
  },
];

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>JA Domain Hub | Domains, Hosting, Email and Website Services</title>
        <meta
          name="description"
          content="JA Domain Hub provides access to domain registration, hosting, business email, SSL and website services through authorised reseller infrastructure, operated by JA Group Services Ltd."
        />
        <link rel="canonical" href={`${site}/`} />
        <meta property="og:title" content="JA Domain Hub | Domains, Hosting, Email and Website Services" />
        <meta
          property="og:description"
          content="Domains, hosting, email, security and managed website services from JA Domain Hub, operated by JA Group Services Ltd."
        />
        <meta property="og:url" content={`${site}/`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#06152E] via-[#0A1F44] to-[#173C88] py-14 sm:py-16 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-28 -top-36 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="absolute -bottom-44 left-1/3 h-80 w-80 rounded-full bg-cyan-300/5 blur-3xl" />
            <div className="absolute inset-y-0 left-0 w-1 bg-blue-500" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-5 inline-flex items-center gap-2 border-l-2 border-blue-400 pl-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-200 sm:text-sm">
                  Domains · Hosting · Email · Website Services
                </div>

                <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Build and manage your online presence
                </h1>

                <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                  <p>
                    JA Domain Hub provides access to domain names, hosting, business email, website security and online-service tools through authorised reseller infrastructure.
                  </p>
                  <p>
                    The service is operated by JA Group Services Ltd, with clear routes for purchasing products, managing accounts and getting support.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="min-h-12 bg-white px-7 font-bold text-[#0A1F44] hover:bg-blue-50">
                    <a href={`${store}/products/domain-registration`} target="_blank" rel="noopener noreferrer">
                      Search for a Domain
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="min-h-12 border-white/35 bg-white/5 px-7 font-semibold text-white hover:bg-white/10 hover:text-white"
                  >
                    <a href="/managed-websites">Managed Website Service</a>
                  </Button>
                </div>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-md"
                aria-label="JA Domain Hub quick access"
              >
                <div className="border-b border-white/15 px-5 py-5 sm:px-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Quick access</p>
                  <h2 className="mt-2 text-2xl font-bold text-white">Start with what you need</h2>
                </div>

                <div className="divide-y divide-white/10">
                  <QuickAccessRow icon={Globe2} label="Register a domain" href={`${store}/products/domain-registration`} />
                  <QuickAccessRow icon={Server} label="Browse web hosting" href={`${store}/products/cpanel`} />
                  <QuickAccessRow icon={Mail} label="Set up business email" href={`${store}/products/microsoft-365`} />
                  <QuickAccessRow icon={ShoppingBag} label="Open the storefront" href={store} />
                </div>

                <div className="border-t border-white/15 bg-black/10 px-5 py-4 sm:px-6">
                  <a
                    href="https://account.secureserver.net/products?plid=599857"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-200"
                  >
                    Manage existing products
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-card py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <CorporateFact icon={BadgeCheck} label="Service model" value="Authorised reseller platform" />
              <CorporateFact icon={Building2} label="Operator" value="JA Group Services Ltd" />
              <CorporateFact icon={Headphones} label="Support" value="Customer and platform routes" />
              <CorporateFact icon={ShieldCheck} label="Transparency" value="Clear provider responsibilities" />
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Services"
              title="Everything you need to establish your digital presence"
              description="Choose a self-service product from the storefront or speak to JA Group Services about a tailored managed website."
            />

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {services.map(({ icon: Icon, title, description, href, external }, index) => (
                <motion.a
                  key={title}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="group rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-card-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore service
                    {external ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="How it works"
              title="A simple route from selection to support"
              description="The website explains the service, the storefront handles self-service purchases and the account area handles ongoing product management."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {steps.map(({ number, title, description }, index) => (
                <motion.article
                  key={number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm"
                >
                  <div className="absolute right-5 top-4 text-4xl font-extrabold text-primary/10">{number}</div>
                  <div className="relative">
                    <div className="mb-5 h-1 w-10 rounded-full bg-primary" />
                    <h3 className="text-lg font-bold text-card-foreground">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Why JA Domain Hub</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Provider-backed products with a clear company behind the service
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground sm:text-lg">
                JA Domain Hub combines established reseller systems with the governance, customer-service routes and accountability of JA Group Services Ltd.
              </p>
              <Button asChild variant="outline" className="mt-7 min-h-11 border-primary font-semibold text-primary hover:bg-primary/10">
                <a href="/about-us">
                  About JA Domain Hub
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-sm sm:p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-card-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-primary py-16 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-700" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/65">Get started</p>
              <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Choose a product or discuss a managed website
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Use the storefront for self-service products or contact JA Group Services Ltd for a website quotation based on your requirements.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="min-h-12 bg-white px-7 font-bold text-primary hover:bg-blue-50">
                  <a href={store} target="_blank" rel="noopener noreferrer">
                    Open the Storefront
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-h-12 border-white/35 bg-white/5 px-7 font-semibold text-white hover:bg-white/10 hover:text-white">
                  <a href="/contact-us">Contact Us</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

function QuickAccessRow({ icon: Icon, label, href }: { icon: LucideIcon; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between gap-4 px-5 py-4 text-white transition-colors hover:bg-white/10 sm:px-6"
    >
      <span className="flex items-center gap-3 text-sm font-semibold">
        <Icon className="h-5 w-5 text-blue-200" />
        {label}
      </span>
      <ExternalLink className="h-4 w-4 text-white/50" />
    </a>
  );
}

function CorporateFact({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.42 }}
      className="mb-10 max-w-3xl sm:mb-12"
    >
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
    </motion.div>
  );
}
