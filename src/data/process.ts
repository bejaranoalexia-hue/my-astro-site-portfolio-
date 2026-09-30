import type { ProcessStep } from '~/types';

export const process: ProcessStep[] = [
  {
    stage: 'Stage 01',
    title: 'Map',
    body: 'Every inbound source, the current response times, and where the CRM actually gets updated. We name the stall before we pick a tool.',
    timing: 'Week 1',
  },
  {
    stage: 'Stage 02',
    title: 'Wire',
    body: 'Intake, qualification, and routing on paper and in the sandbox. You sign off the path, which costs far less to change than a live workflow.',
    timing: 'Week 2',
  },
  {
    stage: 'Stage 03',
    title: 'Automate',
    body: 'AI replies, unified inbox, CRM writes, and reporting — reviewed live, with the ugly after-hours cases included.',
    timing: 'Weeks 3–5',
  },
  {
    stage: 'Stage 04',
    title: 'Handover',
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
