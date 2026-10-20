import { useRef } from 'react'
import { Link } from 'react-router'
import { ArrowUpRight } from '@phosphor-icons/react'
import { homeHero } from '@/content/home'
import { useScrollScene } from '@/hooks/use-scroll-scene'
import { scrollToSection } from '@/lib/motion/smooth-scroll'
import { heroScene } from './hero-scene'
import './hero.css'

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  useScrollScene(ref, heroScene)

  const scrollTo = (event: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return
    event.preventDefault()
    scrollToSection(section)
  }

  return (
    <section ref={ref} id="top" className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero__title">
        <span className="hero__layer hero__layer--thin">
          <span className="hero__line hero__line--thin">{homeHero.headlineThin}</span>
        </span>
        <span className="hero__layer hero__layer--bold">
          <span className="hero__line hero__line--bold">{homeHero.headlineBold}</span>
        </span>
      </h1>

      <div className="hero__foot">
        <p className="hero__sub">
          <strong className="hero__sub-lead">{homeHero.subheadLead}</strong>
          <span className="hero__sub-rest">{homeHero.subheadRest}</span>
        </p>

        <div className="hero__actions">
          <Link
            to={homeHero.servicesCta.to}
            className="hero__cta btn-line"
            onClick={(event) => scrollTo(event, 'services')}
          >
            {homeHero.servicesCta.label}
            <ArrowUpRight size={16} weight="bold" aria-hidden />
          </Link>

          <Link
            to={homeHero.workCta.to}
            className="hero__cta btn-line hero__cta--secondary"
            onClick={(event) => scrollTo(event, 'work')}
          >
            {homeHero.workCta.label}
            <ArrowUpRight size={16} weight="bold" aria-hidden />
          </Link>
        </div>

        <Link
          to={homeHero.cta.to}
          className="hero__contact-link"
          onClick={(event) => scrollTo(event, 'contact')}
        >
          Have a project in mind? <span>{homeHero.cta.label} <ArrowUpRight size={13} weight="bold" aria-hidden /></span>
        </Link>

        <div className="hero__achievements" aria-label="Experience highlights">
          {homeHero.highlights.map((highlight) => (
            <div className="hero__achievement" key={highlight.value}>
              {highlight.url ? (
                <a href={highlight.url} target="_blank" rel="noopener noreferrer" className="hero__achievement-value hero__achievement-value--link">
                  {highlight.value} <ArrowUpRight size={16} aria-hidden />
                </a>
              ) : (
                <strong className="hero__achievement-value">{highlight.value}</strong>
              )}
              <span className="hero__achievement-label">{highlight.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
