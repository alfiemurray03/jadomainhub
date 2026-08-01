import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight, Check } from 'lucide-react';

export default function DomainTransferPage() {
  const features = [
    'Easy transfer process',
    'Free with domain renewal',
    'Keep your remaining registration time',
    'Transfer multiple domains at once',
    'Expert transfer support',
    'Secure domain transfer',
  ];

  const steps = [
    {
      step: '1',
      title: 'Unlock Your Domain',
      description: 'Unlock your domain at your current registrar and get the authorization code.',
    },
    {
      step: '2',
      title: 'Initiate Transfer',
      description: 'Enter your domain name and authorization code to start the transfer process.',
    },
    {
      step: '3',
      title: 'Confirm Transfer',
      description: 'Approve the transfer via email confirmation from your current registrar.',
    },
    {
      step: '4',
      title: 'Transfer Complete',
      description: 'Your domain will be transferred and ready to manage in your account.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <title>Domain Transfer - JA Domain Hub</title>
      <meta
        name="description"
        content="Transfer your domain to JA Domain Hub. Easy process, expert support, and keep your remaining registration time."
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
                Domain Transfer
              </h1>

              <p className="mb-12 text-xl text-muted-foreground lg:text-2xl">
                Transfer your domain to us and enjoy better service and support
              </p>

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
                        placeholder="Enter domain to transfer..."
                        className="h-14 border-0 pl-12 text-lg focus-visible:ring-0"
                      />
                    </div>
                    <Button size="lg" className="h-14 rounded-xl px-8 text-base">
                      Transfer
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
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold lg:text-5xl">Why transfer to us?</h2>
            <p className="text-lg text-muted-foreground lg:text-xl">
              Enjoy these benefits when you transfer your domain
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transfer Steps */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold lg:text-5xl">How it works</h2>
            <p className="text-lg text-muted-foreground lg:text-xl">
              Transfer your domain in four simple steps
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl space-y-8">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-primary-foreground">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="mb-2 text-2xl font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Transfer CTA */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Transferring multiple domains?</h2>
            <p className="mb-8 text-lg text-muted-foreground lg:text-xl">
              Use our bulk transfer tool to transfer multiple domains at once.
            </p>
            <Button size="lg" className="rounded-xl px-8 text-base" asChild>
              <a href="https://www.secureserver.net/domains/bulk-domain-transfer.aspx?plid=599857" target="_blank" rel="noopener noreferrer">
                Bulk Transfer Tool
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
