import { CtaButton, Reveal } from '../components/primitives.jsx'
import { Icon, Wave } from '../components/art.jsx'
import { method } from '../copy.jsx'

const stageIcon = { attract: 'radar', close: 'contract', repeat: 'loop' }
// The first three outro paragraphs follow Attract, Close, Repeat in order.
const outroKeys = ['attract', 'close', 'repeat']

export default function Method() {
  const [them, you] = method.intro
  const [outroAttract, outroClose, outroRepeat, outroEnd] = method.outro

  return (
    <section className="section section--navy method">
      <Wave color="var(--sky-tint)" />
      <span className="method__grid" aria-hidden="true" />
      <div className="container container--narrow center">
        <Reveal as="h2" className="h2 h2--onDark">{method.headline}</Reveal>
      </div>

      {/* Them vs you */}
      <div className="container versus">
        <Reveal variant="left" className="versus__card versus__card--them">
          <span className="versus__icon" aria-hidden="true"><Icon name="trophy" size={34} /></span>
          <p>{them}</p>
        </Reveal>
        <span className="versus__vs" aria-hidden="true" />
        <Reveal delay={120} variant="right" className="versus__card versus__card--you">
          <span className="versus__icon" aria-hidden="true"><Icon name="coin" size={30} /></span>
          <p>{you}</p>
        </Reveal>
      </div>

      <div className="container container--narrow center">
        <Reveal as="p" className="method__question"><strong>{method.question}</strong></Reveal>
        <Reveal as="p" className="method__secret">{method.secret}</Reveal>
        <Reveal as="p" variant="none" className="method__words" aria-label="Attract. Close. Repeat.">
          <span className="w-attract">Attract.</span> <span className="w-close">Close.</span>{' '}
          <span className="w-repeat">Repeat.</span>
        </Reveal>
      </div>

      <div className="container">
        <ol className="stages">
          {method.stages.map((s, i) => (
            <Reveal as="li" key={s.key} delay={i * 180} variant="pop" className={`stage stage--${s.key}`}>
              <div className="stage__head">
                <span className="stage__icon"><Icon name={stageIcon[s.key]} size={30} /></span>
              </div>
              <h3 className="stage__title">{s.title}</h3>
              <p className="stage__text">{s.text}</p>
              {i < 2 && <span className="stage__arrow" aria-hidden="true" />}
            </Reveal>
          ))}
        </ol>
        <svg className="stages__loop" viewBox="0 0 1000 70" aria-hidden="true">
          <defs>
            <marker id="loopHead" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0L10 5L0 10z" fill="#2E74B5" />
            </marker>
            <linearGradient id="loopGrad" x1="1" x2="0" y1="0" y2="0">
              <stop offset="0" stopColor="#8CA0BB" />
              <stop offset="1" stopColor="#2E74B5" />
            </linearGradient>
          </defs>
          <path d="M833 4 C 833 60, 760 64, 500 64 C 240 64, 167 60, 167 8" fill="none" stroke="url(#loopGrad)" strokeWidth="2.5" strokeDasharray="7 7" markerEnd="url(#loopHead)" />
        </svg>
      </div>

      {/* Outro: one row per stage, then the closing line */}
      <div className="container container--narrow">
        <ul className="outro">
          {[outroAttract, outroClose, outroRepeat].map((p, i) => (
            <Reveal as="li" key={i} delay={i * 140} variant="left" className={`outro__row stage--${outroKeys[i]}`}>
              <span className="stage__icon"><Icon name={stageIcon[outroKeys[i]]} size={26} /></span>
              <p>{p}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal as="p" className="method__end">{outroEnd}</Reveal>
        <div className="center">
          <CtaButton>{method.cta}</CtaButton>
        </div>
      </div>
    </section>
  )
}
