import type { MethodStep } from './schema'

/** A simple documentation-and-operations method: understand the work, make it usable, keep it current. */
export const method = {
  eyebrow: 'How I work',
  title: 'Discover. Document. Maintain.',
  summary: 'I start with the real workflow, turn it into something people can use, then keep the system practical as the work changes.',
  steps: [
    {
      name: 'Discover',
      body: 'Understand the request, the existing process, the people involved, and where information is getting lost.',
      inputs: ['Existing docs', 'Stakeholder input', 'Current tools', 'Pain points'],
    },
    {
      name: 'Document',
      body: 'Structure the information, write the steps clearly, and validate the draft against how the work actually happens.',
      inputs: ['SOPs', 'Knowledge bases', 'User guides', 'Checklists'],
    },
    {
      name: 'Maintain',
      body: 'Publish, organize, track feedback, and update documentation so it stays useful after handoff.',
      inputs: ['Reviews', 'Approvals', 'Release notes', 'Document control'],
    },
  ] satisfies MethodStep[],
}
