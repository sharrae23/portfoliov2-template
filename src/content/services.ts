import type { Service } from './schema'
import { tools } from './tools'

export const servicesPage = {
  eyebrow: 'Services',
  title: 'Support that makes work clearer.',
  lede: 'Combine dependable operations support with documentation that makes processes easier to follow, hand off, and maintain.',
}

export const servicesSection = {
  eyebrow: servicesPage.eyebrow,
  titleThin: 'Choose the support',
  titleBold: 'your team needs.',
  explore: 'See related work',
  work: {
    'service-1': 'screens',
    'service-2': 'featured',
    'service-3': 'case-studies',
    'service-4': 'process',
    'service-5': 'side-projects',
  } as Record<string, string>,
}

export const services: Service[] = [
  {
    id: 'service-1',
    title: 'Virtual Assistance & Operations',
    summary: 'Keep recurring tasks, trackers, files, requests, and follow-ups moving without losing the details.',
    outcome: 'Organized operations',
    bullets: ['Task and request tracking', 'Workflow coordination', 'Reliable follow-through'],
    tools: [tools.toolF, tools.toolG, tools.toolI],
  },
  {
    id: 'service-2',
    title: 'SOP & Process Documentation',
    summary: 'Turn real workflows into practical, step-by-step documentation that people can actually use.',
    outcome: 'Repeatable processes',
    bullets: ['SOPs and checklists', 'Process mapping', 'Stakeholder review'],
    tools: [tools.toolA, tools.toolB, tools.toolJ],
  },
  {
    id: 'service-3',
    title: 'Knowledge Bases & Help Content',
    summary: 'Create and maintain user-facing and internal content so answers are easier to find and keep current.',
    outcome: 'Findable answers',
    bullets: ['Knowledge-base articles', 'Help content', 'Release notes'],
    tools: [tools.toolA, tools.toolB, tools.toolC],
  },
  {
    id: 'service-4',
    title: 'Document Management & Workflow Support',
    summary: 'Bring structure to repositories, document requests, reviews, approvals, and version-aware handoffs.',
    outcome: 'Clear document control',
    bullets: ['Document libraries', 'Review workflows', 'Request tracking'],
    tools: [tools.toolD, tools.toolE, tools.toolK],
  },
  {
    id: 'service-5',
    title: 'Technical Manuals & Training Materials',
    summary: 'Translate technical information into clear manuals, user instructions, and training-ready materials.',
    outcome: 'Usable instructions',
    bullets: ['User guides', 'Technical manuals', 'Training documentation'],
    tools: [tools.toolJ, tools.toolK, tools.toolL],
  },
]
