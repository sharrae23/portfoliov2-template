import type { Image } from './schema'
import { certification, site } from './site'

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

export type Capability = {
  title: string
  icon: 'process' | 'knowledge' | 'operations' | 'control'
  bullets: [string, string, string, string]
}

export const capabilities: Capability[] = [
  {
    title: 'SOP & Process Documentation',
    icon: 'process',
    bullets: ['SOPs and checklists', 'Process documentation', 'Workflow standardization', 'Review and approval support'],
  },
  {
    title: 'Knowledge Base Management',
    icon: 'knowledge',
    bullets: ['Knowledge-base articles', 'Content updates and maintenance', 'Release notes', 'Documentation libraries'],
  },
  {
    title: 'Operations & Virtual Assistance',
    icon: 'operations',
    bullets: ['Task and request tracking', 'File and document organization', 'Follow-ups and coordination', 'Admin and day-to-day operations support'],
  },
  {
    title: 'Document Control & Workflow Support',
    icon: 'control',
    bullets: ['Document tracking', 'Review and approval workflows', 'Version and status management', 'Repository organization'],
  },
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
