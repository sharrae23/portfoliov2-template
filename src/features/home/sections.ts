import type { ComponentType } from 'react'
import { AboutSection } from './about/AboutSection'
import { HeroSection } from './hero/HeroSection'
import { AutomationSection } from './automation/AutomationSection'
import { ManifestoSection } from './manifesto/ManifestoSection'
import { ServicesSection } from './services/ServicesSection'
import { WorkSection } from './work/WorkSection'
import { ContactSection } from '@/features/contact/ContactPage'

export type HomeSection = { id: string; Component: ComponentType }

export const homeSectionList: HomeSection[] = [
  { id: 'hero', Component: HeroSection },
  { id: 'manifesto', Component: ManifestoSection },
  { id: 'automation', Component: AutomationSection },
  { id: 'work', Component: WorkSection },
  { id: 'services', Component: ServicesSection },
  { id: 'about', Component: AboutSection },
  { id: 'contact', Component: ContactSection },
]
