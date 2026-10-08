import type { Faq } from './schema'

export const faqs = {
  whatYouBuild: {
    question: 'What kind of work can you help with?',
    answer: 'I support virtual assistance and operations work alongside SOPs, process documentation, knowledge bases, technical manuals, document management, and workflow documentation.',
  },
  startSpeed: {
    question: 'What hours do you work?',
    answer: 'I am based in the Philippines (UTC+8) and can discuss flexible overlap hours depending on the project, team, and communication needs.',
  },
  needStack: {
    question: 'Do I need a specific platform?',
    answer: 'No. I have worked with Confluence, Notion, Help Scout, Airtable, Jira, Asana, Monday.com, Trello, SharePoint, Google Workspace, and Microsoft 365, and I can get up to speed on a new tool from your existing workflow.',
  },
  pricing: {
    question: 'How do you price projects?',
    answer: 'I can work hourly, on a fixed scope, or as ongoing support depending on the deliverables, complexity, review cycle, and level of coordination involved.',
  },
  afterWrite: {
    question: 'What happens after I get in touch?',
    answer: 'Send a short description of what you need, what you are using today, and what feels unclear or time-consuming. From there we can clarify scope, timeline, and the most useful next step.',
  },
} satisfies Record<string, Faq>

export const allFaqs: Faq[] = Object.values(faqs)
