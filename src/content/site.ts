import type { Credential, SocialLink } from './schema'

/**
 * Who the site is about. Every page, the sidebar, SEO tags and legal pages read these values.
 */
export const site = {
  name: 'Mary Sharra',
  brand: 'Mary Sharra',
  brandParts: ['Mary', 'Sharra'],
  logo: {
    light: '/images/brand/mark.webp',
    dark: '/images/brand/mark-light.webp',
    headerLight: '/images/brand/mark-96.webp',
    headerDark: '/images/brand/mark-light-96.webp',
  },
  url: 'https://sharra-portfolio-v2.netlify.app',
  role: 'Documentation + Operations Support',
  email: 'bmarysharra@gmail.com',
  emailSubject: 'Project inquiry',
  replyPromise: 'Reply within one business day.',
  location: 'Philippines · UTC+8',
  countryCode: 'PH',
  timeZone: 'Asia/Manila',
  timePlace: 'in the Philippines',
  avatar: { src: '/images/profile/avatar.webp', alt: 'Mary Sharra', width: 400, height: 400 },
  avatarSmall: '/images/profile/avatar-224.webp',
} as const

export const certification: Credential = {
  title: 'ISO 9001:2015 Internal Audit Training',
  detail: 'Professional development',
}

export const socials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sharrabrila/', external: true, icon: 'linkedin' },
  { label: 'Upwork profile', href: 'https://www.upwork.com/freelancers/~018cf61028a8af7c20', external: true, icon: 'briefcase' },
]

export const externalLinks = {
  resource: 'https://www.upwork.com/freelancers/~018cf61028a8af7c20',
  showcase: 'https://www.upwork.com/freelancers/~018cf61028a8af7c20',
  company: 'https://www.linkedin.com/in/sharrabrila/',
} as const

export function mailtoHref(): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(site.emailSubject)}`
}
