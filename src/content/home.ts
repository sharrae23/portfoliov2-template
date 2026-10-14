import type { WorkChapter, WorkItem } from './schema'
import { method } from './method'
import { caseStudies, featuredProject, processDoc, screens, workCount } from './work'

export const homeHero = {
  headlineThin: 'Organize the work.',
  headlineBold: 'Document the process.',
  subheadLead: 'Virtual assistance and documentation support',
  subheadRest: 'for growing teams that need clearer workflows, reliable follow-through, and knowledge that does not live in one person’s head.',
  cta: { label: 'Get in touch', to: '/#contact' },
}

export type ManifestoPart = string | { key: string }

export const homeManifesto = {
  eyebrow: method.eyebrow,
  parts: [
    'Clear work starts with',
    { key: 'context.' },
    'Turn scattered knowledge into',
    { key: 'structure,' },
    'make the next step',
    { key: 'usable,' },
    'and keep the system',
    { key: 'current.' },
  ] satisfies ManifestoPart[],
}

export const homeSections = {
  work: {
    eyebrow: 'Selected work',
    title: 'Documentation that makes work easier.',
  },
  proof: {
    eyebrow: 'Experience',
    title: 'Documentation experience across teams and systems.',
  },
  objections: {
    eyebrow: 'Before you write',
    title: 'A few useful answers before we work together.',
  },
}

export const ctaBand = {
  title: 'What keeps getting stuck?',
  body: 'Tell me what is scattered, repeated, undocumented, or difficult to hand off. I can help organize the workflow and document the next steps.',
  button: 'Email me your project',
}

export const chapterPath = (id: string) => `/work/${id}`

export const workSection = {
  ...homeSections.work,
  titleThin: 'Work that keeps',
  titleBold: 'teams moving.',
  all: { label: `See all work · ${workCount} examples`, to: '/work' },
}

const systemItems: WorkItem[] = screens.map((s) => ({
  id: s.id,
  name: s.name,
  kicker: s.kicker,
  summary: s.summary,
}))

export const workChapters: WorkChapter[] = [
  {
    id: 'featured',
    title: 'SOP & Process Documentation',
    line: 'SOPs, checklists, and process guidance built around how the work actually gets done.',
    count: 1,
    unit: 'project',
    description: featuredProject.summary,
    items: [],
  },
  {
    id: 'case-studies',
    title: 'Knowledge Base Management',
    line: 'Internal and client-facing knowledge kept clear, findable, and current.',
    count: caseStudies.length,
    unit: 'cases',
    description: 'Knowledge-base creation, maintenance, document-library tracking, and release documentation across SaaS and enterprise environments.',
    items: caseStudies.map((study) => ({
      id: study.id,
      name: study.title,
      kicker: 'Case study',
      summary: study.summary,
    })),
  },
  {
    id: 'screens',
    title: 'Operations & Virtual Assistance',
    line: 'Task tracking, file organization, recurring updates, and day-to-day follow-through.',
    count: systemItems.length,
    unit: 'examples',
    description: 'Examples of request tracking, organized documentation libraries, knowledge systems, and recurring updates that support day-to-day operations.',
    items: systemItems,
  },
  {
    id: 'process',
    title: 'Document Control & Workflow Support',
    line: 'Requests, reviews, approvals, versions, and handoffs kept visible and moving.',
    count: 1,
    unit: 'workflow',
    description: processDoc.summary,
    items: [],
  },
]

export const findChapter = (id: string | undefined) => workChapters.find((chapter) => chapter.id === id)
