import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BulkRegistrationPage() {
  return (
    <div className="min-h-screen">
      <title>Bulk Domain Registration - JA Domain Hub</title>
      <meta name="description" content="Register multiple domains at once with our bulk domain registration service. Save time and manage your domain portfolio efficiently." />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Bulk Domain Registration
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Register multiple domains at once and save time managing your domain portfolio.
            </p>
            <Button size="lg" className="rounded-xl" asChild>
              <a href="https://www.secureserver.net/domains/bulk-domain-search?plid=599857">
                Start Bulk Registration
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Why Choose Bulk Registration?</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Time Saving</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Register up to 500 domains in a single transaction instead of one at a time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Suitable for businesses, investors, and agencies managing multiple domains.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Competitive Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get the same great rates on bulk registrations as individual domains.
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
            <h2 className="mb-6 text-3xl font-bold">Ready to Register Multiple Domains?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Start your bulk domain registration today and streamline your domain management.
            </p>
            <Button size="lg" className="rounded-xl" asChild>
              <a href="https://www.secureserver.net/domains/bulk-domain-search?plid=599857">
                Get Started Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}