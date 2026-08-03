import type { ReactNode } from 'react';
import { ExternalLink, FileText, Scale, ShieldCheck, type LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

import { Card, CardContent } from '@/components/ui/card';

const storefrontTermsUrl =
  'https://store.jadomainhub.jagroupservices.co.uk/legal-agreement?id=utos';

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <title>Legal Terms and Storefront Agreements - JA Domain Hub</title>
      <meta
        name="description"
        content="Legal terms applying to the JA Domain Hub website, storefront products and Managed Websites service."
      />

      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-16 sm:py-20">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Legal framework
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Terms applying to JA Domain Hub
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              The terms that apply depend on whether you are browsing this information website,
              purchasing a product through the reseller storefront, or engaging JA Group Services
              Ltd for a separately quoted Managed Website.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: 3 August 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-[1100px] space-y-8 px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/25 bg-primary/5">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Scale className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Storefront Universal Terms of Service</h2>
                    <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">
                      Use of the JA Domain Hub storefront and purchases made through it are governed
                      by the Universal Terms of Service displayed by the storefront, together with
                      any product-specific agreements, policies and notices presented during the
                      customer journey or checkout.
                    </p>
                  </div>
                </div>
                <a
                  href={storefrontTermsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  Read the Universal Terms
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            <LegalCard icon={FileText} title="1. Identity and legal status">
              <p>
                JA Domain Hub is a trading brand operated by <strong>JA Group Services Ltd</strong>,
                a company registered in England and Wales under company number 16314179, with its
                registered office at 167–169 Great Portland Street, 5th Floor, London, W1W 5PF.
              </p>
              <p>
                JA Domain Hub is not a separate incorporated entity. References to “JA Domain Hub”
                on this website describe the branded service through which JA Group Services Ltd
                operates.
              </p>
            </LegalCard>

            <LegalCard icon={ShieldCheck} title="2. Storefront agency relationship">
              <p>
                For services offered through the Turnkey storefront at{' '}
                <strong>store.jadomainhub.jagroupservices.co.uk</strong>, the storefront agreement
                identifies <strong>JA DOMAIN HUB as an agent of Wild West Domains, LLC</strong>.
              </p>
              <p>
                The Universal Terms of Service become effective in accordance with their wording,
                including from the relevant use of the storefront or electronic acceptance,
                whichever occurs first.
              </p>
            </LegalCard>

            <LegalCard icon={Scale} title="3. Governing storefront agreements">
              <p>
                Storefront products are governed by the storefront Universal Terms of Service and
                any agreement applying to the selected product, including terms concerning domain
                registration, hosting, email, security, payment, renewal, cancellation, refund,
                acceptable use and technical service conditions.
              </p>
              <p>
                Those storefront agreements take precedence for the supply and administration of
                products purchased through the storefront.
              </p>
            </LegalCard>

            <LegalCard icon={FileText} title="4. Domain registrar disclosure">
              <p>
                Wild West Domains, LLC is the registrar of record for domain-name registration
                services supplied through the reseller programme, except where another affiliated
                ICANN-accredited registrar is identified for a particular registration.
              </p>
              <p>
                JA Domain Hub is not itself a registry or an ICANN-accredited registrar and must not
                be represented as one.
              </p>
            </LegalCard>

            <LegalCard icon={ShieldCheck} title="5. Scope of JA Domain Hub’s authority">
              <p>
                JA Domain Hub may present, market and facilitate access to the products made
                available through the reseller storefront within the scope of its agency and
                reseller arrangements.
              </p>
              <p>
                JA Domain Hub cannot vary the provider’s legal agreements, registry requirements,
                product rules or technical decisions, and does not promise rights or service levels
                beyond those contained in the applicable agreements.
              </p>
            </LegalCard>

            <LegalCard icon={FileText} title="6. This information website">
              <p>
                The website at <strong>jadomainhub.jagroupservices.co.uk</strong> allows customers to
                browse information about available products and services before continuing to the
                storefront.
              </p>
              <p>
                Product availability, current pricing, checkout, account administration and the
                final product agreements are provided through the storefront and its associated
                provider systems.
              </p>
            </LegalCard>

            <LegalCard icon={Scale} title="7. Managed Websites">
              <p>
                Managed Websites is a separate service delivered directly by JA Group Services Ltd.
                It is not a self-service Turnkey storefront product.
              </p>
              <p>
                The scope, price, delivery arrangements, ownership position, ongoing management and
                payment terms for a Managed Website will be set out in a written quotation or
                service agreement. Once agreed, payment may be collected through a secure Stripe
                checkout link supplied by JA Group Services Ltd.
              </p>
            </LegalCard>

            <LegalCard icon={ShieldCheck} title="8. Data protection and support">
              <p>
                Personal data collected through this information website, enquiries, support or a
                directly delivered Managed Website service is handled in accordance with the JA
                Domain Hub Privacy Policy and applicable data-protection law.
              </p>
              <p>
                The storefront and its providers may process information under their own privacy
                notices and operational arrangements. Customers should review the notices displayed
                by the storefront when creating an account or purchasing a product.
              </p>
            </LegalCard>
          </div>

          <Card>
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold">9. Which terms take priority?</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  For a product purchased through the Turnkey storefront, the storefront Universal
                  Terms of Service and applicable product agreements govern that product and take
                  priority over any inconsistent summary or description on this information website.
                </p>
                <p>
                  For a Managed Website or another service expressly supplied directly by JA Group
                  Services Ltd, the separate quotation, order confirmation or service agreement
                  issued by JA Group Services Ltd governs that engagement.
                </p>
                <p>
                  Nothing on this page excludes or restricts any liability or statutory right that
                  cannot lawfully be excluded or restricted.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/40">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold">10. Contact and complaints</h2>
              <div className="mt-4 space-y-3 leading-relaxed text-muted-foreground">
                <p>
                  General JA Domain Hub enquiries may be sent to{' '}
                  <a className="font-semibold text-primary hover:underline" href="mailto:jadomainhub@jagroupservices.co.uk">
                    jadomainhub@jagroupservices.co.uk
                  </a>
                  .
                </p>
                <p>
                  Formal complaints concerning JA Group Services Ltd or the support it has provided
                  may be sent to{' '}
                  <a className="font-semibold text-primary hover:underline" href="mailto:complaints@jagroupservices.co.uk">
                    complaints@jagroupservices.co.uk
                  </a>
                  . Provider-level product decisions, account restrictions, refunds or technical
                  determinations may need to be addressed through the support route identified by the
                  storefront or applicable product agreement.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

function LegalCard({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 sm:p-7">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h2 className="pt-1 text-xl font-bold">{title}</h2>
        </div>
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
