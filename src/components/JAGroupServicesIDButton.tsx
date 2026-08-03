import { useEffect, useState } from 'react';
import { CircleUserRound } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface SessionResponse {
  authenticated?: boolean;
  user?: { name?: string; email?: string };
}

function displayName(session: SessionResponse | null) {
  const name = String(session?.user?.name || '').trim();
  if (!name) return 'JA Group Services ID';
  return name.length > 24 ? `${name.slice(0, 22)}…` : name;
}

export default function JAGroupServicesIDButton({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const [session, setSession] = useState<SessionResponse | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/id/session', { credentials: 'include', cache: 'no-store', headers: { accept: 'application/json' } })
      .then(response => response.ok ? response.json() : null)
      .then(data => { if (!cancelled) setSession(data); })
      .catch(() => { if (!cancelled) setSession(null); });
    return () => { cancelled = true; };
  }, []);

  const authenticated = session?.authenticated === true;
  const label = authenticated ? displayName(session) : 'JA Group Services ID';
  const href = '/ja-group-services-id';
  const fullName = authenticated ? String(session?.user?.name || label) : 'Sign in to JA Group Services ID';

  if (mobile) {
    return (
      <a
        href={href}
        onClick={onNavigate}
        title={fullName}
        aria-label={fullName}
        className="mb-2 flex min-h-12 items-center gap-3 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
      >
        <CircleUserRound className="h-5 w-5 shrink-0" />
        <span className="min-w-0 truncate">{authenticated ? label : 'Sign in to JA Group Services ID'}</span>
      </a>
    );
  }

  return (
    <Button className="max-w-[190px] rounded-xl px-3" asChild>
      <a href={href} title={fullName} aria-label={fullName}>
        <CircleUserRound className="mr-2 h-4 w-4 shrink-0" />
        <span className="truncate">{authenticated ? label : 'JA ID'}</span>
      </a>
    </Button>
  );
}
