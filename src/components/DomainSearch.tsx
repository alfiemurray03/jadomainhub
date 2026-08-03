import { FormEvent, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';

import { storefrontDomainSearchUrl } from '@/lib/product-catalogue';

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
      .split('/')[0];

    if (!cleanedDomain) {
      setError('Enter the domain name you would like to search for.');
      return;
    }

    if (/\s/.test(cleanedDomain)) {
      setError('Domain names cannot contain spaces.');
      return;
    }

    setError('');
    window.location.assign(storefrontDomainSearchUrl(cleanedDomain));
  };

  const isDark = appearance === 'dark';

  return (
    <form onSubmit={submitSearch} className={className} noValidate>
      <label htmlFor="domain-search" className="sr-only">
        Search for a domain name
      </label>
      <div
        className={`flex flex-col gap-2 rounded-2xl border p-2 shadow-lg sm:flex-row ${
          isDark
            ? 'border-white/20 bg-white/10 backdrop-blur-md'
            : 'border-border bg-card'
        }`}
      >
        <div className="relative min-w-0 flex-1">
          <Search
            className={`absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 ${
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
            placeholder="Enter your domain, for example mybusiness.co.uk"
            className={`w-full rounded-xl border-0 bg-transparent pl-12 pr-4 text-base outline-none placeholder:text-current/50 focus:ring-0 ${
              compact ? 'h-12' : 'h-14'
            } ${isDark ? 'text-white' : 'text-foreground'}`}
            aria-describedby={error ? 'domain-search-error' : 'domain-search-help'}
            aria-invalid={Boolean(error)}
          />
        </div>
        <button
          type="submit"
          className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-6 font-bold transition-all ${
            compact ? 'min-h-12' : 'min-h-14'
          } ${
            isDark
              ? 'bg-white text-[#0A1F44] hover:bg-blue-50'
              : 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md'
          }`}
        >
          Search Domains
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      {error ? (
        <p id="domain-search-error" className={`mt-2 text-sm font-medium ${isDark ? 'text-red-200' : 'text-destructive'}`}>
          {error}
        </p>
      ) : (
        <p id="domain-search-help" className={`mt-2 text-xs ${isDark ? 'text-white/60' : 'text-muted-foreground'}`}>
          You will continue to the JA Domain Hub storefront to view availability and current pricing.
        </p>
      )}
    </form>
  );
}
