import { Helmet } from '@dr.pogodin/react-helmet';
import { ArrowRight, CheckCircle2, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';

import DomainSearch from '@/components/DomainSearch';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    title: 'Domain Forwarding and Masking',
    description:
      'Direct a domain name you own to the website or online destination you choose.',
  },
  {
    title: 'Domain Locking',
    description:
      'Help prevent accidental or unauthorised transfers by keeping the domain locked until you choose otherwise.',
  },
  {
    title: 'DNS Management',
    description:
      'Manage nameservers and DNS records for websites, email and other connected services from the account area.',
  },
  {
    title: 'Registration Contact Management',
    description:
      'Update the relevant domain contacts or arrange an eligible change of registrant through the provider platform.',
  },
  {
    title: 'Status and Renewal Controls',
    description:
      'Review domain status, renewal settings and important account notifications in one place.',
  },
  {
    title: 'Account-Based Management',
    description:
      'Manage registered domains and connected products through the secure reseller-platform account area.',
  },
];

const relatedServices = [
  {
    title: 'Domain Transfer',
    description: 'Move an existing domain into the reseller platform.',
    href: '/products/domain-transfer',
  },
  {
    title: 'Bulk Domain Registration',
    description: 'Search for and register multiple domains in one workflow.',
    href: '/products/bulk-registration',
  },
  {
    title: 'Microsoft 365',
    description: 'Add professional email after choosing your domain.',
    href: '/products/microsoft-365',
  },
];

export default function DomainRegistrationPage() {
  return (
    <>
      <Helmet>
        <title>Domain Registration &amp; Search | Sousa Murray Domains</title>
        <meta
          name="description"
          content="Search for a domain name through Sousa Murray Domains and continue directly to availability results on the authorised reseller storefront."
        />
        <link rel="canonical" href="https://sousamurraydomains.jagroupservices.co.uk/products/domain-registration" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#06152E] via-[#0A1F44] to-[#173C88] py-14 sm:py-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
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
              className="mx-auto max-w-5xl text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-blue-200">
                <Globe2 className="h-6 w-6" />
              </div>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-blue-200">Domain search</p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Find the domain you want
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                Enter the exact domain name you are considering. We will take you directly to the matching Turnkey storefront search results so you can review availability, alternatives and current pricing.
              </p>

              <DomainSearch appearance="dark" className="mx-auto mt-8 max-w-4xl text-left" />
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border bg-card py-8">
          <div className="mx-auto grid max-w-[1440px] gap-5 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
            {[
              'Search results open on the Sousa Murray Domains storefront',
              'Availability and pricing are confirmed by the provider platform',
              'Purchases and renewals are managed through your secure account',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm font-medium leading-relaxed text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Included capabilities</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Manage the domain after registration
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground sm:text-lg">
                The precise features and any charges depend on the selected domain, extension and provider offering shown during checkout.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-card-foreground">{feature.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary py-14 sm:py-16">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Related services</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">Build around your domain</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {relatedServices.map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold text-card-foreground">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    View service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="mx-auto max-w-[1440px] px-4 text-sm leading-relaxed text-muted-foreground sm:px-6 lg:px-8">
            <p>
              Domain availability and prices can change without notice. Registration is not complete until the provider platform confirms the order and payment. Products may renew automatically unless auto-renewal is disabled or the product is cancelled in accordance with the applicable terms. Taxes, registry charges and ICANN-related fees may apply where shown.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
