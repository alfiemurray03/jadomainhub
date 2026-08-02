import { managed_websites } from 'virtual:content';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  FileSearch,
  Globe2,
  LifeBuoy,
  LockKeyhole,
  MessageSquare,
  Rocket,
  Settings2,
  ShieldCheck,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Helmet } from '@dr.pogodin/react-helmet';

const servicesMeta = [
  { icon: Globe2 },
  { icon: Settings2 },
  { icon: ShieldCheck },
  { icon: LifeBuoy },
];

const processSteps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell us what you need',
    description:
      'Contact us with your goals, required pages, preferred style, timescale and any existing website, domain or content.',
  },
  {
    number: '02',
    icon: FileSearch,
    title: 'We review and scope the work',
    description:
      'JA Group Services Ltd will review your requirements, confirm what is included and prepare a tailored quotation.',
  },
  {
    number: '03',
    icon: CreditCard,
    title: 'Receive a secure Stripe checkout link',
    description:
      'Once the scope and price are agreed, we will send you a secure checkout link provided by Stripe. There is no public checkout for this service.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Build, launch and manage',
    description:
      'After the order is confirmed, we will begin the agreed work and provide ongoing management in line with your service plan.',
  },
];

export default function ManagedWebsitesPage() {
  const site = 'https://jadomainhub.jagroupservices.co.uk';

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Managed Website Services — JA Group Services Ltd</title>
        <meta
          name="description"
          content="Managed website design, setup, launch and ongoing management delivered by JA Group Services Ltd. Available by enquiry with tailored pricing and secure Stripe checkout."
        />
        <link rel="canonical" href={`${site}/managed-websites`} />
        <meta property="og:title" content="Managed Website Services — JA Group Services Ltd" />
        <meta
          property="og:description"
          content="A tailored managed website service delivered by JA Group Services Ltd, with pricing based on your requirements."
        />
        <meta property="og:url" content={`${site}/managed-websites`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Building2 className="h-4 w-4" />
              Delivered by JA Group Services Ltd
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Managed websites, built around your business
            </h1>
            <p className="mx-auto mb-9 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
              A hands-on website design, setup, launch and ongoing management service for businesses and organisations that want the technical work taken care of properly.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="h-14 rounded-2xl px-8 text-base font-semibold" asChild>
                <a href="/contact-us?enquiry=managed-website">
                  Request a tailored quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 rounded-2xl px-8 text-base font-semibold" asChild>
                <a href="#how-it-works">How it works</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-primary" />
                Available by enquiry only
              </span>
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-primary" />
                Tailored pricing
              </span>
              <span className="inline-flex items-center gap-2">
                <LockKeyhole className="h-4 w-4 text-primary" />
                Secure Stripe checkout link
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service identity */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-5xl"
          >
            <Card className="border-2 border-primary/25 bg-primary/5">
              <CardContent className="p-7 sm:p-9">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="mb-3 text-2xl font-bold">A JA Group Services managed service</h2>
                    <p className="leading-relaxed text-muted-foreground">
                      Managed Websites is delivered directly by JA Group Services Ltd and promoted through JA Domain Hub. It is separate from the self-service reseller product catalogue and is not an off-the-shelf or Turnkey website purchase. Every engagement is reviewed and priced according to the customer&apos;s actual requirements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">What we can provide</p>
            <h2 className="mb-4 text-3xl font-bold lg:text-5xl">One service, tailored to your website</h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              We agree the right combination of design, technical setup and ongoing support rather than forcing every customer into the same package.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {managed_websites.services.map((service, index) => {
              const Icon = servicesMeta[index]?.icon ?? Globe2;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Card className="h-full border-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                    <CardContent className="p-8">
                      <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                      <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-muted/30 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">Tailored pricing</p>
              <h2 className="mb-5 text-3xl font-bold lg:text-5xl">No generic price that ignores the work</h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                The cost depends on the size and complexity of the website, required features, content preparation, integrations, timescale and level of ongoing management.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                We will confirm the scope and price in writing before asking you to pay. You will only receive a Stripe checkout link once the quotation has been agreed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2">
                <CardContent className="p-8 sm:p-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="rounded-2xl bg-primary/10 p-3">
                      <ClipboardList className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Your quotation may consider</h3>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      'Number of pages and layouts',
                      'Design and branding requirements',
                      'Forms, bookings or integrations',
                      'Content creation or migration',
                      'Domain, hosting and launch work',
                      'Ongoing maintenance and support',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-xl bg-muted/60 p-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="how-it-works" className="scroll-mt-24 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">How it works</p>
            <h2 className="mb-4 text-3xl font-bold lg:text-5xl">From first message to managed website</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A clear, human process with no surprise checkout and no one-size-fits-all package.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Card className="h-full border-2">
                    <CardContent className="p-7">
                      <div className="mb-6 flex items-center justify-between">
                        <div className="rounded-2xl bg-primary/10 p-3">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-sm font-black tracking-widest text-primary/50">{step.number}</span>
                      </div>
                      <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer collaboration */}
      <section className="bg-muted/30 py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-2">
                <CardContent className="p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-2xl bg-primary/10 p-3">
                      <Settings2 className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">What we can manage</h2>
                  </div>
                  <ul className="space-y-4">
                    {managed_websites.ownershipPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full border-2">
                <CardContent className="p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-2xl bg-primary/10 p-3">
                      <ClipboardList className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">What we need from you</h2>
                  </div>
                  <ul className="space-y-4">
                    {managed_websites.customerPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service basis */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-2xl border bg-card p-6 text-sm leading-relaxed text-muted-foreground sm:p-8">
            <strong className="text-foreground">Service basis:</strong> The precise scope, charges, payment arrangements, delivery timescale, ownership or licensing position, support commitments and cancellation terms will be set out in the written quotation, order summary and applicable service terms before payment. Work will begin only after the order has been agreed and the required payment has been received, unless we confirm a different arrangement in writing.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/60" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-5 text-3xl font-bold text-white lg:text-5xl">Let&apos;s discuss your website</h2>
            <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-white/75">
              Tell us what you need and JA Group Services Ltd will review the project, confirm the scope and provide a tailored quotation.
            </p>
            <Button
              size="lg"
              className="h-14 rounded-2xl bg-white px-9 text-base font-semibold text-primary shadow-xl transition-transform hover:scale-105 hover:bg-white/95 hover:text-primary"
              asChild
            >
              <a href="/contact-us?enquiry=managed-website">
                Request a managed website quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
