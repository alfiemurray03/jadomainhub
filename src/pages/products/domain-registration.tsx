import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight } from 'lucide-react';

export default function DomainRegistrationPage() {
  const features = [
    {
      title: 'Domain Forwarding and Masking',
      description:
        'Direct any domain name you own to your website. Anyone who types that domain name into their browser is taken directly to your website.',
    },
    {
      title: 'Domain Locking',
      description:
        'Domain locking prevents accidental or intentional transfers of domain ownership and stops anyone from redirecting your nameservers.',
    },
    {
      title: 'Total DNS Control',
      description:
        'Manage your domain nameserver (DNS) records and set your email, FTP, sub-domains and website location all from one control panel.',
    },
    {
      title: 'Change of Registration',
      description:
        'Assign your domain name to someone else or change the contacts for your domain online anytime.',
    },
    {
      title: 'Status Alerts',
      description:
        "Monitor the status of your domain and get instant alerts if there's been a change.",
    },
    {
      title: 'Auto Renew Protection',
      description:
        'No need to watch expiration dates to make sure you renew on time! Auto renew keeps your domains, hosting, website builders, and other products in your name and under your control.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <title>Domain Registration - JA Domain Hub</title>
      <meta
        name="description"
        content="Register your domain name with JA Domain Hub. Each domain name comes with everything you need to get online."
      />

      {/* Hero Section with Search */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-7xl">
                Domain Registration
              </h1>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mx-auto max-w-2xl"
              >
                <div className="relative">
                  <div className="flex gap-2 rounded-2xl border-2 bg-background p-2 shadow-lg transition-shadow focus-within:shadow-xl">
                    <div className="relative flex-1">
                      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Search for your domain..."
                        className="h-14 border-0 pl-12 text-lg focus-visible:ring-0"
                      />
                    </div>
                    <Button size="lg" className="h-14 rounded-xl px-8 text-base">
                      Search
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <p className="text-xl text-muted-foreground lg:text-2xl">
              Each and every domain name comes with all you need to get online.
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="border-2">
                  <CardContent className="p-8">
                    <h3 className="mb-3 text-2xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimers Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h3 className="mb-6 text-2xl font-semibold">Domain Disclaimers</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                Special savings apply only to first year of registration. You must purchase entire
                section to qualify for special savings.
              </p>
              <p>
                The final price may differ because of additional sales, fees, and promotions.
              </p>
              <p>
                Products will automatically renew until cancelled. You may turn off the auto-renewal
                feature by visiting your account.
              </p>
              <p>Change of registration may require a fee for certain domains.</p>
              <p>Pricing excludes tax. ICANN information available at Wild West Domains, LLC.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
