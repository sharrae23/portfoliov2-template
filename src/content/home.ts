import type { WorkChapter } from './schema'
import { method } from './method'
import { knowledgeBaseSamples, operationsSamples, sopSamples, workflowSamples, workCount } from './work'

export const homeHero = {
  headlineThin: 'Organize the work.',
  headlineBold: 'Document the process.',
  subheadLead: 'Virtual assistance and operations support, backed by technical writing expertise.',
  subheadRest: 'I help growing teams manage research, tasks, project trackers, documentation, and recurring workflows—so work stays organized and nothing important gets overlooked.',
  cta: { label: 'Get in touch', to: '/#contact' },
  servicesCta: { label: 'Explore My Services', to: '/#services' },
  workCta: { label: 'View My Work', to: '/#work' },
  highlights: [
    { value: '5+', label: 'Years in technical writing & documentation' },
    { value: '400+', label: 'Knowledge-base articles managed' },
    { value: 'Top Rated Plus', label: 'Upwork freelancer', url: 'https://www.upwork.com/freelancers/~018cf61028a8af7c20' },
  ],
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

export const workChapters: WorkChapter[] = [
  {
    id: 'screens',
    title: 'Operations & Virtual Assistance',
    line: 'Research, task tracking, project coordination, and everyday operational follow-through.',
    count: operationsSamples.length,
    unit: 'projects',
    description: 'Research, data entry, and structured tracking systems that support day-to-day operations and ongoing project coordination.',
    items: operationsSamples,
  },
  {
    id: 'featured',
    title: 'SOP & Process Documentation',
    line: 'Practical SOPs, checklists, and processes that help teams perform work consistently.',
    count: sopSamples.length,
    unit: 'samples',
    description: 'Selected procedures for short-term rental operations and ISO audit preparation, with identifying details redacted where appropriate.',
    items: sopSamples,
  },
  {
    id: 'case-studies',
    title: 'Help Center & User Documentation',
    line: 'User-facing help articles, product guides, feature instructions, and release notes.',
    count: knowledgeBaseSamples.length,
    unit: 'samples',
    description: 'User-facing help guides, software instructions, release notes, and employee onboarding materials. Software screenshots use test profiles and sample data.',
    items: knowledgeBaseSamples,
  },
  {
    id: 'process',
    title: 'Knowledge & Document Management',
    line: 'Documentation libraries, knowledge-base organization, request workflows, and document control.',
    count: workflowSamples.length,
    unit: 'projects',
    description: 'Knowledge-base planning, document lifecycle and template management, and structured documentation request workflows.',
    items: workflowSamples,
  },
]

export const findChapter = (id: string | undefined) => workChapters.find((chapter) => chapter.id === id)
