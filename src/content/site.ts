import type { Credential, SocialLink } from './schema'

/**
 * Mary Sharra's core profile. Keep this file factual: the sidebar, SEO and legal pages all read it.
 */
export const site = {
  name: 'Mary Sharra',
  brand: 'Mary Sharra',
  brandParts: ['Mary', 'Sharra'],
  logo: {
    light: '/images/brand/mary-sharra-mark.svg',
    dark: '/images/brand/mary-sharra-mark.svg',
    headerLight: '/images/brand/mary-sharra-mark.svg',
    headerDark: '/images/brand/mary-sharra-mark.svg',
  },
  /** Replace this with the final custom domain after V2 is published. */
  url: 'https://example.com',
  role: 'Documentation + Operations Support',
  email: 'bmarysharra@gmail.com',
  emailSubject: 'Project inquiry',
  replyPromise: 'I typically reply within one business day.',
  location: 'Philippines · UTC+8',
  countryCode: 'PH',
  timeZone: 'Asia/Manila',
  timePlace: 'in the Philippines',
  avatar: { src: '/images/profile/mary-sharra-monogram.svg', alt: 'Mary Sharra monogram', width: 400, height: 400 },
  avatarSmall: '/images/profile/mary-sharra-monogram.svg',
} as const

export const certification: Credential = {
  title: 'ISO 9001:2015 Internal Audit Training',
  detail: 'Quality management systems · Internal audit training',
}

export const socials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sharrabrila/', external: true, icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/sharrae23', external: true, icon: 'github' },
]

export const externalLinks = {
  resource: 'https://www.upwork.com/freelancers/~018cf61028a8af7c20',
  showcase: 'https://www.upwork.com/freelancers/~018cf61028a8af7c20',
  company: 'https://www.linkedin.com/in/sharrabrila/',
} as const

export function mailtoHref(): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(site.emailSubject)}`
}
