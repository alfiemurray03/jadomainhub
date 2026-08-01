import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Shield, RefreshCw, Wrench, ArrowRight, Check } from 'lucide-react';

export default function WordPressHostingPage() {
  const features = [
    {
      icon: Zap,
      title: 'Optimised Performance',
      description: 'Servers specifically configured for WordPress speed and reliability',
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Automatic security updates and malware scanning',
    },
    {
      icon: RefreshCw,
      title: 'Automatic Updates',
      description: 'WordPress core, themes, and plugins updated automatically',
    },
    {
      icon: Wrench,
      title: 'Easy Management',
      description: 'Simple dashboard for managing your WordPress sites',
    },
  ];

  const benefits = [
    'One-click WordPress installation',
    'Free SSL certificate included',
    'Daily automatic backups',
    'WordPress expert support',
    'Staging environment',
    'CDN integration',
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <title>WordPress Hosting - JA Domain Hub</title>
      <meta
        name="description"
        content="Managed WordPress hosting optimised for speed, security, and performance. Expert support and automatic updates included."
      />

      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-7xl">
                WordPress Hosting
              </h1>
              <p className="mb-8 text-xl text-muted-foreground lg:text-2xl">
                Managed WordPress hosting optimised for speed, security, and performance
              </p>
              <Button size="lg" className="rounded-xl px-8 text-base" asChild>
                <a href="https://www.secureserver.net/hosting/wordpress-hosting?plid=599857" target="_blank" rel="noopener noreferrer">
                  View Plans
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold lg:text-5xl">Built for WordPress</h2>
            <p className="text-lg text-muted-foreground lg:text-xl">
              Everything you need for a successful WordPress site
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-2">
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-4xl font-bold lg:text-5xl">What's included</h2>
              <p className="text-lg text-muted-foreground lg:text-xl">
                Comprehensive features for your WordPress site
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-base">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Ready to launch your site?</h2>
            <p className="mb-8 text-lg text-muted-foreground lg:text-xl">
              Get started with WordPress hosting today.
            </p>
            <Button size="lg" className="rounded-xl px-8 text-base" asChild>
              <a href="https://www.secureserver.net/hosting/wordpress-hosting?plid=599857" target="_blank" rel="noopener noreferrer">
                View Plans & Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
