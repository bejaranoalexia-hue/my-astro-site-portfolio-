/**
 * Copy blocks for the homepage sections that are one-of-a-kind.
 * Longer, repeating content lives in its own data file or content
 * collection instead.
 */

export const hero = {
  greeting: 'Hello, my name is',
  /** Rendered on two lines. */
  nameLines: ['Alexia', 'Bejarano'],
  intro:
    'I build AI, marketing operations, and CRM systems so inbound demand gets a fast, qualified response — not a two-day wait in someone\'s inbox.',
  ctaLabel: 'Start a project',
  ctaHref: '/contact/',
  photo: {
    src: '/images/hero-portrait.webp',
    alt: 'Portrait placeholder for Alexia Bejarano',
    width: 960,
    height: 1210,
  },
  aside: {
    roleLine: ['AlexFlow.io', 'Marketing automation, AI & CRM'],
    title: ['Automation', 'Systems'],
    /** Small avatar stack — decorative, so the images carry empty alt text. */
    stack: ['/images/avatar-02.webp', '/images/avatar-01.webp', '/images/avatar-03.webp'],
    stackBadge: '6x',
    kpi: '5.5x',
    kpiLabel: 'average ROI per automation system implemented',
    note: 'Remote — working across time zones',
  },
};

export const collaborate = {
  eyebrow: 'Working together',
  title: 'Scale Your Marketing Without Losing the Human Touch',
  body: 'I find the bottlenecks where the intake stalls and map out AI-powered solutions that answers, qualifies, and updates the CRM the moment a lead arrives.',
  badge: 'AlexFlow.io',
  ctaLabel: 'Get in touch',
  ctaHref: '/contact/',
  /**
   * The staggered pair beside the copy. Swap these for the bundled SVG
   * mockups (`BookletMock`, `TabletMock` in src/components/art/) if you would
   * rather show artwork than photography — see the README.
   */
  images: [
    {
      src: '/images/collab-team.webp',
      alt: 'Two colleagues standing in a bright office, reviewing work together on a tablet',
      width: 760,
      height: 760,
    },
    {
      src: '/images/collab-meeting.webp',
      alt: 'Two colleagues talking over an open laptop at a meeting table',
      width: 760,
      height: 760,
    },
  ],
};

export const servicesHeading = {
  eyebrow: 'Engagements',
  title: 'Four capabilities, one operating system.',
  ctaLabel: 'Ask for a scope',
  ctaHref: '/contact/',
};

export const workHeading = {
  eyebrow: 'Selected work',
  title: 'Systems that turn leads into revenue.',
};

export const journalHeading = {
  eyebrow: 'Notebook',
  title: 'Notes on conversion, automation, and craft.',
  ctaLabel: 'Every article',
  ctaHref: '/journal/',
};

export const cta = {
  title: 'Ready to tighten the loop?',
  body: 'Tell us where leads stall today. We\'ll map the stack that closes the gap.',
  primaryLabel: 'Get in touch',
};
