import { ArrowRight, Headphones, Phone } from 'lucide-react';

export default function FirstLineSupportBanner() {
  return (
    <section className="border-b border-primary/15 bg-primary/5" aria-label="JA Domain Hub customer support">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Headphones className="h-5 w-5" />
          </div>
          <div>
            <p className="font-bold text-foreground">JA Group Services is your first point of contact for support</p>
            <p className="mt-1 max-w-4xl text-sm leading-relaxed text-muted-foreground">
              Contact us first for help with JA Domain Hub products and services. We will investigate,
              assist and coordinate escalation with Wild West Domains, GoDaddy or another underlying
              provider when provider-level action is required.
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <a
            href="tel:02038342790"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-bold text-foreground shadow-sm transition-colors hover:bg-muted"
          >
            <Phone className="h-4 w-4 text-primary" />
            020 3834 2790
          </a>
          <a
            href="/contact-us"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Contact Support
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
