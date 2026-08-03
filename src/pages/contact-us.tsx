import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, Clock, ExternalLink, Headphones, Send, CheckCircle, AlertCircle, ShieldCheck } from 'lucide-react';
import { Helmet } from '@dr.pogodin/react-helmet';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactUsPage() {
  const site = 'https://jadomainhub.jagroupservices.co.uk';
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const honeypotRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot check — if filled, silently do nothing
    if (honeypotRef.current?.value) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get('name') as string).trim();
    const email = (data.get('email') as string).trim();
    const enquiryType = data.get('enquiry-type') as string;
    const message = (data.get('message') as string).trim();

    if (!email || !message) {
      setErrorMsg('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact/contact-us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversation: {
            messages_attributes: [{ body: message }],
            data: {
              __gd_contact_form_title: 'Contact Us — JA Domain Hub',
              'Enquiry type': enquiryType,
            },
          },
          user: { email, name },
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error((json as { error?: string }).error || 'Submission failed.');
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <title>Contact JA Domain Hub Support</title>
        <meta name="description" content="Contact JA Group Services Ltd, the first-line customer support provider for JA Domain Hub products and services." />
        <link rel="canonical" href={`${site}/contact-us`} />
        <meta property="og:title" content="Contact JA Domain Hub Support" />
        <meta property="og:description" content="JA Group Services Ltd is the first point of contact for JA Domain Hub customer support." />
        <meta property="og:url" content={`${site}/contact-us`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Headphones className="h-4 w-4" />
                First-line support from JA Group Services Ltd
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-6xl">Contact Support</h1>
              <p className="text-lg text-muted-foreground lg:text-xl">
                Contact us first for help with JA Domain Hub products and services. We will investigate, assist and coordinate provider escalation where required.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5">

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="mb-2 text-2xl font-bold">Send a Support Request</h2>
                  <p className="mb-6 text-sm text-muted-foreground">
                    Tell JA Group Services what is happening. We will review the issue and manage the next step with you.
                  </p>

                  {status === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center gap-4 rounded-2xl bg-primary/5 py-12 text-center"
                    >
                      <CheckCircle className="h-12 w-12 text-primary" />
                      <div>
                        <p className="text-lg font-semibold">Support request sent</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Thanks for getting in touch. JA Group Services will respond during office hours (Mon–Fri, 9am–5pm GMT).
                        </p>
                      </div>
                      <Button variant="outline" onClick={() => setStatus('idle')}>
                        Send another message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      {/* Honeypot */}
                      <input
                        ref={honeypotRef}
                        type="text"
                        name="_gotcha"
                        tabIndex={-1}
                        autoComplete="off"
                        style={{ position: 'absolute', left: '-9999px' }}
                        aria-hidden="true"
                      />

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-1.5">
                          <Label htmlFor="name">Full name</Label>
                          <Input id="name" name="name" placeholder="Your name" autoComplete="name" />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="email">
                            Email address <span className="text-destructive">*</span>
                          </Label>
                          <Input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="enquiry-type">Enquiry type</Label>
                        <select
                          id="enquiry-type"
                          name="enquiry-type"
                          defaultValue=""
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="" disabled>Select an enquiry type</option>
                          <option value="Domain registration">Domain registration</option>
                          <option value="Domain transfer">Domain transfer</option>
                          <option value="Web hosting">Web hosting</option>
                          <option value="Managed website">Managed website</option>
                          <option value="Business email">Business email</option>
                          <option value="SSL certificate">SSL certificate</option>
                          <option value="Billing or account">Billing or account</option>
                          <option value="General enquiry">General enquiry</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="message">
                          Message <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us what is happening and what help you need..."
                          rows={5}
                          required
                          className="resize-none"
                        />
                      </div>

                      {status === 'error' && (
                        <div className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                          <AlertCircle className="h-4 w-4 shrink-0" />
                          {errorMsg}
                        </div>
                      )}

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={status === 'submitting'}
                        size="lg"
                      >
                        {status === 'submitting' ? (
                          <>
                            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Support Request
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-6 lg:col-span-2">
              {/* JA Group Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="border-2 border-primary/25 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-xl bg-primary p-3 text-primary-foreground">
                      <Headphones className="h-5 w-5" />
                    </div>
                    <h3 className="mb-1 text-lg font-bold">JA Group Services — First-line Support</h3>
                    <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                      Your first point of contact for service, domain, hosting, billing, account and Managed Website enquiries.
                    </p>
                    <div className="space-y-3">
                      <a href="tel:02038342790" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                        <Phone className="h-4 w-4 shrink-0 text-primary" />
                        020 3834 2790
                      </a>
                      <a href="mailto:jadomainhub@jagroupservices.co.uk" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                        <Mail className="h-4 w-4 shrink-0 text-primary" />
                        jadomainhub@jagroupservices.co.uk
                      </a>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 shrink-0 text-primary" />
                        Mon – Fri, 9:00 AM – 5:00 PM (GMT)
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Provider support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-1 text-lg font-bold">Provider Escalation &amp; Help Centre</h3>
                    <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                      JA Group Services will coordinate or direct provider escalation where underlying platform action is required. The provider Help Centre is also available for urgent out-of-hours technical assistance.
                    </p>
                    <div className="space-y-3">
                      <a
                        href="https://www.secureserver.net/help?pl_id=599857&prog_id=599857"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ExternalLink className="h-4 w-4 shrink-0 text-primary" />
                        Provider Help Centre (24/7)
                      </a>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 shrink-0 text-primary" />
                        Available 24 hours, 7 days a week
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Outside hours note */}
      <section className="bg-muted/30 py-14">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-muted-foreground">
              JA Group Services remains your normal first point of contact. Outside our office hours, customers needing immediate provider-level technical assistance may also use the{' '}
              <a
                href="https://www.secureserver.net/help?pl_id=599857&prog_id=599857"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                provider Help Centre
              </a>{' '}
              which is available 24/7.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
