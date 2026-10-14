export type Testimonial = {
  id: string
  quote: string
  client: string
  context: string
  tags: string[]
  highlight?: string
  featured?: boolean
}

export const testimonialsPage = {
  eyebrow: 'Client feedback',
  titleThin: "What it's like",
  titleBold: 'to work with me.',
  lede: 'Feedback from clients I’ve supported across operations, documentation, SaaS, creative projects, and content.',
}

export const testimonials: Testimonial[] = [
  {
    id: 'glynis',
    quote: 'Thank you so much for all your hard work on the SOPs and for consistently completing the projects and sending the deliverables on time. I really appreciate your patience throughout the whole process.',
    client: 'Glynis',
    context: 'Short-Term Rental Operations SOPs · Upwork',
    tags: ['SOPs', 'Operations', 'On-time delivery'],
    highlight: '13 Operations SOPs completed, reviewed, and approved',
    featured: true,
  },
  {
    id: 'victor',
    quote: 'She is organized, reliable, and strong at turning clear direction into clean, structured execution. … I appreciate her consistency, attention to detail, and ability to manage repeatable processes with care.',
    client: 'Victor',
    context: 'Creative Operations · LNF',
    tags: ['Operations', 'Project support', 'Process management'],
    featured: true,
  },
  {
    id: 'jayse',
    quote: 'Sharra was great to work with and was organized during our project. She communicates well and produces good written content!',
    client: 'Jayse',
    context: 'Technical Writing · Doulado',
    tags: ['SaaS', 'Technical writing', 'Documentation'],
  },
  {
    id: 'marquise',
    quote: 'Mary is very good at organizing the canons and catching writer flaws in scripts. It was a pleasure to work with her again…',
    client: 'Marquise',
    context: 'Creative Project Assistance · Anime & Manga',
    tags: ['Organization', 'Editorial support', 'Project assistance'],
  },
  {
    id: 'ashley',
    quote: 'Mary was an absolute pleasure to work with. She was responsive and asked all the right questions before we started the project in order to ensure that she understood the subject matter. Not only that, but she wrote my article earlier than the expected deadline.',
    client: 'Ashley',
    context: 'Content Writing · Upwork',
    tags: ['Writing', 'Communication', 'On-time delivery'],
  },
  {
    id: 'carlton',
    quote: 'It was truly a pleasure working with Mary for content writing. She worked with multiple skincare clients, writing blogs and designing infographics in Canva. … It was great working with Mary, and we will be engaging her services in the future!',
    client: 'Carlton',
    context: 'Content & SEO · Skincare Clients',
    tags: ['Content', 'SEO', 'Canva'],
  },
]

export const testimonialRows = [
  testimonials.filter((t) => ['glynis', 'victor', 'jayse'].includes(t.id)),
  testimonials.filter((t) => ['marquise', 'ashley', 'carlton'].includes(t.id)),
]
