import type { Image, ToolMark } from './schema'
import { certification, site } from './site'
import { tools } from './tools'

export const aboutSection = {
  eyebrow: 'About',
  titleThin: "Hi, I'm",
  titleBold: `${site.name}.`,
  lede: 'I work where documentation and day-to-day operations meet: turning scattered information into clear systems people can actually use.',
  lead: 'I started with writing. I stayed for the process behind it.',
  leadQuiet: 'For 5+ years, I have helped teams create, maintain, organize, and move documentation through real workflows.',
  note: 'My work goes beyond writing: I manage knowledge bases and document repositories, track requests, coordinate reviews, organize documentation libraries, and help changing processes stay documented.',
  picture: {
    src: '/images/profile/desk.webp',
    srcSet: '/images/profile/800/desk.webp 800w, /images/profile/desk.webp 1200w',
    alt: `Illustration representing ${site.name} working at a desk`,
    width: 1200,
    height: 889,
  } satisfies Image,
}

export const capabilities: { title: string; tools: ToolMark[] }[] = [
  { title: 'SOP & Process Documentation', tools: [tools.toolA, tools.toolB, tools.toolJ] },
  { title: 'Knowledge Base Management', tools: [tools.toolA, tools.toolB, tools.toolC, tools.toolD] },
  { title: 'Operations & Virtual Assistance', tools: [tools.toolF, tools.toolG, tools.toolI] },
  { title: 'Document Control & Workflow Support', tools: [tools.toolD, tools.toolE, tools.toolK] },
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
  { id: 'place', title: `Based ${site.timePlace}`, detail: 'UTC+8 · Flexible overlap' },
  { id: 'community', title: 'C2 English', detail: 'EF SET' },
  { id: 'partner', title: 'B.S. Computer Engineering', detail: 'Bulacan State University' },
]
