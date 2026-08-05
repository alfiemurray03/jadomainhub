import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, Clock, RotateCcw } from 'lucide-react';

export default function WebsiteBackupPage() {
  return (
    <div className="min-h-screen">
      <title>Website Backup - Sousa Murray Domains</title>
      <meta name="description" content="Protect your website with automatic daily backups. Restore your site quickly in case of data loss or security incidents." />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Website Backup
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Automatic daily backups to protect your website from data loss and security threats.
            </p>
            <Button size="lg" className="rounded-xl" asChild>
              <a href="https://www.secureserver.net/products/website-backup?plid=599857">
                Start Backing Up
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold">Complete Backup Protection</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Database className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>Automatic Backups</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Daily automated backups of your entire website, files, and databases.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>30-Day Retention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access up to 30 days of backup history to restore from any point.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <RotateCcw className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>One-Click Restore</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Quickly restore your website to any previous backup with one click.
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
              Don't risk losing your website. Start automatic backups now.
            </p>
            <Button size="lg" className="rounded-xl" asChild>
              <a href="https://www.secureserver.net/products/website-backup?plid=599857">
                Get Started Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}