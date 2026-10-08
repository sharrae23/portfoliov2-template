import type { ToolMark } from './schema'

const mark = (name: string, file: string, mono?: true): ToolMark => ({ name, logo: `/images/tools/${file}`, mono })

/**
 * Tools Mary has worked with. The template artwork is kept as a neutral visual placeholder until
 * branded tool marks are swapped in.
 */
export const tools = {
  toolA: mark('Confluence', 'tool-01.svg'),
  toolB: mark('Notion', 'tool-02.svg'),
  toolC: mark('Help Scout', 'tool-03.svg'),
  toolD: mark('Airtable', 'tool-04.svg'),
  toolE: mark('Jira', 'tool-05.svg'),
  toolF: mark('Asana', 'tool-06.svg'),
  toolG: mark('Monday.com', 'tool-07.svg'),
  toolH: mark('Trello', 'tool-08.svg'),
  toolI: mark('Google Workspace', 'tool-09.svg'),
  toolJ: mark('Microsoft 365', 'tool-10.svg'),
  toolK: mark('SharePoint', 'tool-11.svg'),
  toolL: mark('Canva', 'tool-12.svg'),
} satisfies Record<string, ToolMark>

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
