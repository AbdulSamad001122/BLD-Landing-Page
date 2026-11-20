import { CtaButton } from '../components/primitives.jsx'
import { VaultArt } from '../components/art.jsx'
import { hero } from '../copy.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <VaultArt className="hero__vault" />
      <div className="container hero__inner">
        <p className="eyebrow eyebrow--onDark">{hero.eyebrow}</p>
        <p className="hero__lead">{hero.lead}</p>
        <p className="hero__ask">{hero.ask}</p>
        <h1 className="hero__headline">
          {hero.headlinePre}
          <span className="hl-red">{hero.headlineHighlight}</span>
          {hero.headlinePost}
        </h1>
        {hero.sub.map((line, i) => <p key={i} className="hero__sub">{line}</p>)}
        <CtaButton>{hero.cta}</CtaButton>
        <p className="hero__under">{hero.under}</p>
      </div>
    </section>
  )
}
