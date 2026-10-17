export type ResumeRole = {
  title: string
  company: string
  year: string
  bullets: string[]
}

export type ResumeData = {
  id: 'operations-va' | 'technical-writer'
  title: string
  subtitle: string
  summary: string
  skillGroups: { label: string; skills: string[] }[]
  experience: ResumeRole[]
  tools: { label: string; items: string[] }[]
  selectedExperience?: { label: string; items: string[] }[]
}

export const resumePage = {
  eyebrow: 'Resumes',
  titleThin: 'Two ways I can',
  titleBold: 'support your team.',
  lede: 'Choose the resume that best matches the role: operations and virtual assistance, or technical writing and documentation.',
}

export const resumes: ResumeData[] = [
  {
    id: 'operations-va',
    title: 'Virtual Assistant | Operations & Administrative Support',
    subtitle: 'Operations, research, project coordination, administrative support, and structured workflow management.',
    summary:
      'Virtual Assistant and Operations Support professional with a background in project coordination, administrative support, technical writing, and document management. Experienced in organizing tasks, trackers, files, research, schedules, documentation, and recurring workflows for creative, SaaS, and corporate teams. Strong at turning scattered information and clear direction into structured, review-ready work that helps projects stay organized and moving.',
    skillGroups: [
      { label: 'Operations & Admin', skills: ['Virtual Assistance', 'Administrative Support', 'Operations Support', 'Project Coordination', 'Scheduling Support'] },
      { label: 'Organization & Workflow', skills: ['Task Tracking', 'Spreadsheet Management', 'File Organization', 'Documentation', 'Follow-ups'] },
      { label: 'Research & Communication', skills: ['Online Research', 'Research Summaries', 'Stakeholder Communication', 'Meeting Notes', 'Action Items'] },
    ],
    experience: [
      {
        title: 'Research & Operations Coordinator',
        company: 'Upwork',
        year: '2026',
        bullets: [
          'Support multiple creative projects through structured online research, source gathering, comparison sheets, databases, project tracking, and recurring administrative work.',
          'Organize findings into concise, review-ready summaries with source links, dates, costs, policies, limitations, and recommended next actions.',
          'Maintain project tasks, statuses, deadlines, links, and completion notes in Asana.',
          'Update Notion pages, Google Sheets, trackers, research folders, and project databases.',
          'Prepare comparison sheets, checklists, forms, first-pass operational documents, and organized action items.',
        ],
      },
      {
        title: 'Creative Operations Assistant',
        company: 'Upwork',
        year: '2026',
        bullets: [
          'Maintain trackers, spreadsheets, checklists, prep materials, schedules, and structured project files for long-form content production.',
          'Organize topic lists, research notes, gameplay timestamps, production statuses, and upload requirements.',
          'Turn assigned information into concise summaries and structured prep documents.',
          'Support repeatable workflows and recurring operational tasks to help projects move through production consistently.',
        ],
      },
      {
        title: 'Creative Project Assistant',
        company: 'Upwork',
        year: '2026',
        bullets: [
          'Organized story canon, worldbuilding documents, character information, visual references, and production files for an original anime/manga IP.',
          'Structured project information into folders, summaries, checklists, and trackable production tasks.',
          'Helped identify script inconsistencies and maintain continuity across developing story materials.',
          'Supported project organization across writers, artists, and other creative collaborators.',
        ],
      },
      {
        title: 'Virtual Assistant – Administrative Support',
        company: 'Upwork',
        year: '2026',
        bullets: [
          'Provided administrative and design support for a growing business.',
          'Organized assigned work and prepared client-facing materials.',
          'Supported presentation and Canva design tasks.',
          'Maintained organized project files and completed active deliverables through final handoff.',
        ],
      },
      {
        title: 'Technical Writer – Document Management & ISO Compliance',
        company: 'Yempo Solutions',
        year: '2024',
        bullets: [
          'Maintained controlled documents and supported document-management processes across teams.',
          'Coordinated documentation requests, revisions, reviews, and process updates.',
          'Documented changing workflows to keep operational information current.',
          'Supported ISO 9001-aligned documentation and document-control requirements.',
        ],
      },
      {
        title: 'Knowledge Base Technical Writer',
        company: 'Concentrix',
        year: '2023–2024',
        bullets: [
          'Managed and maintained a large internal knowledge base, including 100+ articles in one role.',
          'Coordinated documentation reviews, approvals, updates, and stakeholder requests.',
          'Organized knowledge content to keep information accurate, current, and accessible.',
        ],
      },
      {
        title: 'Document Specialist & Product Team Coordinator',
        company: 'RT Lawrence',
        year: '2021–2023',
        bullets: [
          'Coordinated the day-to-day work of a nine-person team supporting product and documentation activities.',
          'Tracked assignments and helped move work between product, development, QA, and documentation teams.',
          'Created and maintained software manuals, installation guides, training materials, and documentation standards.',
          'Supported administrative coordination, documentation requests, and recurring team workflows.',
        ],
      },
      {
        title: 'Freelance Writer & Editor',
        company: 'Freelance',
        year: '2017–2021',
        bullets: [
          'Managed client writing and editing assignments from research through final delivery.',
          'Organized project requirements, revisions, source material, and client feedback.',
          'Produced clear written content while maintaining deadlines and communication with clients.',
        ],
      },
    ],
    tools: [
      { label: 'Project & Operations', items: ['Asana', 'Monday.com', 'Jira', 'Trello', 'Slack'] },
      { label: 'Documentation & Knowledge', items: ['Confluence', 'Notion', 'Help Scout', 'Airtable', 'SharePoint'] },
      { label: 'Productivity', items: ['Google Workspace', 'Microsoft 365', 'Calendly'] },
      { label: 'Content', items: ['Canva', 'WordPress'] },
      { label: 'AI & Research', items: ['ChatGPT', 'Gemini', 'Apify'] },
    ],
  },
  {
    id: 'technical-writer',
    title: 'Technical Writer | Knowledge Base & Documentation Specialist',
    subtitle: 'SOPs, SaaS help content, knowledge bases, document control, manuals, and product documentation.',
    summary:
      'Technical Writer and Documentation Specialist with 5+ years of experience creating and maintaining SOPs, knowledge-base articles, SaaS help content, software manuals, process documentation, release notes, and controlled documents. Experienced in document management, ISO-aligned workflows, knowledge-base administration, documentation libraries, stakeholder reviews, and cross-functional coordination with product, development, QA, and operations teams.',
    skillGroups: [
      { label: 'Documentation', skills: ['Technical Writing', 'SOP Writing', 'Process Documentation', 'User Guides', 'Software Manuals', 'Release Notes'] },
      { label: 'Knowledge & Content', skills: ['Knowledge Base Management', 'Help Center Articles', 'SaaS Documentation', 'Product Documentation', 'Content Governance'] },
      { label: 'Document Control', skills: ['Document Management', 'Document Control', 'Information Architecture', 'ISO 9001 Documentation'] },
      { label: 'Collaboration', skills: ['Stakeholder Coordination', 'Development & QA Collaboration', 'Editing & Proofreading'] },
    ],
    experience: [
      {
        title: 'SaaS Product Technical Writer',
        company: 'Upwork',
        year: '2026',
        bullets: [
          'Created and maintained internal and client-facing SaaS documentation, including help center articles, user guides, feature documentation, and release notes.',
          'Updated existing knowledge-base content to reflect product and workflow changes.',
          'Created monthly release notes translating software updates into clear user-facing information.',
          'Built and maintained an Airtable documentation library for tracking article status, categories, relationships, URLs, and content coverage.',
          'Organized knowledge-base information architecture and documentation structures using Notion.',
          'Used Help Scout to maintain and publish customer-facing documentation.',
          'Validated documented product steps and workflows to improve instructional accuracy.',
        ],
      },
      {
        title: 'SOP & Process Documentation Writer',
        company: 'Freelance',
        year: '2026',
        bullets: [
          'Created operational SOPs for a short-term rental management company based on existing business processes.',
          'Transformed operational knowledge into structured, step-by-step procedures that teams could consistently follow.',
          'Documented workflows involving cleaning audits, field communication, scheduling, escalation, quality checks, and operational handoffs.',
          'Structured SOPs with defined scopes, procedures, decision points, exceptions, and compliance requirements.',
          'Coordinated revisions and incorporated stakeholder feedback through approval.',
        ],
      },
      {
        title: 'Technical Writer – Document Management & ISO Compliance',
        company: 'Yempo Solutions',
        year: '2024',
        bullets: [
          'Maintained controlled documents and documentation repositories in a corporate environment.',
          'Supported document-control workflows, revisions, approvals, and ongoing process updates.',
          'Created and maintained process documentation as operational workflows changed.',
          'Supported ISO 9001-aligned document-management requirements.',
          'Coordinated documentation activities with internal teams and stakeholders.',
        ],
      },
      {
        title: 'Knowledge Base Technical Writer',
        company: 'Concentrix',
        year: '2023–2024',
        bullets: [
          'Managed and maintained a large internal knowledge base, including 100+ articles in one role.',
          'Created, updated, reviewed, and organized knowledge-base documentation.',
          'Coordinated content reviews and approvals with stakeholders and subject-matter experts.',
          'Supported documentation request workflows and ongoing content governance.',
          'Helped ensure knowledge content remained accurate, accessible, and aligned with changing processes.',
        ],
      },
      {
        title: 'Document Specialist & Product Team Coordinator',
        company: 'RT Lawrence',
        year: '2021–2023',
        bullets: [
          'Created software manuals, installation guides, training materials, process documentation, and documentation standards.',
          'Coordinated documentation work with product, development, and QA teams.',
          'Managed the everyday work coordination of a nine-person team to help assignments and deliverables move through the product-development workflow.',
          'Organized documentation requests, reviews, revisions, and related team activities.',
          'Helped standardize documentation through templates, style guidance, and structured processes.',
        ],
      },
      {
        title: 'Freelance Writer & Editor',
        company: 'Freelance',
        year: '2017–2021',
        bullets: [
          'Researched, wrote, edited, and proofread client content across multiple subjects.',
          'Managed revisions, source materials, project requirements, and deadlines.',
          'Developed strong research, editing, information-organization, and client-communication skills later applied to technical documentation.',
        ],
      },
    ],
    selectedExperience: [
      { label: 'SOP & Process Documentation', items: ['Cleaning Operations Audit', 'Field Team Communication', 'Scheduling Workflows'] },
      { label: 'SaaS & Help Center Documentation', items: ['Folder Organization', 'Invoice Installments', 'Notification Templates', 'Stripe Setup', 'Network Directory', 'Bank Account Verification'] },
      { label: 'Product Documentation', items: ['Monthly Release Notes', 'Feature Documentation', 'User Guides'] },
      { label: 'Documentation Operations', items: ['Airtable Documentation Library', 'Notion Knowledge Base Mapping', 'Knowledge Base Request Workflows'] },
    ],
    tools: [
      { label: 'Documentation', items: ['Confluence', 'Notion', 'Help Scout', 'SharePoint'] },
      { label: 'Document & Content Management', items: ['Airtable', 'Microsoft 365', 'Google Workspace'] },
      { label: 'Project Management', items: ['Jira', 'Asana', 'Monday.com', 'Trello'] },
      { label: 'Collaboration', items: ['Slack'] },
      { label: 'Content', items: ['Canva', 'WordPress'] },
      { label: 'AI & Research', items: ['ChatGPT', 'Gemini', 'Apify'] },
    ],
  },
]

export const resumeCredentials = [
  'B.S. Computer Engineering — Bulacan State University',
  'ISO 9001:2015 Internal Audit Training',
  'Certified Learning & Development Associate',
  'C2 English Proficiency — EF SET',
]
