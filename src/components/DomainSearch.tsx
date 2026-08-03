import { FormEvent, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';

import { resellerDomainSearchUrl } from '@/lib/domain-search';

interface DomainSearchProps {
  appearance?: 'light' | 'dark';
  compact?: boolean;
  className?: string;
}

export default function DomainSearch({
  appearance = 'light',
  compact = false,
  className = '',
}: DomainSearchProps) {
  const [domain, setDomain] = useState('');
  const [error, setError] = useState('');

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanedDomain = domain
      .trim()
      .replace(/^https?:\/\//i, '')
      .replace(/^www\./i, '')
      .split('/')[0]
      .replace(/\.$/, '');

    if (!cleanedDomain) {
      setError('Enter the domain name you would like to search for.');
      return;
    }

    if (/\s/.test(cleanedDomain)) {
      setError('Domain names cannot contain spaces.');
      return;
    }

    if (!/^[a-z0-9.-]+$/i.test(cleanedDomain)) {
      setError('Enter a valid domain name using letters, numbers, dots or hyphens.');
      return;
    }

    setError('');
    window.location.href = resellerDomainSearchUrl(cleanedDomain);
  };

  const isDark = appearance === 'dark';

  return (
    <form onSubmit={submitSearch} className={className} noValidate>
      <label htmlFor="domain-search" className="sr-only">
        Search for a domain name
      </label>
      <div
        className={`flex flex-col gap-2 rounded-2xl border p-1.5 shadow-lg sm:flex-row sm:p-2 ${
          isDark
            ? 'border-white/20 bg-white/10 backdrop-blur-md'
            : 'border-border bg-card'
        }`}
      >
        <div className="relative min-w-0 flex-1">
          <Search
            className={`absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 sm:left-4 ${
              isDark ? 'text-blue-200' : 'text-muted-foreground'
            }`}
          />
          <input
            id="domain-search"
            name="domain"
            type="text"
            inputMode="url"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            value={domain}
            onChange={(event) => {
              setDomain(event.target.value);
              if (error) setError('');
            }}
            placeholder="mybusiness.co.uk"
            className={`h-12 w-full rounded-xl border-0 bg-transparent pl-11 pr-3 text-base outline-none placeholder:text-current/50 focus:ring-0 sm:pl-12 sm:pr-4 ${
              compact ? 'sm:h-12' : 'sm:h-14'
            } ${isDark ? 'text-white' : 'text-foreground'}`}
            aria-describedby={error ? 'domain-search-error' : 'domain-search-help'}
            aria-invalid={Boolean(error)}
          />
        </div>
        <button
          type="submit"
          className={`inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl px-5 font-bold transition-all sm:w-auto sm:px-6 ${
            compact ? 'sm:min-h-12' : 'sm:min-h-14'
          } ${
            isDark
              ? 'bg-white text-[#0A1F44] hover:bg-blue-50'
              : 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md'
          }`}
        >
          Search Domains
          <ArrowRight className="h-4 w-4 shrink-0" />
        </button>
      </div>
      {error ? (
        <p id="domain-search-error" className={`mt-2 text-sm font-medium ${isDark ? 'text-red-200' : 'text-destructive'}`}>
          {error}
        </p>
      ) : (
        <p id="domain-search-help" className={`mt-2 text-xs leading-relaxed ${isDark ? 'text-white/60' : 'text-muted-foreground'}`}>
          Your search opens securely on the JA Domain Hub reseller storefront with live availability and pricing.
        </p>
      )}
    </form>
  );
}
