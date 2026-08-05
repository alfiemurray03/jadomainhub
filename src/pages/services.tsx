import { Helmet } from '@dr.pogodin/react-helmet';
import { ArrowRight, BadgeCheck, Clock3, ExternalLink, Search } from 'lucide-react';
import { motion } from 'motion/react';

import DomainSearch from '@/components/DomainSearch';
import { Button } from '@/components/ui/button';
import { productCategories, productsForCategory, STOREFRONT_URL } from '@/lib/product-catalogue';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services &amp; Products | Sousa Murray Domains</title>
        <meta
          name="description"
          content="Browse domain, website, hosting, security, marketing and email products through Sousa Murray Domains. Sousa Murray Sites is shown separately as coming soon."
        />
        <link rel="canonical" href="https://sousamurraydomains.jagroupservices.co.uk/services" />
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
                Review the domain and related reseller services available through Sousa Murray Domains before continuing to the authorised storefront. Sousa Murray Sites is a separate forthcoming brand and has not yet launched.
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
                  Learn on Sousa Murray Domains first. Purchase and account management for reseller products take place on the authorised provider platform.
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
                    {categoryProducts.map(({ id, icon: Icon, title, description, localPath, comingSoon }, index) => (
                      <motion.a
                        key={id}
                        href={localPath}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.04 }}
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
                Contact Sousa Murray Domains for help identifying the appropriate domain or reseller product route. Sousa Murray Sites has not launched and is not currently accepting general orders through this website.
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
