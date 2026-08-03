import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  CreditCard,
  FileSearch,
  Globe2,
  Headphones,
  LayoutTemplate,
  LifeBuoy,
  LockKeyhole,
  MessageSquare,
  MonitorSmartphone,
  Palette,
  PenTool,
  Rocket,
  SearchCheck,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const site = 'https://jadomainhub.jagroupservices.co.uk';
const enquiryUrl = '/contact-us?enquiry=managed-website';

const serviceBenefits: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Palette,
    title: 'Designed around your organisation',
    description:
      'The structure, visual direction and customer journey are planned around your goals, brand and audience rather than dropped into a generic one-size-fits-all package.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive across devices',
    description:
      'Your website is built and tested to work clearly across modern phones, tablets, laptops and desktop screens.',
  },
  {
    icon: SearchCheck,
    title: 'Strong technical foundations',
    description:
      'Where included in scope, we configure essential search, metadata, performance, security and analytics foundations ready for launch.',
  },
  {
    icon: ShieldCheck,
    title: 'Launch handled carefully',
    description:
      'We can coordinate domains, DNS, hosting, forms, certificates and launch checks so the move from project to live website is properly controlled.',
  },
  {
    icon: Headphones,
    title: 'First-line support from JA',
    description:
      'JA Group Services Ltd remains your first point of contact. We investigate and assist first, then coordinate provider escalation where it is required.',
  },
  {
    icon: Settings2,
    title: 'Ongoing management available',
    description:
      'Maintenance, updates, monitoring and agreed content work can continue after launch under a separately defined support or management arrangement.',
  },
];

const projectTypes = [
  {
    icon: LayoutTemplate,
    label: 'Focused launch website',
    title: 'A professional online home for a new or smaller organisation',
    description:
      'Usually suited to a clear brochure-style website with a focused set of pages, contact routes and essential business information.',
    examples: ['Approximately 1–5 core pages', 'Contact or enquiry forms', 'Mobile-responsive build', 'Basic launch and domain setup'],
    timeframe: 'Often around 2–4 weeks',
  },
  {
    icon: Building2,
    label: 'Established business website',
    title: 'A broader website with multiple services and customer journeys',
    description:
      'Suitable where the organisation needs more pages, stronger navigation, richer content and several conversion or service routes.',
    examples: ['Approximately 6–15 pages', 'Multiple service sections', 'Content migration or structured entry', 'Analytics and agreed integrations'],
    timeframe: 'Often around 4–8 weeks',
  },
  {
    icon: Code2,
    label: 'Advanced or custom project',
    title: 'A complex website with specialist functionality or integrations',
    description:
      'For projects involving substantial content, membership, bookings, data connections, migration or custom technical requirements.',
    examples: ['Advanced forms or workflows', 'Third-party integrations', 'Large content migration', 'Custom features or phased delivery'],
    timeframe: 'Often around 8–16+ weeks',
  },
];

const possibleDeliverables = [
  'Discovery and requirements review',
  'Website structure and page planning',
  'Visual direction aligned with your brand',
  'Responsive page design and build',
  'Navigation and customer-journey design',
  'Content placement or agreed migration',
  'Contact, enquiry or booking forms',
  'Domain, DNS and hosting configuration',
  'SSL and essential security configuration',
  'Search metadata and technical SEO foundations',
  'Analytics or agreed tracking setup',
  'Cross-device testing and launch checks',
];

const processSteps: Array<{
  number: string;
  icon: LucideIcon;
  title: string;
  duration: string;
  description: string;
}> = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Initial enquiry',
    duration: 'Start here',
    description:
      'Tell us about your organisation, what the website needs to achieve, any existing site or domain, your preferred launch window and the features you already know you need.',
  },
  {
    number: '02',
    icon: FileSearch,
    title: 'Discovery and requirements review',
    duration: 'Usually 1–3 working days',
    description:
      'We review the request, identify missing information and may arrange a discussion or written discovery process before deciding whether the project is suitable.',
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Scope, quotation and agreement',
    duration: 'Usually 2–5 working days',
    description:
      'We define the deliverables, exclusions, estimated timetable, customer responsibilities, payment arrangement and any optional ongoing management.',
  },
  {
    number: '04',
    icon: CreditCard,
    title: 'Order confirmation and payment',
    duration: 'Before work begins',
    description:
      'Once the quotation is accepted, we issue the agreed paperwork and a secure Stripe payment link. Work begins after the required payment and project information are received.',
  },
  {
    number: '05',
    icon: PenTool,
    title: 'Planning, design and build',
    duration: 'Usually 2–12+ weeks',
    description:
      'We plan the website, establish the design direction and build the agreed pages and functionality. Larger or more technical projects may be delivered in stages.',
  },
  {
    number: '06',
    icon: Users,
    title: 'Review, feedback and revisions',
    duration: 'Usually 3–10 working days',
    description:
      'You review the agreed version, provide consolidated feedback and approve the project. Included revision rounds and response deadlines are set out in the quotation.',
  },
  {
    number: '07',
    icon: Rocket,
    title: 'Launch and ongoing care',
    duration: 'Usually 1–3 working days',
    description:
      'We complete final checks, connect the agreed domain and publish the website. Any ongoing maintenance or management then continues under the agreed service arrangement.',
  },
];

