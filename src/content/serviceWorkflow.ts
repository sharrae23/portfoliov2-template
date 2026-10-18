import type { Icon } from '@phosphor-icons/react'
import {
  Archive,
  CheckCircle,
  CheckSquare,
  ClipboardText,
  Clock,
  EnvelopeSimple,
  FileText,
  FolderOpen,
  Hourglass,
  ListChecks,
  MagnifyingGlass,
  NotePencil,
  Repeat,
  Rows,
  SealCheck,
  UserFocus,
} from '@phosphor-icons/react'

export type WorkflowNode = {
  title: string
  tag: string
  about: string
  icon: Icon
}

export type ServiceWorkflow = {
  id: 'operations' | 'documentation'
  tab: string
  eyebrow: string
  titleThin: string
  titleBold: string
  panelTitle: string
  legend: [string, string]
  steps: { name: string; body: string }[]
  primary: WorkflowNode[]
  endState?: WorkflowNode
  secondary: WorkflowNode[]
  loopLabel: string
  secondaryLabel: string
}

export const serviceWorkflowPage = {
  eyebrow: 'Service Workflow',
  titleThin: 'Clear support from',
  titleBold: 'request to follow-through.',
  lede: 'See how I handle day-to-day operations support and documentation work from intake through completion and maintenance.',
}

export const serviceWorkflows: ServiceWorkflow[] = [
  {
    id: 'operations',
    tab: 'Virtual Assistance & Operations',
    eyebrow: 'Operations workflow',
    titleThin: 'Organize. Execute.',
    titleBold: 'Follow Through.',
    panelTitle: 'Request to Completed Support',
    legend: ['Task / input', 'My action'],
    steps: [
      {
        name: 'Organize',
        body: 'Capture the request, gather the details, and make the next action visible before work begins.',
      },
      {
        name: 'Execute',
        body: 'Complete the assigned task, update the tracker, and keep the work structured and easy to review.',
      },
      {
        name: 'Follow Through',
        body: 'Track pending inputs, follow up on dependencies, and keep recurring support moving until the task is closed.',
      },
    ],
    primary: [
      {
        title: 'New Request',
        tag: 'Task or need identified',
        about: 'A new request, recurring task, research need, or administrative item is captured.',
        icon: EnvelopeSimple,
      },
      {
        title: 'Gather Details',
        tag: 'Collect files + context',
        about: 'I collect the source files, instructions, links, references, deadlines, and any missing context.',
        icon: FolderOpen,
      },
      {
        title: 'Prioritize',
        tag: 'Confirm deadline + next step',
        about: 'The request is organized by urgency, dependencies, expected output, and the next action required.',
        icon: ListChecks,
      },
      {
        title: 'Execute Task',
        tag: 'Complete assigned work',
        about: 'I complete the task using the agreed process, template, tracker, or system.',
        icon: CheckSquare,
      },
      {
        title: 'Update Tracker',
        tag: 'Record status + progress',
        about: 'Progress, links, notes, deadlines, and completion details are recorded so the work stays visible.',
        icon: Rows,
      },
      {
        title: 'Review / Confirm',
        tag: 'Check accuracy + requirements',
        about: 'I check the deliverable against the request and flag anything that still needs confirmation.',
        icon: UserFocus,
      },
    ],
    endState: {
      title: 'Complete',
      tag: 'Deliver or hand off',
      about: 'The finished work is delivered, handed off, or marked complete with the relevant notes attached.',
      icon: CheckCircle,
    },
    secondary: [
      {
        title: 'Pending Input',
        tag: 'Waiting on information',
        about: 'Missing information or approvals stay visible instead of getting buried in chat or email.',
        icon: Hourglass,
      },
      {
        title: 'Follow Up',
        tag: 'Keep dependencies moving',
        about: 'I follow up on open items, unanswered questions, and overdue dependencies when needed.',
        icon: Clock,
      },
      {
        title: 'Recurring Support',
        tag: 'Maintain ongoing tasks',
        about: 'Repeatable work is kept organized through checklists, trackers, schedules, and consistent handoffs.',
        icon: Repeat,
      },
      {
        title: 'Archive / Close',
        tag: 'Keep records organized',
        about: 'Completed work is filed or closed cleanly so the workspace stays usable and easy to reference.',
        icon: Archive,
      },
    ],
    loopLabel: 'Update needed',
    secondaryLabel: 'Operations follow-through',
  },
  {
    id: 'documentation',
    tab: 'Documentation',
    eyebrow: 'Documentation workflow',
    titleThin: 'Discover. Document.',
    titleBold: 'Maintain.',
    panelTitle: 'Request to Published Documentation',
    legend: ['System / process', 'Team action'],
    steps: [
      {
        name: 'Discover',
        body: 'Understand the request, the existing process, the people involved, and where information is getting lost.',
      },
      {
        name: 'Document',
        body: 'Structure the information, write the steps clearly, and validate the draft against how the work actually happens.',
      },
      {
        name: 'Maintain',
        body: 'Publish, organize, track feedback, and update documentation so it stays useful after handoff.',
      },
    ],
    primary: [
      {
        title: 'New Request',
        tag: 'Gap or need identified',
        about: 'A request, process gap, update, or new documentation need is captured.',
        icon: FileText,
      },
      {
        title: 'Collect Inputs',
        tag: 'Gather source material',
        about: 'Existing documents, screenshots, tickets, and stakeholder notes are gathered in one place.',
        icon: FolderOpen,
      },
      {
        title: 'Clarify Process',
        tag: 'Confirm the real workflow',
        about: 'The current process is checked with the people who actually perform or own the work.',
        icon: MagnifyingGlass,
      },
      {
        title: 'Draft',
        tag: 'Structure + write',
        about: 'The information is turned into a clear SOP, guide, knowledge-base article, or checklist.',
        icon: NotePencil,
      },
      {
        title: 'SME Review',
        tag: 'Validate accuracy',
        about: 'Subject-matter experts review the draft for accuracy, missing steps, and practical usability.',
        icon: UserFocus,
      },
      {
        title: 'Finalize',
        tag: 'Resolve feedback',
        about: 'Feedback is incorporated and the content is prepared for approval or publication.',
        icon: ClipboardText,
      },
    ],
    secondary: [
      {
        title: 'Approval',
        tag: 'Ready to publish',
        about: 'The final version is approved according to the team or document-control workflow.',
        icon: SealCheck,
      },
      {
        title: 'Published',
        tag: 'Available to the team',
        about: 'The document is published in the right repository and made easy for its audience to find.',
        icon: CheckCircle,
      },
      {
        title: 'Pending Input',
        tag: 'Waiting on an answer',
        about: 'Open questions are tracked instead of being buried in a draft or chat thread.',
        icon: Hourglass,
      },
      {
        title: 'Maintain',
        tag: 'Keep content current',
        about: 'Updates, releases, and process changes are reflected so documentation remains useful.',
        icon: Repeat,
      },
      {
        title: 'Archive',
        tag: 'Retire old content',
        about: 'Outdated or replaced content is retired cleanly so teams do not follow the wrong version.',
        icon: Archive,
      },
    ],
    loopLabel: 'Revision needed',
    secondaryLabel: 'Documentation lifecycle',
  },
]
