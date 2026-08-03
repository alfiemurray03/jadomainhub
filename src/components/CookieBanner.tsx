import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const COOKIE_CONSENT_KEY = 'c2_analytics_consent';
const COOKIE_CONSENT_EXPIRES_DAYS = 365;

interface CookieConsent {
  analytics: boolean;
  timestamp: number;
}

declare global {
  interface Window {
    _signalsDataLayer?: unknown[];
    revokeAnalyticsConsent?: () => void;
    openCookiePreferences?: () => void;
    __SCC_INIT__?: boolean;
  }
}

function initC2Tracking(): void {
  if (typeof window === 'undefined' || window.__SCC_INIT__) return;
  window.__SCC_INIT__ = true;
  window._signalsDataLayer = window._signalsDataLayer || [];

  const track = (eid: string, type: string, label: string, props?: Record<string, unknown>) => {
    window._signalsDataLayer!.push({
      schema: 'add_event', version: 'v1',
      data: { eid, type, event_label: label, custom_properties: { ...props, timestamp: new Date().toISOString(), source: 'airo-app-builder' } }
    });
  };

  const getSection = (el: HTMLElement): string => {
    if (el.closest('header')) return 'header';
    if (el.closest('footer')) return 'footer';
    if (el.closest('nav')) return 'nav';
    if (el.closest('main')) return 'main';
    return 'page';
  };

  const getDevice = (): string => {
    const w = window.innerWidth;
    return w < 768 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop';
  };

  track('airo.website.session', 'session', 'start', { page_path: location.pathname, referrer: document.referrer });
  track('airo.website.pageview', 'pageview', document.title, { page_path: location.pathname, referrer: document.referrer });

  document.addEventListener('click', (e) => {
    const el = (e.target as HTMLElement)?.closest('a, button, [role="button"]') as HTMLElement;
    if (!el) return;
    const text = el.textContent?.trim()?.substring(0, 100) || '';
    const href = (el as HTMLAnchorElement).href || '';
    const type = el.tagName.toLowerCase() === 'a' ? 'link' : 'button';

    let isExternal: boolean | undefined;
    if (href) {
      try {
        isExternal = new URL(href, location.origin).origin !== location.origin;
      } catch {
        // Malformed URL, treat as internal
      }
    }

    track('airo.website.click', 'click', text || type, {
      element_type: type,
      element_text: text,
      element_id: el.id || undefined,
      section: getSection(el),
      page_path: location.pathname,
      page_title: document.title,
      href: href || undefined,
      is_external: href ? isExternal : undefined,
      device: getDevice(),
      viewport_width: window.innerWidth
    });
  }, true);

  let lastUrl = location.href;
  const trackPage = () => {
    if (location.href !== lastUrl) {
      track('airo.website.pageview', 'pageview', document.title, { page_path: location.pathname, referrer: lastUrl });
      lastUrl = location.href;
    }
  };
  window.addEventListener('popstate', trackPage);
  const push = history.pushState, replace = history.replaceState;
  history.pushState = (...args) => { push.apply(history, args); setTimeout(trackPage, 0); };
  history.replaceState = (...args) => { replace.apply(history, args); setTimeout(trackPage, 0); };

  const h = location.hostname;
  const url = h === 'localhost' || h.includes('dev-airoapp')
    ? 'https://img1.dev-wsimg.com/signals/js/clients/scc-c2/scc-c2.js'
    : h.includes('test-airoapp')
      ? 'https://img1.test-wsimg.com/signals/js/clients/scc-c2/scc-c2.min.js'
      : 'https://img1.wsimg.com/signals/js/clients/scc-c2/scc-c2.min.js';
  const script = document.createElement('script');
  script.src = url;
  script.async = true;
  document.head.appendChild(script);
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(function checkConsent() {
    if (typeof window === 'undefined') return;

    const consentData = localStorage.getItem(COOKIE_CONSENT_KEY);

    if (!consentData) {
      setShowBanner(true);
      setIsLoaded(true);
      return;
    }

    try {
      const consent: CookieConsent = JSON.parse(consentData);
      const daysSinceConsent = (Date.now() - consent.timestamp) / (1000 * 60 * 60 * 24);

      if (daysSinceConsent > COOKIE_CONSENT_EXPIRES_DAYS) {
        localStorage.removeItem(COOKIE_CONSENT_KEY);
        setShowBanner(true);
      } else {
        setAnalyticsEnabled(consent.analytics);
        if (consent.analytics) initC2Tracking();
      }
    } catch {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      setShowBanner(true);
    }

    setIsLoaded(true);
  }, []);

  function saveConsent(analytics: boolean) {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ analytics, timestamp: Date.now() }));
    setAnalyticsEnabled(analytics);
    if (analytics) initC2Tracking();
    setShowBanner(false);
    setShowPreferences(false);
  }

  function revokeConsent() {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    setAnalyticsEnabled(false);
    setShowBanner(true);
    setShowPreferences(false);
  }

  function openPreferences() {
    if (typeof window === 'undefined') return;
    const consentData = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consentData) {
      try {
        const consent: CookieConsent = JSON.parse(consentData);
        setAnalyticsEnabled(consent.analytics);
      } catch {
        setAnalyticsEnabled(false);
      }
    }
    setShowPreferences(true);
  }

  useEffect(function exposeGlobalFunctions() {
    if (typeof window === 'undefined') return;
    window.revokeAnalyticsConsent = revokeConsent;
    window.openCookiePreferences = openPreferences;
    return () => {
      delete window.revokeAnalyticsConsent;
      delete window.openCookiePreferences;
    };
  }, []);

  if (!isLoaded) return null;

  return (
    <>
      {showBanner && (
        <div
          className="fixed inset-x-0 bottom-0 z-[100] max-h-[78dvh] overflow-y-auto border-t border-border bg-card text-card-foreground shadow-2xl"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
          role="alertdialog"
          aria-live="polite"
          aria-label="Cookie consent banner"
          aria-describedby="cookie-banner-description"
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 text-sm font-semibold text-foreground">Cookie consent</h3>
                <p id="cookie-banner-description" className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  We use essential cookies to operate this website and optional analytics cookies to understand how the service is used. You can accept, decline or choose your preferences.{' '}
                  <a href="/cookies-policy" className="font-semibold text-primary underline underline-offset-2">Read our Cookies Policy</a>
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-2 min-[400px]:grid-cols-3 lg:w-auto lg:flex lg:shrink-0">
                <Button size="sm" variant="outline" onClick={() => setShowPreferences(true)} className="min-h-11 w-full whitespace-nowrap lg:w-auto">Preferences</Button>
                <Button size="sm" variant="secondary" onClick={() => saveConsent(false)} className="min-h-11 w-full whitespace-nowrap lg:w-auto">Decline</Button>
                <Button size="sm" onClick={() => saveConsent(true)} className="min-h-11 w-full whitespace-nowrap lg:w-auto" autoFocus>Accept</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] overflow-y-auto sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Cookie preferences</DialogTitle>
            <DialogDescription>
              Manage your cookie preferences. Essential cookies cannot be disabled.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2 sm:space-y-6 sm:py-4">
            <div className="flex flex-col gap-4 rounded-lg border p-4 min-[400px]:flex-row min-[400px]:items-start min-[400px]:justify-between">
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <Label className="text-base font-semibold">Essential cookies</Label>
                  <span className="rounded bg-muted px-2 py-0.5 text-xs">Always active</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Required for the website to function properly. These cannot be disabled.
                </p>
              </div>
              <Switch checked={true} disabled />
            </div>

            <div className="flex flex-col gap-4 rounded-lg border p-4 min-[400px]:flex-row min-[400px]:items-start min-[400px]:justify-between">
              <div className="min-w-0 flex-1">
                <Label htmlFor="analytics-toggle" className="cursor-pointer text-base font-semibold">
                  Analytics cookies
                </Label>
                <p className="mt-1 text-sm text-muted-foreground">
                  Help us understand how visitors interact with the website by collecting usage information.
                </p>
              </div>
              <Switch id="analytics-toggle" checked={analyticsEnabled} onCheckedChange={setAnalyticsEnabled} />
            </div>
          </div>

          <DialogFooter className="grid grid-cols-1 gap-2 min-[400px]:grid-cols-2 sm:flex">
            <Button variant="outline" onClick={() => setShowPreferences(false)} className="min-h-11 w-full sm:w-auto">
              Cancel
            </Button>
            <Button onClick={() => saveConsent(analyticsEnabled)} className="min-h-11 w-full sm:w-auto">
              Save preferences
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
