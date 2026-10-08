import type { WorkChapter } from './schema'
import { method } from './method'
import { tools } from './tools'

export const homeHero = {
  headlineThin: 'Organize the work.',
  headlineBold: 'Document the process.',
  subhead: 'Documentation and operations support for growing teams that need clearer workflows, reliable follow-through, and knowledge that does not live in one person\'s head.',
  cta: { label: 'Get in touch', to: '/#contact' },
}

export type ManifestoPart = string | { key: string }

export const homeManifesto = {
  eyebrow: method.eyebrow,
  parts: [
    'Good operations need',
    { key: 'clarity,' },
    'visible',
    { key: 'ownership,' },
    'reliable',
    { key: 'follow-through,' },
    'and documentation that stays',
    { key: 'maintainable.' },
  ] satisfies ManifestoPart[],
}

export const homeSections = {
  work: {
    eyebrow: 'Selected work',
    title: 'Documentation and operations systems built for real teams.',
  },
  proof: {
    eyebrow: 'Experience',
    title: 'The work behind the documentation.',
  },
  objections: {
    eyebrow: 'Before you write',
    title: 'A few quick answers.',
  },
}

export const ctaBand = {
  title: 'Tell me what keeps getting lost, repeated, or stuck.',
  body: 'Share the workflow, documentation problem, or recurring task that is slowing the team down. I can help make the next step clearer.',
  button: 'Email me',
}

export const chapterPath = (id: string) => `/work/${id}`

export const workSection = {
  ...homeSections.work,
  titleThin: 'Work that turns',
  titleBold: 'scattered into structured.',
  all: { label: 'Browse work areas', to: '/#work' },
}

const item = (id: string, name: string, kicker: string, summary: string) => ({
  id,
  name,
  kicker,
  summary,
})

