import type { Faq } from './schema'

export const faqs = {
  whatYouBuild: {
    question: 'What can you help with?',
    answer: 'I work across SOPs, process documentation, knowledge bases, technical documentation, document management, and operations or virtual-assistance support. The best fit is work that needs both clarity and reliable follow-through.',
  },
  startSpeed: {
    question: 'Can you work with distributed teams?',
    answer: 'Yes. I am based in the Philippines (UTC+8) and can arrange overlap for distributed teams depending on the project and communication needs.',
  },
  needStack: {
    question: 'Do I need to use a specific tool?',
    answer: 'No. I have worked across Confluence, Notion, Help Scout, Airtable, Jira, Monday.com, Asana, Trello, Google Workspace, Microsoft 365, and similar systems. I am comfortable learning an unfamiliar tool when the workflow calls for it.',
  },
  pricing: {
    question: 'How do you price projects?',
    answer: 'I use hourly, fixed-price, and retainer arrangements depending on scope. For larger documentation sets or ongoing support, I prefer to understand volume, complexity, review rounds, and turnaround expectations before quoting.',
  },
  afterWrite: {
    question: 'What happens after I get in touch?',
    answer: 'I will review the context, ask for any missing information that affects scope, and suggest a practical next step. For documentation work, that usually means confirming the audience, source material, deliverables, and review process first.',
  },
} satisfies Record<string, Faq>

export const allFaqs: Faq[] = Object.values(faqs)
