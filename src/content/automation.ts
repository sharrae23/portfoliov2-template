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

export const liveAutomation = {
  eyebrow: 'Documentation workflow',
  titleThin: 'Understand. Document.',
  titleBold: 'Maintain.',
  steps: method.steps.map((step) => ({ name: step.name, body: step.body })),
  panel: { lead: 'Request to', rest: 'Reliable Process' },
  legend: { auto: 'System / tracker', lead: 'Hands-on work' },
  zones: { booking: 'Build the documentation', pipeline: 'Review and maintenance' },
  connected: 'Workflow active',
  hint: { hover: 'Hover a stage to inspect', tap: 'Tap a stage to inspect' },
  nodes: [
    { id: 'form', title: 'Request Received', tag: 'Need identified', plane: 'lead', icon: 'form', ...box(0, 0), step: 0, about: 'Start with the real problem, audience, owner, and expected result.' },
    { id: 'email', title: 'Context Gathered', tag: 'Sources collected', plane: 'auto', icon: 'email', ...box(1, 0), step: 0, about: 'Collect existing files, stakeholder input, tools, examples, and source material.' },
    { id: 'booked', title: 'Workflow Mapped', tag: 'Steps confirmed', plane: 'lead', icon: 'booked', ...box(2, 0), step: 0, about: 'Trace how the work actually happens before turning it into documentation.' },
    { id: 'day', title: 'Draft Built', tag: 'Structure first', plane: 'lead', icon: 'reminder', ...box(3, 0), step: 1, about: 'Build the document around clear steps, decisions, ownership, and the reader\'s next action.' },
    { id: 'hour', title: 'Source Checked', tag: 'No guessing', plane: 'lead', icon: 'alarm', ...box(4, 0), step: 1, about: 'Validate unclear details with the product, source files, stakeholders, developers, or QA where available.' },
    { id: 'call', title: 'Review Pass', tag: 'Feedback resolved', plane: 'lead', icon: 'call', ...box(5, 0), step: 1, about: 'Route the draft through review, resolve comments, and make changes without losing the original goal.' },
    { id: 'proposal', title: 'Approved', tag: 'Ready to publish', plane: 'lead', icon: 'proposal', ...box(0, 1), step: 2, about: 'Once the right reviewer approves it, prepare the document for its final repository or audience.' },
    { id: 'won', title: 'Published', tag: 'Current version', plane: 'auto', icon: 'won', ...box(1, 1), step: 2, about: 'Publish or file the current version where the team can reliably find and use it.' },
    { id: 'later', title: 'Change Requested', tag: 'Update needed', plane: 'lead', icon: 'later', ...box(3, 1), step: 2, about: 'When the process or product changes, capture the request instead of letting documentation quietly go stale.' },
    { id: 'nurture', title: 'Update Tracked', tag: 'Owner visible', plane: 'auto', icon: 'nurture', ...box(4, 1), step: 2, about: 'Track the change, owner, review status, and next action through the existing workflow.' },
    { id: 'lost', title: 'Archived', tag: 'Old version closed', plane: 'auto', icon: 'lost', ...box(5, 1), step: 2, about: 'Retire outdated material so teams are less likely to follow the wrong version.' },
  ] satisfies FlowNode[],
  links: [
    { from: 'form', to: 'email', style: 'solid' },
    { from: 'email', to: 'booked', style: 'solid' },
    { from: 'booked', to: 'day', style: 'solid' },
    { from: 'day', to: 'hour', style: 'solid' },
    { from: 'hour', to: 'call', style: 'solid' },
    { from: 'call', to: 'proposal', style: 'dashed' },
    { from: 'proposal', to: 'won', style: 'solid' },
    { from: 'won', to: 'later', style: 'dashed', label: 'Process or product changes' },
    { from: 'later', to: 'nurture', style: 'solid' },
    { from: 'nurture', to: 'lost', style: 'solid' },
  ] satisfies FlowLink[],
}
