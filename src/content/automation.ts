import { method } from './method'

export type FlowPlane = 'lead' | 'auto'
export type FlowIcon = 'form' | 'email' | 'booked' | 'reminder' | 'alarm' | 'call' | 'proposal' | 'won' | 'later' | 'nurture' | 'lost'

export type FlowNode = {
  id: string
  title: string
  tag: string
  plane: FlowPlane
  icon: FlowIcon
  x: number
  y: number
  w: number
  h: number
  step: number
  about: string
}

export type FlowLink = { from: string; to: string; style: 'solid' | 'dashed'; label?: string }

const ROWS = [64, 376]
const box = (col: number, row: number) => ({ x: 24 + col * 200, y: ROWS[row]!, w: 156, h: 136 })

/**
 * The original template's automation graphic is repurposed here as a documentation workflow:
 * request -> discovery -> draft -> review -> approval -> maintenance.
 */
export const liveAutomation = {
  eyebrow: 'Documentation workflow',
  titleThin: 'Discover. Document.',
  titleBold: 'Maintain.',
  steps: method.steps.map((step) => ({ name: step.name, body: step.body })),
  panel: { lead: 'Request to', rest: 'Published Documentation' },
  legend: { auto: 'System / process', lead: 'Team action' },
  zones: { booking: 'Intake & review', pipeline: 'Documentation lifecycle' },
  connected: 'Workflow active',
  hint: { hover: 'Hover a stage to inspect', tap: 'Tap a stage to inspect' },
  nodes: [
    { id: 'form', title: 'New Request', tag: 'Gap or need identified', plane: 'lead', icon: 'form', ...box(0, 0), step: 0, about: 'A request, process gap, update, or new documentation need is captured.' },
    { id: 'email', title: 'Collect Inputs', tag: 'Gather source material', plane: 'auto', icon: 'email', ...box(1, 0), step: 0, about: 'Existing documents, screenshots, tickets, and stakeholder notes are gathered in one place.' },
    { id: 'booked', title: 'Clarify Process', tag: 'Confirm the real workflow', plane: 'lead', icon: 'booked', ...box(2, 0), step: 0, about: 'The current process is checked with the people who actually perform or own the work.' },
    { id: 'day', title: 'Draft', tag: 'Structure + write', plane: 'auto', icon: 'reminder', ...box(3, 0), step: 1, about: 'The information is turned into a clear SOP, guide, knowledge-base article, or checklist.' },
    { id: 'hour', title: 'SME Review', tag: 'Validate accuracy', plane: 'lead', icon: 'alarm', ...box(4, 0), step: 1, about: 'Subject-matter experts review the draft for accuracy, missing steps, and practical usability.' },
    { id: 'call', title: 'Finalize', tag: 'Resolve feedback', plane: 'lead', icon: 'call', ...box(5, 0), step: 1, about: 'Feedback is incorporated and the content is prepared for approval or publication.' },
    { id: 'proposal', title: 'Approval', tag: 'Ready to publish', plane: 'lead', icon: 'proposal', ...box(0, 1), step: 2, about: 'The final version is approved according to the team or document-control workflow.' },
    { id: 'won', title: 'Published', tag: 'Available to the team', plane: 'lead', icon: 'won', ...box(1, 1), step: 2, about: 'The document is published in the right repository and made easy for its audience to find.' },
    { id: 'later', title: 'Pending Input', tag: 'Waiting on an answer', plane: 'lead', icon: 'later', ...box(3, 1), step: 1, about: 'Open questions are tracked instead of being buried in a draft or chat thread.' },
    { id: 'nurture', title: 'Maintain', tag: 'Keep content current', plane: 'auto', icon: 'nurture', ...box(4, 1), step: 2, about: 'Updates, releases, and process changes are reflected so documentation remains useful.' },
    { id: 'lost', title: 'Archive', tag: 'Retire old content', plane: 'lead', icon: 'lost', ...box(5, 1), step: 2, about: 'Outdated or replaced content is retired cleanly so teams do not follow the wrong version.' },
  ] satisfies FlowNode[],
  links: [
    { from: 'form', to: 'email', style: 'solid' },
    { from: 'email', to: 'booked', style: 'solid' },
    { from: 'booked', to: 'day', style: 'solid' },
    { from: 'day', to: 'hour', style: 'solid' },
    { from: 'hour', to: 'call', style: 'solid' },
    { from: 'hour', to: 'day', style: 'dashed', label: 'Revision needed' },
    { from: 'call', to: 'proposal', style: 'dashed' },
    { from: 'call', to: 'later', style: 'dashed' },
    { from: 'proposal', to: 'won', style: 'solid' },
    { from: 'won', to: 'nurture', style: 'solid' },
    { from: 'nurture', to: 'lost', style: 'dashed', label: 'Retire when obsolete' },
  ] satisfies FlowLink[],
}
