import { motion } from 'motion/react';
import {
  ArrowRight,
  Globe,
  Server,
  Layout,
  Mail,
  User,
  ShieldCheck,
  Zap,
  HeadphonesIcon,
  BadgeCheck,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const quickLinks = [
  {
    title: 'Domain Transfer',
    description: 'Move your domains to us easily',
    icon: Globe,
    href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/domain-transfer',
  },
  {
    title: 'Web Hosting',
    description: 'Fast & reliable cPanel hosting',
    icon: Server,
    href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/cpanel',
  },
  {
    title: 'Website Builder',
    description: 'Create your website with ease',
    icon: Layout,
    href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/website-builder',
  },
  {
    title: 'Business Email',
    description: 'Professional Microsoft 365 email',
    icon: Mail,
    href: 'https://shop.jadomainhub.jagroupservices.co.uk/products/microsoft-365',
  },
  {
    title: 'My Account',
    description: 'Manage all your services',
    icon: User,
    href: 'https://account.secureserver.net/products?plid=599857',
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: 'GoDaddy Reseller',
    description: 'JA Domain Hub operates as a GoDaddy Reseller, providing access to domain, hosting, email and SSL services through GoDaddy reseller infrastructure.',
  },
  {
    icon: Zap,
    title: 'Instant Activation',
    description: 'Domains and hosting go live fast so you can get online without delay.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Platform Support',
    description: 'Round-the-clock technical support available through the GoDaddy reseller platform whenever you need it.',
  },
  {
    icon: BadgeCheck,
    title: 'UK-Based Business',
    description: 'Operated by JA Group Services Ltd, registered in England and Wales. A UK business you can deal with directly.',
  },
];

const tlds = ['.co.uk', '.com', '.uk', '.net', '.org', '.io', '.store', '.online', '.shop', '.tech'];

import { Helmet } from '@dr.pogodin/react-helmet';

export default function HomePage() {
  const site = 'https://jadomainhub.jagroupservices.co.uk';
  return (
    <>
      <Helmet>
        <title>JA Domain Hub — Domain Registration &amp; Web Services</title>
        <meta name="description" content="JA Domain Hub is a GoDaddy Reseller operated by JA Group Services Ltd. Register domains, get web hosting, business email and SSL — UK-based support." />
        <link rel="canonical" href={site} />
        <meta property="og:title" content="JA Domain Hub — Domain Registration &amp; Web Services" />
        <meta property="og:description" content="JA Domain Hub is a GoDaddy Reseller operated by JA Group Services Ltd. Register domains, get web hosting, business email and SSL — UK-based support." />
        <meta property="og:url" content={site} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url('/airo-assets/images/pages/home/hero')` }}
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-secondary/30" />

        {/* Animated glow orbs */}
        <div className="absolute left-1/4 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />

        <div className="container relative mx-auto px-4 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            GoDaddy Reseller &middot; UK Based &middot; Operated by JA Group Services Ltd
          </motion.div>

          {/* Headline */}
          <h1 className="sr-only">JA Domain Hub — Domain Registration &amp; Web Services</h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-white lg:text-7xl"
            aria-hidden="true"
          >
            Your Domain.
            <br />
            <span className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
              Your Brand.
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-white/90 lg:text-xl"
          >
            JA Domain Hub is a service operated by JA Group Services Ltd. Register, transfer and manage domain names through our GoDaddy reseller platform — backed by enterprise infrastructure and UK-based support.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button
              size="lg"
              className="h-14 rounded-2xl bg-white px-10 text-base font-semibold text-primary shadow-2xl transition-transform hover:scale-105 hover:bg-white/95 hover:text-primary"
              asChild
            >
              <a href="https://shop.jadomainhub.jagroupservices.co.uk/products/domain-registration" target="_blank" rel="noopener noreferrer">
                Search Domains
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-5 text-xs text-white/60"
          >
            Searches and purchases are completed on shop.jadomainhub.jagroupservices.co.uk
          </motion.p>
        </div>

        {/* Scrolling TLD ticker */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="border-t border-white/10 bg-black/40 backdrop-blur-sm py-3 overflow-hidden">
            <div className="flex whitespace-nowrap" style={{ animation: 'ticker 18s linear infinite' }}>
              {[...tlds, ...tlds, ...tlds, ...tlds].map((tld, i) => (
                <span key={i} className="mx-6 text-sm font-medium text-white/50 tracking-widest">
                  {tld}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK ACCESS ── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Services</p>
            <h2 className="mb-3 text-3xl font-bold lg:text-4xl">Quick Access</h2>
            <p className="text-muted-foreground">Jump straight to what you need</p>
          </motion.div>

          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="group flex flex-col items-center rounded-2xl border-2 border-border bg-card p-6 text-center shadow-sm transition-all duration-200 hover:border-primary hover:shadow-xl"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="mb-1 font-semibold">{link.title}</h3>
                  <p className="text-xs text-muted-foreground">{link.description}</p>
                  <ChevronRight className="mt-3 h-4 w-4 text-muted-foreground/50 transition-colors group-hover:text-primary" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="relative overflow-hidden bg-muted/40 py-24">
        {/* Decorative background shape */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Why Us</p>
            <h2 className="mb-3 text-3xl font-bold lg:text-4xl">Why Choose JA Domain Hub?</h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              We combine the power of world-class infrastructure with a personal, UK-based service.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-semibold">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative overflow-hidden bg-primary py-24">
        {/* Layered background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/60" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-white/5 to-transparent" />

        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/60">Get Started Today</p>
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-5xl">
              Ready to Get Online?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-white/70 text-lg">
              Find your perfect domain name and get your business online today.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="h-14 rounded-2xl bg-white px-10 text-base font-semibold text-primary shadow-xl transition-transform hover:scale-105 hover:bg-white/95 hover:text-primary"
                asChild
              >
                <a href="https://shop.jadomainhub.jagroupservices.co.uk/products/domain-registration" target="_blank" rel="noopener noreferrer">
                  Find Your Domain
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-2xl border-white/30 bg-white/10 px-10 text-base font-semibold text-white backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white/20 hover:text-white"
                asChild
              >
                <a href="/contact-us">
                  Contact Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
