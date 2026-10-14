import { PageMeta } from '@/app/PageMeta'
import type { PageRoute } from '@/app/routes'
import { PageHeader } from '@/components/page/PageHeader'
import { testimonialRows, testimonialsPage, type Testimonial } from '@/content/testimonials'
import './testimonials.css'

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="tm-card" data-featured={testimonial.featured ? '' : undefined}>
      <blockquote>
        <p>“{testimonial.quote}”</p>
      </blockquote>

      {testimonial.highlight ? <p className="tm-highlight">{testimonial.highlight}</p> : null}

      <footer className="tm-card__footer">
        <div>
          <strong>{testimonial.client}</strong>
          <span>{testimonial.context}</span>
        </div>
        <ul aria-label="Project tags">
          {testimonial.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </footer>
    </article>
  )
}

function MarqueeRow({ row, reverse = false }: { row: Testimonial[]; reverse?: boolean }) {
  return (
    <div className="tm-marquee" data-reverse={reverse ? '' : undefined}>
      <div className="tm-track">
        <div className="tm-set">
          {row.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <div className="tm-set" aria-hidden="true">
          {row.map((testimonial) => (
            <TestimonialCard key={`${testimonial.id}-duplicate`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TestimonialsBody() {
  return (
    <div className="tm-rows" aria-label="Client testimonials">
      <MarqueeRow row={testimonialRows[0]!} />
      <MarqueeRow row={testimonialRows[1]!} reverse />
    </div>
  )
}

export function TestimonialsPage({ page }: { page: PageRoute }) {
  const c = testimonialsPage

  return (
    <div className="pg tm">
      <PageMeta page={page} />
      <PageHeader eyebrow={c.eyebrow} titleThin={c.titleThin} titleBold={c.titleBold} lede={c.lede} />
      <TestimonialsBody />
    </div>
  )
}

export function TestimonialsSection() {
  const c = testimonialsPage

  return (
    <section id="testimonials" className="pg pg--section tm tm--home" aria-labelledby="testimonials-title">
      <PageHeader
        level={2}
        id="testimonials-title"
        eyebrow={c.eyebrow}
        titleThin={c.titleThin}
        titleBold={c.titleBold}
        lede={c.lede}
      />
      <TestimonialsBody />
    </section>
  )
}
