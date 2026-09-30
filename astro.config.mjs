// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * The canonical origin of the deployed site.
 *
 * Change `DEFAULT_SITE` (or set a `SITE_URL` environment variable at build time)
 * before deploying — it is used for canonical URLs, Open Graph tags, the
 * sitemap, the RSS feed and robots.txt.
 */
const DEFAULT_SITE = 'https://bejaranoalexia-hue.github.io';

export default defineConfig({
  site: process.env.SITE_URL ?? DEFAULT_SITE,

  // Project Pages URL: https://bejaranoalexia-hue.github.io/my-astro-site-portfolio-/
  base: '/my-astro-site-portfolio-',

  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },

  // Astro 7 defaults to 'jsx' whitespace handling; this theme relies on
  // HTML-aware compression so inline spacing in the markup is preserved.
  compressHTML: true,

  integrations: [sitemap()],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
