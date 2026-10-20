import { ArrowRight, DownloadSimple, FileText } from '@phosphor-icons/react'
import { PageMeta } from '@/app/PageMeta'
import type { PageRoute } from '@/app/routes'
import { PageHeader } from '@/components/page/PageHeader'
import { resumeCredentials, resumeDownloads, resumePage, resumes, type ResumeData } from '@/content/resumes'
import './resumes.css'

function Skills({ resume }: { resume: ResumeData }) {
  return (
    <section className="rs-section">
      <h3>Core Skills</h3>
      <div className="rs-skill-groups">
        {resume.skillGroups.map((group) => (
          <p key={group.label}>
            <strong>{group.label}:</strong> {group.skills.join(' | ')}
          </p>
        ))}
      </div>
    </section>
  )
}

function ResumeArticle({ resume }: { resume: ResumeData }) {
  return (
    <article id={resume.id} className="rs-resume">
      <header className="rs-resume__head">
        <div>
          <p className="pg-mono">Resume</p>
          <h2>{resume.title}</h2>
          <p>{resume.subtitle}</p>
        </div>
        <div className="rs-resume__actions">
          <a className="btn-line" href={resumeDownloads[resume.id]} download>
            <DownloadSimple size={17} weight="bold" aria-hidden />
            Download PDF
          </a>
          <a className="btn-line" href="/#contact">
            Contact me
            <ArrowRight size={16} weight="bold" aria-hidden />
          </a>
        </div>
      </header>

      <section className="rs-section">
        <h3>Professional Summary</h3>
        <p>{resume.summary}</p>
      </section>

      <Skills resume={resume} />

      <section className="rs-section">
        <h3>Professional Experience</h3>
        <div className="rs-experience">
          {resume.experience.map((role) => (
            <section key={`${role.company}-${role.title}-${role.year}`} className="rs-role">
              <div className="rs-role__head">
                <div>
                  <h4>{role.title}</h4>
                  <p className="pg-mono">{role.company} · {role.year}</p>
                </div>
              </div>
              <ul>
                {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </section>

      {resume.selectedExperience?.length ? (
        <section className="rs-section">
          <h3>Selected Documentation Experience</h3>
          <div className="rs-compact-list">
            {resume.selectedExperience.map((group) => (
              <p key={group.label}><strong>{group.label}:</strong> {group.items.join(' · ')}</p>
            ))}
          </div>
        </section>
      ) : null}

      <section className="rs-section">
        <h3>Tools & Systems</h3>
        <div className="rs-compact-list">
          {resume.tools.map((group) => (
            <p key={group.label}><strong>{group.label}:</strong> {group.items.join(' · ')}</p>
          ))}
        </div>
      </section>

      <section className="rs-section rs-section--last">
        <h3>Education & Credentials</h3>
        <ul className="rs-credentials">
          {resumeCredentials.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </article>
  )
}

export function ResumesPage({ page }: { page: PageRoute }) {
  const c = resumePage
  return (
    <div className="pg rs">
      <PageMeta page={page} />
      <PageHeader eyebrow={c.eyebrow} titleThin={c.titleThin} titleBold={c.titleBold} lede={c.lede} />

      <div className="rs-jump" aria-label="Resume options">
        {resumes.map((resume) => (
          <a key={resume.id} href={`#${resume.id}`} className="rs-jump__card">
            <span className="rs-jump__icon"><FileText size={24} weight="regular" aria-hidden /></span>
            <span>
              <strong>{resume.title}</strong>
              <small>{resume.subtitle}</small>
            </span>
            <ArrowRight size={18} weight="bold" aria-hidden />
          </a>
        ))}
      </div>

      <div className="rs-list">
        {resumes.map((resume) => <ResumeArticle key={resume.id} resume={resume} />)}
      </div>
    </div>
  )
}
