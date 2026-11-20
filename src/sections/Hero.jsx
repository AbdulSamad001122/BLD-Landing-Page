import { CtaButton } from '../components/primitives.jsx'
import { hero } from '../copy.jsx'

/** Faint city skyline, a nod to the add1zero4.com hero photography. */
function Skyline() {
  const towers = [
    [0, 120], [46, 170], [80, 95], [118, 230], [160, 140], [204, 260], [240, 110], [282, 190],
    [330, 300], [372, 150], [410, 210], [456, 120], [494, 340], [538, 180], [580, 240], [624, 130],
    [662, 280], [706, 160], [748, 210], [790, 110], [828, 250], [872, 175], [916, 320], [958, 140],
    [1000, 200], [1044, 120], [1082, 270], [1126, 160], [1168, 220], [1210, 130], [1250, 180],
  ]
  return (
    <svg className="hero__skyline" viewBox="0 0 1300 360" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      {towers.map(([x, h], i) => (
        <rect key={i} x={x} y={360 - h} width={i % 3 === 0 ? 40 : 36} height={h} rx="2" />
      ))}
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />
      <Skyline />
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
