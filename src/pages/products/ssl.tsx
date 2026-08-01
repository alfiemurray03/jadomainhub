import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Shield, Check } from 'lucide-react';

export default function SSLPage() {
  return (
    <div className="min-h-screen">
      <title>SSL Certificates - JA Domain Hub</title>
      <meta name="description" content="Secure your website with SSL certificates. Protect customer data, boost SEO rankings, and build trust with HTTPS encryption." />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              SSL Certificates
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Secure your website with industry-standard SSL encryption and build customer trust.
            </p>
            <Button size="lg" className="rounded-xl" asChild>
              <a href="https://www.secureserver.net/products/ssl?plid=599857">
                Get SSL Certificate
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Why You Need SSL</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Lock className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Data Encryption</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Protect sensitive customer information with industry-standard encryption.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Build Trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Display the padlock icon and HTTPS to show visitors your site is secure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Check className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Boost SEO</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Google ranks HTTPS sites higher in search results.
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
            <h2 className="mb-6 text-3xl font-bold">Secure Your Website Today</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Get your SSL certificate and start protecting your visitors immediately.
            </p>
            <Button size="lg" className="rounded-xl" asChild>
              <a href="https://www.secureserver.net/products/ssl?plid=599857">
                Get Started Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}