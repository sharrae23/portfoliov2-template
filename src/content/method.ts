import type { MethodStep } from './schema'

export const method = {
  eyebrow: 'How I work',
  title: 'Understand. Document. Maintain.',
  summary: 'I learn the real workflow first, turn it into something people can follow, then leave the system easier to maintain.',
  steps: [
    {
      name: 'Understand',
      body: 'I gather context from the people, files, tools, and existing process before I write.',
      inputs: ['Stakeholder input', 'Existing files', 'Current tools', 'Real workflow'],
    },
    {
      name: 'Document',
      body: 'I organize the work into clear steps, ownership, decisions, and usable documentation.',
      inputs: ['SOPs', 'Knowledge base', 'Checklists', 'Guides'],
    },
    {
      name: 'Maintain',
      body: 'I help keep the system current through reviews, trackers, release notes, and follow-through.',
      inputs: ['Approvals', 'Updates', 'Document control', 'Follow-up'],
    },
  ] satisfies MethodStep[],
}
