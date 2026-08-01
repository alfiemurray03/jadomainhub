import { motion } from 'motion/react';
import { Shield, Users, Target, Award, Phone, Mail, Clock, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Helmet } from '@dr.pogodin/react-helmet';

export default function AboutUsPage() {
  const site = 'https://jadomainhub.jagroupservices.co.uk';
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Who We Are — JA Domain Hub</title>
        <meta name="description" content="JA Domain Hub is a service operated by JA Group Services Ltd. We are a GoDaddy Reseller providing domain, hosting, email and SSL services with UK-based support." />
        <link rel="canonical" href={`${site}/about-us`} />
        <meta property="og:title" content="Who We Are — JA Domain Hub" />
        <meta property="og:description" content="JA Domain Hub is a service operated by JA Group Services Ltd. We are a GoDaddy Reseller providing domain, hosting, email and SSL services with UK-based support." />
        <meta property="og:url" content={`${site}/about-us`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-6xl">Who We Are</h1>
            <p className="text-xl text-muted-foreground lg:text-2xl">
              Your trusted partner for domain registration, web hosting, and business email services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2">
                <CardContent className="p-8 lg:p-12">
                  <div className="space-y-6 text-lg text-muted-foreground">
                    <p>
                      JA Domain Hub is a service operated by JA Group Services Ltd (Company Number 16314179), a company registered in England and Wales.
                    </p>
                    <p>
                      JA Domain Hub operates as a GoDaddy Reseller, providing access to domain registration, hosting, email, SSL and related online services through GoDaddy reseller and third-party provider systems.
                    </p>
                    <p>
                      <strong className="text-foreground">Important:</strong> JA Domain Hub is not GoDaddy. JA Domain Hub is not a domain registry and not an ICANN accredited registrar. We do not directly control registry infrastructure.
                    </p>
                    <p>
                      Domain registrations, renewals, transfers and related services are technically fulfilled through GoDaddy reseller infrastructure. Services purchased through the JA Domain Hub shop or storefront may be subject to GoDaddy, reseller, provider or third-party terms, policies, renewal rules, cancellation rules, refund rules and technical service conditions.
                    </p>
                    <p>
                      JA Group Services Ltd operates the brand, customer relationship and compliance framework in the United Kingdom, giving customers a UK-based business to deal with directly.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold lg:text-5xl">Our Approach</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We focus on making digital services accessible and straightforward for UK businesses.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: 'Trust',
                description: 'Transparent partnerships with industry-leading providers',
              },
              {
                icon: Users,
                title: 'Service',
                description: 'UK-based support for your business needs',
              },
              {
                icon: Target,
                title: 'Simplicity',
                description: 'Straightforward access to essential digital services',
              },
              {
                icon: Award,
                title: 'Quality',
                description: 'Enterprise-grade infrastructure and reliability',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2">
                  <CardContent className="p-8 text-center">
                    <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Footer */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-center text-2xl font-bold">Get in Touch</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {/* JA Group Services */}
                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-xl bg-primary/10 p-2">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">JA Group Services</h3>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 shrink-0 text-primary" />
                        <a href="tel:02038342790" className="hover:text-foreground hover:underline">020 3834 2790</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 shrink-0 text-primary" />
                        <a href="mailto:jadomainhub@jagroupservices.co.uk" className="hover:text-foreground hover:underline">jadomainhub@jagroupservices.co.uk</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 shrink-0 text-primary" />
                        <span>Mon – Fri, 9:00 AM – 5:00 PM (GMT)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Platform Support */}
                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-xl bg-primary/10 p-2">
                        <Headphones className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">Platform Support (24/7)</h3>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 shrink-0 text-primary" />
                        <a href="https://www.secureserver.net/help?pl_id=599857&prog_id=599857" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover:underline">Help Center (24/7)</a>
                      </div>
                      <p className="text-xs">
                        Operated via the reseller infrastructure of Wild West Domains, part of GoDaddy.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Legal Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-8 text-center">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      JA Domain Hub is a service operated by JA Group Services Ltd (Company Number 16314179).
                    </p>
                    <p className="text-sm text-muted-foreground">
                      JA Domain Hub operates as a GoDaddy Reseller. JA Domain Hub is not GoDaddy and is not an ICANN accredited registrar.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Services purchased through JA Domain Hub may be subject to GoDaddy, reseller, provider or third-party terms, policies and conditions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
