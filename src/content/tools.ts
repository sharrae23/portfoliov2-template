import type { ToolMark } from './schema'

const simpleIcon = (slug: string) => `https://cdn.simpleicons.org/${slug}`
const mark = (name: string, slug: string): ToolMark => ({ name, logo: simpleIcon(slug) })
const directMark = (name: string, logo: string): ToolMark => ({ name, logo })

/** Tools Mary has direct working experience with, grouped by how they support client work. */
export const tools = {
  toolA: mark('Confluence', 'confluence'),
  toolB: mark('Notion', 'notion'),
  toolC: mark('Help Scout', 'helpscout'),
  toolD: mark('Airtable', 'airtable'),
  toolE: mark('Jira', 'jira'),
  toolF: mark('Asana', 'asana'),
  toolG: directMark('Monday.com', 'https://cdn.worldvectorlogo.com/logos/monday-1.svg'),
  toolH: mark('Trello', 'trello'),
  toolI: directMark('Google Workspace', 'https://api.iconify.design/logos/google-icon.svg'),
  toolJ: directMark('Microsoft 365', 'https://api.iconify.design/logos/microsoft-icon.svg'),
  toolK: directMark('SharePoint', 'https://api.iconify.design/simple-icons/microsoftsharepoint.svg?color=%230078D4'),
  toolL: directMark('Canva', 'https://api.iconify.design/simple-icons/canva.svg?color=%2300C4CC'),
  toolM: directMark('Slack', 'https://api.iconify.design/logos/slack.svg'),
  toolN: mark('Calendly', 'calendly'),
  toolO: mark('WordPress', 'wordpress'),
  toolP: directMark('ChatGPT', 'https://api.iconify.design/logos/openai-icon.svg'),
  toolQ: mark('Gemini', 'googlegemini'),
  toolR: directMark('Apify', 'https://api.iconify.design/devicon-plain/apify.svg'),
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
