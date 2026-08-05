import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Clock, Shield } from 'lucide-react';

export default function SSLManagedPage() {
  return (
    <div className="min-h-screen">
      <title>Managed SSL Service - Sousa Murray Domains</title>
      <meta name="description" content="Hassle-free SSL management with automatic installation, renewal, and monitoring. Let us handle your SSL certificates." />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Managed SSL Service
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Complete SSL management with automatic installation, renewal, and 24/7 monitoring.
            </p>
            <Button size="lg" className="rounded-xl" asChild>
              <a href="https://www.secureserver.net/products/ssl-managed?plid=599857">
                Get Managed SSL
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Hassle-Free SSL Management</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Settings className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Automatic Installation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We handle the entire SSL installation process for you automatically.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Auto-Renewal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Never worry about expired certificates. We renew them automatically.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>24/7 Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Continuous monitoring ensures your SSL is always working properly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">Let Us Manage Your SSL</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Focus on your business while we handle all your SSL certificate needs.
            </p>
            <Button size="lg" className="rounded-xl" asChild>
              <a href="https://www.secureserver.net/products/ssl-managed?plid=599857">
                Get Started Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}