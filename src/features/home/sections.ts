import type { ComponentType } from 'react'
import { AboutSection } from './about/AboutSection'
import { HeroSection } from './hero/HeroSection'
import { ManifestoSection } from './manifesto/ManifestoSection'
import { ServicesSection } from './services/ServicesSection'
import { WorkSection } from './work/WorkSection'
import { ProofSection } from '@/features/proof/ProofPage'
import { ContactSection } from '@/features/contact/ContactPage'
import { TestimonialsSection } from '@/features/testimonials/TestimonialsPage'
import { ToolsSection } from '@/features/tools/ToolsSection'
import { ServiceWorkflowSection } from '@/features/service-workflow/ServiceWorkflowPage'

/**
 * The Home page, in scroll order. Add a section = build it in its own folder (component + css +
 * scene, copy from src/content) and add one line here. Delete a section = remove its line.
 * Each section renders its own <section id> so it can be linked to with /#<id>.
 */
export type HomeSection = { id: string; Component: ComponentType }

export const homeSectionList: HomeSection[] = [
  { id: 'hero', Component: HeroSection },
  { id: 'services', Component: ServicesSection },
  { id: 'work', Component: WorkSection },
  { id: 'testimonials', Component: TestimonialsSection },
  { id: 'manifesto', Component: ManifestoSection },
  { id: 'service-workflow', Component: ServiceWorkflowSection },
  { id: 'about', Component: AboutSection },
  { id: 'proof', Component: ProofSection },
  { id: 'tools', Component: ToolsSection },
  { id: 'contact', Component: ContactSection },
]
