import { site } from './site'

export type LegalSection = { heading: string; paragraphs: string[] }

export type LegalDoc = {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}

export const privacyPolicy: LegalDoc = {
  title: 'Privacy Policy',
  updated: 'October 9, 2026',
  intro: `This policy describes how ${site.url.replace('https://', '')}, the portfolio of ${site.name}, currently handles visitor information. It is provided for transparency and is not legal advice.`,
  sections: [
    {
      heading: 'What this site collects',
      paragraphs: [
        'The contact form does not submit information to a database on this website. It prepares a message in your own email app so you can choose whether to send it.',
        `If you send an email to ${site.email}, the message is handled through the relevant email services. You can contact me at the same address if you want to ask about or request deletion of correspondence you sent.`,
      ],
    },
    {
      heading: 'What your browser stores',
      paragraphs: [
        'The site uses local browser storage for interface preferences such as light or dark theme, sidebar state, and consent choices. These settings stay in your browser unless you clear them.',
      ],
    },
    {
      heading: 'Analytics',
      paragraphs: [
        'This version of the portfolio does not currently run a visitor analytics service. If analytics is added later, this policy should be updated before that change is relied on.',
      ],
    },
    {
      heading: 'Hosting',
      paragraphs: [
        'The site is hosted on Netlify. Like other hosting providers, Netlify may process technical request information needed to serve and secure the site under its own policies.',
      ],
    },
    {
      heading: 'Questions or requests',
      paragraphs: [
        `For questions about information you have sent directly to me, contact ${site.email}.`,
      ],
    },
    {
      heading: 'Changes',
      paragraphs: ['If this portfolio changes how it handles visitor information, the policy and the updated date above should be revised to reflect that change.'],
    },
  ],
}

export const termsOfService: LegalDoc = {
  title: 'Terms of Service',
  updated: 'October 9, 2026',
  intro: `These terms describe use of the portfolio site operated by ${site.name}. They are informational and do not replace a separate agreement for client work.`,
  sections: [
    {
      heading: 'Using this site',
      paragraphs: [
        'You may browse the portfolio, follow its external links, and contact me about potential work. Portfolio examples are presented to explain experience and capabilities; illustrative template visuals may remain until portfolio-safe work samples are added.',
      ],
    },
    {
      heading: 'Working together',
      paragraphs: [
        'Nothing on this site creates a binding client engagement. Paid work begins only after the scope, deliverables, timing, rate, and other terms are agreed through the relevant proposal, contract, platform, or written agreement.',
      ],
    },
    {
      heading: 'Intellectual property',
      paragraphs: [
        'The portfolio copy and original materials belong to their respective owners. Third-party product names, logos, and trademarks remain the property of those owners. Client-confidential materials should not be published here without permission.',
      ],
    },
    {
      heading: 'Availability and accuracy',
      paragraphs: [
        'The site is provided as a portfolio reference and may change over time. Reasonable effort is made to keep the information current, but uninterrupted availability and error-free operation are not guaranteed.',
      ],
    },
    {
      heading: 'External links',
      paragraphs: ['Links to services such as LinkedIn, Upwork, or other third-party sites are provided for convenience. Those sites operate under their own terms and privacy practices.'],
    },
    {
      heading: 'Client agreements',
      paragraphs: ['Any governing law, dispute process, confidentiality terms, or ownership rules for paid work are determined by the separate agreement or platform terms used for that engagement.'],
    },
    {
      heading: 'Contact',
      paragraphs: [`Questions about this site: ${site.email}.`],
    },
  ],
}
