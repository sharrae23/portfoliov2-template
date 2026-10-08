import type { Image, ToolMark } from './schema'
import { certification, externalLinks, site } from './site'
import { tools } from './tools'

export const aboutSection = {
  eyebrow: 'About',
  titleThin: "Hi, I'm",
  titleBold: `${site.name}.`,
  lede: 'I help teams keep the work organized, then document the process so it stays organized.',
  lead: 'I started with writing and stayed for the process behind it.',
  leadQuiet: 'Over 5+ years in technical writing and documentation, I moved deeper into knowledge bases, SOPs, document control, release notes, request tracking, and the operational work around them.',
  note: {
    company: 'I work across documentation and operations support',
    product: { label: 'my Upwork profile', href: externalLinks.resource },
    rest: 'has more of my freelance history and current availability.',
  },
  picture: {
    src: '/images/profile/desk.webp',
    srcSet: '/images/profile/800/desk.webp 800w, /images/profile/desk.webp 1200w',
    alt: 'Illustration representing documentation and operations work at a desk',
    width: 1200,
    height: 889,
  } satisfies Image,
}

export const capabilities: { title: string; tools: ToolMark[] }[] = [
  { title: 'SOPs & Process Documentation', tools: [tools.toolB, tools.toolI, tools.toolJ] },
  { title: 'Knowledge Bases & Help Content', tools: [tools.toolA, tools.toolB, tools.toolC] },
  { title: 'Document Control & Workflow Support', tools: [tools.toolD, tools.toolE, tools.toolG] },
  { title: 'Operations & Virtual Assistance', tools: [tools.toolF, tools.toolG, tools.toolI] },
]

export type AboutCredential = {
  id: 'cert' | 'place' | 'community' | 'partner'
  title: string
  detail: string
  image?: Image
  imageDark?: Image
  href?: string
}

export const credentials: AboutCredential[] = [
  { id: 'cert', title: certification.title, detail: certification.detail },
  { id: 'place', title: 'B.S. Computer Engineering', detail: 'Bulacan State University' },
  { id: 'community', title: 'C2 English', detail: 'EF SET proficiency' },
  { id: 'partner', title: `Based ${site.timePlace}`, detail: 'UTC+8 · Flexible overlap for distributed teams' },
]
