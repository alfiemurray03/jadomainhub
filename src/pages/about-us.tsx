import { Helmet } from '@dr.pogodin/react-helmet';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ExternalLink,
  Globe2,
  Headphones,
  Mail,
  Phone,
  Scale,
  ShieldCheck,
  Store,
  Wrench,
} from 'lucide-react';
import { motion } from 'motion/react';

import { Button } from '@/components/ui/button';

const site = 'https://sousamurraydomains.jagroupservices.co.uk';
const storefront = 'https://store.jadomainhub.jagroupservices.co.uk';
const universalTerms = `${storefront}/legal-agreement?id=utos`;

const serviceRoles: Array<{
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
}> = [
  {
    icon: Building2,
    eyebrow: 'Operated by',
    title: 'JA Group Services Ltd',
    description:
      'JA Group Services Ltd operates the Sousa Murray Domains brand, this information website and the main customer-support route.',
    points: [
      'Company registered in England and Wales',
      'Company number 16314179',
      'Responsible for the Sousa Murray Domains website and brand',
    ],
  },
  {
    icon: Store,
    eyebrow: 'Storefront services',
    title: 'Wild West Domains reseller platform',
    description:
      'For products offered through the Turnkey storefront, Sousa Murray Domains acts as an agent of Wild West Domains, LLC under the applicable reseller arrangements.',
    points: [
      'Domains, hosting, email and security products',
      'Current plans, pricing and checkout on the storefront',
      'Storefront Universal Terms and product agreements apply',
    ],
  },
  {
    icon: Wrench,
    eyebrow: 'Forthcoming brand',
    title: 'Sousa Murray Sites',
    description:
      'Sousa Murray Sites is the approved forthcoming brand for Managed Website Services operated by JA Group Services Ltd. It is still being built and has not yet launched.',
    points: [
      'Separate from Sousa Murray Domains',
      'Not currently available for general ordering',
      'Launch information will be published when approved',
    ],
  },
];

