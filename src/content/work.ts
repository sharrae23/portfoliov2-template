import type { WorkItem } from './schema'

export const workPage = {
  eyebrow: 'Work',
  title: 'Documentation built around real work.',
  lede: 'Selected SOPs, SaaS help content, documentation systems, and workflow support built from real operating processes.',
}

const douladoNote =
  'Doulado screenshots were captured in a test environment using test profiles and sample data. No real customer information is shown.'

export const sopSamples: WorkItem[] = [
  {
    id: 'cleaning-operations-audit',
    name: 'Cleaning Operations Audit',
    kicker: 'Operations SOP',
    summary: 'A daily audit SOP covering completed cleans, timing, service standards, timesheets, mileage, database reconciliation, and payroll readiness.',
    caseStudy: {
      context: 'A short-term rental operations team needed one repeatable audit process across several operational records and quality checks.',
      contribution: 'Structured the process into purpose and scope, six audit stages, decision rules, status handling, and a final compliance section.',
      highlights: ['Daily dashboard and completion-time checks', 'Timesheet and mileage reconciliation', 'Quality-complaint and database status handling'],
      tools: ['ResortCleaning', 'Operational audit workflow'],
      excerpt: 'Use the Daily Audit Dashboard to review completed cleaning cases for the day.',
      note: 'Client-specific operating details in the public sample are partially redacted.',
    },
  },
  {
    id: 'field-team-communication',
    name: 'Field Team Communication SOP',
    kicker: 'Communication SOP',
    summary: 'A communication standard for field-team updates, requests, follow-ups, schedule changes, and escalation through Slack.',
    caseStudy: {
      context: 'Field communication needed clearer channel rules, response expectations, and a consistent way to handle schedule changes and escalations.',
      contribution: 'Turned communication expectations into channel guidance, message structure, follow-up rules, schedule-change handling, and escalation steps.',
      highlights: ['Slack channel guidance', 'Message-structure checklist', 'Follow-up and escalation workflow'],
      tools: ['Slack', 'Operations communication'],
      excerpt: 'Keep messages clear, complete, and easy to follow through.',
      note: 'Names, timing thresholds, and other client-specific operating details are redacted in the public sample.',
    },
  },
  {
    id: 'scheduler-sop',
    name: 'Scheduler SOP',
    kicker: 'Scheduling SOP',
    summary: 'An end-to-end scheduling guide for plotting cleaning cases, matching bookings, assigning work, rescheduling, and handling last-minute changes.',
    caseStudy: {
      context: 'Scheduling depended on several booking sources, manual checks, contractor availability, and last-minute changes that needed one consistent process.',
      contribution: 'Documented the full scheduling workflow from planning and plotting through match-up, assignment, rescheduling, and the final scheduler check.',
      highlights: ['Booking-to-clean match-up', 'Assignment considerations and discrepancy handling', 'Rescheduling and last-minute change process'],
      tools: ['ResortCleaning', 'Booking platforms', 'Scheduling trackers'],
      excerpt: 'Plan ahead to allow enough time to prepare assignments and reassign declined cleans.',
      note: 'Client-specific timings, platform details, and internal tracking references are partially redacted in the public sample.',
    },
  },
]

