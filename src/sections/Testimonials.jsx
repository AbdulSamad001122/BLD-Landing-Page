import { Reveal } from '../components/primitives.jsx'
import { testimonials } from '../copy.jsx'
import { Wave } from '../components/art.jsx'

export function QuoteMark() {
  return (
    <svg className="quote-mark" width="44" height="34" viewBox="0 0 44 34" aria-hidden="true">
      <path d="M0 34V20.4C0 8.9 6.1 2.1 17.2 0l1.9 4.6C12.4 6.6 9.3 10.4 9 16h9v18H0zm25 0V20.4C25 8.9 31.1 2.1 42.2 0l1.8 4.6C37.4 6.6 34.3 10.4 34 16h9v18H25z" fill="currentColor" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="section testimonials band--dots">
      <Wave color="var(--sky-tint)" />
      <div className="container testimonials__grid">
        {testimonials.map((t, i) => (
          <Reveal as="figure" key={t.name} delay={i * 150} variant={i ? 'right' : 'left'} className="tcard">
            <div className="tcard__top">
              <QuoteMark />
            </div>
            <blockquote className="tcard__quote">{t.quote}</blockquote>
            <figcaption className="tcard__who">
              <img src={t.photo} alt={t.name} width="56" height="56" loading="lazy" />
              <span>
                <strong>— {t.name}, {t.company}</strong>
              </span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
