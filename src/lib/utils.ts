/** Small helpers shared across pages and components. */

/**
 * Prefix a site-relative path with Astro `base` (needed on GitHub project Pages).
 * Leaves absolute, hash, mailto and tel URLs untouched.
 */
export function withBase(path: string): string {
  if (!path) return import.meta.env.BASE_URL;
  if (/^(https?:|mailto:|tel:|data:|#)/i.test(path)) return path;

  const base = import.meta.env.BASE_URL;
  if (path === '/') return base;

  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (base === '/') return normalized;

  const prefix = base.replace(/\/$/, '');
  if (normalized === prefix || normalized.startsWith(`${prefix}/`)) return normalized;
  return `${prefix}${normalized}`;
}

/** Pathname with `base` stripped, so nav hrefs like `/about/` still match. */
export function stripBase(pathname: string): string {
  const prefix = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!prefix) return pathname || '/';
  if (pathname === prefix || pathname === `${prefix}/`) return '/';
  if (pathname.startsWith(`${prefix}/`)) {
    const rest = pathname.slice(prefix.length);
    return rest.startsWith('/') ? rest : `/${rest}`;
  }
  return pathname || '/';
}

/** Resolve a site-relative path against the configured `site` origin. */
export function absoluteUrl(path: string, site: URL | undefined): string {
  const origin = site ?? new URL('http://localhost:4321');
  return new URL(withBase(path), origin).href;
}

/**
 * Canonical URL for the current page.
 *
 * `trailingSlash: 'always'` is set in `astro.config.mjs`, so the pathname
 * already carries its slash; this only guards against the odd edge case.
 */
export function canonicalUrl(url: URL, site: URL | undefined): string {
  const origin = site ?? new URL(url.origin);
  const pathname = url.pathname.endsWith('/') || url.pathname.includes('.')
    ? url.pathname
    : `${url.pathname}/`;
  return new URL(pathname, origin).href;
}

/** e.g. `22 Jul 2026` */
export function formatDate(date: Date, locale = 'en-GB'): string {
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** `2026-07-22`, for `<time datetime>` and structured data. */
export function isoDate(date: Date): string {
  return date.toISOString().split('T')[0]!;
}

/** Hide drafts in production but keep them visible while developing. */
export function isVisible(entry: { data: { draft?: boolean } }): boolean {
  return import.meta.env.DEV || !entry.data.draft;
}

/** Pads a number for the `S/01` style labels. */
export function pad(n: number, width = 2): string {
  return String(n).padStart(width, '0');
}
