import { Helmet } from '@dr.pogodin/react-helmet';
import type { ReactNode } from 'react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ExternalLink,
  FileText,
  Scale,
  ShieldCheck,
  Store,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'motion/react';

import { Button } from '@/components/ui/button';

const siteUrl = 'https://sousamurraydomains.jagroupservices.co.uk';
const storefrontUrl = 'https://store.jadomainhub.jagroupservices.co.uk';
const storefrontTermsUrl = `${storefrontUrl}/legal-agreement?id=utos`;
const accountUrl = 'https://account.secureserver.net/products?plid=599857';
const helpUrl = 'https://www.secureserver.net/help?pl_id=599857&prog_id=599857';

const contents = [
  ['introduction', 'Introduction and acceptance'],
  ['definitions', 'Definitions'],
  ['scope', 'Scope and order of precedence'],
  ['eligibility', 'Eligibility and authority'],
  ['information-website', 'Use of the information website'],
  ['product-information', 'Product information and availability'],
  ['storefront-services', 'Storefront services and provider relationship'],
  ['domain-services', 'Domain registration and transfer services'],
  ['accounts-security', 'Accounts and security'],
  ['storefront-orders', 'Storefront orders and contract formation'],
  ['fees-payment', 'Fees, taxes and payment'],
  ['renewals-expiry', 'Subscriptions, renewals and expiry'],
  ['cancellation-refunds', 'Cancellation and refunds'],
  ['managed-websites', 'Sousa Murray Sites status'],
  ['managed-orders', 'Existing managed website arrangements'],
  ['customer-responsibilities', 'Customer responsibilities'],
  ['delivery-approval', 'Delivery, revisions and approval'],
  ['intellectual-property', 'Content and intellectual property'],
  ['third-party-services', 'Third-party services and infrastructure'],
  ['maintenance-support', 'Maintenance and support'],
  ['acceptable-use', 'Acceptable use'],
  ['suspension-termination', 'Suspension and termination'],
  ['data-confidentiality', 'Data protection and confidentiality'],
  ['warranties', 'Warranties and service availability'],
  ['liability', 'Liability'],
  ['customer-liability', 'Customer responsibility for claims'],
  ['force-majeure', 'Events outside our control'],
  ['changes', 'Changes to these Terms'],
  ['complaints-notices', 'Complaints and notices'],
  ['general', 'General provisions'],
  ['governing-law', 'Governing law and jurisdiction'],
] as const;