export const workChapters: WorkChapter[] = [
  {
    id: 'featured',
    title: 'Construction SOP System',
    line: 'Operational know-how turned into practical SOPs and checklists.',
    count: 3,
    unit: 'workflows',
    description: 'An owner-led construction business needed repeatable processes that did not depend on one person remembering every step.',
    marks: [tools.toolB, tools.toolI, tools.toolJ],
    items: [
      item('supplier-quotes', 'Supplier Quotes & Procurement', 'SOP', 'Structured the steps, decisions, and handoffs around collecting and comparing supplier quotes.'),
      item('defects-callbacks', 'Defects & Callbacks', 'Checklist', 'Documented a clearer path for logging issues, assigning action, and following through to resolution.'),
      item('site-checklists', 'Site & Trade Checklists', 'Process', 'Converted recurring site activities into practical checklists for consistent execution and handoff.'),
    ],
  },
  {
    id: 'case-studies',
    title: 'SaaS Knowledge Base',
    line: 'Client-facing help content, internal documentation, and release updates.',
    count: 3,
    unit: 'systems',
    description: 'Documentation support for a SaaS platform serving doulas and patients, with content maintained across support and workspace tools.',
    marks: [tools.toolB, tools.toolC, tools.toolD],
    items: [
      item('help-content', 'Help Center Content', 'Knowledge base', 'Created and revised user-facing documentation, checking product steps where possible before publishing.'),
      item('document-library', 'Document Library', 'Airtable', 'Built and maintained a trackable document library so content, status, and ownership were easier to see.'),
      item('release-notes', 'Monthly Release Notes', 'Product updates', 'Turned software changes into clear monthly release notes for internal and client-facing audiences.'),
    ],
  },
  {
    id: 'process',
    title: 'Documentation Request Workflow',
    line: 'A clearer way to request, review, approve, and track documentation.',
    count: 3,
    unit: 'stages',
    description: 'A documentation workflow designed to make requests, status, ownership, reviews, and approvals easier to follow.',
    marks: [tools.toolE, tools.toolA, tools.toolD],
    items: [
      item('request-intake', 'Request Intake', 'Workflow', 'Centralized incoming documentation requests so scope and ownership were visible earlier.'),
      item('review-approval', 'Review & Approval', 'Governance', 'Supported stakeholder review and approval steps rather than letting documents stall in informal follow-up.'),
      item('status-tracking', 'Status Tracking', 'Document control', 'Used request tracking and repositories to keep current state and next actions visible.'),
    ],
  },
  {
    id: 'screens',
    title: 'Confluence Documentation Redesign',
    line: 'Same content, clearer hierarchy and easier scanning.',
    count: 4,
    unit: 'improvements',
    description: 'A formatting and usability pass on existing Confluence documentation without changing the underlying content.',
    marks: [tools.toolA, tools.toolK],
    items: [
      item('navigation', 'Navigation & Table of Contents', 'Information design', 'Added clearer navigation and page structure for long documentation.'),
      item('layouts', 'Two-Column Layouts', 'Formatting', 'Reworked dense lists into layouts that were easier to scan without rewriting the source content.'),
      item('process-visuals', 'Process Tables', 'Visual structure', 'Converted process flows into compact visual tables that reduced page heaviness.'),
      item('consistency', 'Spacing & List Consistency', 'Cleanup', 'Standardized spacing, lists, and emphasis so pages felt more deliberate and readable.'),
    ],
  },
  {
    id: 'websites',
    title: 'Enterprise Knowledge Base',
    line: 'High-volume documentation across multiple teams and stakeholders.',
    count: 3,
    unit: 'responsibilities',
    description: 'Knowledge-base work across multiple teams, including article creation, stakeholder coordination, and documentation-request processes.',
    marks: [tools.toolA, tools.toolE, tools.toolI],
    items: [
      item('kb-articles', 'Knowledge-Base Articles', 'Technical writing', 'Authored and maintained a large body of internal knowledge content across previous roles.'),
      item('stakeholder-review', 'Stakeholder Review', 'Coordination', 'Worked with subject-matter experts and stakeholders to review and approve documentation.'),
      item('request-process', 'Documentation Requests', 'Operations', 'Helped establish clearer ways to request and track documentation work across teams.'),
    ],
  },
  {
    id: 'apps',
    title: 'Technical Manuals & Training',
    line: 'Technical source material translated into usable guidance.',
    count: 3,
    unit: 'deliverables',
    description: 'Technical manuals, installation guides, style guidance, and training material built with input from developers and QA.',
    marks: [tools.toolE, tools.toolJ, tools.toolK],
    items: [
      item('manuals', 'Technical Manuals', 'Documentation', 'Created manuals and installation guidance for technical products and processes.'),
      item('training', 'Training Materials', 'Enablement', 'Translated releases and technical changes into material teams could use for training.'),
      item('source-validation', 'Developer & QA Validation', 'Collaboration', 'Worked directly with developers and QA to clarify source information instead of guessing at technical behavior.'),
    ],
  },
  {
    id: 'side-projects',
    title: 'Document Control & QMS Support',
    line: 'Documentation treated as a maintained system, not a folder of files.',
    count: 3,
    unit: 'practices',
    description: 'Document-control and quality-management support focused on ownership, repositories, updates, and controlled change.',
    marks: [tools.toolA, tools.toolE, tools.toolJ],
    items: [
      item('repositories', 'Documentation Repositories', 'Document control', 'Maintained organized repositories so teams could find the current document more reliably.'),
      item('controlled-updates', 'Controlled Updates', 'QMS support', 'Supported document updates with attention to review, versioning, and approval requirements.'),
      item('quality-process', 'Quality Process Support', 'ISO 9001', 'Applied document-control discipline alongside ISO 9001-related quality-management work.'),
    ],
  },
  {
    id: 'experiments',
    title: 'Operations & Virtual Assistance',
    line: 'The follow-through around the work: tracking, files, coordination, and admin support.',
    count: 4,
    unit: 'support areas',
    description: 'Operations support that complements documentation: trackers, follow-ups, file organization, research, coordination, and recurring admin work.',
    marks: [tools.toolF, tools.toolG, tools.toolI],
    items: [
      item('tracking', 'Task & Request Tracking', 'Operations', 'Keep requests, statuses, and next actions visible across project-management tools.'),
      item('files', 'File & Information Organization', 'Admin support', 'Organize working files, references, and document libraries so information is easier to retrieve.'),
      item('coordination', 'Coordination & Follow-up', 'Virtual assistance', 'Support recurring follow-ups and handoffs so work does not disappear between people.'),
      item('research', 'Research & Content Support', 'Flexible support', 'Handle research, content preparation, and practical support tasks around ongoing projects.'),
    ],
  },
]

export const findChapter = (id: string | undefined) => workChapters.find((chapter) => chapter.id === id)
