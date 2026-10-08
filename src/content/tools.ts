import type { ToolMark } from './schema'

const mark = (name: string, file: string): ToolMark => ({ name, logo: `/images/tools/${file}` })

/**
 * Generic monogram marks are used here instead of reproducing third-party brand logos.
 * The visible tool names carry the meaning.
 */
export const tools = {
  toolA: mark('Confluence', 'confluence-ms.svg'),
  toolB: mark('Notion', 'notion-ms.svg'),
  toolC: mark('Help Scout', 'helpscout-ms.svg'),
  toolD: mark('Airtable', 'airtable-ms.svg'),
  toolE: mark('Jira', 'jira-ms.svg'),
  toolF: mark('Asana', 'asana-ms.svg'),
  toolG: mark('Monday.com', 'monday-ms.svg'),
  toolH: mark('Trello', 'trello-ms.svg'),
  toolI: mark('Google Workspace', 'google-workspace-ms.svg'),
  toolJ: mark('Microsoft 365', 'microsoft365-ms.svg'),
  toolK: mark('Canva', 'canva-ms.svg'),
  toolL: mark('ChatGPT', 'chatgpt-ms.svg'),
} satisfies Record<string, ToolMark>

export const dailyTools: ToolMark[] = [
  tools.toolA,
  tools.toolB,
  tools.toolC,
  tools.toolD,
  tools.toolE,
  tools.toolF,
  tools.toolG,
  tools.toolI,
  tools.toolJ,
  tools.toolK,
  tools.toolL,
]
