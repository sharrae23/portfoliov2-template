import type { ComponentType } from 'react'
import { AboutSection } from './about/AboutSection'
import { HeroSection } from './hero/HeroSection'
import { AutomationSection } from './automation/AutomationSection'
import { ManifestoSection } from './manifesto/ManifestoSection'
import { ServicesSection } from './services/ServicesSection'
import { WorkSection } from './work/WorkSection'
import { ProofSection } from '@/features/proof/ProofPage'
import { ContactSection } from '@/features/contact/ContactPage'

/**
 * The Home page, in scroll order. Add a section = build it in its own folder (component + css +
 * scene, copy from src/content) and add one line here. Delete a section = remove its line.
 * Each section renders its own <section id> so it can be linked to with /#<id>.
 */
export type HomeSection = { id: string; Component: ComponentType }

export const homeSectionList: HomeSection[] = [
  { id: 'hero', Component: HeroSection },
  { id: 'manifesto', Component: ManifestoSection },
  { id: 'automation', Component: AutomationSection },
  { id: 'work', Component: WorkSection },
  { id: 'services', Component: ServicesSection },
  { id: 'about', Component: AboutSection },
  // Experience and Contact also keep their own pages; here they run as Home sections.
  { id: 'proof', Component: ProofSection },
  // Contact is the final Home section.
  { id: 'contact', Component: ContactSection },
]
