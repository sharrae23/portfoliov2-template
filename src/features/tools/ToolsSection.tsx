import { PageHeader } from '@/components/page/PageHeader'
import { marqueeTools, toolGroups, toolsSection } from '@/content/tools'
import type { ToolMark } from '@/content/schema'
import './tools.css'

function ToolTile({ tool, compact = false }: { tool: ToolMark; compact?: boolean }) {
  return (
    <div className="tl-tool" data-compact={compact ? '' : undefined}>
      <span className="tl-tool__logo">
        <img src={tool.logo} alt="" width={28} height={28} loading="lazy" decoding="async" />
      </span>
      <span>{tool.name}</span>
    </div>
  )
}

function ToolsBody() {
  return (
    <>
      <div className="tl-marquee" aria-label="Tools and systems">
        <div className="tl-track">
          <div className="tl-set">
            {marqueeTools.map((tool) => (
              <ToolTile key={tool.name} tool={tool} compact />
            ))}
          </div>
          <div className="tl-set" aria-hidden="true">
            {marqueeTools.map((tool) => (
              <ToolTile key={`${tool.name}-duplicate`} tool={tool} compact />
            ))}
          </div>
        </div>
      </div>

      <div className="tl-groups">
        {toolGroups.map((group) => (
          <section key={group.title} className="tl-group">
            <h3>{group.title}</h3>
            <div className="tl-grid">
              {group.tools.map((tool) => (
                <ToolTile key={tool.name} tool={tool} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

export function ToolsSection() {
  const c = toolsSection
  return (
    <section id="tools" className="pg pg--section tl" aria-labelledby="tools-title">
      <PageHeader level={2} id="tools-title" eyebrow={c.eyebrow} titleThin={c.titleThin} titleBold={c.titleBold} lede={c.lede} />
      <ToolsBody />
    </section>
  )
}

export function ToolsInline() {
  const c = toolsSection
  return (
    <section className="tl tl--inline" aria-labelledby="tools-inline-title">
      <PageHeader level={2} id="tools-inline-title" eyebrow={c.eyebrow} titleThin={c.titleThin} titleBold={c.titleBold} lede={c.lede} />
      <ToolsBody />
    </section>
  )
}
