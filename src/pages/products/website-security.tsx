import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Eye } from 'lucide-react';

export default function WebsiteSecurityPage() {
  return (
    <div className="min-h-screen">
      <title>Website Security - JA Domain Hub</title>
      <meta name="description" content="Protect your website with comprehensive security solutions including malware scanning, firewall protection, and security monitoring." />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Website Security
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Comprehensive protection for your website with advanced security features.
            </p>
            <Button size="lg" className="rounded-xl" asChild>
              <a href="https://www.secureserver.net/products/website-security?plid=599857">
                Secure Your Site
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Complete Security Protection</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Shield className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Malware Scanning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Daily automated scans detect and remove malware before it can harm your site.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Lock className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Firewall Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced firewall blocks malicious traffic and prevents attacks.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Eye className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Security Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    24/7 monitoring alerts you to potential security threats immediately.
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
            <h2 className="mb-6 text-3xl font-bold">Protect Your Website Today</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Don't wait for a security breach. Secure your website now.
            </p>
            <Button size="lg" className="rounded-xl" asChild>
              <a href="https://www.secureserver.net/products/website-security?plid=599857">
                Get Started Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}