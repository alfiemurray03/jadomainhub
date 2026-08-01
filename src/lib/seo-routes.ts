/**
 * Auto-synced registry of publicly-crawlable routes. Consumed by the
 * /sitemap.xml handler in src/server/entry.ts.
 *
 * DO NOT add or remove paths by hand. Static paths are mirrored here from
 * src/routes.tsx automatically whenever that file is edited (any manual
 * path edit would be overwritten on the next routes.tsx change). For sync
 * to pick up a route, its `path` must be a literal string starting with "/";
 * template literals and identifier refs are skipped, and dynamic-param routes
 * like "/products/:id" are excluded.
 *
 * The only fields safe to hand-edit are the per-entry metadata below, after a
 * sync:
 * - `priority` (0.0–1.0): Home = 1.0, main sections = 0.8, deep pages = 0.5.
 * - `changefreq` and `lastmod`.
 */

export interface SeoRoute {
  path: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  lastmod?: string;
}

export const seoRoutes: SeoRoute[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/about-us", changefreq: "monthly", priority: 0.8 },
  { path: "/contact-us", changefreq: "monthly", priority: 0.8 },
  { path: "/products/domain-registration", changefreq: "monthly", priority: 0.5 },
  { path: "/products/domain-transfer", changefreq: "monthly", priority: 0.5 },
  { path: "/products/bulk-registration", changefreq: "monthly", priority: 0.5 },
  { path: "/products/bulk-transfer", changefreq: "monthly", priority: 0.5 },
  { path: "/products/website-builder", changefreq: "monthly", priority: 0.5 },
  { path: "/products/cpanel", changefreq: "monthly", priority: 0.5 },
  { path: "/products/wordpress", changefreq: "monthly", priority: 0.5 },
  { path: "/products/web-hosting-plus", changefreq: "monthly", priority: 0.5 },
  { path: "/products/vps", changefreq: "monthly", priority: 0.5 },
  { path: "/products/website-security", changefreq: "monthly", priority: 0.5 },
  { path: "/products/ssl", changefreq: "monthly", priority: 0.5 },
  { path: "/products/ssl-managed", changefreq: "monthly", priority: 0.5 },
  { path: "/products/website-backup", changefreq: "monthly", priority: 0.5 },
  { path: "/products/email-marketing", changefreq: "monthly", priority: 0.5 },
  { path: "/products/seo", changefreq: "monthly", priority: 0.5 },
  { path: "/products/microsoft-365", changefreq: "monthly", priority: 0.5 },
  { path: "/terms-of-service", changefreq: "monthly", priority: 0.8 },
  { path: "/privacy-policy", changefreq: "monthly", priority: 0.8 },
  { path: "/cookies-policy", changefreq: "monthly", priority: 0.8 },
  { path: "/managed-websites", changefreq: "monthly", priority: 0.8 },
];
