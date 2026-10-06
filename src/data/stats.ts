import type { Stat } from '~/types';

export const stats: Stat[] = [
  { value: 60, suffix: '%', label: 'average conversion rate on Marketing automation solutions' },
  { value: 5.5, suffix: 'x', label: 'ROI on AI powered solutions' },
  { value: 5, label: 'years expertise on Digital Marketing automation' },
];

/** Headline above the stats band, split so the tail can be dimmed. */
export const statsHeading = {
  lead: 'Smarter Campaigns,',
  tail: 'Powered by AI, Directed by Humans',
};

/**
 * Poster frame for the studio reel. Set `embedUrl` to a YouTube/Vimeo
 * privacy-friendly embed to make the play button load a real video;
 * leave it empty and the button is hidden.
 */
export const reel = {
  image: '/images/reel-poster.webp',
  alt: 'Two people reviewing notes and sketches at a studio table',
  width: 1000,
  height: 625,
  embedUrl: '',
  label: 'Play the studio reel',
};
