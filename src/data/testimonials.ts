import type { Testimonial } from '~/types';

export const testimonials: Testimonial[] = [
  {
    quote:
      'Response time dropped from days to immediate, and the CSR team could see every channel in one place. Qualification is what actually moved the win rate.',
    name: 'Nikki Lindop',
    role: 'CSR lead, Supreme Garage Door',
    avatar: '/images/avatar-02.webp',
    avatarAlt: 'Portrait placeholder',
    rating: 5,
  },
  {
    quote:
      'We did not need another dashboard. We needed the CRM to update when a lead arrived. That is what shipped.',
    name: 'Operations lead',
    role: 'Home-services team',
    avatar: '/images/avatar-01.webp',
    avatarAlt: 'Portrait placeholder',
    rating: 5,
  },
  {
    quote:
      'The first week was spent on the live sources rather than a vendor demo. That single conversation saved us from automating the wrong queue.',
    name: 'Marketing manager',
    role: 'Regional service brand',
    avatar: '/images/avatar-03.webp',
    avatarAlt: 'Portrait placeholder',
    rating: 5,
  },
];

export const testimonialsHeading = {
  eyebrow: 'In their words',
  title: 'What it feels like once the queue is actually answering.',
};
