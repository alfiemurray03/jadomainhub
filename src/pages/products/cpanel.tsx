import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Shield, Zap, HardDrive, Mail, Database, ArrowRight } from 'lucide-react';

export default function CpanelHostingPage() {
  const features = [
    {
      icon: Server,
      title: 'cPanel Control Panel',
      description: 'Industry-standard control panel for easy website management',
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimised servers for quick loading times and reliability',
    },
    {
      icon: HardDrive,
      title: 'Generous Storage',
      description: 'Ample disk space for your websites, files, and databases',
    },
    {
      icon: Mail,
      title: 'Email Accounts',
      description: 'Professional email hosting with spam protection',
    },
    {
      icon: Database,
      title: 'MySQL Databases',
      description: 'Multiple databases for your applications and websites',
    },
    {
      icon: Shield,
      title: 'Security Features',
      description: 'SSL certificates, backups, and security monitoring',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <title>cPanel Hosting - Sousa Murray Domains</title>
      <meta
        name="description"
        content="Professional cPanel hosting with fast performance, generous storage, and expert support. Suitable for websites and applications."
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
                cPanel Hosting
              </h1>
              <p className="mb-8 text-xl text-muted-foreground lg:text-2xl">
                Professional web hosting with the industry-standard cPanel control panel
              </p>
              <Button size="lg" className="rounded-xl px-8 text-base" asChild>
                <a href="https://www.secureserver.net/hosting/cpanel-hosting?plid=599857" target="_blank" rel="noopener noreferrer">
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
            <h2 className="mb-4 text-4xl font-bold lg:text-5xl">Everything you need</h2>
            <p className="text-lg text-muted-foreground lg:text-xl">
              Powerful features for your websites and applications
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Ready to get started?</h2>
            <p className="mb-8 text-lg text-muted-foreground lg:text-xl">
              Choose the cPanel hosting plan that suits your needs.
            </p>
            <Button size="lg" className="rounded-xl px-8 text-base" asChild>
              <a href="https://www.secureserver.net/hosting/cpanel-hosting?plid=599857" target="_blank" rel="noopener noreferrer">
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
