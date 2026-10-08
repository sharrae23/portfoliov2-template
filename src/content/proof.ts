import type { ClientAccount, Quote, VideoTestimonial } from './schema'

export const proofPage = {
  eyebrow: 'Experience',
  titleThin: 'Documentation across',
  titleBold: 'teams and systems.',
  bands: { videos: 'Client clips', quotes: 'Feedback', clients: 'Selected experience' },
  lede: 'My background spans technical writing, knowledge-base management, document control, SaaS documentation, and operational support.',
}

export const clientAccounts: ClientAccount[] = [
  {
    label: 'Yempo Solutions · 2024–present',
    role: 'Technical Writing & Documentation',
    work: 'Support documentation work in a corporate environment, including knowledge management, process documentation, and maintaining information as workflows change.',
    tags: ['Technical writing', 'Documentation', 'Knowledge management'],
  },
  {
    label: 'Freelance SaaS client · 2026',
    role: 'SaaS Documentation Specialist',
    work: 'Created internal and client-facing technical documentation, updated knowledge-base content, built an Airtable document library, and produced monthly release notes.',
    tags: ['Notion', 'Help Scout', 'Airtable'],
  },
  {
    label: 'Concentrix / Google · 2023–2024',
    role: 'Knowledge Base & Documentation',
    work: 'Managed a large internal knowledge base, including 100+ articles in one role, and coordinated content reviews and approvals with stakeholders.',
    tags: ['Knowledge base', 'Stakeholders', 'Content governance'],
  },
  {
    label: 'RT Lawrence · 2021–2023',
    role: 'Technical Writer',
    work: 'Created technical manuals, installation guides, training materials, and style guidance while coordinating with developers and QA.',
    tags: ['Manuals', 'Training', 'Developer + QA'],
  },
  {
    label: 'Freelance · 2017–2021',
    role: 'Writer & Editor',
    work: 'Wrote, edited, and refined content for different audiences, building the editorial foundation that later expanded into technical documentation and operations.',
    tags: ['Writing', 'Editing', 'Content'],
  },
]

/** Real client clips and direct quotes can be added once portfolio-safe versions are supplied. */
export const videoTestimonials: VideoTestimonial[] = []
export const communityQuotes: Quote[] = []
