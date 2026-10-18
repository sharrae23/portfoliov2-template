import type { Icon } from '@phosphor-icons/react'
import { ArrowsClockwise, Briefcase, ChatText, Envelope, FileText, House, SealCheck, ShieldCheck, Stack, User, Wrench, IdentificationCard } from '@phosphor-icons/react'
import { workCount } from '@/content/work'
import { site } from '@/content/site'

export type NavGroupId = 'menu' | 'discover' | 'general'

export const NAV_GROUPS: { id: NavGroupId; label: string }[] = [
  { id: 'menu', label: 'Menu' },
  { id: 'discover', label: 'Experience' },
  { id: 'general', label: 'General' },
]

export type PageRoute = {
  kind: 'page'
  id: string
  path: string
  label: string
  title: string
  description: string
  icon: Icon
  group?: NavGroupId
  badge?: number
  section?: string
  draft?: true
}

export type ExternalRoute = {
  kind: 'external'
  id: string
  href: string
  label: string
  description: string
  icon: Icon
  group: NavGroupId
}

export type NavEntry = PageRoute | ExternalRoute

const SUFFIX = site.name

export const pages: PageRoute[] = [
  {
    kind: 'page',
    id: 'home',
    path: '/',
    label: 'Home',
    title: `${SUFFIX} | Documentation + Operations Support`,
    description: 'Virtual assistance and documentation support for clearer workflows, reliable follow-through, and usable team knowledge.',
    icon: House,
    group: 'menu',
  },
  {
    kind: 'page',
    id: 'testimonials',
    path: '/testimonials',
    label: 'Testimonials',
    title: `Client Feedback | ${SUFFIX}`,
    description: 'Client feedback on operations support, SOPs, SaaS documentation, creative project assistance, and content work.',
    icon: ChatText,
    group: 'menu',
  },
  {
    kind: 'page',
    id: 'work',
    draft: true,
    path: '/work',
    label: 'Project Highlights',
    title: `Project Highlights | ${SUFFIX}`,
    description: 'SOPs, knowledge bases, technical documentation, document workflows, and operations support.',
    icon: Briefcase,
    group: 'menu',
    badge: workCount,
    section: 'work',
  },
  {
    kind: 'page',
    id: 'services',
    draft: true,
    path: '/services',
    label: 'Services',
    title: `Services | ${SUFFIX}`,
    description: 'Virtual assistance, SOP writing, knowledge-base support, document management, and technical documentation.',
    icon: Stack,
    group: 'menu',
    section: 'services',
  },
  {
    kind: 'page',
    id: 'service-workflow',
    path: '/service-workflow',
    label: 'Service Workflow',
    title: `Service Workflow | ${SUFFIX}`,
    description: 'See how virtual assistance, operations support, and documentation work move from request through delivery, follow-through, and maintenance.',
    icon: ArrowsClockwise,
    group: 'menu',
    section: 'service-workflow',
  },
  {
    kind: 'page',
    id: 'about',
    draft: true,
    path: '/about',
    label: 'About',
    title: `About ${SUFFIX}`,
    description: 'Technical writer and documentation specialist based in the Philippines with 5+ years of experience.',
    icon: User,
    group: 'menu',
    section: 'about',
  },
  {
    kind: 'page',
    id: 'proof',
    path: '/proof',
    label: 'Experience',
    title: `Experience | ${SUFFIX}`,
    description: 'Selected virtual assistance, operations support, technical writing, SaaS documentation, document-management, and knowledge-base experience.',
    icon: SealCheck,
    group: 'discover',
    section: 'proof',
  },
  {
    kind: 'page',
    id: 'tools',
    path: '/tools',
    label: 'Tools & Systems',
    title: `Tools & Systems | ${SUFFIX}`,
    description: 'Tools used across documentation, project tracking, operations support, collaboration, content, and research.',
    icon: Wrench,
    group: 'discover',
  },
  {
    kind: 'page',
    id: 'resumes',
    path: '/resumes',
    label: 'Resumes',
    title: `Resumes | ${SUFFIX}`,
    description: 'Role-specific resumes for operations and virtual assistance, and technical writing and documentation.',
    icon: IdentificationCard,
    group: 'discover',
  },
  {
    kind: 'page',
    id: 'contact',
    path: '/contact',
    label: 'Contact',
    title: `Contact | ${SUFFIX}`,
    description: 'Get in touch about documentation, operations support, SOPs, knowledge bases, or ongoing virtual assistance.',
    icon: Envelope,
    group: 'general',
    section: 'contact',
  },
  {
    kind: 'page',
    id: 'privacy',
    path: '/privacy',
    label: 'Privacy Policy',
    title: `Privacy Policy | ${SUFFIX}`,
    description: 'What this site stores, what it does not, and how to ask for your data.',
    icon: ShieldCheck,
  },
  {
    kind: 'page',
    id: 'terms',
    path: '/terms',
    label: 'Terms of Service',
    title: `Terms of Service | ${SUFFIX}`,
    description: 'The terms for using this portfolio site.',
    icon: FileText,
  },
]

export const externals: ExternalRoute[] = []

export function navEntries(group: NavGroupId): NavEntry[] {
  return [...pages.filter((p) => p.group === group), ...externals.filter((e) => e.group === group)]
}

export function navTarget(page: PageRoute): string {
  return page.section ? `/#${page.section}` : page.path
}

export const notFoundTitle = `Page Not Found | ${SUFFIX}`
