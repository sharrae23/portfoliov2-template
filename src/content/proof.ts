import type { ClientAccount, Quote, VideoTestimonial } from './schema'

export const proofPage = {
  eyebrow: 'Experience',
  titleThin: 'Support across',
  titleBold: 'teams and systems.',
  bands: { videos: 'Client clips', quotes: 'Feedback', clients: 'Selected experience' },
  lede: 'I help teams stay organized behind the scenes, combining hands-on operations support with technical writing, document management, and knowledge-base experience.',
}

export const clientAccounts: ClientAccount[] = [
  {
    label: 'Upwork · 2026',
    role: 'Research & Operations Coordinator',
    work: 'Supports multiple creative projects through structured research, source gathering, comparison sheets, project tracking, file organization, and recurring administrative work, turning scattered information into review-ready materials that make decisions easier and reduce manual follow-up.',
    tags: ['Research support', 'Operations support', 'Project coordination', 'Asana + Notion'],
  },
  {
    label: 'Upwork · 2026',
    role: 'Creative Operations Assistant',
    work: 'Keeps recurring content-production work organized through trackers, spreadsheets, scheduling support, prep materials, checklists, and structured files so projects keep moving without details falling through the cracks.',
    tags: ['Operations support', 'Project coordination', 'Tracking'],
  },
  {
    label: 'Upwork · 2026',
    role: 'Creative Project Assistant',
    work: 'Organized story canon, project files, visual references, and production details for an original anime/manga IP, helping keep a growing creative project structured and easier to coordinate across writers, artists, and collaborators.',
    tags: ['Project support', 'File organization', 'Content coordination'],
  },
  {
    label: 'Upwork · 2026',
    role: 'SaaS Product Technical Writer',
    work: 'Created and maintained internal and client-facing SaaS documentation, including help center articles, product guides, release notes, and knowledge-base content, while organizing documentation in Airtable to keep product information structured and current.',
    tags: ['SaaS documentation', 'Help center articles', 'Knowledge base', 'Airtable'],
  },
  {
    label: 'Upwork · 2026',
    role: 'Virtual Assistant – Administrative Support',
    work: 'Provided administrative and design support for a growing business, helping organize assigned work, prepare client-facing materials, and keep active deliverables moving through completion and handoff.',
    tags: ['Virtual assistance', 'Administrative support', 'Canva'],
  },
  {
    label: 'Yempo Solutions · 2024',
    role: 'Technical Writer – Document Management & ISO Compliance',
    work: 'Supports document management and process consistency by maintaining controlled documentation, coordinating updates, documenting changing workflows, and supporting ISO-aligned documentation practices across teams.',
    tags: ['Technical writing', 'Document management', 'ISO compliance'],
  },
  {
    label: 'Concentrix · 2023–2024',
    role: 'Knowledge Base Technical Writer',
    work: 'Managed and maintained a large internal knowledge base, including 100+ articles in one role, while coordinating content reviews, approvals, and updates with stakeholders to keep information accurate and usable.',
    tags: ['Knowledge base', 'Technical writing', 'Content governance'],
  },
  {
    label: 'RT Lawrence · 2021–2023',
    role: 'Document Specialist & Product Team Coordinator',
    work: 'Created software manuals, installation guides, training materials, and documentation standards while coordinating a nine-person team’s day-to-day tasks and helping work move between product, development, QA, and documentation teams.',
    tags: ['Documentation', 'Software manuals', 'Team coordination', 'Administrative support'],
  },
  {
    label: 'Freelance · 2017–2021',
    role: 'Freelance Writer & Editor',
    work: 'Supported client projects through research, writing, editing, and organized delivery, building the communication and attention-to-detail foundation I now bring to documentation and operations work.',
    tags: ['Content writing', 'Editing', 'Client support'],
  },
]

/** Real client clips and direct quotes can be added once portfolio-safe versions are supplied. */
export const videoTestimonials: VideoTestimonial[] = []
export const communityQuotes: Quote[] = []
