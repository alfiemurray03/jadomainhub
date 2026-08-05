import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Calendar, FileText, Users, Cloud, Shield, ArrowRight } from 'lucide-react';

export default function Microsoft365Page() {
  const features = [
    {
      icon: Mail,
      title: 'Professional Email',
      description: 'Custom email addresses with your domain name and 50GB mailbox storage',
    },
    {
      icon: FileText,
      title: 'Office Applications',
      description: 'Access to Word, Excel, PowerPoint, and more on all your devices',
    },
    {
      icon: Calendar,
      title: 'Calendar & Contacts',
      description: 'Shared calendars and contact management for team collaboration',
    },
    {
      icon: Cloud,
      title: 'Cloud Storage',
      description: '1TB of OneDrive cloud storage for files and documents',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Microsoft Teams for chat, meetings, and file sharing',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security features and spam protection',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <title>Microsoft 365 - Sousa Murray Domains</title>
      <meta
        name="description"
        content="Professional email and productivity tools with Microsoft 365. Get custom email, Office apps, and 1TB cloud storage."
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
                Microsoft 365
              </h1>
              <p className="mb-8 text-xl text-muted-foreground lg:text-2xl">
                Professional email and productivity tools for your business
              </p>
              <Button size="lg" className="rounded-xl px-8 text-base" asChild>
                <a href="https://www.secureserver.net/products/microsoft-365?plid=599857" target="_blank" rel="noopener noreferrer">
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
              Complete productivity suite for modern businesses
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

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2">
                <CardContent className="p-8 lg:p-12">
                  <h2 className="mb-6 text-3xl font-bold lg:text-4xl">Why Microsoft 365?</h2>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      Microsoft 365 provides everything your business needs to stay productive and connected. With professional email using your domain name, you'll make a great impression on clients and customers.
                    </p>
                    <p>
                      Access the full suite of Office applications including Word, Excel, PowerPoint, and Outlook on all your devices. Work from anywhere with cloud storage and real-time collaboration tools.
                    </p>
                    <p>
                      Enterprise-grade security keeps your data safe with advanced threat protection, spam filtering, and data loss prevention.
                    </p>
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
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Ready to get started?</h2>
            <p className="mb-8 text-lg text-muted-foreground lg:text-xl">
              Choose the Microsoft 365 plan that's right for your business.
            </p>
            <Button size="lg" className="rounded-xl px-8 text-base" asChild>
              <a href="https://www.secureserver.net/products/microsoft-365?plid=599857" target="_blank" rel="noopener noreferrer">
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
