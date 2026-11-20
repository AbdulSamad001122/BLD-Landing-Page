import { CtaButton, Reveal } from '../components/primitives.jsx'
import { LogoBarArt, Wave } from '../components/art.jsx'
import { finalCta } from '../copy.jsx'

export default function FinalCta() {
  const [seen, question, take] = finalCta.body
  return (
    <section className="section section--navy final" id="final-cta">
      <Wave color="var(--tint-blue)" />
      <div className="hero__glow" aria-hidden="true" />
      <span className="orb orb--a" aria-hidden="true" />
      <span className="orb orb--b" aria-hidden="true" />
      <div className="container container--narrow center final__inner">
        <LogoBarArt />
        <Reveal as="h2" className="h2 h2--onDark final__title">{finalCta.headline}</Reveal>
        <Reveal as="p" className="final__seen">{seen}</Reveal>
        <Reveal as="p" className="final__question">{question}</Reveal>
        <Reveal as="p" className="final__take">{take}</Reveal>
        <CtaButton kicker={finalCta.ctaKicker}>{finalCta.cta}</CtaButton>
      </div>
    </section>
  )
}
