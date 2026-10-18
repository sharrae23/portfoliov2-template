import { useState } from 'react'
import { ArrowRight, ArrowUpRight, BookOpenText, Briefcase, FileText, ListChecks } from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'
import { Link } from 'react-router'
import { PageMeta } from '@/app/PageMeta'
import type { PageRoute } from '@/app/routes'
import { PageHeader } from '@/components/page/PageHeader'
import type { WorkItem } from '@/content/schema'
import { knowledgeBaseSamples, operationsSamples, sopSamples, workflowSamples } from '@/content/work'
import './project-highlights-preview.css'

type CategoryId = 'operations' | 'sops' | 'knowledge'
type KnowledgeFilter = 'all' | 'help-center' | 'document-control' | 'workflow-support' | 'release-notes'
type Category = { id: CategoryId; name: string; desc: string; countLabel: string; Icon: Icon; items: WorkItem[] }

const groups: Category[] = [
  {
    id: 'operations',
    name: 'Operations & Virtual Assistance',
    desc: 'Research, task tracking, administrative organization, project coordination, and ongoing support.',
    countLabel: 'case study',
    Icon: Briefcase,
    items: operationsSamples,
  },
  {
    id: 'sops',
    name: 'SOP & Process Documentation',
    desc: 'Practical step-by-step procedures, communication standards, scheduling, and operational workflows.',
    countLabel: 'samples',
    Icon: ListChecks,
    items: sopSamples,
  },
  {
    id: 'knowledge',
    name: 'Knowledge & Documentation Management',
    desc: 'Help center articles, SaaS guides, release notes, document organization, and workflow governance.',
    countLabel: 'samples',
    Icon: BookOpenText,
    items: [...knowledgeBaseSamples, ...workflowSamples],
  },
]

const filters: { id: KnowledgeFilter; label: string }[] = [
  { id: 'all', label: 'All samples' },
  { id: 'help-center', label: 'Help Center' },
  { id: 'document-control', label: 'Document Control' },
  { id: 'workflow-support', label: 'Workflow Support' },
  { id: 'release-notes', label: 'Release Notes' },
]

const isInFilter = (item: WorkItem, filter: KnowledgeFilter) => {
  if (filter === 'all') return true
  if (filter === 'help-center') return knowledgeBaseSamples.some((entry) => entry.id === item.id) && item.id !== 'march-2026-release-notes'
  if (filter === 'release-notes') return item.id === 'march-2026-release-notes'
  if (filter === 'document-control') return workflowSamples.some((entry) => entry.id === item.id)
  return item.id === 'noc-kb-request-workflow'
}

function WorkCase({ item }: { item: WorkItem }) {
  const cs = item.caseStudy
  return (
    <li className="ph2-case">
      <details>
        <summary>
          <div className="ph2-case__content">
            <span className="ph2-kicker">{item.kicker}{cs?.featured ? ' · Featured sample' : ''}</span>
            <h3>{item.name}</h3>
            <p>{item.summary}</p>
            {cs?.tags.length ? (
              <ul className="ph2-tags ph2-tags--preview" aria-label="Expertise tags">
                {cs.tags.slice(0, 3).map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            ) : null}
          </div>
          <span className="ph2-case__action">View case study <ArrowRight size={17} weight="bold" aria-hidden /></span>
        </summary>
        <div className="ph2-case__expanded">
          {cs?.body ? <p>{cs.body}</p> : null}
          {cs?.samples?.length ? (
            <div className="ph2-files">
              <h4>View actual work samples</h4>
              <div className="ph2-files__links">
                {cs.samples.map((sample) => (
                  <a key={sample.href} href={sample.href} target="_blank" rel="noopener noreferrer">
                    <FileText size={17} aria-hidden />
                    {sample.label}
                    <ArrowUpRight size={16} weight="bold" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          ) : item.href ? (
            <a className="ph2-file" href={item.href} target="_blank" rel="noopener noreferrer">View work sample <ArrowUpRight size={16} aria-hidden /></a>
          ) : null}
          {cs?.tags.length ? (
            <div>
              <h4>Expertise & tools</h4>
              <ul className="ph2-tags" aria-label="All expertise tags">
                {cs.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          ) : null}
          {cs?.note ? <p className="ph2-note">{cs.note}</p> : null}
        </div>
      </details>
    </li>
  )
}

/** Isolated option-two experiment; the Home portfolio grid is not altered. */
export function ProjectHighlightsPreviewPage({ page }: { page: PageRoute }) {
  const [active, setActive] = useState<CategoryId>('operations')
  const [filter, setFilter] = useState<KnowledgeFilter>('all')
  const group = groups.find((g) => g.id === active) ?? groups[0]!
  const shown = group.items.filter((item) => group.id !== 'knowledge' || isInFilter(item, filter))

  return (
    <div className="pg ph2">
      <PageMeta page={page} />
      <meta name="robots" content="noindex, nofollow" />
      <PageHeader
        eyebrow="Design preview · Option 2"
        titleThin="Project"
        titleBold="Highlights."
        lede="A simpler three-category layout for my operations support and documentation work. This is a test page; the current Project Highlights layout remains unchanged."
      />
      <div className="ph2-toplinks">
        <Link to="/#work" className="ph2-back">← Back to the current four-category layout</Link>
        <span>Test layout · Not linked in the side menu</span>
      </div>
      <div className="ph2-categories" aria-label="Preview categories">
        {groups.map((g, index) => {
          const Icon = g.Icon
          return (
            <button
              type="button"
              key={g.id}
              className="ph2-category"
              data-active={g.id === active ? '' : undefined}
              aria-pressed={g.id === active}
              onClick={() => { setActive(g.id); setFilter('all') }}
            >
              <span className="ph2-category__top">
                <span className="ph2-category__icon"><Icon size={28} weight="regular" aria-hidden /></span>
                <span className="ph2-category__number">0{index + 1}</span>
              </span>
              <strong>{g.name}</strong>
              <span className="ph2-category__desc">{g.desc}</span>
              <span className="ph2-category__bottom">
                {g.items.length} {g.items.length === 1 ? g.countLabel : g.countLabel}
                <ArrowRight size={18} weight="bold" aria-hidden />
              </span>
            </button>
          )
        })}
      </div>

      <section className="ph2-selected" aria-labelledby="ph2-selected-title">
        <header className="ph2-selected__head">
          <div>
            <p className="ph2-kicker">Selected category · {String(groups.findIndex((g) => g.id === active) + 1).padStart(2, '0')}</p>
            <h2 id="ph2-selected-title">{group.name}</h2>
            <p>{group.desc}</p>
          </div>
          <span className="ph2-selected__count">{shown.length} {shown.length === 1 ? 'sample' : 'samples'}</span>
        </header>

        {active === 'knowledge' ? (
          <div className="ph2-filter" aria-label="Filter knowledge and documentation samples">
            <span>Filter by focus</span>
            <div className="ph2-filter__choices">
              {filters.map((f) => (
                <button type="button" key={f.id} onClick={() => setFilter(f.id)} aria-pressed={filter === f.id} data-active={filter === f.id ? '' : undefined}>{f.label}</button>
              ))}
            </div>
          </div>
        ) : null}

        <ul className="ph2-list" key={`${active}-${filter}`}>
          {shown.map((item) => <WorkCase key={item.id} item={item} />)}
        </ul>
        <p className="ph2-footnote">This preview reuses the same case-study descriptions, downloadable sample links, and disclosure notes as your existing portfolio.</p>
      </section>
    </div>
  )
}
