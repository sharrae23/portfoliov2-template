import type { ToolMark, WorkChapter, WorkItem } from './schema'
import { site } from './site'
import { method } from './method'
import { tools } from './tools'
import { caseStudies, featuredProject, processDoc, screens, sideProjects, workCount } from './work'

export const homeHero = {
  headlineThin: 'Organize the work.',
  headlineBold: 'Document the process.',
  subhead: 'Virtual assistance and documentation support for growing teams that need clearer workflows, reliable follow-through, and knowledge that does not live in one person’s head.',
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

const groupItems = (groups: typeof sideProjects): WorkItem[] =>
  groups.flatMap((group) =>
    group.builds.map((build) => ({
      id: build.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: build.name,
      kicker: group.title,
      summary: build.summary,
      stack: build.stack,
      status: build.status,
    })),
  )

const siteMark: ToolMark = { name: site.brand, logo: site.logo.light }
export const chapterPath = (id: string) => `/work/${id}`

const technicalItems = groupItems(sideProjects)

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
    title: 'Construction SOP System',
    line: 'Operational knowledge turned into repeatable SOPs and checklists.',
    count: 1,
    unit: 'project',
    description: featuredProject.summary,
    marks: [tools.toolJ, siteMark],
    items: [],
  },
  {
    id: 'case-studies',
    title: 'Knowledge Bases & SaaS Docs',
    line: 'Internal and client-facing content designed to stay findable and current.',
    count: caseStudies.length,
    unit: 'cases',
    description: 'Knowledge-base creation, maintenance, document-library tracking, and release documentation across SaaS and enterprise environments.',
    marks: [tools.toolA, tools.toolB, tools.toolC],
    items: caseStudies.map((study) => ({
      id: study.id,
      name: study.title,
      kicker: 'Case study',
      summary: study.summary,
    })),
  },
  {
    id: 'process',
    title: 'Documentation Workflows',
    line: 'Requests, reviews, approvals, and handoffs kept visible.',
    count: 1,
    unit: 'workflow',
    description: processDoc.summary,
    marks: [tools.toolE, tools.toolF, tools.toolD],
    items: [],
  },
  {
    id: 'screens',
    title: 'Operations & Document Control',
    line: 'Systems for organizing documentation work and everyday follow-through.',
    count: systemItems.length,
    unit: 'examples',
    description: 'Confluence documentation, request tracking, document libraries, and recurring release communication.',
    marks: [tools.toolD, tools.toolE, tools.toolK],
    items: systemItems,
  },
  {
    id: 'side-projects',
    title: 'Technical Documentation',
    line: 'Manuals, installation guides, training material, and editorial work.',
    count: technicalItems.length,
    unit: 'examples',
    description: 'Technical and user-facing materials developed with developers, QA, stakeholders, and end readers in mind.',
    marks: [tools.toolJ, tools.toolK, tools.toolL],
    items: technicalItems,
  },
]

export const findChapter = (id: string | undefined) => workChapters.find((chapter) => chapter.id === id)
