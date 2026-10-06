import type { Stat } from '~/types';

export const stats: Stat[] = [
  { value: 6, suffix: 'x', label: 'Win-rate gap when AI qualification finishes' },
  { value: 73, suffix: '%', label: 'High-intent volume on Google LSA in the Supreme set' },
  { value: 0, label: 'Days to first response after go-live' },
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