const timelineFactors = [
  {
    icon: Globe2,
    title: 'Number of pages and content volume',
    description: 'A focused five-page website is naturally faster than a large service or information website.',
  },
  {
    icon: Code2,
    title: 'Features and integrations',
    description: 'Bookings, memberships, complex forms, data migration and third-party systems require additional planning and testing.',
  },
  {
    icon: PenTool,
    title: 'Content readiness',
    description: 'Projects move faster when approved text, images, branding and legal information are supplied at the agreed time.',
  },
  {
    icon: Users,
    title: 'Customer feedback and approval',
    description: 'Late, fragmented or conflicting feedback can pause the project and move the expected launch date.',
  },
  {
    icon: Settings2,
    title: 'Existing systems and migration',
    description: 'Old hosting, restricted access, domain transfers and difficult legacy systems can add investigation or migration time.',
  },
  {
    icon: Wrench,
    title: 'Changes after scope approval',
    description: 'New pages, redesigned sections or extra functionality may require a change request, additional charge and revised timetable.',
  },
];

const managedSupportItems = [
  'Routine website and software updates where applicable',
  'Agreed content amendments and page maintenance',
  'Security, availability or backup checks where included',
  'Domain, DNS, hosting and provider coordination',
  'Investigation of website faults and customer reports',
  'Planned improvements quoted as additional work where needed',
];

const customerResponsibilities = [
  'Provide complete and accurate information about the organisation and project',
  'Supply approved branding, text, images and required permissions by agreed dates',
  'Appoint one authorised decision-maker and provide consolidated feedback',
  'Review drafts carefully and respond within the agreed review period',
  'Confirm that supplied material is lawful, accurate and properly licensed',
  'Pay agreed charges and third-party costs when they become due',
];

const faqs = [
  {
    question: 'Is this the same as buying Website Builder from the storefront?',
    answer:
      'No. Managed Websites is a separate service delivered directly by JA Group Services Ltd. We scope, quote and agree the project with you. Self-service website products available through the reseller storefront have their own product terms and customer-managed setup journey.',
  },
  {
    question: 'How long will my website take?',
    answer:
      'A focused website may take around 2–4 weeks, a broader business website around 4–8 weeks, and a complex project around 8–16 weeks or longer. These are indicative planning ranges only. Your written quotation will contain the project-specific estimate and assumptions.',
  },
  {
    question: 'Why is there no fixed public price?',
    answer:
      'The amount of design, content, technical work, migration, integration and ongoing management can vary significantly. We quote against an agreed scope so the customer can see what is included before paying rather than receiving an unrealistic headline price.',
  },
  {
    question: 'Can you rebuild or replace an existing website?',
    answer:
      'Yes, subject to review. We may need access to the existing domain, hosting, content, analytics and other systems. The quotation will explain what can be reused, migrated, replaced or excluded.',
  },
  {
    question: 'Can I use a domain I already own?',
    answer:
      'Usually, yes. You must be able to authorise the required DNS, nameserver or registrar changes. We will explain any domain or hosting work included in the project before launch.',
  },
  {
    question: 'Do you write all of the website content?',
    answer:
      'Content writing, editing, migration and image sourcing are included only when stated in the quotation. Customers remain responsible for approving the accuracy and legality of their final content.',
  },
  {
    question: 'Will I be able to request changes after launch?',
    answer:
      'Yes. Ongoing changes may be covered by an agreed management arrangement or quoted separately. New functionality, redesigns and substantial content work are not automatically included in routine maintenance.',
  },
  {
    question: 'Who do I contact if something goes wrong?',
    answer:
      'JA Group Services Ltd is your first point of contact for Managed Website support. We investigate and assist first and, where an underlying hosting or technology provider must act, coordinate or direct the required escalation.',
  },
];

