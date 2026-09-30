import type { Client } from '~/types';

/**
 * Logos for the marquee strip. Each `shape` is inline SVG drawn on a 24×24
 * viewBox. The wrapper in TrustedStrip fills with `currentColor`, so keep
 * the marks as solid paths (no extra fill/stroke attributes).
 */
export const clients: Client[] = [
  {
    name: 'Zapier',
    shape: '<path d="M13.4 2.4 4.2 13.5h6.4l-1.5 8.1 10.2-12.2h-6.6L13.4 2.4z"/>',
  },
  {
    name: 'Make',
    shape:
      '<circle cx="12" cy="6.2" r="3.15"/><circle cx="17.2" cy="9.6" r="3.15"/><circle cx="15.3" cy="15.9" r="3.15"/><circle cx="8.7" cy="15.9" r="3.15"/><circle cx="6.8" cy="9.6" r="3.15"/><circle cx="12" cy="12" r="2.4"/>',
  },
  {
    name: 'HubSpot',
    shape:
      '<circle cx="12" cy="5.4" r="3.15"/><circle cx="17.7" cy="15.3" r="3.15"/><circle cx="6.3" cy="15.3" r="3.15"/><circle cx="12" cy="12" r="3.4"/><circle cx="12" cy="12" r="1.35" fill="var(--swp-shell)"/>',
  },
  {
    name: 'Mailchimp',
    shape:
      '<circle cx="6.6" cy="8.1" r="3.1"/><circle cx="17.4" cy="8.1" r="3.1"/><ellipse cx="12" cy="14.2" rx="6.4" ry="6.1"/><circle cx="9.6" cy="13.4" r="0.85" fill="var(--swp-shell)"/><circle cx="14.4" cy="13.4" r="0.85" fill="var(--swp-shell)"/>',
  },
  {
    name: 'Klaviyo',
    shape:
      '<path d="M5.2 3h4.4v18H5.2V3zm5.6 8.2L19.4 3h-5.2l-3.4 4.6v3.6zm0 1.6v3.6L14.2 21h5.2l-8.6-8.2z"/>',
  },
  {
    name: 'Workiz',
    shape:
      '<path d="M4.8 4.6h4.2l2.1 8.4 1.9-6.4h2l1.9 6.4 2.1-8.4h4.2L17.8 19.4h-4.4L12 13.2l-1.4 6.2H6.2L4.8 4.6z"/>',
  },
];

export const clientsLabel = 'The stack I build with';
