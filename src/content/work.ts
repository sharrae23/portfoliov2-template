import type { WorkItem } from './schema'

export const workPage = {
  eyebrow: 'Work',
  title: 'Documentation built around real work.',
  lede: 'Selected SOPs, SaaS help content, documentation systems, and workflow support built from real operating processes.',
}

const douladoNote =
  'Screenshots were captured in a test environment using test profiles and sample data. No real customer information is displayed.'

export const sopSamples: WorkItem[] = [
  {
    id: 'cleaning-operations-audit',
    name: 'Cleaning Operations Audit SOP',
    kicker: 'SOP & Process Documentation',
    summary: 'A daily operations audit SOP for cleaning records, service standards, reconciliation, and payroll readiness.',
    caseStudy: {
      body: 'Created a daily operations audit SOP for a short-term rental management team, covering completed cleaning cases, service standards, completion times, timesheets, mileage, database reconciliation, quality complaints, and payroll readiness. I organized the process into clear audit stages, decision points, status handling, and compliance requirements so the Operations team could follow one consistent review process.',
      tags: ['Technical Writing', 'SOP Writing', 'Operations Documentation', 'Process Documentation', 'Quality Control'],
    },
  },
  {
    id: 'field-team-communication',
    name: 'Field Team Communication SOP',
    kicker: 'SOP & Process Documentation',
    summary: 'A structured communication and escalation process for field-team requests, updates, and schedule changes.',
    caseStudy: {
      body: 'Documented how an Operations team should communicate with field staff through Slack, including channel usage, message structure, follow-ups, schedule changes, completion confirmations, and escalation procedures. I turned informal communication practices into a structured SOP that clarifies what information should be included, when confirmation is required, and how unresolved concerns should be handled.',
      tags: ['SOP Writing', 'Operations Support', 'Process Documentation', 'Slack', 'Communication Workflow'],
    },
  },
  {
    id: 'scheduler-sop',
    name: 'Scheduler SOP',
    kicker: 'SOP & Process Documentation',
    summary: 'An end-to-end workflow for planning, assigning, rescheduling, and reviewing cleaning assignments.',
    caseStudy: {
      body: 'Created an end-to-end scheduling SOP for managing short-term rental cleaning assignments across booking and operations systems. The guide documents advance planning, plotting cleaning cases, cross-checking bookings, resolving discrepancies, assigning work, rescheduling, handling last-minute changes, and completing a final schedule review.',
      tags: ['SOP Writing', 'Scheduling', 'Workflow Documentation', 'Operations Documentation', 'Technical Writing'],
    },
  },
  {
    id: 'general-cleaning-standards',
    name: 'General Cleaning Standards Guide',
    kicker: 'SOP & Process Documentation',
    summary: 'A visual housekeeping SOP designed as a practical room-by-room field reference.',
    caseStudy: {
      body: 'Designed a visual housekeeping SOP that turns general cleaning expectations into a practical field reference. I structured the guide around a simple Review → Clean → Check → Complete process, then organized requirements by area with checklists, presentation standards, restocking guidance, “What Good Looks Like” callouts, and a final property walkthrough.',
      tags: ['Visual SOP', 'Training Documentation', 'Technical Writing', 'Housekeeping Standards', 'Instructional Content'],
      featured: true,
    },
  },
]

