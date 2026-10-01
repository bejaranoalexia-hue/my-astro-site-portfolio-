import type { ProcessStep } from '~/types';

export const process: ProcessStep[] = [
  {
    stage: 'Stage 01',
    title: 'Assessment',
    body: 'Complete assessment of inbound, outbound CRM system and where we can have productivity gains with the integration of AI.',
    timing: 'Week 1',
  },
  {
    stage: 'Stage 02',
    title: 'Mapping',
    body: 'Map out system with the most cost-effective tools available to the customer.',
    timing: 'Week 2',
  },
  {
    stage: 'Stage 03',
    title: 'Execution',
    body: 'AI replies, unified inbox, CRM writes, and reporting — reviewed live, with the ugly after-hours cases included.',
    timing: 'Weeks 3–5',
  },
  {
    stage: 'Stage 04',
    title: 'Testing',
    body: 'Operating notes, access in your accounts, and a month of questions answered so the queue does not quietly depend on me.',
    timing: 'Week 6',
  },
];

export const processHeading = {
  eyebrow: 'The shape of it',
  title: 'Four stages, and you see something every week.',
  intro:
    'The order is load-bearing. Each stage hands the next one something it cannot start without, which is how we avoid automating a process nobody has agreed on.',
};
