import type { FaqItem } from '~/types';

export const faq: FaqItem[] = [
  {
    question: 'How long does a project usually take?',
    answer:
      'A lead-routing and CRM build typically runs four to six weeks. A focused automation sprint can be two. If your deadline is tighter than that, say so early and you will get an honest answer about whether it fits.',
  },
  {
    question: 'Is the price fixed?',
    answer:
      'Yes, wherever the scope is defined. One number, one payment schedule, and a written list of what sits inside it. Anything outside becomes a conversation before work starts, never a surprise line on an invoice.',
  },
  {
    question: 'Can you work alongside our existing CRM?',
    answer:
      'That is the normal arrangement. I connect AI and intake to the tools you already use — HubSpot, the inboxes, the ad forms — rather than asking you to rip the stack out.',
  },
  {
    question: 'What lands in my hands at the end?',
    answer:
      'A live intake path, qualification rules, CRM updates, and a short operating note so the team can run it. You own the accounts and the data.',
  },
  {
    question: 'Do you take small pieces of work?',
    answer:
      'Sometimes. A single form-to-CRM path, a speed-to-lead fix, or a one-week review of the current funnel all fit. Larger work tends to work better as a short sprint than as hours scattered across a quarter.',
  },
  {
    question: 'Who owns the work at the end?',
    answer:
      'You do. Workflows live in your CRM and automation accounts. I only ask permission to show the work publicly, and I will keep it private if you would rather.',
  },
];

export const faqHeading = {
  eyebrow: 'FAQ',
  title: 'Asked before nearly every project.',
  asideTitle: 'Not sure yet?',
  asideBody:
    'Send a paragraph about where leads stall. If I am not right for it I will say so, usually the same day.',
};
