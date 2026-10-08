import type { Service } from './schema'
import { tools } from './tools'

export const servicesPage = {
  eyebrow: 'Services',
  title: 'Support that keeps work moving and knowledge usable.',
  lede: 'Bring me in for one documentation problem, ongoing operations support, or a mix of both.',
}

export const servicesSection = {
  eyebrow: servicesPage.eyebrow,
  titleThin: 'Organize the work.',
  titleBold: 'Keep the process clear.',
  explore: 'See related work',
  work: {
    'service-1': 'experiments',
    'service-2': 'featured',
    'service-3': 'case-studies',
    'service-4': 'side-projects',
    'service-5': 'apps',
  } as Record<string, string>,
}

export const services: Service[] = [
  {
    id: 'service-1',
    title: 'Virtual Assistance & Operations Support',
    summary: 'Reliable support for the recurring work that keeps a small team organized.',
    outcome: 'Less dropped work',
    bullets: ['Track requests and follow-ups', 'Keep files and information organized', 'Support coordination, research, and admin workflows'],
    tools: [tools.toolF, tools.toolG, tools.toolI],
  },
  {
    id: 'service-2',
    title: 'SOP & Process Documentation',
    summary: 'Turn practical know-how into steps, checklists, and handoffs people can actually use.',
    outcome: 'Repeatable work',
    bullets: ['Map the real workflow', 'Clarify ownership and decision points', 'Write practical SOPs and checklists'],
    tools: [tools.toolB, tools.toolI, tools.toolJ],
  },
  {
    id: 'service-3',
    title: 'Knowledge Bases & Help Documentation',
    summary: 'Create and maintain support content that is easy to find, understand, and update.',
    outcome: 'Faster answers',
    bullets: ['Write and revise knowledge-base articles', 'Organize content around user goals', 'Validate steps against the product or source process'],
    tools: [tools.toolA, tools.toolB, tools.toolC],
  },
  {
    id: 'service-4',
    title: 'Document Management & Workflow Support',
    summary: 'Build order around document requests, reviews, approvals, repositories, and change tracking.',
    outcome: 'Visible ownership',
    bullets: ['Track requests and statuses', 'Support review and approval flows', 'Maintain document libraries and repositories'],
    tools: [tools.toolD, tools.toolE, tools.toolA],
  },
  {
    id: 'service-5',
    title: 'Technical Documentation & Release Notes',
    summary: 'Translate product and technical changes into clear material for users, teams, and training.',
    outcome: 'Clear handoff',
    bullets: ['Create manuals and user-facing guides', 'Turn releases into usable updates', 'Coordinate source validation with developers, QA, and stakeholders'],
    tools: [tools.toolE, tools.toolA, tools.toolK],
  },
]
