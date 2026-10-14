import { BookOpenText, Briefcase, FileText, FolderSimple, ListChecks } from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'
import type { WorkChapter } from '@/content/schema'

const NAMES_MAX = 110

const chapterIcons: Record<string, Icon> = {
  featured: ListChecks,
  'case-studies': BookOpenText,
  screens: Briefcase,
  process: FolderSimple,
}

export function ChapterFace({ chapter, foot = true }: { chapter: WorkChapter; foot?: boolean }) {
  const CategoryIcon = chapterIcons[chapter.id] ?? FileText
  const names = chapter.items.map((item) => item.name).join(' · ')

  return (
    <span className="wa__face">
      <span className="wa__marks">
        <span className="wa__category-icon">
          <CategoryIcon size="52%" weight="regular" aria-hidden />
        </span>
      </span>
      {foot ? (
        <span className="wa__face-foot">
          <b>{chapter.title}</b>
          <span>{names && names.length <= NAMES_MAX ? names : chapter.line}</span>
        </span>
      ) : null}
    </span>
  )
}
