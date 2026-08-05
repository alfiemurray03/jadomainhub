import { Helmet } from '@dr.pogodin/react-helmet';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock3,
  ExternalLink,
  Globe2,
  Headphones,
  LockKeyhole,
  Mail,
  Network,
  Server,
  ShieldCheck,
  ShoppingBag,
} from 'lucide-react';
import { motion } from 'motion/react';

import DomainSearch from '@/components/DomainSearch';
import { Button } from '@/components/ui/button';
import { products, STOREFRONT_URL } from '@/lib/product-catalogue';

const site = 'https://sousamurraydomains.jagroupservices.co.uk';
const featuredProducts = products.filter((product) => product.featured);

const benefits = [
  {
    icon: Network,
    title: 'Authorised reseller infrastructure',
    description: 'Domain, hosting, email and security products are supplied through established provider systems.',
  },
  {
    icon: Headphones,
    title: 'Clear support routes',
    description: 'Use Sousa Murray Domains for customer enquiries and provider support for platform-level technical assistance.',
  },
  {
    icon: Building2,
    title: 'Operated by a UK company',
    description: 'Sousa Murray Domains is operated by JA Group Services Ltd, registered in England and Wales.',
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
    title: 'Browse on Sousa Murray Domains',
    description: 'Read about the relevant domain, hosting, email, security or website service on this website.',
  },
  {
    number: '02',
    title: 'Choose the right product',
    description: 'Compare the purpose, features and service route before leaving for the storefront.',
  },
  {
    number: '03',
    title: 'Continue to the storefront',
    description: 'Use the product page button to view current plans, availability and pricing on the reseller platform.',
  },
  {
    number: '04',
    title: 'Manage and get support',
    description: 'Use the provider account area and the appropriate Sousa Murray Domains or platform support route.',
  },
];

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Sousa Murray Domains | Domains, Hosting, Email and Website Services</title>
        <meta
          name="description"
          content="Search for a domain and browse authorised reseller-based domain, hosting, email, security and self-service website products through Sousa Murray Domains."
        />
        <link rel="canonical" href={`${site}/`} />
        <meta property="og:title" content="Sousa Murray Domains | Domains, Hosting, Email and Website Services" />
        <meta
          property="og:description"
          content="Search domains and browse Sousa Murray Domains reseller products before continuing to the authorised provider storefront."
        />
        <meta property="og:url" content={`${site}/`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#06152E] via-[#0A1F44] to-[#173C88] py-12 sm:py-14 lg:py-18">
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

          <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1.16fr_0.84fr] lg:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-5 inline-flex items-center gap-2 border-l-2 border-blue-400 pl-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-200 sm:text-sm">
                  Domains · Hosting · Email · Reseller Services
                </div>

                <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                  Find your domain and build your online presence
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                  Search for the domain name you want, review the available reseller products through Sousa Murray Domains and continue to the authorised provider storefront only when you are ready.
                </p>

                <DomainSearch appearance="dark" className="mt-7 max-w-4xl" />

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="min-h-12 bg-white px-7 font-bold text-[#0A1F44] hover:bg-blue-50">
                    <a href="/services">
                      Browse All Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="min-h-12 border-white/35 bg-white/5 px-7 font-semibold text-white hover:bg-white/10 hover:text-white"
                  >
                    <a href="/managed-websites">Sousa Murray Sites — Coming soon</a>
                  </Button>
                </div>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-md"
                aria-label="Sousa Murray Domains quick access"
              >
                <div className="border-b border-white/15 px-5 py-5 sm:px-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Quick access</p>
                  <h2 className="mt-2 text-2xl font-bold text-white">Browse before purchasing</h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">These links stay on Sousa Murray Domains so customers can understand the reseller service first.</p>
                </div>

                <div className="divide-y divide-white/10">
                  <QuickAccessRow icon={Globe2} label="Domain Registration" href="/products/domain-registration" />
                  <QuickAccessRow icon={Server} label="Web Hosting" href="/products/cpanel" />
                  <QuickAccessRow icon={Mail} label="Microsoft 365 & Email" href="/products/microsoft-365" />
                  <QuickAccessRow icon={ShieldCheck} label="Website Security" href="/products/website-security" />
                  <QuickAccessRow icon={ShoppingBag} label="All Services & Products" href="/services" />
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
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <CorporateFact icon={BadgeCheck} label="Service model" value="Browse here, purchase on storefront" />
              <CorporateFact icon={Building2} label="Operator" value="JA Group Services Ltd" />
              <CorporateFact icon={Headphones} label="Support" value="Customer and platform routes" />
              <CorporateFact icon={ShieldCheck} label="Transparency" value="Clear provider responsibilities" />
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-5 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Featured services"
                title="Start with the service that matches your goal"
                description="Every card opens a Sousa Murray Domains information page first. Reseller product pages then provide the correct route to the authorised storefront. Sousa Murray Sites is shown separately as coming soon."
                className="mb-0"
              />
              <Button asChild variant="outline" className="shrink-0">
                <a href="/services">
                  View Complete Catalogue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {featuredProducts.map(({ id, icon: Icon, title, description, localPath, comingSoon }, index) => (
                <motion.a
                  key={id}
                  href={localPath}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    {comingSoon && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                        <Clock3 className="h-3.5 w-3.5" /> Coming soon
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-card-foreground">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {comingSoon ? 'View launch information' : 'View service details'}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="How it works"
              title="A clear route from research to purchase"
              description="Sousa Murray Domains explains the reseller service, the provider storefront supplies live product selection and checkout, and the provider account area handles ongoing product management."
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
          <div className="mx-auto grid max-w-[1440px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Why Sousa Murray Domains</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Provider-backed products with a clear company behind the service
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground sm:text-lg">
                Sousa Murray Domains combines established reseller systems with the governance, customer-service routes and accountability of JA Group Services Ltd.
              </p>
              <Button asChild variant="outline" className="mt-7 min-h-11 border-primary font-semibold text-primary hover:bg-primary/10">
                <a href="/about-us">
                  About Sousa Murray Domains
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
          <div className="relative mx-auto max-w-[1440px] px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/65">Ready to continue?</p>
              <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Browse the catalogue or open the storefront
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Review product information on Sousa Murray Domains first, or continue to the authorised storefront when you already know which reseller product you need.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="min-h-12 bg-white px-7 font-bold text-primary hover:bg-blue-50">
                  <a href="/services">
                    Browse All Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="min-h-12 border-white/35 bg-white/5 px-7 font-semibold text-white hover:bg-white/10 hover:text-white">
                  <a href={STOREFRONT_URL} target="_blank" rel="noopener noreferrer">
                    Open the Storefront
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
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
      className="flex items-center justify-between gap-4 px-5 py-4 text-white transition-colors hover:bg-white/10 sm:px-6"
    >
      <span className="flex items-center gap-3 text-sm font-semibold">
        <Icon className="h-5 w-5 text-blue-200" />
        {label}
      </span>
      <ArrowRight className="h-4 w-4 text-white/50" />
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

function SectionHeading({
  eyebrow,
  title,
  description,
  className = 'mb-10 sm:mb-12',
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.42 }}
      className={`max-w-3xl ${className}`}
    >
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
    </motion.div>
  );
}
