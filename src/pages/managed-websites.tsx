import { managed_websites } from 'virtual:content';
import { motion } from 'motion/react';
import { Globe, Settings, ShieldCheck, FileText, Users, Wrench, CheckCircle, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Helmet } from '@dr.pogodin/react-helmet';

const servicesMeta = [
  {
    icon: Globe
  },
  {
    icon: Settings
  },
  {
    icon: ShieldCheck
  },
  {
    icon: Wrench
  },
];

export default function ManagedWebsitesPage() {
  const site = 'https://jadomainhub.jagroupservices.co.uk';
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Managed Websites — JA Domain Hub</title>
        <meta name="description" content="JA Domain Hub offers custom website setup, configuration and managed website services through JA Group Services Ltd. Find out about ownership, responsibilities and how we can help." />
        <link rel="canonical" href={`${site}/managed-websites`} />
        <meta property="og:title" content="Managed Websites — JA Domain Hub" />
        <meta property="og:description" content="JA Domain Hub offers custom website setup, configuration and managed website services through JA Group Services Ltd." />
        <meta property="og:url" content={`${site}/managed-websites`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Globe className="h-4 w-4" />
              Managed Website Services
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-6xl">
              Custom &amp; Managed Websites
            </h1>
            <p className="text-xl text-muted-foreground lg:text-2xl">
              JA Domain Hub may create, configure, manage and maintain websites for customers as a managed service through JA Group Services Ltd.
            </p>
          </motion.div>
        </div>
      </section>
      {/* What We Offer */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">What We Offer</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our managed website service covers the full lifecycle of your website — from initial setup through to ongoing management and support.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {managed_websites.services.map((service, index) => {
              const Icon = servicesMeta[index].icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2">
                    <CardContent className="p-8">
                      <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Ownership & Terms */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Ownership &amp; Responsibilities</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              It is important to understand what JA Group Services Ltd retains and what you as a customer own or are responsible for.
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            {/* Key statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="mb-8 border-2 border-primary/30 bg-primary/5">
                <CardContent className="p-8">
                  <div className="flex gap-4">
                    <FileText className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <p className="text-base leading-relaxed text-foreground">
                      Custom websites may be created, configured, managed and maintained through JA Domain Hub as a managed service. Unless otherwise agreed in writing, JA Group Services Ltd retains ownership of its website systems, templates, platform setup, technical configuration, code, processes and management tools. Customers remain responsible for any content, branding, materials and domain names they provide or own.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* JA Group Services retains */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="h-full border-2">
                  <CardContent className="p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-xl bg-primary/10 p-2">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">JA Group Services Ltd Retains</h3>
                    </div>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Unless otherwise agreed in writing, JA Group Services Ltd retains ownership of:
                    </p>
                    <ul className="space-y-3">
                      {managed_websites.ownershipPoints.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Customer owns / is responsible for */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="h-full border-2">
                  <CardContent className="p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-xl bg-primary/10 p-2">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">Customer Owns / Is Responsible For</h3>
                    </div>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Customers remain responsible for, and may own:
                    </p>
                    <ul className="space-y-3">
                      {managed_websites.customerPoints.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Written agreement note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <Card className="border-2 border-amber-200 bg-amber-50 dark:border-amber-900/40 dark:bg-amber-950/20">
                <CardContent className="p-6">
                  <p className="text-sm text-foreground">
                    <strong>Please note:</strong> The above ownership terms apply unless a separate written agreement is made between the customer and JA Group Services Ltd. Customers should not assume they own the full website build, platform, system, code, templates, technical configuration or setup unless this is specifically agreed in writing.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Reseller Notice */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-8">
                <h3 className="mb-4 text-lg font-semibold">About JA Domain Hub</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    JA Domain Hub is a service operated by JA Group Services Ltd. JA Domain Hub operates as a GoDaddy Reseller, providing access to domain registration, hosting, email, SSL and related online services through GoDaddy reseller and third-party provider systems.
                  </p>
                  <p>
                    JA Domain Hub is not GoDaddy. Services purchased through JA Domain Hub may be subject to GoDaddy, reseller, provider or third-party terms, policies, renewal rules, cancellation rules, refund rules and technical service conditions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/60" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Interested in a Managed Website?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-white/70">
              Get in touch with JA Group Services Ltd to discuss your requirements and find out how we can help.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="h-14 rounded-2xl bg-white px-10 text-base font-semibold text-primary shadow-xl transition-transform hover:scale-105 hover:bg-white/95 hover:text-primary"
                asChild
              >
                <a href="/contact-us">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
