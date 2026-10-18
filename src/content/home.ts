import type { WorkChapter } from './schema'
import { method } from './method'
import { knowledgeBaseSamples, operationsSamples, sopSamples, workflowSamples, workCount } from './work'

export const homeHero = {
  headlineThin: 'Organize the work.',
  headlineBold: 'Document the process.',
  subheadLead: 'Virtual assistance and documentation support',
  subheadRest: 'for growing teams that need clearer workflows, reliable follow-through, and knowledge that does not live in one person’s head.',
  cta: { label: 'Get in touch', to: '/#contact' },
  workCta: { label: 'View my work samples', to: '/#work' },
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
    unit: 'case study',
    description: 'Behind-the-scenes operations support, including content tracking, organized documentation libraries, and recurring task visibility.',
    items: operationsSamples,
  },
  {
    id: 'featured',
    title: 'SOP & Process Documentation',
    line: 'Practical SOPs, checklists, and processes that help teams perform work consistently.',
    count: sopSamples.length,
    unit: 'samples',
    description: 'Operational SOP samples for short-term rental teams, with client-specific details redacted where needed.',
    items: sopSamples,
  },
  {
    id: 'case-studies',
    title: 'SaaS & Help Center Documentation',
    line: 'User-facing help articles, product guides, feature instructions, and release notes.',
    count: knowledgeBaseSamples.length,
    unit: 'articles',
    description: 'SaaS help center and release documentation. Doulado product screenshots use test profiles and sample data.',
    items: knowledgeBaseSamples,
  },
  {
    id: 'process',
    title: 'Knowledge & Document Management',
    line: 'Documentation libraries, knowledge-base organization, request workflows, and document control.',
    count: workflowSamples.length,
    unit: 'examples',
    description: 'Knowledge organization and document-control workflows, including content maps and request review processes.',
    items: workflowSamples,
  },
]

export const findChapter = (id: string | undefined) => workChapters.find((chapter) => chapter.id === id)