export default function ManagedWebsitesPage() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <Helmet>
        <title>Managed Website Design & Management | JA Domain Hub</title>
        <meta
          name="description"
          content="A tailored website design, build, launch and ongoing management service delivered directly by JA Group Services Ltd for UK businesses and organisations."
        />
        <link rel="canonical" href={`${site}/managed-websites`} />
        <meta property="og:title" content="Managed Website Design & Management | JA Domain Hub" />
        <meta
          property="og:description"
          content="Plan, build, launch and manage a professional website with JA Group Services Ltd. Tailored scope, clear delivery stages and first-line support."
        />
        <meta property="og:url" content={`${site}/managed-websites`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#050B18] via-[#081A3A] to-[#1648A2] py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-400/15 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-[1440px] gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-100 backdrop-blur-sm">
              <Building2 className="h-4 w-4" />
              Delivered directly by JA Group Services Ltd
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your website, professionally planned, built and managed
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
              A hands-on service for UK businesses and organisations that need more than a template. We help turn your requirements into a clear, responsive website and can continue looking after it after launch.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="min-h-12 bg-white px-7 font-bold text-[#081A3A] hover:bg-blue-50">
                <a href={enquiryUrl}>
                  Request a tailored quotation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-12 border-white/35 bg-white/5 px-7 font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#delivery-process">See how we deliver it</a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-blue-300" />
                Tailored written scope
              </span>
              <span className="inline-flex items-center gap-2">
                <LockKeyhole className="h-4 w-4 text-blue-300" />
                Secure Stripe payment
              </span>
              <span className="inline-flex items-center gap-2">
                <LifeBuoy className="h-4 w-4 text-blue-300" />
                First-line JA support
              </span>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-2xl backdrop-blur-md"
            aria-label="Managed Website service summary"
          >
            <div className="border-b border-white/15 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">A complete project journey</p>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">From idea to live website</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                We define the work before payment, build against the agreed scope and provide a clear route for launch and ongoing care.
              </p>
            </div>

            <div className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-1 lg:divide-x-0 lg:divide-y">
              <HeroFact icon={Target} label="Best for" value="Businesses and organisations needing a professionally managed project" />
              <HeroFact icon={CalendarClock} label="Typical duration" value="Approximately 2–16+ weeks, depending on scope" />
              <HeroFact icon={CreditCard} label="Pricing" value="Tailored quotation agreed before payment" />
              <HeroFact icon={Headphones} label="Support" value="JA Group Services remains your first point of contact" />
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="border-b border-border bg-card py-8">
        <div className="mx-auto grid max-w-[1440px] gap-4 px-4 sm:grid-cols-2 sm:px-6 xl:grid-cols-4 lg:px-8">
          <TrustFact icon={Building2} title="Direct JA service" text="Delivered by JA Group Services Ltd, not bought as a self-service storefront template." />
          <TrustFact icon={ClipboardCheck} title="Scope before payment" text="The deliverables, assumptions and expected timetable are confirmed in writing first." />
          <TrustFact icon={ShieldCheck} title="Controlled launch" text="Domains, hosting, security and live checks can be coordinated where included." />
          <TrustFact icon={LifeBuoy} title="Support after launch" text="Ongoing maintenance and management can be included or added separately." />
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why choose a managed website"
            title="More than a website build — a properly managed delivery process"
            description="You do not need to coordinate multiple suppliers or work out every technical step alone. We agree the responsibilities, manage the build and keep the route to launch clear."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceBenefits.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/45 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Typical project types"
            title="A service that scales with the website you actually need"
            description="These examples help customers understand the likely level of work. They are not fixed packages or guaranteed delivery dates; the written quotation defines the actual project."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {projectTypes.map(({ icon: Icon, label, title, description, examples, timeframe }, index) => (
              <motion.article
                key={label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: index * 0.06 }}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
              >
                <div className="border-b border-border bg-muted/35 p-6 sm:p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{label}</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <ul className="space-y-3">
                    {examples.map((example) => (
                      <li key={example} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 border-t border-border pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Indicative delivery range</p>
                    <p className="mt-1 text-lg font-bold text-foreground">{timeframe}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5 text-sm leading-relaxed text-muted-foreground sm:p-6">
            <strong className="text-foreground">When the clock starts:</strong> project time normally begins once the order is accepted, the required payment has cleared and the customer has supplied the information, access and content needed for the first delivery stage. The quotation will explain the assumptions applying to your timetable.
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-8">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">What could be included</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              One coordinated service, with the exact deliverables agreed in writing
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground sm:text-lg">
              The final scope is tailored to the project. We only promise an item when it appears in the quotation or service order, but a managed website can bring the main design, technical and launch activities into one controlled project.
            </p>
            <Button asChild className="mt-7 min-h-11">
              <a href={enquiryUrl}>
                Discuss your requirements
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {possibleDeliverables.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.025 }}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-semibold leading-relaxed text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery-process" className="scroll-mt-28 border-y border-border bg-secondary/45 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How we deliver it"
            title="Seven clear stages from first enquiry to launch"
            description="Every project is different, but the commercial and delivery journey should remain understandable. We confirm any project-specific variation in the quotation."
          />

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute bottom-8 left-[23px] top-8 hidden w-px bg-border sm:block" />
            <div className="space-y-5">
              {processSteps.map(({ number, icon: Icon, title, duration, description }, index) => (
                <motion.article
                  key={number}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.035 }}
                  className="relative grid gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm sm:grid-cols-[48px_minmax(0,1fr)_180px] sm:items-start sm:p-6"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black uppercase tracking-[0.16em] text-primary">Stage {number}</span>
                    </div>
                    <h3 className="mt-1 text-xl font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                  <div className="rounded-xl border border-border bg-muted/35 px-4 py-3 sm:text-right">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Indicative timing</p>
                    <p className="mt-1 text-sm font-bold text-foreground">{duration}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What affects delivery time"
            title="The fastest project is the one that stays clear, supplied and approved"
            description="We build reasonable time into the plan, but these are the main factors that can shorten or extend the delivery journey."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {timelineFactors.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#07162F] py-16 text-white sm:py-20 lg:py-24">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">Pricing and payment</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A quotation based on the real work — not a misleading headline price
            </h2>
            <p className="mt-5 leading-relaxed text-white/70 sm:text-lg">
              Page count alone does not determine the cost. Design, content, integrations, migration, timescale, licensing and aftercare all affect the work required. We therefore agree the service before payment rather than forcing every customer into the same public package.
            </p>
            <Button asChild size="lg" className="mt-7 min-h-12 bg-white px-7 font-bold text-[#07162F] hover:bg-blue-50">
              <a href={enquiryUrl}>
                Request your quotation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <PricingPoint icon={FileSearch} title="Written scope" text="The quotation identifies the agreed work, exclusions and assumptions." />
            <PricingPoint icon={CalendarClock} title="Expected timetable" text="The estimated delivery range and customer dependencies are explained." />
            <PricingPoint icon={CreditCard} title="Secure payment" text="Payment is collected through an agreed Stripe checkout link or arrangement." />
            <PricingPoint icon={Settings2} title="Changes controlled" text="Work outside scope requires agreement and may change the price or timeline." />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="After launch"
            title="A live website still needs someone responsible for it"
            description="The initial build and ongoing management are separate parts of the service. Your quotation will state what support is included after launch and what requires a recurring or additional arrangement."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <LifeBuoy className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Managed support could include</h3>
              <ul className="mt-6 space-y-4">
                {managedSupportItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">What we need from the customer</h3>
              <ul className="mt-6 space-y-4">
                {customerResponsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/45 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Questions customers normally ask before starting"
            description="These answers explain the general service model. The accepted quotation and service terms control the exact project."
          />

          <div className="space-y-3">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group rounded-2xl border border-border bg-card shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-bold sm:px-6">
                  <span>{question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-lg text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-border px-5 py-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
                  {answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground shadow-sm sm:p-8">
            <strong className="text-foreground">Service basis:</strong> Managed Websites is supplied directly by JA Group Services Ltd and is separate from self-service products sold through the reseller storefront. The accepted quotation, service order and applicable terms will confirm the precise scope, charges, payment schedule, delivery assumptions, ownership or licensing position, support commitments and cancellation arrangements. Indicative time ranges on this page are planning guidance and are not guaranteed completion dates.
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-700" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Sparkles className="mx-auto h-9 w-9 text-blue-100" />
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Let us turn your website requirement into a properly managed project
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Tell us what your organisation needs, what you already have and when you would like to launch. JA Group Services Ltd will review the request and explain the recommended next step.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="min-h-12 bg-white px-8 font-bold text-primary hover:bg-blue-50">
              <a href={enquiryUrl}>
                Request a Managed Website quotation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-12 border-white/35 bg-white/5 px-8 font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <a href="tel:02038342790">Call 020 3834 2790</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
    </div>
  );
}

function HeroFact({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 p-5 sm:p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
        <Icon className="h-5 w-5 text-blue-200" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-blue-200">{label}</p>
        <p className="mt-1 text-sm font-semibold leading-relaxed text-white">{value}</p>
      </div>
    </div>
  );
}

function TrustFact({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-background/65 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

function PricingPoint({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
      <Icon className="h-5 w-5 text-blue-200" />
      <h3 className="mt-4 font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
    </div>
  );
}
