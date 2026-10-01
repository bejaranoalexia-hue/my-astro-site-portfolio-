import type { SiteConfig } from '~/types';

/**
 * ============================================================
 *  THE ONE FILE TO EDIT FIRST
 * ============================================================
 *
 * Everything here is demo content. Replace it with your own and the
 * header, footer, hero, contact page, metadata, structured data, RSS
 * feed and sitemap all follow.
 *
 * The canonical URL lives in `astro.config.mjs` (`site`) and is read
 * back here through `import.meta.env.SITE`.
 */
const origin = (import.meta.env.SITE ?? 'https://bejaranoalexia-hue.github.io').replace(
  /\/$/,
  '',
);
const basePath = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');

export const siteConfig: SiteConfig = {
  name: 'AlexFlow.io',

  logo: {
    header: { src: '/images/header-logo.webp', width: 164, height: 58 },
    footer: { src: '/images/footer-logo.webp', width: 164, height: 58 },
  },

  author: 'Alexia Bejarano',
  role: 'Marketing automation, AI & CRM',
  title: 'AlexFlow.io — Marketing automation, AI & CRM',
  description:
    'AlexFlow.io builds AI, marketing operations, CRM automation, and search so inbound demand gets a fast, qualified response.',
  url: `${origin}${basePath}`,
  ogImage: '/og-default.png',
  locale: 'en',
  themeColor: '#c8f14d',

  contact: {
    email: 'bejaranoalexia@gmail.com',
    phone: '',
    phoneHref: '',
    location: 'Remote',
    availability: 'Open for new automation projects',
    formEndpoint: '',
  },

  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexia-bejarano-52b412152', icon: 'linkedin' },
  ],

  about:
    'AlexFlow.io connects AI, marketing operations, and CRM so leads are answered immediately, qualified automatically, and handed to the right person.',

  copyrightHolder: 'AlexFlow.io',
};

export default siteConfig;
