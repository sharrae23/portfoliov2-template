import type { ComponentType } from 'react'
import { createBrowserRouter, Navigate, type RouteObject } from 'react-router'
import { ContactPage } from '@/features/contact/ContactPage'
import { HomePage } from '@/features/home/HomePage'
import { ShowcasePage } from '@/features/showcase/ShowcasePage'
import { LegalPage } from '@/features/legal/LegalPage'
import { ProofPage } from '@/features/proof/ProofPage'
import { TestimonialsPage } from '@/features/testimonials/TestimonialsPage'
import { ToolsPage } from '@/features/tools/ToolsSection'
import { ResumesPage } from '@/features/resumes/ResumesPage'
import { ServiceWorkflowPage } from '@/features/service-workflow/ServiceWorkflowPage'
import { ProjectHighlightsPreviewPage } from '@/features/project-highlights-preview/ProjectHighlightsPreviewPage'
import { AppShell } from './AppShell'
import { RouteStage } from './RouteStage'
import { notFoundTitle, pages, type PageRoute } from './routes'

/** Built pages by registry id. Any page not listed here still renders the bare RouteStage. */
const PAGE_COMPONENTS: Partial<Record<string, ComponentType<{ page: PageRoute }>>> = {
  home: HomePage,
  testimonials: TestimonialsPage,
  'showcase': ShowcasePage,
  proof: ProofPage,
  tools: ToolsPage,
  resumes: ResumesPage,
  'service-workflow': ServiceWorkflowPage,
  'project-highlights-preview': ProjectHighlightsPreviewPage,
  contact: ContactPage,
  privacy: LegalPage,
  terms: LegalPage,
}

function elementFor(page: PageRoute) {
  // A page that only lives as a Home section (Work, Services, About) sends its own URL there.
  if (page.draft && page.section) return <Navigate to={`/#${page.section}`} replace />
  const Page = PAGE_COMPONENTS[page.id] ?? RouteStage
  return <Page page={page} />
}

/**
 * Home is a layout over its own URL and the Work chapter URLs (/work/<chapter>). Moving between
 * them keeps Home mounted, so a chapter sheet opens over the page you were on and closes back to it.
 * HomePage reads the chapter from the URL; the child routes render nothing themselves.
 */
function routeFor(page: PageRoute): RouteObject {
  if (page.path === '/') {
    return { element: elementFor(page), children: [{ index: true }, { path: 'work/:chapter' }] }
  }
  return { path: page.path.slice(1), element: elementFor(page) }
}

/** Every route comes from the registry in routes.ts. */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [...pages.map(routeFor), { path: '*', element: <RouteStage title={notFoundTitle} label="Page not found" /> }],
  },
])
