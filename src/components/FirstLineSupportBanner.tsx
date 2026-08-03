import { ArrowRight, Headphones, Phone } from 'lucide-react';

export default function FirstLineSupportBanner() {
  return (
    <section className="border-b border-primary/15 bg-primary/5" aria-label="JA Domain Hub customer support">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm sm:h-10 sm:w-10">
            <Headphones className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold leading-snug text-foreground sm:text-base">
              JA Group Services is your first point of contact for support
            </p>
            <p className="mt-1 max-w-4xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
              <span className="sm:hidden">
                Contact us first. We will investigate and manage any provider escalation needed.
              </span>
              <span className="hidden sm:inline">
                Contact us first for help with JA Domain Hub products and services. We will investigate,
                assist and coordinate escalation with Wild West Domains, GoDaddy or another underlying
                provider when provider-level action is required.
              </span>
            </p>
          </div>
        </div>

        <div className="grid shrink-0 grid-cols-1 gap-2 min-[390px]:grid-cols-2 lg:flex">
          <a
            href="tel:02038342790"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-bold text-foreground shadow-sm transition-colors hover:bg-muted lg:w-auto"
          >
            <Phone className="h-4 w-4 text-primary" />
            020 3834 2790
          </a>
          <a
            href="/contact-us"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 lg:w-auto"
          >
            Contact Support
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
