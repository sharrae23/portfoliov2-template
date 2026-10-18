import { useState } from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import { PageMeta } from '@/app/PageMeta'
import type { PageRoute } from '@/app/routes'
import { PageHeader } from '@/components/page/PageHeader'
import { serviceWorkflowPage, serviceWorkflows, type ServiceWorkflow, type WorkflowNode } from '@/content/serviceWorkflow'
import './service-workflow.css'

function FlowCard({
  node,
  active,
  onSelect,
}: {
  node: WorkflowNode
  active: boolean
  onSelect: () => void
}) {
  const Glyph = node.icon
  return (
    <button
      type="button"
      className="sw-card"
      data-active={active ? '' : undefined}
      onClick={onSelect}
      onMouseEnter={onSelect}
      aria-pressed={active}
    >
      <span className="sw-card__mark" aria-hidden />
      <strong>{node.title}</strong>
      <Glyph size={34} weight="light" aria-hidden />
      <small>{node.tag}</small>
    </button>
  )
}

function WorkflowPanel({ workflow }: { workflow: ServiceWorkflow }) {
  const [selected, setSelected] = useState<WorkflowNode>(workflow.primary[0]!)
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="sw-workflow" aria-labelledby={`sw-${workflow.id}-title`}>
      <header className="sw-workflow__head">
        <p className="wk-eyebrow">{workflow.eyebrow}</p>
        <h2 id={`sw-${workflow.id}-title`} className="wk-title">
          <span>{workflow.titleThin}</span> <span className="wk-title__bold">{workflow.titleBold}</span>
        </h2>
      </header>

      <div className="sw-layout">
        <aside className="sw-rail" aria-label={`${workflow.tab} method`}>
          <span className="sw-rail__rule" aria-hidden />
          <ol>
            {workflow.steps.map((step, index) => (
              <li key={step.name} data-active={activeStep === index ? '' : undefined}>
                <button type="button" onClick={() => setActiveStep(index)}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step.name}</strong>
                </button>
              </li>
            ))}
          </ol>
          <p key={workflow.steps[activeStep]?.name}>{workflow.steps[activeStep]?.body}</p>
        </aside>

        <div className="sw-board">
          <div className="sw-board__top">
            <div>
              <h3>{workflow.panelTitle}</h3>
              <p className="sw-legend">
                <span>{workflow.legend[0]}</span>
                <span>{workflow.legend[1]}</span>
              </p>
            </div>
            <span className="sw-status">Workflow active</span>
          </div>

          <div className="sw-flow">
            <div className="sw-flow__label">Intake & delivery</div>
            <div className="sw-primary" data-count={workflow.primary.length}>
              {workflow.primary.map((node, index) => (
                <div key={node.title} className="sw-node-wrap">
                  <FlowCard
                    node={node}
                    active={selected.title === node.title}
                    onSelect={() => setSelected(node)}
                  />
                  {index < workflow.primary.length - 1 ? <ArrowRight className="sw-arrow" size={20} weight="bold" aria-hidden /> : null}
                </div>
              ))}
            </div>

            {workflow.endState ? (
              <div className="sw-end-state">
                <span className="sw-end-state__line" aria-hidden>
                  <ArrowRight size={20} weight="bold" />
                </span>
                <FlowCard
                  node={workflow.endState}
                  active={selected.title === workflow.endState.title}
                  onSelect={() => setSelected(workflow.endState!)}
                />
              </div>
            ) : null}

            <div className="sw-loop">
              <span>{workflow.loopLabel}</span>
            </div>

            <div className="sw-secondary-wrap">
              <div className="sw-secondary" data-count={workflow.secondary.length}>
                {workflow.secondary.map((node, index) => (
                  <div key={node.title} className="sw-node-wrap">
                    <FlowCard
                      node={node}
                      active={selected.title === node.title}
                      onSelect={() => setSelected(node)}
                    />
                    {index < workflow.secondary.length - 1 ? <ArrowRight className="sw-arrow" size={20} weight="bold" aria-hidden /> : null}
                  </div>
                ))}
              </div>
              <div className="sw-flow__label sw-flow__label--bottom">{workflow.secondaryLabel}</div>
            </div>
          </div>

          <div className="sw-inspect" aria-live="polite">
            <div>
              <span className="pg-mono">{selected.tag}</span>
              <h4>{selected.title}</h4>
              <p>{selected.about}</p>
            </div>
            <p className="sw-hint">Hover or select a stage to inspect</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceWorkflowBody() {
  const [active, setActive] = useState<ServiceWorkflow['id']>('operations')
  const workflow = serviceWorkflows.find((item) => item.id === active) ?? serviceWorkflows[0]!

  return (
    <>
      <div className="sw-tabs" role="tablist" aria-label="Service workflows">
        {serviceWorkflows.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active === item.id}
            aria-controls={`sw-panel-${item.id}`}
            id={`sw-tab-${item.id}`}
            onClick={() => setActive(item.id)}
          >
            {item.tab}
          </button>
        ))}
      </div>

      <div
        id={`sw-panel-${workflow.id}`}
        role="tabpanel"
        aria-labelledby={`sw-tab-${workflow.id}`}
      >
        <WorkflowPanel key={workflow.id} workflow={workflow} />
      </div>
    </>
  )
}

export function ServiceWorkflowPage({ page }: { page: PageRoute }) {
  const c = serviceWorkflowPage

  return (
    <div className="pg sw">
      <PageMeta page={page} />
      <PageHeader eyebrow={c.eyebrow} titleThin={c.titleThin} titleBold={c.titleBold} lede={c.lede} />
      <ServiceWorkflowBody />
    </div>
  )
}

export function ServiceWorkflowSection() {
  const c = serviceWorkflowPage

  return (
    <section id="service-workflow" className="pg pg--section sw" aria-labelledby="service-workflow-title">
      <PageHeader
        level={2}
        id="service-workflow-title"
        eyebrow={c.eyebrow}
        titleThin={c.titleThin}
        titleBold={c.titleBold}
        lede={c.lede}
      />
      <ServiceWorkflowBody />
    </section>
  )
}