export const knowledgeBaseSamples: WorkItem[] = [
  {
    id: 'data-sharing',
    name: 'Data Sharing Feature Guide',
    kicker: 'Knowledge Base Management',
    summary: 'A concise SaaS feature guide explaining data sharing between connected organizations and teams.',
    caseStudy: {
      body: 'Created a concise SaaS knowledge-base article explaining how organizations can connect with another business or team and share selected content and data. The article introduces the feature’s purpose, summarizes what users can do with it, and shows where the related settings can be found within the product.',
      tags: ['Knowledge Base', 'SaaS Documentation', 'Feature Documentation', 'Technical Writing', 'Help Center'],
      note: douladoNote,
    },
  },
  {
    id: 'folder-organization',
    name: 'Folder Organization Help Guide',
    kicker: 'Knowledge Base Management',
    summary: 'A task-based guide for organizing resources and client files into folders.',
    caseStudy: {
      body: 'Created a task-based help article showing users how to organize resources and client files using folders. I separated the documentation into resource-folder and client-file workflows, then used numbered steps and product screenshots to make each action easy to follow.',
      tags: ['Knowledge Base', 'How-To Guide', 'SaaS Documentation', 'Technical Writing', 'User Documentation'],
      note: douladoNote,
    },
  },
  {
    id: 'invoice-installments',
    name: 'Invoice Installments User Guide',
    kicker: 'Knowledge Base Management',
    summary: 'A billing guide for creating and managing customized installment schedules.',
    caseStudy: {
      body: 'Documented how users can build customized invoice payment schedules, including retainers, final due dates, recurring installments, reminders, invoice visibility, drafts, client-portal publishing, and related invoice options. I organized several interconnected billing settings into one sequential workflow so users can understand both what to configure and how the settings affect the invoice.',
      tags: ['Knowledge Base', 'Billing Documentation', 'SaaS Documentation', 'User Guide', 'Technical Writing'],
      note: douladoNote,
    },
  },
  {
    id: 'managing-templates',
    name: 'Managing Templates Guide',
    kicker: 'Knowledge Base Management',
    summary: 'A guide for creating, editing, testing, and reverting notification templates.',
    caseStudy: {
      body: 'Created a complete guide for managing customizable email and text notification templates, covering editing, creating, testing, using dynamic variables, and reverting templates to their defaults. I also included a field-reference section explaining settings such as subject lines, reply-to behavior, message content, and dynamic placeholders.',
      tags: ['Knowledge Base', 'Feature Documentation', 'SaaS Documentation', 'Technical Writing', 'User Guide'],
      note: douladoNote,
    },
  },
  {
    id: 'march-2026-release-notes',
    name: 'March 2026 Product Release Notes',
    kicker: 'Knowledge Base Management',
    summary: 'Monthly SaaS release notes translating cross-product updates into user-facing documentation.',
    caseStudy: {
      body: 'Created monthly SaaS release notes covering updates across Documents & Forms, Claims & Insurance, administrative settings, payment verification, and team capabilities. I grouped updates by product area, translated software changes into user-facing language, and explained how key updates affected existing workflows.',
      tags: ['Release Notes', 'Product Documentation', 'SaaS Documentation', 'Technical Writing', 'Software Updates'],
      note: douladoNote,
      featured: true,
    },
  },
  {
    id: 'stripe-setup-settings',
    name: 'Stripe Setup & Settings Guide',
    kicker: 'Knowledge Base Management',
    summary: 'A central setup reference for Stripe onboarding, payment methods, and ACH settings.',
    caseStudy: {
      body: 'Created a central reference for configuring online payments within a SaaS product, including Stripe onboarding, payment methods, ACH verification, primary payment methods, processing considerations, and client-level payment restrictions. I combined step-by-step setup instructions with reference information so users could understand both the configuration process and how different payment options behave.',
      tags: ['Technical Writing', 'Stripe', 'Payments Documentation', 'SaaS Documentation', 'Setup Guide'],
      note: douladoNote,
    },
  },
  {
    id: 'network-directory',
    name: 'Network Directory User Guide',
    kicker: 'Knowledge Base Management',
    summary: 'A user guide for creating profiles, bulk imports, directory search, and custom filters.',
    caseStudy: {
      body: 'Documented how users can create and manage network profiles, add profiles individually or through bulk import, search the directory, and use standard or custom filters. I separated profile creation from filtering and search so users can quickly navigate to the task they need while still understanding how custom fields affect directory behavior.',
      tags: ['Knowledge Base', 'SaaS Documentation', 'Feature Documentation', 'User Guide', 'Technical Writing'],
      note: douladoNote,
    },
  },
  {
    id: 'bank-account-verification',
    name: 'Bank Account Verification Guide',
    kicker: 'Knowledge Base Management',
    summary: 'A focused ACH verification guide covering verification codes and micro-deposits.',
    caseStudy: {
      body: 'Created a focused ACH verification guide covering two possible verification paths: a six-character code or two micro-deposit amounts. The article guides users from receiving the bank verification information through completing verification in their profile and using the verified payment method afterward.',
      tags: ['Technical Writing', 'ACH', 'Payments Documentation', 'Knowledge Base', 'How-To Guide'],
      note: douladoNote,
    },
  },
]

export const operationsSamples: WorkItem[] = [
  {
    id: 'airtable-document-library',
    name: 'Airtable Documentation Library',
    kicker: 'Operations & Virtual Assistance',
    summary: 'A working content inventory for tracking knowledge-base hierarchy, status, relationships, and coverage.',
    caseStudy: {
      body: 'Built an Airtable-based documentation library for managing a growing SaaS knowledge base. The system organizes article titles, publication status, main and subcategories, related and referenced articles, URLs, topic coverage, and article counts so documentation can be tracked and maintained from one working repository.',
      tags: ['Airtable', 'Document Management', 'Documentation Operations', 'Knowledge Management', 'Virtual Assistance'],
    },
  },
]

export const workflowSamples: WorkItem[] = [
  {
    id: 'notion-knowledge-base-map',
    name: 'Notion Knowledge Base Map',
    kicker: 'Document Control & Workflow Support',
    summary: 'A content map organizing a SaaS knowledge base into clear parent topics and nested subtopics.',
    caseStudy: {
      body: 'Created a Notion-based content map for organizing a SaaS knowledge base into parent topics and nested subtopics. The structure makes documentation coverage easier to review across areas such as Clients & Workflows, Paperwork & Documents, Billing, Scheduling, Claims & Insurance, Messaging, and Teams while giving each topic a short plain-language description.',
      tags: ['Notion', 'Information Architecture', 'Knowledge Management', 'Document Management', 'Knowledge Base'],
    },
  },
  {
    id: 'noc-kb-request-workflow',
    name: 'NOC Knowledge Base Request Workflow',
    kicker: 'Document Control & Workflow Support',
    summary: 'An internal Monday.com workflow for knowledge-base intake, request types, tracking, review, and approval.',
    caseStudy: {
      body: 'Created internal process documentation for managing NOC knowledge-base requests through Monday.com. The guide combines a visual workflow with instructions for requesting access, entering the workspace, submitting documentation requests, selecting request types such as Create, Update, Deprecate, Combine, or Identify and Update KBs, tracking request status, and routing completed drafts through reviewer approval.',
      tags: ['Knowledge Base', 'Documentation Workflow', 'Monday.com', 'Document Control', 'Request Management', 'Technical Writing'],
      note: 'Some internal go/ links shown in this historical work sample may no longer function and are included only as part of the original documentation context.',
    },
  },
]

export const workCount =
  sopSamples.length + knowledgeBaseSamples.length + operationsSamples.length + workflowSamples.length
