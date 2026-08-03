import { Helmet } from '@dr.pogodin/react-helmet';
import { ArrowRight, BadgeCheck, ExternalLink, Search } from 'lucide-react';
import { motion } from 'motion/react';

import DomainSearch from '@/components/DomainSearch';
import { Button } from '@/components/ui/button';
import { productCategories, productsForCategory, STOREFRONT_URL } from '@/lib/product-catalogue';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services &amp; Products | JA Domain Hub</title>
        <meta
          name="description"
          content="Browse every JA Domain Hub domain, website, hosting, security, marketing and email service before continuing to the authorised reseller storefront."
        />
        <link rel="canonical" href="https://jadomainhub.jagroupservices.co.uk/services" />
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

          <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-200">Complete service catalogue</p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Browse before you buy
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                Review every service available through JA Domain Hub, understand what it is for and then continue to the matching storefront page when you are ready to view plans, availability or current pricing.
              </p>

              <DomainSearch appearance="dark" compact className="mt-8 max-w-4xl" />
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border bg-card py-7">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <BadgeCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">One clear customer journey</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Learn on JA Domain Hub first. Purchase and account management take place on the authorised reseller platform.
                </p>
              </div>
            </div>
            <Button asChild variant="outline" className="shrink-0">
              <a href={STOREFRONT_URL} target="_blank" rel="noopener noreferrer">
                Open the Storefront
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        <main className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <nav aria-label="Service categories" className="mb-12 flex flex-wrap gap-2">
            {productCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/30 hover:bg-muted hover:text-foreground"
              >
                {category.label}
              </a>
            ))}
          </nav>

          <div className="space-y-16">
            {productCategories.map((category) => {
              const categoryProducts = productsForCategory(category.id);

              return (
                <section key={category.id} id={category.id} className="scroll-mt-28">
                  <div className="mb-7 max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{category.label}</p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{category.label} services</h2>
                    <p className="mt-3 leading-relaxed text-muted-foreground sm:text-lg">{category.description}</p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {categoryProducts.map(({ id, icon: Icon, title, description, localPath }, index) => (
                      <motion.a
                        key={id}
                        href={localPath}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.04 }}
                        className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="mt-5 text-xl font-bold text-card-foreground">{title}</h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          View service details
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </main>

        <section className="border-t border-border bg-secondary py-14 sm:py-16">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Search className="h-5 w-5 text-primary" />
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground">Not sure which service you need?</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground sm:text-lg">
                Contact JA Domain Hub with what you are trying to achieve. We can explain the relevant route and whether the service is self-service or delivered directly by JA Group Services Ltd.
              </p>
            </div>
            <Button asChild size="lg">
              <a href="/contact-us">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
