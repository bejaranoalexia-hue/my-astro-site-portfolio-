import type { FaqItem } from '~/types';

export const faq: FaqItem[] = [
  {
    question: 'What is Marketing Automation?',
    answer:
      'Marketing automation is software that runs repetitive marketing tasks automatically, such as sending emails, scoring leads, and following up with prospects. It lets you deliver the right message at the right time based on what each person does, without handling every step manually.\n\nMarketing automation is a system that allows all marketing efforts to be orchestrated through integrations and AI tools. It is a branch of digital marketing that uses technology to nurture leads, personalize communication, and measure results across channels like email, social media, and paid ads.',
  },
  {
    question: 'What are the Top Skills in Marketing Automation?',
    answer:
      'Connecting live lead sources, mapping the path a contact actually takes, keeping the CRM clean, writing qualification rules, and knowing where AI belongs versus where a person should take over.',
  },
  {
    question: 'How do marketing automation and CRM work together?',
    answer:
      'Automation handles intake and follow-up. The CRM is the system of record. When a lead arrives, the workflow writes the contact, status, and next step so the team sees a live queue instead of a stalled inbox.',
  },
  {
    question: 'How can marketing automation improve lead nurturing?',
    answer:
      'Immediate response while the lead is still hot, staged follow-up that does not depend on memory, qualification that routes the right people to a human, and CRM updates so nobody drops the thread after the first touch.',
  },
  {
    question: 'What are marketing automation services?',
    answer:
      'The work of connecting intake, qualification, follow-up, and CRM updates into one operating path — usually on the tools you already use — so leads are answered immediately and handed to the right person.',
  },
];

export const faqHeading = {
  eyebrow: 'FAQ',
  title: 'Asked before nearly every project.',
  asideTitle: 'Not sure yet?',
  asideBody:
    'Send a paragraph about where leads stall. If I am not right for it I will say so, usually the same day.',
};
