import type { ToolMark } from './schema'

const logo = (slug: string) => `https://cdn.simpleicons.org/${slug}`
const mark = (name: string, slug: string): ToolMark => ({ name, logo: logo(slug) })

/** Tools Mary has direct working experience with, grouped by how they support client work. */
export const tools = {
  toolA: mark('Confluence', 'confluence'),
  toolB: mark('Notion', 'notion'),
  toolC: mark('Help Scout', 'helpscout'),
  toolD: mark('Airtable', 'airtable'),
  toolE: mark('Jira', 'jira'),
  toolF: mark('Asana', 'asana'),
  toolG: mark('Monday.com', 'mondaydotcom'),
  toolH: mark('Trello', 'trello'),
  toolI: mark('Google Workspace', 'googleworkspace'),
  toolJ: mark('Microsoft 365', 'microsoft365'),
  toolK: mark('SharePoint', 'microsoftsharepoint'),
  toolL: mark('Canva', 'canva'),
  toolM: mark('Slack', 'slack'),
  toolN: mark('Calendly', 'calendly'),
  toolO: mark('WordPress', 'wordpress'),
  toolP: mark('ChatGPT', 'openai'),
  toolQ: mark('Gemini', 'googlegemini'),
  toolR: mark('Apify', 'apify'),
} satisfies Record<string, ToolMark>

export const toolsSection = {
  eyebrow: 'Tools & Systems',
  titleThin: 'Tools I use to keep',
  titleBold: 'work moving.',
  lede: 'From documentation and project tracking to day-to-day operations, content support, and research.',
}

export const toolGroups = [
  {
    title: 'Documentation & Knowledge',
    tools: [tools.toolA, tools.toolB, tools.toolC, tools.toolK, tools.toolD],
  },
  {
    title: 'Project & Operations',
    tools: [tools.toolF, tools.toolG, tools.toolE, tools.toolH, tools.toolM],
  },
  {
    title: 'Productivity & Collaboration',
    tools: [tools.toolI, tools.toolJ, tools.toolN],
  },
  {
    title: 'Content & Creative',
    tools: [tools.toolL, tools.toolO],
  },
  {
    title: 'AI & Research',
    tools: [tools.toolP, tools.toolQ, tools.toolR],
  },
] as const

export const marqueeTools: ToolMark[] = [
  tools.toolA,
  tools.toolB,
  tools.toolD,
  tools.toolF,
  tools.toolC,
  tools.toolL,
  tools.toolG,
  tools.toolM,
  tools.toolP,
  tools.toolQ,
]

export const dailyTools: ToolMark[] = [
  tools.toolA,
  tools.toolB,
  tools.toolD,
  tools.toolE,
  tools.toolF,
  tools.toolI,
  tools.toolJ,
  tools.toolK,
]