const principles: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: ShieldCheck,
    title: 'Clear responsibilities',
    description:
      'We explain who operates each part of the service and which agreement applies before a customer proceeds.',
  },
  {
    icon: Globe2,
    title: 'Browse before buying',
    description:
      'Customers can review products on Sousa Murray Domains first, then continue to the matching storefront page when ready.',
  },
  {
    icon: Headphones,
    title: 'Practical support routes',
    description:
      'The website separates general Sousa Murray Domains assistance from platform-level support for existing products.',
  },
  {
    icon: Scale,
    title: 'Legal transparency',
    description:
      'Storefront products, future managed services, privacy information and customer support are presented as distinct responsibilities.',
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About Sousa Murray Domains | Our Company and Service Model</title>
        <meta
          name="description"
          content="Learn how Sousa Murray Domains is operated by JA Group Services Ltd, how the authorised reseller storefront works and how Sousa Murray Sites will remain a separate forthcoming brand."
        />
        <link rel="canonical" href={`${site}/about-us`} />
        <meta property="og:title" content="About Sousa Murray Domains | Our Company and Service Model" />
        <meta
          property="og:description"
          content="A clear explanation of the company, authorised reseller storefront and forthcoming Sousa Murray Sites brand."
        />
        <meta property="og:url" content={`${site}/about-us`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#06152E] via-[#0A1F44] to-[#173C88] py-14 sm:py-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-28 -top-36 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="absolute -bottom-44 left-1/3 h-80 w-80 rounded-full bg-cyan-300/5 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          <div className="relative mx-auto grid max-w-[1440px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">About Sousa Murray Domains</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                A clearer way to choose and manage digital services
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                Sousa Murray Domains brings product information, customer-support routes and an authorised reseller storefront together under one recognisable service operated by JA Group Services Ltd.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="min-h-12 bg-white px-7 font-bold text-[#0A1F44] hover:bg-blue-50">
                  <a href="/services">
                    Browse Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="min-h-12 border-white/35 bg-white/5 px-7 font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  <a href="/contact-us">Contact Sousa Murray Domains</a>
                </Button>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-hidden rounded-2xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-md"
              aria-label="Sousa Murray Domains at a glance"
            >
              <div className="border-b border-white/15 px-6 py-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">At a glance</p>
                <h2 className="mt-2 text-2xl font-bold text-white">One brand, clearly defined roles</h2>
              </div>
              <div className="divide-y divide-white/10">
                <HeroFact icon={Building2} label="Brand operator" value="JA Group Services Ltd" />
                <HeroFact icon={Store} label="Storefront model" value="Authorised reseller platform" />
                <HeroFact icon={BadgeCheck} label="Registrar disclosure" value="Wild West Domains, LLC" />
                <HeroFact icon={Wrench} label="Forthcoming brand" value="Sousa Murray Sites — Coming soon" />
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="border-b border-border bg-card py-7">
          <div className="mx-auto grid max-w-[1440px] gap-5 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
            <CompanyFact label="Legal operator" value="JA Group Services Ltd" />
            <CompanyFact label="Company number" value="16314179" />
            <CompanyFact label="Registered jurisdiction" value="England and Wales" />
          </div>
        </section>

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl sm:mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">How the service is structured</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Different services, one clear customer journey
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                The website helps customers understand reseller products before continuing to the provider storefront. Sousa Murray Sites is presented separately as a forthcoming brand and is not yet available for general ordering.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {serviceRoles.map(({ icon: Icon, eyebrow, title, description, points }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
                  <h3 className="mt-2 text-xl font-bold text-card-foreground">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  <ul className="mt-5 space-y-3 border-t border-border pt-5">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Our approach</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Straightforward information before commitment
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground sm:text-lg">
                Customers should be able to understand what a product does, who supplies it, where payment takes place and where to obtain support without having to decode the small print themselves.
              </p>
              <Button asChild variant="outline" className="mt-7 min-h-11 border-primary font-semibold text-primary hover:bg-primary/10">
                <a href="/terms-of-service">
                  View Legal Framework
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map(({ icon: Icon, title, description }, index) => (
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

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#06152E] via-[#0A1F44] to-[#173C88] p-7 shadow-xl sm:p-9 lg:p-12"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Scale className="h-5 w-5 text-blue-200" />
                  </div>
                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-blue-200">Storefront legal position</p>
                  <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Storefront products are governed by the applicable provider agreements
                  </h2>
                  <p className="mt-4 max-w-4xl leading-relaxed text-white/75 sm:text-lg">
                    For services offered through the Turnkey storefront, Sousa Murray Domains acts as an agent of Wild West Domains, LLC. Storefront use and purchases are governed by the Universal Terms of Service and the product-specific agreements applying to the selected service.
                  </p>
                  <p className="mt-4 max-w-4xl text-sm leading-relaxed text-white/60">
                    Wild West Domains, LLC is the registrar of record for domain registrations supplied through the reseller programme, except where another affiliated ICANN-accredited registrar is identified. Sousa Murray Domains is not itself a registry or an ICANN-accredited registrar.
                  </p>
                </div>

                <div className="flex flex-col gap-3 lg:min-w-64">
                  <Button asChild size="lg" className="bg-white font-bold text-[#0A1F44] hover:bg-blue-50">
                    <a href={universalTerms} target="_blank" rel="noopener noreferrer">
                      Universal Terms
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/35 bg-white/5 font-semibold text-white hover:bg-white/10 hover:text-white"
                  >
                    <a href="/terms-of-service">Sousa Murray Domains Terms</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border bg-card py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Support routes</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Get help from the right place
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground sm:text-lg">
                General enquiries can come to Sousa Murray Domains. Existing storefront products also have a dedicated platform-support route for account and technical assistance.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <SupportCard
                icon={Mail}
                eyebrow="Sousa Murray Domains"
                title="General enquiries and service guidance"
                description="Contact the Sousa Murray Domains customer-support route for domain and reseller service guidance, or for support with an existing Managed Website arrangement."
                actions={[
                  { label: 'contact@jagroupservices.co.uk', href: 'mailto:contact@jagroupservices.co.uk', icon: Mail },
                  { label: '020 3834 2790', href: 'tel:02038342790', icon: Phone },
                ]}
              />
              <SupportCard
                icon={Headphones}
                eyebrow="Platform support"
                title="Existing product and account assistance"
                description="Use the reseller platform Help Centre for support relating to existing products, account access and platform-level technical issues."
                actions={[
                  {
                    label: 'Open the Help Centre',
                    href: 'https://www.secureserver.net/help?pl_id=599857&prog_id=599857',
                    icon: ExternalLink,
                    external: true,
                  },
                ]}
              />
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/65">Your next step</p>
              <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Explore the full Sousa Murray Domains service range
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Browse every available service on Sousa Murray Domains first, then continue to the correct storefront or enquiry route when you are ready.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="min-h-12 bg-white px-7 font-bold text-primary hover:bg-blue-50">
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
                  <a href={storefront} target="_blank" rel="noopener noreferrer">
                    Open Storefront
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

function HeroFact({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
        <Icon className="h-5 w-5 text-blue-200" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-white/50">{label}</p>
        <p className="mt-1 text-sm font-bold text-white">{value}</p>
      </div>
    </div>
  );
}

function CompanyFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
}

interface SupportAction {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}

function SupportCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  actions,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  actions: SupportAction[];
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-7"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{eyebrow}</p>
      <h3 className="mt-2 text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-5 flex flex-col gap-2 border-t border-border pt-5 sm:flex-row sm:flex-wrap">
        {actions.map(({ label, href, icon: ActionIcon, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/30 hover:bg-muted"
          >
            <ActionIcon className="h-4 w-4 text-primary" />
            {label}
          </a>
        ))}
      </div>
    </motion.article>
  );
}
