import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Server, Gauge, Lock, Settings, ArrowRight } from 'lucide-react';

export default function VPSHostingPage() {
  const features = [
    {
      icon: Server,
      title: 'Dedicated Resources',
      description: 'Dedicated CPU, RAM, and storage exclusively for your applications',
    },
    {
      icon: Gauge,
      title: 'High Performance',
      description: 'Fast SSD storage and powerful processors for demanding workloads',
    },
    {
      icon: Lock,
      title: 'Enhanced Security',
      description: 'Isolated environment with root access and custom security configurations',
    },
    {
      icon: Settings,
      title: 'Full Control',
      description: 'Complete server control with root access and custom software installation',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <title>VPS Hosting - Sousa Murray Domains</title>
      <meta
        name="description"
        content="Virtual Private Server hosting with dedicated resources, high performance, and full control. Suitable for growing websites and applications."
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
                VPS Hosting
              </h1>
              <p className="mb-8 text-xl text-muted-foreground lg:text-2xl">
                Virtual Private Server hosting with dedicated resources and full control
              </p>
              <Button size="lg" className="rounded-xl px-8 text-base" asChild>
                <a href="https://www.secureserver.net/hosting/vps-hosting?plid=599857" target="_blank" rel="noopener noreferrer">
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
            <h2 className="mb-4 text-4xl font-bold lg:text-5xl">Power and flexibility</h2>
            <p className="text-lg text-muted-foreground lg:text-xl">
              Enterprise-grade hosting for demanding applications
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

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold lg:text-5xl">Suitable for</h2>
            <p className="text-lg text-muted-foreground lg:text-xl">
              VPS hosting is ideal for these scenarios
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                'High-traffic websites',
                'E-commerce platforms',
                'Custom applications',
                'Development environments',
                'Database servers',
                'Game servers',
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                >
                  <Card className="border-2">
                    <CardContent className="p-6">
                      <p className="text-lg font-medium">{useCase}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Ready for more power?</h2>
            <p className="mb-8 text-lg text-muted-foreground lg:text-xl">
              Upgrade to VPS hosting and get the resources you need.
            </p>
            <Button size="lg" className="rounded-xl px-8 text-base" asChild>
              <a href="https://www.secureserver.net/hosting/vps-hosting?plid=599857" target="_blank" rel="noopener noreferrer">
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
