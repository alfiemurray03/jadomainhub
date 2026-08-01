import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, TrendingUp, Target } from 'lucide-react';

export default function SEOPage() {
  return (
    <div className="min-h-screen">
      <title>SEO Services - JA Domain Hub</title>
      <meta name="description" content="Improve your search engine rankings and drive more organic traffic with professional SEO services." />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              SEO Services
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Boost your search rankings and drive more organic traffic to your website.
            </p>
            <Button size="lg" className="rounded-xl" asChild>
              <a href="https://www.secureserver.net/products/seo?plid=599857">
                Improve Your SEO
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Professional SEO Solutions</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Search className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Keyword Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Identify relevant keywords to target for your business and industry.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Ranking Improvement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Optimise your website to rank higher in search engine results.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Performance Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monitor your SEO performance with detailed analytics and reports.
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
            <h2 className="mb-6 text-3xl font-bold">Start Ranking Higher Today</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Get found by more customers with professional SEO services.
            </p>
            <Button size="lg" className="rounded-xl" asChild>
              <a href="https://www.secureserver.net/products/seo?plid=599857">
                Get Started Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}