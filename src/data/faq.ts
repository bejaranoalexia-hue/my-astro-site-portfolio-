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
      'The top skills in marketing now include:\n\n- SEO — still earns visibility in traditional search\n- AEO (Answer Engine Optimization) — structures content so AI answers and featured results can cite your brand\n- AI integration — connects those channels to CRM, ads, and reporting on the tools you already use\n- Marketing automation — runs intake, qualification, and follow-up so leads are answered immediately and handed to the right person',
  },
  {
    question: 'How do marketing automation and CRM work together?',
    answer:
      'Marketing automation runs the motion. The CRM is the system of record. Together they keep one live picture of every lead — who they are, where they came from, who owns them, and what happens next.\n\nWhen a form, ad, or aggregator produces a lead, automation creates or updates the CRM record, standardizes fields, checks for duplicates, and writes source, status, and the next step. Scoring and routing then put a qualified contact on the right queue instead of a stalled inbox. As sales works the record, CRM outcomes feed back into automation so active deals stop getting prospecting messages, canceled or unresponsive leads re-enter a sequence, and reporting can tie campaigns to pipeline instead of clicks.\n\n- Automation captures, qualifies, and follows up\n- The CRM stores contacts, owners, statuses, and history\n- A two-way loop keeps marketing and sales looking at the same record',
  },
  {
    question: 'How can marketing automation improve lead nurturing?',
    answer:
      'Most nurturing fails because the first touch is slow and the rest depends on someone remembering to follow up. Marketing automation fixes both: it answers while the lead is still hot, then continues a staged sequence until the person is ready for a human or opts out.\n\nHigh-intent actions — a form fill, a booked-job cancel, a pricing request — can skip a long drip and route straight to a rep. Lower-intent contacts stay in a track that educates, re-engages, and updates the CRM so nobody drops the thread after the first touch.\n\n- Immediate response instead of a two-day wait\n- Staged follow-up that does not depend on memory\n- Qualification that hands the right people to sales\n- Re-engagement for canceled, lost, or unresponsive leads\n- CRM updates so the team sees the full conversation',
  },
  {
    question: 'What are marketing automation services?',
    answer:
      'Marketing automation services connect intake, qualification, follow-up, and CRM so inbound demand gets a fast, qualified response. The four capabilities:\n\n- AI Integration for Marketing Teams — turn inbound traffic into qualified pipeline with intelligent automation\n- Marketing Operations — build the infrastructure that connects your campaigns, CRM, and revenue\n- Lead Management CRM and Automation — capture every inquiry, close the gaps in your pipeline, and respond in seconds\n- SEO and AEO Services — win traditional search rankings and earn a place in AI-generated answers',
  },
];

export const faqHeading = {
  eyebrow: 'FAQ',
  title: 'Asked before nearly every project.',
  asideTitle: 'Not sure yet?',
  asideBody:
    'Send a paragraph about where leads stall. If I am not right for it I will say so, usually the same day.',
};