export const knowledgeBaseSamples: WorkItem[] = [
  {
    id: 'folder-organization',
    name: 'Folder Organization',
    kicker: 'Help center article',
    summary: 'Task-based SaaS documentation for organizing resources and client files into folders.',
    caseStudy: {
      context: 'Users needed a clear walkthrough for creating folders in both the Resource Bank and individual client profiles.',
      contribution: 'Split the workflow by use case, wrote numbered steps, and paired each action with annotated product screenshots.',
      highlights: ['Resource-folder workflow', 'Client-file folder workflow', 'Screenshot-led step sequencing'],
      tools: ['Help Scout', 'Doulado'],
      excerpt: 'Organize resources and client files by creating folders within the template bank and client profiles.',
      note: douladoNote,
    },
  },
  {
    id: 'invoice-installments',
    name: 'Invoice Installments',
    kicker: 'Help center article',
    summary: 'A billing guide explaining custom installment schedules, retainers, due dates, reminders, visibility, and invoice options.',
    caseStudy: {
      context: 'The invoice workflow includes several configurable payment-schedule controls that needed to be explained without overwhelming users.',
      contribution: 'Turned the feature into a sequential task guide, separating retainer setup, due dates, recurring installments, visibility, and completion steps.',
      highlights: ['Custom payment schedules', 'Retainer and due-date controls', 'Reminder and visibility settings'],
      tools: ['Help Scout', 'Doulado'],
      excerpt: 'Each installment date and amount can be customized individually.',
      note: douladoNote,
    },
  },
  {
    id: 'managing-templates',
    name: 'Managing Templates',
    kicker: 'Help center article',
    summary: 'A feature guide for editing, adding, testing, and reverting email or text notification templates.',
    caseStudy: {
      context: 'Business owners needed one reference for the full template lifecycle, from editing existing notifications to testing and reverting changes.',
      contribution: 'Organized the article into four task sections and added a field-reference table for subject lines, reply-to behavior, body content, and variables.',
      highlights: ['Editing and adding templates', 'Variable and placeholder explanation', 'Testing and reverting workflows'],
      tools: ['Help Scout', 'Doulado'],
      excerpt: 'Business owners can customize templates to better match their branding, communication style, and workflow needs.',
      note: douladoNote,
    },
  },
  {
    id: 'march-2026-release-notes',
    name: 'March 2026 Release Notes',
    kicker: 'Release notes',
    summary: 'Monthly product documentation covering updates across documents, claims and insurance, admin settings, team capabilities, and bank verification.',
    caseStudy: {
      context: 'A broad monthly release introduced changes across several parts of the product and needed to be understandable to non-technical users.',
      contribution: 'Grouped updates by product area, explained what changed and why it mattered, and added screenshots and links to deeper help articles.',
      highlights: ['Documents and Forms updates', 'Claims and Insurance changes', 'Admin and Team capability updates'],
      tools: ['Help Scout', 'Doulado'],
      excerpt: 'These updates are focused on making everyday tasks smoother and more efficient.',
      note: douladoNote,
    },
  },
  {
    id: 'stripe-setup-settings',
    name: 'Stripe Setup & Settings',
    kicker: 'Payments guide',
    summary: 'A setup guide for connecting Stripe, understanding payment methods, ACH verification, and controlling client payment options.',
    caseStudy: {
      context: 'Payment setup spans onboarding, processing methods, verification, primary methods, and business- or client-level restrictions.',
      contribution: 'Combined setup instructions, a payment-method comparison table, verification guidance, and settings behavior into one reference article.',
      highlights: ['Stripe onboarding', 'Payment-method comparison', 'ACH verification and restrictions'],
      tools: ['Help Scout', 'Stripe', 'Doulado'],
      excerpt: 'Before accepting payments, complete your payment setup by connecting your Stripe account and configuring your preferred payment methods.',
      note: douladoNote,
    },
  },
  {
    id: 'using-directory',
    name: 'Using the Directory',
    kicker: 'Feature guide',
    summary: 'A guide to creating network profiles, importing team members, and using standard and custom directory filters.',
    caseStudy: {
      context: 'The Network Directory supports both profile creation and search/filter behavior, so users needed a guide that covered setup and daily use.',
      contribution: 'Separated individual creation, bulk import, filtering, and dynamic custom filters into clear task sections with annotated screenshots.',
      highlights: ['Individual and bulk profile creation', 'Standard filters', 'Dynamic custom filters'],
      tools: ['Help Scout', 'Doulado'],
      excerpt: 'The Network Directory allows you to create and manage profiles for your team while keeping everything organized in one place.',
      note: douladoNote,
    },
  },
  {
    id: 'verify-bank-account',
    name: 'Verify Your Bank Account',
    kicker: 'Task guide',
    summary: 'A focused ACH verification guide covering micro-deposits, verification codes, confirmation, and payment-method use.',
    caseStudy: {
      context: 'Bank verification can follow different paths depending on whether the user receives micro-deposits or a verification code.',
      contribution: 'Explained both verification paths, showed where to complete verification in the profile, and connected the verified method to plan and payment settings.',
      highlights: ['Two verification methods', 'Profile-based verification steps', 'Post-verification payment-method guidance'],
      tools: ['Help Scout', 'Stripe', 'Doulado'],
      excerpt: 'A bank account must be verified before it can be used within Doulado.',
      note: douladoNote,
    },
  },
]

export const operationsSamples: WorkItem[] = [
  {
    id: 'airtable-document-library',
    name: 'Airtable Documentation Library',
    kicker: 'Documentation operations',
    summary: 'A structured Airtable library for tracking article status, category, sub-category, relationships, URLs, and content coverage.',
    caseStudy: {
      context: 'A growing SaaS knowledge base needed a working inventory that made article coverage, hierarchy, and maintenance easier to track.',
      contribution: 'Built a documentation library with article status, category relationships, cross-references, related articles, live URLs, and article-count views.',
      highlights: ['Published-status tracking', 'Main and sub-category relationships', 'Referenced and related article mapping'],
      tools: ['Airtable', 'Help Scout'],
      excerpt: 'Article Title · Status · Main Category · Sub-Category · Referenced Articles · Related Articles · Article URL',
      note: 'The screenshots show the Doulado documentation workspace and are watermarked as portfolio samples.',
    },
  },
]

export const workflowSamples: WorkItem[] = [
  {
    id: 'notion-document-map',
    name: 'Notion Knowledge Base Map',
    kicker: 'Information architecture',
    summary: 'A hierarchical content map that grouped help topics into clear categories and subtopics before and during knowledge-base maintenance.',
    caseStudy: {
      context: 'The help center covered multiple product areas and needed a simple way to see hierarchy, topic coverage, and how content fit together.',
      contribution: 'Organized the documentation map into parent categories, nested topics, short descriptions, and visible coverage/status indicators.',
      highlights: ['Category hierarchy', 'Nested help topics', 'Plain-language topic descriptions'],
      tools: ['Notion'],
      excerpt: 'Clients & Workflows → Client List · Workflows · Lead Forms · Network · Labels · Client Portals',
      note: 'This is a documentation-management view, not an end-user help article.',
    },
  },
  {
    id: 'noc-kb-process',
    name: 'NOC Knowledge Base Process',
    kicker: 'Documentation workflow',
    summary: 'An internal KB workflow covering access, request intake, request types, drafting, review, approval, and status tracking.',
    caseStudy: {
      context: 'A large internal knowledge base needed one documented request path so contributors knew how to submit, track, review, and complete KB work.',
      contribution: 'Created a visual process flow plus step-by-step access and intake guidance, including request categories and reviewer handoffs.',
      highlights: ['Request-intake workflow', 'Create / update / deprecate / combine request types', 'Reviewer and approval handoffs'],
      tools: ['Monday.com', 'Internal knowledge base'],
      excerpt: 'Create KB · Update KB · Deprecate KB · Combine KBs · Identify and Update KBs',
      note: 'The original source contains internal go/ links and access paths, so the raw file is not published. This case study only summarizes the workflow.',
    },
  },
]

export const workCount =
  sopSamples.length + knowledgeBaseSamples.length + operationsSamples.length + workflowSamples.length