export default function TermsOfServicePage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Sousa Murray Domains</title>
        <meta
          name="description"
          content="Terms governing the Sousa Murray Domains information website and authorised reseller storefront services. Sousa Murray Sites has not yet launched."
        />
        <link rel="canonical" href={`${siteUrl}/terms-of-service`} />
        <meta property="og:title" content="Terms of Service | Sousa Murray Domains" />
        <meta
          property="og:description"
          content="The contractual terms applying to Sousa Murray Domains website use and authorised reseller products."
        />
        <meta property="og:url" content={`${siteUrl}/terms-of-service`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#06152E] via-[#0A1F44] to-[#173C88] py-14 sm:py-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-28 -top-36 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
            <div className="absolute -bottom-44 left-1/3 h-80 w-80 rounded-full bg-cyan-300/5 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-100 backdrop-blur-sm">
                <Scale className="h-4 w-4" />
                Updated 5 August 2026
              </div>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Terms of Service
              </h1>
              <p className="mt-5 max-w-4xl text-base leading-relaxed text-white/80 sm:text-lg">
                These Terms govern use of the Sousa Murray Domains information website and the customer-support activities provided by JA Group Services Ltd. Products purchased through the authorised reseller storefront are also governed by the storefront Universal Terms of Service and the agreement applying to the selected product. Sousa Murray Sites has not yet launched and is not offered for general ordering under these Terms.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-white font-bold text-[#0A1F44] hover:bg-blue-50">
                  <a href="#contents">
                    Read these Terms
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/35 bg-white/5 font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  <a href={storefrontTermsUrl} target="_blank" rel="noopener noreferrer">
                    Storefront Universal Terms
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-border bg-card py-7">
          <div className="mx-auto grid max-w-[1440px] gap-4 px-4 sm:grid-cols-2 sm:px-6 xl:grid-cols-4 lg:px-8">
            <SummaryCard icon={Building2} label="Legal operator" value="JA Group Services Ltd" />
            <SummaryCard icon={Store} label="Storefront model" value="Agent of Wild West Domains, LLC" />
            <SummaryCard icon={FileText} label="Storefront products" value="Provider terms also apply" />
            <SummaryCard icon={Wrench} label="Forthcoming brand" value="Sousa Murray Sites — not yet launched" />
          </div>
        </section>

        <section className="bg-secondary/45 py-10 sm:py-12">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-primary/25 bg-card p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold sm:text-2xl">Important contractual distinction</h2>
                    <p className="mt-2 max-w-4xl leading-relaxed text-muted-foreground">
                      Sousa Murray Domains provides product information and customer assistance for authorised reseller services. Domain, hosting, email, security, marketing and self-service website products purchased through the storefront are supplied under the storefront provider agreements. Sousa Murray Sites is a separate forthcoming brand and has not yet launched. Those provider
                      agreements control the product, account, payment, renewal and technical terms
                      where they apply.
                    </p>
                  </div>
                </div>
                <a
                  href={storefrontTermsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-bold text-foreground transition-colors hover:bg-muted"
                >
                  Open provider terms
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <main className="mx-auto grid max-w-[1440px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[290px_minmax(0,1fr)] lg:px-8 lg:py-16">
          <aside id="contents" className="scroll-mt-28">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm lg:sticky lg:top-24">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Contents</p>
              <nav className="mt-4 max-h-[calc(100vh-9rem)] space-y-1 overflow-y-auto pr-1" aria-label="Terms contents">
                {contents.map(([id, title], index) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="flex gap-2 rounded-lg px-2.5 py-2 text-xs leading-relaxed text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <span className="w-6 shrink-0 font-bold text-primary">{index + 1}.</span>
                    <span>{title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="border-b border-border bg-muted/35 px-6 py-6 sm:px-8 lg:px-10">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Please read these Terms carefully before using the website, placing an order or
                asking JA Group Services Ltd to begin work. You should also retain a copy of the
                quotation, order confirmation and provider terms applying to any service you buy.
              </p>
            </div>

            <div className="px-6 sm:px-8 lg:px-10">
              <TermsSection number="1" id="introduction" title="Introduction and acceptance">
                <p>
                  These Terms of Service (the <strong>Terms</strong>) are issued by JA Group Services
                  Ltd, trading through the Sousa Murray Domains brand. JA Group Services Ltd is registered
                  in England and Wales under company number 16314179, with registered office at
                  167–169 Great Portland Street, 5th Floor, London, W1W 5PF.
                </p>
                <p>
                  These Terms apply when you access {siteUrl.replace('https://', '')}, use a Sousa Murray Domains information or support feature, submit an enquiry, accept a quotation
                  or purchase a service supplied directly by JA Group Services Ltd.
                </p>
                <p>
                  By using the relevant website or service, or by accepting a quotation or order,
                  you confirm that you have read and agree to the terms that apply. If you do not
                  agree, you must not use the service or ask us to begin work.
                </p>
              </TermsSection>

              <TermsSection number="2" id="definitions" title="Definitions">
                <DefinitionList
                  items={[
                    ['Account', 'the customer account used to purchase, access or manage a Storefront Product.'],
                    ['Customer, you or your', 'the individual, business, organisation or other legal person using the Website or Services.'],
                    ['Direct Service', 'a service expressly supplied by JA Group Services Ltd under a separately signed written agreement.'],
                    ['Managed Website', 'an existing website service supplied under a separately signed written quotation or Service Order; Sousa Murray Sites has not yet launched for general ordering.'],
                    ['Provider', 'Wild West Domains, LLC, GoDaddy or another provider involved in supplying or administering a Storefront Product.'],
                    ['Provider Terms', 'the storefront Universal Terms of Service and all product-specific agreements, policies and notices applying to a Storefront Product.'],
                    ['Service Order', 'our accepted quotation, order summary, statement of work or other written confirmation describing a Direct Service.'],
                    ['Services', 'the Website, support activities, Direct Services and access facilitated to Storefront Products, as the context requires.'],
                    ['Storefront', `the authorised reseller storefront at ${storefrontUrl.replace('https://', '')} and associated provider systems.`],
                    ['Storefront Product', 'a domain, hosting, website, email, security, marketing or related product purchased through the Storefront.'],
                    ['Website', `the Sousa Murray Domains information website at ${siteUrl.replace('https://', '')}.`],
                    ['Working Day', 'Monday to Friday, excluding bank holidays in England.'],
                  ]}
                />
              </TermsSection>

              <TermsSection number="3" id="scope" title="Scope and order of precedence">
                <p>The contractual documents apply in the following order:</p>
                <ol>
                  <li>
                    for a Storefront Product, the Provider Terms and any terms displayed or accepted
                    during purchase or account use;
                  </li>
                  <li>
                    for a Direct Service, the Service Order and any signed service-specific
                    agreement;
                  </li>
                  <li>these Terms;</li>
                  <li>the relevant Privacy Policy, Cookies Policy and acceptable-use notices.</li>
                </ol>
                <p>
                  Where documents conflict, the document higher in the applicable list takes
                  priority for that subject. Website descriptions and marketing summaries do not
                  override a Service Order or Provider Terms.
                </p>
                <p>
                  Storefront Products and Direct Services are distinct. Accepting a Storefront
                  Product does not create an obligation for JA Group Services Ltd to provide custom
                  design, migration, administration or managed support unless separately agreed.
                </p>
              </TermsSection>

              <TermsSection number="4" id="eligibility" title="Eligibility and authority">
                <p>
                  You must be at least 18 years old and legally able to enter a binding contract. If
                  you act for a company, partnership, charity or other organisation, you confirm
                  that you have authority to bind it.
                </p>
                <p>
                  Storefront Products may be restricted to business or professional customers under
                  the applicable Provider Terms. You are responsible for checking that you meet all
                  eligibility, location, sanctions, identity-verification and product-specific
                  requirements.
                </p>
                <p>
                  We may ask for information reasonably required to verify identity, authority,
                  ownership, payment instructions or the legitimacy of a requested service.
                </p>
              </TermsSection>

              <TermsSection number="5" id="information-website" title="Use of the information website">
                <p>
                  The Website allows customers to browse information about domains, hosting,
                  self-service website products, SSL and security, backups, Microsoft 365, email
                  marketing and search-engine optimisation. The Website may also display a coming-soon notice for Sousa Murray Sites.
                </p>
                <p>
                  We grant you a limited, revocable and non-transferable permission to access the
                  Website for lawful evaluation, enquiry and account-support purposes. You must not
                  copy, scrape, reverse engineer, disrupt, overload or attempt unauthorised access to
                  the Website or its connected systems.
                </p>
                <p>
                  We may change, withdraw, restrict or temporarily suspend any Website feature for
                  maintenance, security, legal or operational reasons.
                </p>
              </TermsSection>

              <TermsSection number="6" id="product-information" title="Product information and availability">
                <p>
                  We take reasonable care to describe services accurately, but product features,
                  prices, promotions, availability, specifications and provider policies may change.
                  The Storefront information shown at the time of purchase is authoritative for a
                  Storefront Product.
                </p>
                <p>
                  Images, illustrations, examples, projected outcomes and comparisons are for
                  general guidance unless expressly incorporated into a Service Order. We do not
                  guarantee that a particular domain, plan, feature, integration, ranking, level of
                  traffic or business outcome will be available or achieved.
                </p>
                <p>
                  A product being displayed does not oblige us or a Provider to accept an order.
                  Orders may be rejected or cancelled where a product is unavailable, incorrectly
                  priced, restricted, unlawful, fraudulent or affected by a technical error.
                </p>
              </TermsSection>

              <TermsSection number="7" id="storefront-services" title="Storefront services and provider relationship">
                <p>
                  For services offered through the Storefront, Sousa Murray Domains acts as an agent of
                  Wild West Domains, LLC within the applicable reseller arrangement. Sousa Murray Domains
                  is not itself a domain registry or an ICANN-accredited registrar.
                </p>
                <p>
                  Storefront Products are governed by the Provider Terms, including the Universal
                  Terms of Service available at the link below. Product-specific terms may also
                  govern domains, hosting, website tools, email, security, backups, marketing and
                  other services.
                </p>
                <ExternalDocumentLink href={storefrontTermsUrl} label="Storefront Universal Terms of Service" />
                <p>
                  The Provider controls the underlying product infrastructure, account platform,
                  technical rules, pricing engine, renewals, payment processing, product eligibility
                  and provider-level decisions. We cannot vary Provider Terms or promise rights,
                  refunds, uptime or service levels beyond those terms.
                </p>
              </TermsSection>

              <TermsSection number="8" id="domain-services" title="Domain registration and transfer services">
                <p>
                  Domain searches are indicative until the registry and registrar successfully
                  complete registration. A domain shown as available may become unavailable before
                  registration is completed, and neither we nor the Provider guarantees successful
                  registration or transfer.
                </p>
                <p>You are responsible for:</p>
                <ul>
                  <li>choosing a domain that you are legally entitled to register and use;</li>
                  <li>providing complete and accurate registrant, administrative and contact data;</li>
                  <li>keeping domain contact data current and responding to verification requests;</li>
                  <li>meeting registry eligibility rules for the chosen extension;</li>
                  <li>obtaining transfer codes, unlocking domains and approving transfer requests;</li>
                  <li>monitoring renewal, expiry, suspension, redemption and deletion dates;</li>
                  <li>protecting third-party trade marks, names, privacy and other rights.</li>
                </ul>
                <p>
                  Registry, registrar, ICANN and Provider policies may permit verification,
                  suspension, cancellation, transfer, renewal, redemption or deletion of a domain.
                  Charges may apply after expiry or during redemption. Wild West Domains, LLC is the
                  registrar of record for reseller domain registrations unless another affiliated
                  accredited registrar is identified for the registration.
                </p>
              </TermsSection>

              <TermsSection number="9" id="accounts-security" title="Accounts and security">
                <p>
                  You must provide accurate account information and keep it current. You are
                  responsible for your usernames, passwords, PINs, authentication methods, recovery
                  details and all activity carried out through your Account.
                </p>
                <p>
                  You must use appropriate security controls, including strong unique passwords and
                  multi-factor authentication where available. Tell the relevant support provider
                  immediately if you suspect unauthorised access, loss of credentials, payment fraud
                  or misuse.
                </p>
                <p>
                  We may refuse to act on an instruction where authority or authenticity is unclear.
                  We may require additional verification before discussing an Account, changing
                  contact details, disclosing information or assisting with recovery.
                </p>
              </TermsSection>

              <TermsSection number="10" id="storefront-orders" title="Storefront orders and contract formation">
                <p>
                  Storefront orders are placed through the Provider platform. The Provider Terms
                  determine when an order is accepted and a contract is formed. An acknowledgement,
                  pending payment, search result or basket entry is not necessarily acceptance.
                </p>
                <p>
                  You must review the product, term, renewal period, price, taxes, payment method and
                  applicable agreements before completing checkout. You are responsible for orders
                  placed through your Account or by a person you authorise to use it.
                </p>
                <p>
                  Current Storefront Products and your account-management area can be accessed below.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <ExternalDocumentLink href={storefrontUrl} label="Open Storefront" />
                  <ExternalDocumentLink href={accountUrl} label="Manage Products" />
                </div>
              </TermsSection>

              <TermsSection number="11" id="fees-payment" title="Fees, taxes and payment">
                <p>
                  Storefront prices, taxes, payment authorisations and charges are governed by the
                  Provider Terms and the checkout information presented when you order. Promotions
                  may apply only to an initial term, product combination or eligible customer.
                </p>
                <p>
                  Direct Service charges are stated in the Service Order. Unless it says otherwise,
                  quoted prices cover only the expressly listed work. Third-party licences, premium
                  themes, paid plugins, domain fees, hosting, stock media, transaction costs and
                  taxes are additional where identified.
                </p>
                <p>
                  Payment for an existing Direct Service may be collected through a secure Stripe checkout link where this is stated in the applicable Service Order. We are not required to continue work or release deliverables until sums due under that existing agreement have cleared.
                </p>
                <p>
                  If a business customer pays late, we may suspend work and may claim statutory
                  interest and reasonable recovery costs where permitted by law.
                </p>
              </TermsSection>

              <TermsSection number="12" id="renewals-expiry" title="Subscriptions, renewals and expiry">
                <p>
                  Many Storefront Products renew automatically unless auto-renew is disabled before
                  the applicable deadline. Renewal prices may differ from promotional or initial
                  prices. You must review renewal settings, maintain a valid payment method and keep
                  contact information current.
                </p>
                <p>
                  Failure to renew may cause suspension, loss of functionality, expiry, deletion,
                  redemption charges, loss of a domain or loss of stored data. We do not guarantee
                  that an expired domain or discontinued product can be recovered.
                </p>
                <p>
                  A recurring Direct Service renews only where the Service Order says so. Its billing
                  cycle, notice period and termination arrangements will be stated in that Service
                  Order.
                </p>
              </TermsSection>

              <TermsSection number="13" id="cancellation-refunds" title="Cancellation and refunds">
                <p>
                  Storefront Product cancellations and refunds are governed exclusively by the
                  Provider Terms and applicable refund policy. Some products, registrations,
                  renewals, transfers, redemptions, setup work or consumed services may be
                  non-refundable.
                </p>
                <p>
                  Cancellation of a Direct Service must be requested in writing. You must pay for
                  work completed, committed third-party costs and any non-cancellable expenditure up
                  to the effective cancellation date. Any further cancellation charge must be stated
                  in the Service Order or reflect a reasonable estimate of loss caused by the
                  cancellation.
                </p>
                <p>
                  Where mandatory consumer cancellation rights apply, those rights are not limited
                  by these Terms. If you expressly ask us to begin a service during a statutory
                  cancellation period, you may have to pay for work performed and may lose the right
                  to cancel once the service is fully performed, to the extent permitted by law.
                </p>
              </TermsSection>

              <TermsSection number="14" id="managed-websites" title="Sousa Murray Sites status">
                <p>
                  Sousa Murray Sites is the approved forthcoming brand for Managed Website Services operated by JA Group Services Ltd. It is still being built and has not yet launched for general ordering.
                </p>
                <p>
                  Information describing possible future features is provided for transparency only. It is not an offer, quotation, service commitment or confirmation that JA Group Services Ltd has accepted new work.
                </p>
                <p>
                  The launch date, service scope, pricing, payment arrangements, support commitments and applicable contractual terms will be published or agreed only when the service is ready and formally approved for operation.
                </p>
              </TermsSection>

              <TermsSection number="15" id="managed-orders" title="Existing managed website arrangements">
                <p>
                  A customer with an existing Managed Website arrangement or a previously acknowledged enquiry should contact JA Group Services Ltd using the central support route and provide the relevant project, customer or enquiry reference.
                </p>
                <p>
                  Any existing service remains governed by its own accepted quotation, Service Order or other written agreement. Nothing on this coming-soon page changes an existing customer contract or creates a new one.
                </p>
                <p>
                  New general Managed Website orders are not accepted through Sousa Murray Domains while Sousa Murray Sites remains under development.
                </p>
              </TermsSection>

              <TermsSection number="16" id="customer-responsibilities" title="Customer responsibilities">
                <p>You must:</p>
                <ul>
                  <li>provide clear, accurate and timely instructions;</li>
                  <li>supply content, branding, approvals and access credentials by agreed dates;</li>
                  <li>appoint an authorised decision-maker and consolidate feedback;</li>
                  <li>ensure supplied content is lawful, accurate and properly licensed;</li>
                  <li>review proofs, staging versions and deliverables carefully;</li>
                  <li>maintain copies of business-critical data and original source materials;</li>
                  <li>obtain legal, regulatory, accessibility and sector-specific advice where needed;</li>
                  <li>pay charges and third-party costs when due.</li>
                </ul>
                <p>
                  We are not responsible for delay, additional cost or defects caused by missing
                  information, late feedback, conflicting instructions, inaccessible systems,
                  inaccurate material or a failure to perform your responsibilities.
                </p>
              </TermsSection>

              <TermsSection number="17" id="delivery-approval" title="Delivery, revisions and approval">
                <p>
                  Delivery dates are estimates unless expressly stated to be fixed. Timelines depend
                  on timely payment, content, access, feedback, third-party availability and the
                  absence of material scope changes.
                </p>
                <p>
                  The Service Order will state any included revision rounds. Additional revisions,
                  changes after approval, rework caused by changed instructions or new functionality
                  may be charged separately and may alter the delivery date.
                </p>
                <p>
                  You must inspect each review version and report material non-conformity within the
                  review period stated in the Service Order, or within seven calendar days if none is
                  stated. Approval, public launch, commercial use or failure to report an issue in
                  that period may be treated as acceptance, without affecting defects that could not
                  reasonably have been identified earlier.
                </p>
              </TermsSection>

              <TermsSection number="18" id="intellectual-property" title="Content and intellectual property">
                <p>
                  You retain ownership of material you supply and grant us a non-exclusive licence
                  to use, copy, modify and process it as reasonably necessary to perform the Service.
                  You confirm that you have the rights and permissions required for that use.
                </p>
                <p>
                  We retain ownership of our pre-existing intellectual property, methods, templates,
                  software, design systems, code libraries, tools, know-how and reusable components.
                  Third-party materials remain subject to their own licences.
                </p>
                <p>
                  Ownership or licensing of custom deliverables will be set out in the Service Order.
                  Unless it states otherwise, after full payment we grant you a perpetual,
                  non-exclusive licence to use the completed custom deliverables for the agreed
                  business purpose. No rights transfer before full payment.
                </p>
                <p>
                  We will not publicly identify your confidential project as portfolio work without
                  permission, except where the completed website itself publicly identifies us or
                  disclosure is otherwise agreed.
                </p>
              </TermsSection>

              <TermsSection number="19" id="third-party-services" title="Third-party services and infrastructure">
                <p>
                  A service may depend on domains, hosting, content-management systems, APIs,
                  payment providers, plugins, themes, fonts, stock assets, analytics, email,
                  security tools or other third-party services.
                </p>
                <p>
                  Third-party services are governed by their own terms, privacy notices, pricing and
                  availability. We are not responsible for a third party changing, restricting,
                  suspending, discontinuing or making incompatible its service, but we will use
                  reasonable efforts to explain material effects within the support scope you bought.
                </p>
                <p>
                  Unless the Service Order says we will procure and manage an item for you, you are
                  responsible for obtaining and maintaining the relevant third-party account,
                  licence, subscription and payment method.
                </p>
              </TermsSection>

              <TermsSection number="20" id="maintenance-support" title="Maintenance and support">
                <p>
                  General Sousa Murray Domains support provides reasonable assistance with enquiries and
                  directing customers to the correct route. It does not give us power to override a
                  Provider decision or alter a Storefront Product outside our authorised access.
                </p>
                <p>
                  For an existing Managed Website arrangement, maintenance is included only where stated in the applicable Service Order. The scope and exclusions remain governed by that existing written agreement.
                </p>
                <p>
                  Support hours, response targets and communication channels are targets rather than
                  guaranteed resolution times unless a written service-level agreement expressly
                  states otherwise.
                </p>
                <ExternalDocumentLink href={helpUrl} label="Storefront Help Centre" />
              </TermsSection>

              <TermsSection number="21" id="acceptable-use" title="Acceptable use">
                <p>You must not use the Website or Services to:</p>
                <ul>
                  <li>break any law, regulation, court order or binding code;</li>
                  <li>infringe intellectual property, privacy, confidentiality or publicity rights;</li>
                  <li>send spam, phishing messages or unlawful marketing communications;</li>
                  <li>host malware, malicious code, unlawful content or deceptive material;</li>
                  <li>facilitate fraud, abuse, exploitation, harassment, violence or prohibited goods;</li>
                  <li>attack, probe, bypass or interfere with security or infrastructure;</li>
                  <li>misrepresent identity, authority, affiliation or ownership;</li>
                  <li>consume resources in a way that materially harms other users or systems.</li>
                </ul>
                <p>
                  Provider acceptable-use policies also apply to Storefront Products. We may report
                  suspected unlawful or harmful activity and preserve information where legally
                  required or reasonably necessary to protect customers, systems or rights.
                </p>
              </TermsSection>

              <TermsSection number="22" id="suspension-termination" title="Suspension and termination">
                <p>
                  We may restrict, suspend or terminate access to a Direct Service where you fail to
                  pay, materially breach these Terms, create a security or legal risk, misuse a
                  service, fail verification or require us to act unlawfully. Where reasonable, we
                  will give notice and an opportunity to remedy the breach.
                </p>
                <p>
                  A Provider may separately suspend or terminate a Storefront Product under the
                  Provider Terms. We do not guarantee advance notice where immediate action is
                  required by a Provider, registry, authority, security incident or law.
                </p>
                <p>
                  On termination, accrued payment obligations and provisions intended to survive
                  remain effective. Handover, export, migration or restoration work may be chargeable
                  and depends on technical availability, licensing and payment of outstanding sums.
                </p>
              </TermsSection>

              <TermsSection number="23" id="data-confidentiality" title="Data protection and confidentiality">
                <p>
                  We process personal data in accordance with the Sousa Murray Domains Privacy Policy and
                  applicable data-protection law. Providers and other third parties may process data
                  under their own privacy notices and data-processing terms.
                </p>
                <p>
                  Where a Direct Service requires us to process personal data on your behalf, the
                  parties will put in place any data-processing terms reasonably required by law.
                  You remain responsible for establishing a lawful basis, giving notices, responding
                  to rights requests and configuring your website lawfully unless specifically
                  included in our scope.
                </p>
                <p>
                  Each party must keep the other party's non-public business, technical and security
                  information confidential, use it only for the contract and disclose it only to
                  people who need it or where disclosure is legally required. This does not apply to
                  information already public without breach, independently developed or lawfully
                  received without restriction.
                </p>
              </TermsSection>

              <TermsSection number="24" id="warranties" title="Warranties and service availability">
                <p>
                  We will perform Direct Services with reasonable care and skill. If a deliverable
                  materially fails to match the Service Order, you must give us a reasonable
                  opportunity to investigate and, where appropriate, correct or re-perform the
                  affected work.
                </p>
                <p>
                  Except for rights that cannot lawfully be excluded, the Website is provided on an
                  as-available basis. We do not warrant uninterrupted availability, error-free code,
                  immunity from every cyber threat, compatibility with every future device or third-
                  party change, or any particular commercial, traffic, ranking or revenue outcome.
                </p>
                <p>
                  Storefront Product warranties, service credits and availability commitments are
                  governed by the Provider Terms.
                </p>
              </TermsSection>

              <TermsSection number="25" id="liability" title="Liability">
                <p>
                  Nothing in these Terms excludes or limits liability for death or personal injury
                  caused by negligence, fraud or fraudulent misrepresentation, breach of terms as to
                  title, or any liability that cannot lawfully be excluded or limited.
                </p>
                <p>
                  Subject to the paragraph above, we are responsible only for loss that is a
                  reasonably foreseeable result of our breach of these Terms or failure to exercise
                  reasonable care and skill.
                </p>
                <p>
                  For a business customer, we are not liable for loss of profit, revenue, business,
                  contracts, opportunity, anticipated savings, goodwill, data or any indirect or
                  consequential loss. You are responsible for maintaining appropriate backups,
                  insurance and business-continuity arrangements.
                </p>
                <p>
                  For a Direct Service supplied to a business customer, our total aggregate liability
                  arising from that Service will not exceed the total fees paid to us for the Service
                  giving rise to the claim during the 12 months before the event, unless the Service
                  Order states a different cap.
                </p>
                <p>
                  We are not liable for the performance or decisions of a Provider or registry, or
                  for loss caused by your instructions, content, access controls, late response,
                  unauthorised account use or a third-party service outside our reasonable control.
                  Provider liability for Storefront Products is governed by the Provider Terms.
                </p>
                <p>
                  Consumer rights and remedies that cannot lawfully be excluded or restricted remain
                  unaffected.
                </p>
              </TermsSection>

              <TermsSection number="26" id="customer-liability" title="Customer responsibility for claims">
                <p>
                  You are responsible for losses and third-party claims to the extent caused by your
                  unlawful content, lack of required rights, misuse of a Service, fraudulent action,
                  material breach of these Terms or instruction that you knew or should reasonably
                  have known was unlawful.
                </p>
                <p>
                  For business customers, you will reimburse our reasonable losses, liabilities and
                  external legal costs arising directly from such a claim, provided we notify you
                  promptly, allow reasonable participation in the defence and do not settle in a way
                  that admits your liability without your consent where consent is reasonably
                  required.
                </p>
              </TermsSection>

              <TermsSection number="27" id="force-majeure" title="Events outside our control">
                <p>
                  Neither party is liable for delay or failure caused by an event beyond its
                  reasonable control, including internet or utility failure, cyberattack, provider
                  outage, registry action, epidemic, labour dispute, natural event, government
                  action, war, terrorism or failure of a critical supplier.
                </p>
                <p>
                  The affected party must take reasonable steps to reduce the impact and resume
                  performance. Payment obligations for services already supplied are not excused.
                  If a material interruption continues for an unreasonable period, either party may
                  terminate the affected future work by written notice.
                </p>
              </TermsSection>

              <TermsSection number="28" id="changes" title="Changes to these Terms">
                <p>
                  We may update these Terms to reflect changes in law, regulation, services,
                  technology, security, Provider arrangements or business operations. The current
                  version and effective date will be published on this page.
                </p>
                <p>
                  Changes normally apply from publication to future Website use and orders. Material
                  changes to an existing Direct Service will apply only where permitted by the
                  Service Order, required by law or reasonably necessary for security or continued
                  delivery. Provider Terms may be changed by the Provider under their own provisions.
                </p>
              </TermsSection>

              <TermsSection number="29" id="complaints-notices" title="Complaints and notices">
                <p>
                  General enquiries may be sent to{' '}
                  <a href="mailto:contact@jagroupservices.co.uk">contact@jagroupservices.co.uk</a>.
                  Formal complaints about JA Group Services Ltd or support we have provided may be
                  sent to{' '}
                  <a href="mailto:complaints@jagroupservices.co.uk">complaints@jagroupservices.co.uk</a>.
                </p>
                <p>
                  Provider-level billing, refund, account, abuse, domain, suspension or technical
                  decisions may need to be raised through the Storefront Help Centre or the process
                  specified in the Provider Terms.
                </p>
                <p>
                  A contractual notice must be sent to the email or postal address stated in the
                  Service Order or to the registered office above. Email notice is treated as
                  received on the next Working Day unless a delivery failure is received.
                </p>
              </TermsSection>

              <TermsSection number="30" id="general" title="General provisions">
                <p>
                  You may not transfer a Direct Service contract without our prior written consent.
                  We may transfer or subcontract our rights and obligations where this does not
                  materially reduce your contractual rights, and remain responsible for our
                  subcontractors where required by law.
                </p>
                <p>
                  If a provision is unlawful or unenforceable, it will be removed or limited to the
                  minimum necessary and the remaining provisions will continue. Delay in enforcing a
                  right is not a waiver. These Terms and the applicable documents listed in section 3
                  form the entire agreement for their subject matter.
                </p>
                <p>
                  No person other than the parties, a relevant Provider where its terms provide
                  rights, or a permitted successor may enforce these Terms under the Contracts
                  (Rights of Third Parties) Act 1999.
                </p>
              </TermsSection>

              <TermsSection number="31" id="governing-law" title="Governing law and jurisdiction" last>
                <p>
                  These Terms and Direct Service contracts are governed by the law of England and
                  Wales. The courts of England and Wales have exclusive jurisdiction for business
                  customers.
                </p>
                <p>
                  A consumer may also have the right to bring proceedings in the courts of the part
                  of the United Kingdom or other jurisdiction in which they live, where mandatory
                  law provides that right.
                </p>
                <p>
                  Storefront Products may be subject to a different governing-law and dispute-
                  resolution provision under the Provider Terms, which governs disputes relating to
                  those products.
                </p>
              </TermsSection>
            </div>
          </article>
        </main>

        <section className="border-t border-border bg-secondary py-14 sm:py-16">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Need clarification?</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">Speak to Sousa Murray Domains before ordering a reseller product</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We can explain whether a service is supplied through the Storefront or delivered
                directly by JA Group Services Ltd. We cannot provide independent legal advice about
                your own obligations.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <a href="/contact-us">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

function SummaryCard({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-background/70 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
}

function TermsSection({
  number,
  id,
  title,
  children,
  last = false,
}: {
  number: string;
  id: string;
  title: string;
  children: ReactNode;
  last?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-28 py-8 sm:py-10 ${last ? '' : 'border-b border-border'}`}>
      <div className="flex items-start gap-4">
        <span className="flex h-9 min-w-9 items-center justify-center rounded-lg bg-primary/10 px-2 text-sm font-extrabold text-primary">
          {number}
        </span>
        <h2 className="pt-1 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      </div>
      <div className="mt-6 space-y-4 text-[15px] leading-7 text-muted-foreground sm:text-base [&_a]:font-semibold [&_a]:text-primary [&_a]:underline-offset-4 hover:[&_a]:underline [&_li]:pl-1 [&_ol]:ml-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}

function DefinitionList({ items }: { items: Array<[string, string]> }) {
  return (
    <dl className="space-y-4">
      {items.map(([term, description]) => (
        <div key={term} className="rounded-xl border border-border bg-muted/25 p-4">
          <dt className="font-bold text-foreground">{term}</dt>
          <dd className="mt-1 text-sm leading-relaxed sm:text-base">{description}</dd>
        </div>
      ))}
    </dl>
  );
}

function ExternalDocumentLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-border bg-muted/35 px-4 py-2 text-sm font-bold text-foreground no-underline transition-colors hover:bg-muted"
    >
      <CheckCircle2 className="h-4 w-4 text-primary" />
      {label}
      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
    </a>
  );
}
