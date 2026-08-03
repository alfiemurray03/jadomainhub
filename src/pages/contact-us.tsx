import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, Clock, ExternalLink, Headphones, Send, CheckCircle, AlertCircle, ShieldCheck, Building2 } from 'lucide-react';
import { Helmet } from '@dr.pogodin/react-helmet';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

function initialEnquiryType(): string {
  if (typeof window === 'undefined') return '';
  return new URLSearchParams(window.location.search).get('enquiry') === 'managed-website'
    ? 'Managed website'
    : '';
}

export default function ContactUsPage() {
  const site = 'https://jadomainhub.jagroupservices.co.uk';
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [enquiryType, setEnquiryType] = useState(initialEnquiryType);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const isManagedWebsiteEnquiry = enquiryType === 'Managed website';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (honeypotRef.current?.value) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get('name') as string).trim();
    const email = (data.get('email') as string).trim();
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
              __gd_contact_form_title: isManagedWebsiteEnquiry
                ? 'Managed Website Enquiry — JA Domain Hub'
                : 'Contact Us — JA Domain Hub',
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
        <title>{isManagedWebsiteEnquiry ? 'Request a Managed Website Quotation' : 'Contact JA Domain Hub Support'}</title>
        <meta
          name="description"
          content={
            isManagedWebsiteEnquiry
              ? 'Tell JA Group Services Ltd about your Managed Website requirements and request a tailored quotation.'
              : 'Contact JA Group Services Ltd, the first-line customer support provider for JA Domain Hub products and services.'
          }
        />
        <link rel="canonical" href={`${site}/contact-us`} />
        <meta
          property="og:title"
          content={isManagedWebsiteEnquiry ? 'Request a Managed Website Quotation' : 'Contact JA Domain Hub Support'}
        />
        <meta
          property="og:description"
          content={
            isManagedWebsiteEnquiry
              ? 'Start a tailored Managed Website enquiry with JA Group Services Ltd.'
              : 'JA Group Services Ltd is the first point of contact for JA Domain Hub customer support.'
          }
        />
        <meta property="og:url" content={`${site}/contact-us`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="pb-12 pt-12 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mx-auto mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-2 text-xs font-semibold leading-relaxed text-primary sm:px-4 sm:text-sm">
                {isManagedWebsiteEnquiry ? <Building2 className="h-4 w-4 shrink-0" /> : <Headphones className="h-4 w-4 shrink-0" />}
                <span>{isManagedWebsiteEnquiry
                  ? 'Managed Websites by JA Group Services Ltd'
                  : 'First-line support from JA Group Services Ltd'}</span>
              </div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">
                {isManagedWebsiteEnquiry ? 'Request a Managed Website quotation' : 'Contact Support'}
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
                {isManagedWebsiteEnquiry
                  ? 'Tell us about your organisation, the website you need and your preferred timescale. We will review the project and explain the recommended next step.'
                  : 'Contact us first for help with JA Domain Hub products and services. We will investigate, assist and coordinate provider escalation where required.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-14 sm:pb-20">
        <div className="container mx-auto">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-5 lg:gap-10">
            <motion.div
              className="min-w-0 lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2">
                <CardContent className="p-5 sm:p-8">
                  <h2 className="mb-2 text-xl font-bold sm:text-2xl">
                    {isManagedWebsiteEnquiry ? 'Tell us about your website project' : 'Send a Support Request'}
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {isManagedWebsiteEnquiry
                      ? 'Include the purpose of the website, expected pages, important features, existing domain or website, available content and any target launch date.'
                      : 'Tell JA Group Services what is happening. We will review the issue and manage the next step with you.'}
                  </p>

                  {status === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center gap-4 rounded-2xl bg-primary/5 px-4 py-10 text-center sm:py-12"
                    >
                      <CheckCircle className="h-12 w-12 text-primary" />
                      <div>
                        <p className="text-lg font-semibold">
                          {isManagedWebsiteEnquiry ? 'Website enquiry sent' : 'Support request sent'}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          JA Group Services will review your message and respond during office hours (Mon–Fri, 9am–5pm GMT).
                        </p>
                      </div>
                      <Button variant="outline" onClick={() => setStatus('idle')} className="min-h-11 w-full sm:w-auto">
                        Send another message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
                          <Input id="name" name="name" placeholder="Your name" autoComplete="name" className="min-h-11" />
                        </div>
                        <div className="space-y-1.5">
                          <Label htmlFor="email">
                            Email address <span className="text-destructive">*</span>
                          </Label>
                          <Input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" className="min-h-11" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="enquiry-type">Enquiry type</Label>
                        <select
                          id="enquiry-type"
                          name="enquiry-type"
                          value={enquiryType}
                          onChange={(event) => setEnquiryType(event.target.value)}
                          className="flex min-h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:text-sm"
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
                          placeholder={
                            isManagedWebsiteEnquiry
                              ? 'Tell us about the organisation, website, important features, existing systems and preferred launch date...'
                              : 'Tell us what is happening and what help you need...'
                          }
                          rows={isManagedWebsiteEnquiry ? 8 : 5}
                          required
                          className="min-h-36 resize-y"
                        />
                      </div>

                      {status === 'error' && (
                        <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                          <span>{errorMsg}</span>
                        </div>
                      )}

                      <Button type="submit" className="min-h-12 w-full" disabled={status === 'submitting'} size="lg">
                        {status === 'submitting' ? (
                          <>
                            <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4 shrink-0" />
                            {isManagedWebsiteEnquiry ? 'Send Website Enquiry' : 'Send Support Request'}
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            <div className="min-w-0 space-y-6 lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="border-2 border-primary/25 bg-primary/5">
                  <CardContent className="p-5 sm:p-6">
                    <div className="mb-4 inline-flex rounded-xl bg-primary p-3 text-primary-foreground">
                      <Headphones className="h-5 w-5" />
                    </div>
                    <h3 className="mb-1 text-lg font-bold">JA Group Services — First-line Support</h3>
                    <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                      Your first point of contact for service, domain, hosting, billing, account and Managed Website enquiries.
                    </p>
                    <div className="space-y-1">
                      <a href="tel:02038342790" className="flex min-h-11 items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                        <Phone className="h-4 w-4 shrink-0 text-primary" />
                        020 3834 2790
                      </a>
                      <a href="mailto:jadomainhub@jagroupservices.co.uk" className="flex min-h-11 items-center gap-3 break-all text-sm text-muted-foreground transition-colors hover:text-foreground">
                        <Mail className="h-4 w-4 shrink-0 text-primary" />
                        <span>jadomainhub@jagroupservices.co.uk</span>
                      </a>
                      <div className="flex min-h-11 items-center gap-3 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 shrink-0 text-primary" />
                        Mon – Fri, 9:00 AM – 5:00 PM (GMT)
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="border-2">
                  <CardContent className="p-5 sm:p-6">
                    <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-1 text-lg font-bold">Provider Escalation &amp; Help Centre</h3>
                    <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                      JA Group Services will coordinate or direct provider escalation where underlying platform action is required. The provider Help Centre is also available for urgent out-of-hours technical assistance.
                    </p>
                    <div className="space-y-1">
                      <a
                        href="https://www.secureserver.net/help?pl_id=599857&prog_id=599857"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-11 items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ExternalLink className="h-4 w-4 shrink-0 text-primary" />
                        Provider Help Centre (24/7)
                      </a>
                      <div className="flex min-h-11 items-center gap-3 text-sm text-muted-foreground">
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

      <section className="bg-muted/30 py-10 sm:py-14">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
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
