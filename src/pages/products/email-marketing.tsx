import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Users, TrendingUp } from 'lucide-react';

export default function EmailMarketingPage() {
  return (
    <div className="min-h-screen">
      <title>Email Marketing - JA Domain Hub</title>
      <meta name="description" content="Grow your business with professional email marketing. Create campaigns, build your audience, and track results." />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Email Marketing
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Create professional email campaigns that engage your audience and drive results.
            </p>
            <Button size="lg" className="rounded-xl" asChild>
              <a href="https://www.secureserver.net/products/email-marketing?plid=599857">
                Start Marketing
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Powerful Email Marketing Tools</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Mail className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Professional Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Choose from hundreds of professionally designed email templates.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>List Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Easily manage your subscriber lists and segment your audience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Analytics & Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Track opens, clicks, and conversions with detailed analytics.
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
            <h2 className="mb-6 text-3xl font-bold">Start Your Email Campaign Today</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Connect with your customers and grow your business with email marketing.
            </p>
            <Button size="lg" className="rounded-xl" asChild>
              <a href="https://www.secureserver.net/products/email-marketing?plid=599857">
                Get Started Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}