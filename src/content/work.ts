import type { AiGroup, AppBuild, Demo, LinkRef } from './schema'

export const workPage = {
  eyebrow: 'Work',
  title: 'Documentation built around real work.',
  lede: 'A selection of documentation, knowledge-management, workflow, and operations work across corporate and freelance roles.',
}

/* ---------- Featured project ---------- */

export const featuredProject = {
  kicker: 'Featured project',
  title: 'Construction SOP System',
  summary: 'Turned an owner-led construction workflow into practical SOPs and checklists designed to move critical knowledge out of one person’s head and into a repeatable system.',
  link: { label: 'Ask about this project', href: '/#contact' } satisfies LinkRef,
  gallery: [],
}

/* ---------- Case studies and process work ---------- */

export const caseStudies: { id: string; title: string; summary: string; link: LinkRef }[] = [
  {
    id: 'saas-knowledge-base',
    title: 'SaaS Knowledge Base & Document Library',
    summary: 'Created and updated internal and client-facing SaaS documentation using Notion and Help Scout, with an Airtable library for tracking and monthly release notes for product updates.',
    link: { label: 'Ask about this work', href: '/#contact' },
  },
  {
    id: 'enterprise-knowledge-base',
    title: 'Enterprise Knowledge Base Management',
    summary: 'Managed and maintained a large internal knowledge base, including 100+ articles in one role, while coordinating reviews and approvals with stakeholders.',
    link: { label: 'Ask about this work', href: '/#contact' },
  },
]

export const processDoc = {
  title: 'Documentation Request Workflow',
  summary: 'Tracked documentation requests through project-management tools and coordinated with developers, QA, team leads, and stakeholders so drafts, reviews, and approvals kept moving.',
  link: { label: 'Ask about this workflow', href: '/#contact' } satisfies LinkRef,
}

/* ---------- Systems and workflow examples ---------- */

export const screens: { id: string; name: string; kicker: string; summary: string }[] = [
  {
    id: 'confluence-docs',
    name: 'Confluence Documentation',
    kicker: 'Knowledge management',
    summary: 'Structured and maintained documentation in Confluence so teams could find current, usable information more easily.',
  },
  {
    id: 'airtable-library',
    name: 'Airtable Document Library',
    kicker: 'Document control',
    summary: 'Built a searchable tracking library for documentation, ownership, status, and maintenance work.',
  },
  {
    id: 'jira-tracking',
    name: 'Documentation Request Tracking',
    kicker: 'Workflow',
    summary: 'Used Jira and other project-management tools to track requests, feedback, dependencies, and handoffs.',
  },
  {
    id: 'release-notes',
    name: 'Monthly Release Notes',
    kicker: 'SaaS documentation',
    summary: 'Translated software updates into concise release notes for internal and client-facing audiences.',
  },
]

/* ---------- Unused template groups kept empty until real samples are added ---------- */

export const sampleSites: Demo[] = []
export const funnelPages: Demo[] = []
export const bookingPages: Demo[] = []
export const apps: AppBuild[] = []

export const sideProjects: AiGroup[] = [
  {
    title: 'Technical manuals & writing',
    summary: 'Long-form documentation and editorial work built around clarity, consistency, and the needs of the reader.',
    builds: [
      {
        name: 'Technical Manuals & Installation Guides',
        summary: 'Created technical manuals, installation guides, and user-facing materials while coordinating with developers and QA.',
        stack: 'Microsoft 365, SharePoint',
        status: 'Internal',
      },
      {
        name: 'Training Materials & Style Guides',
        summary: 'Produced training documentation and writing standards that helped teams create more consistent materials.',
        stack: 'Microsoft 365, Canva',
        status: 'Internal',
      },
      {
        name: 'Freelance Writing & Editing',
        summary: 'Wrote, edited, and refined content for different audiences before moving deeper into technical documentation and operations.',
        stack: 'Google Workspace, WordPress, Canva',
        status: 'Live',
      },
    ],
  },
]

export const experiments: AiGroup[] = []

const buildsIn = (groups: AiGroup[]) => groups.reduce((n, g) => n + g.builds.length, 0)

export const workCount =
  1 +
  caseStudies.length +
  1 +
  screens.length +
  buildsIn(sideProjects)
