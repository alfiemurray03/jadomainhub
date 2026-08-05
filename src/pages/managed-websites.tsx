import { Helmet } from '@dr.pogodin/react-helmet';
import { ArrowRight, Building2, CheckCircle2, Clock3, Globe2, Headphones, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

import { Button } from '@/components/ui/button';

const site = 'https://sousamurraydomains.jagroupservices.co.uk';

const plannedAreas = [
  'Managed website design and construction',
  'Website configuration and launch support',
  'Ongoing website management and maintenance',
  'Content updates and associated managed digital services',
] as const;

export default function ManagedWebsitesPage() {
  return (
    <>
      <Helmet>
        <title>Sousa Murray Sites — Coming Soon | JA Group Services Ltd</title>
        <meta
          name="description"
          content="Sousa Murray Sites is the forthcoming Managed Website Services brand of JA Group Services Ltd. The service is still being built and has not yet launched."
        />
        <link rel="canonical" href={`${site}/managed-websites`} />
        <meta property="og:title" content="Sousa Murray Sites — Coming Soon" />
        <meta
          property="og:description"
          content="Sousa Murray Sites is still being built and has not yet launched."
        />
        <meta property="og:url" content={`${site}/managed-websites`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#06152E] via-[#0A1F44] to-[#173C88] py-16 sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-28 -top-36 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="absolute -bottom-44 left-1/3 h-80 w-80 rounded-full bg-cyan-300/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white">
                <Clock3 className="h-4 w-4" />
                Coming soon — not yet launched
              </div>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Sousa Murray Sites
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                Sousa Murray Sites is the approved forthcoming brand for Managed Website Services operated by JA Group Services Ltd. The service is still being built and is not currently available for general ordering through this website.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border bg-card py-8">
          <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
            <StatusFact icon={Clock3} label="Current status" value="Under development" />
            <StatusFact icon={Building2} label="Legal operator" value="JA Group Services Ltd" />
            <StatusFact icon={Globe2} label="Separate from" value="Sousa Murray Domains" />
          </div>
        </section>

        <section className="border-b border-border bg-background py-14 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42 }}
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Approved future service</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">What Sousa Murray Sites is being built for</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground sm:text-lg">
                The brand is intended to provide Managed Website Services designed, built, configured, maintained or managed directly by JA Group Services Ltd. These services will be kept clearly separate from the authorised reseller products available through Sousa Murray Domains.
              </p>

              <div className="mt-7 space-y-3">
                {plannedAreas.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: 0.08 }}
              className="rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8"
            >
              <ShieldCheck className="h-9 w-9 text-primary" />
              <h2 className="mt-5 text-2xl font-bold">Important service status</h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>Sousa Murray Sites has not launched and this page is not an offer, public checkout or confirmation that new work has been accepted.</p>
                <p>Service scope, pricing, contractual terms, payment arrangements and launch information will be published only when the service is ready and formally approved for operation.</p>
                <p>Sousa Murray Domains continues to provide information and support for authorised reseller-based domain and related products.</p>
              </div>
            </motion.aside>
          </div>
        </section>

        <section className="bg-secondary py-14 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Headphones className="mx-auto h-10 w-10 text-primary" />
            <h2 className="mt-4 text-3xl font-bold">Existing arrangements and previous enquiries</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground sm:text-lg">
              Existing customers or people with a previously acknowledged Managed Website enquiry can contact JA Group Services Ltd for support. New general orders are not being accepted through this page while Sousa Murray Sites remains under development.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="/contact-us?enquiry=existing-managed-website">
                  Contact JA Group Services Ltd
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/services">Return to Sousa Murray Domains</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function StatusFact({ icon: Icon, label, value }: { icon: typeof Clock3; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-background p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-1 font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
}
