import { useEffect, useState } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { CircleUserRound, ExternalLink, KeyRound, LogOut, ShieldCheck } from 'lucide-react';

import BrandWordmark from '@/components/BrandWordmark';
import { Button } from '@/components/ui/button';

interface IdentitySession {
  authenticated: boolean;
  revoked?: boolean;
  user?: {
    name: string;
    email: string;
    identityProvider?: string;
  };
  session?: {
    centralStatus?: string;
    issuedAt?: string;
    expiresAt?: string;
  };
}

function formatDate(value?: string) {
  if (!value) return 'Not available';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Not available';
  return new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium', timeStyle: 'short' }).format(date);
}

export default function JAGroupServicesIDPage() {
  const [session, setSession] = useState<IdentitySession | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    fetch('/api/id/session', { credentials: 'include', cache: 'no-store', headers: { accept: 'application/json' } })
      .then(async response => ({ response, data: await response.json() }))
      .then(({ response, data }) => {
        if (cancelled) return;
        if (!response.ok) throw new Error('The JA Group Services ID service is temporarily unavailable.');
        setSession(data);
      })
      .catch(cause => {
        if (!cancelled) setError(cause instanceof Error ? cause.message : 'The identity service could not be reached.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const search = new URLSearchParams(window.location.search);
  const loggedOut = search.get('logged_out') === '1';
  const authError = search.get('auth_error');

  return (
    <>
      <Helmet>
        <title>JA Group Services ID | Sousa Murray Domains</title>
        <meta name="description" content="View the JA Group Services identity connected to Sousa Murray Domains and open the central customer dashboard." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-[calc(100vh-4rem)] bg-muted/35 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
          <section className="overflow-hidden rounded-[28px] border border-border bg-card shadow-xl">
            <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 px-6 py-10 text-white sm:px-10 sm:py-12">
              <BrandWordmark className="mb-8 inline-flex rounded-xl bg-white px-3 py-2 text-lg" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Sousa Murray Domains connection</p>
              <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight !text-white sm:text-5xl">Your JA Group Services ID</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                Sousa Murray Domains uses your central JA Group Services identity. Personal information and security controls are managed from the central dashboard.
              </p>
            </div>

            <div className="p-6 sm:p-10">
              {loading && (
                <div className="rounded-2xl border border-border bg-muted p-6 text-sm font-semibold text-muted-foreground">Checking your secure session…</div>
              )}

              {!loading && error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm font-semibold text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">{error}</div>
              )}

              {!loading && !session?.authenticated && (
                <div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary"><CircleUserRound className="h-7 w-7" /></div>
                    <h2 className="mt-5 text-2xl font-extrabold text-foreground">Sign in to Sousa Murray Domains</h2>
                    <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
                      Use your JA Group Services ID to create a secure Domain Hub website session. This is separate from the external provider account used to manage purchased domains and products.
                    </p>
                    {(loggedOut || authError || session?.revoked) && (
                      <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-100">
                        {session?.revoked ? 'This device session was revoked. Sign in again to continue.' : loggedOut ? 'You have been signed out successfully.' : 'The sign-in could not be completed. Please try again.'}
                      </div>
                    )}
                    <Button className="mt-6 min-h-12 rounded-xl px-6" asChild>
                      <a href="/api/id/sign-in"><KeyRound className="mr-2 h-4 w-4" />Sign in with JA Group Services ID</a>
                    </Button>
                  </div>

                  <aside className="rounded-2xl border border-border bg-muted/45 p-6">
                    <h3 className="font-extrabold text-foreground">Provider account</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">Purchased domains, hosting and reseller products continue to be managed through the secure external provider account.</p>
                    <Button variant="outline" className="mt-5 w-full rounded-xl" asChild>
                      <a href="https://account.secureserver.net/products?plid=599857" target="_blank" rel="noopener noreferrer">Open provider account <ExternalLink className="ml-2 h-4 w-4" /></a>
                    </Button>
                  </aside>
                </div>
              )}

              {!loading && session?.authenticated && session.user && (
                <div>
                  <div className="flex flex-col justify-between gap-5 border-b border-border pb-7 sm:flex-row sm:items-center">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Signed in securely</p>
                      <h2 className="mt-2 text-2xl font-extrabold text-foreground">{session.user.name}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">{session.user.email}</p>
                    </div>
                    <div className="inline-flex items-center gap-2 self-start rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200">
                      <ShieldCheck className="h-4 w-4" /> Active Sousa Murray Domains session
                    </div>
                  </div>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-2xl border border-border p-5"><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Verified name</p><p className="mt-2 font-bold text-foreground">{session.user.name}</p></div>
                    <div className="rounded-2xl border border-border p-5"><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email address</p><p className="mt-2 break-all font-bold text-foreground">{session.user.email}</p></div>
                    <div className="rounded-2xl border border-border p-5"><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Central session</p><p className="mt-2 font-bold capitalize text-foreground">{String(session.session?.centralStatus || 'pending').replaceAll('_', ' ')}</p></div>
                    <div className="rounded-2xl border border-border p-5"><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Signed in</p><p className="mt-2 font-bold text-foreground">{formatDate(session.session?.issuedAt)}</p></div>
                    <div className="rounded-2xl border border-border p-5"><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Session expiry</p><p className="mt-2 font-bold text-foreground">{formatDate(session.session?.expiresAt)}</p></div>
                    <div className="rounded-2xl border border-border p-5"><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Personal details</p><p className="mt-2 text-sm font-semibold text-muted-foreground">Managed centrally and read-only here.</p></div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button className="min-h-12 rounded-xl px-6" asChild>
                      <a href="https://jagroupservices.co.uk/id/dashboard">Open central ID dashboard <ExternalLink className="ml-2 h-4 w-4" /></a>
                    </Button>
                    <Button variant="outline" className="min-h-12 rounded-xl px-6" asChild>
                      <a href="/api/id/sign-out"><LogOut className="mr-2 h-4 w-4" />Sign out</a>
                    </Button>
                    <Button variant="outline" className="min-h-12 rounded-xl px-6" asChild>
                      <a href="https://account.secureserver.net/products?plid=599857" target="_blank" rel="noopener noreferrer">Provider account <ExternalLink className="ml-2 h-4 w-4" /></a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
