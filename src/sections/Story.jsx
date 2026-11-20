import { CtaButton, Reveal } from '../components/primitives.jsx'
import { CycleArt, GearsArt, GrowthArt, Icon, IconBadge, MazeArt, TypingDots, Wave } from '../components/art.jsx'
import { story } from '../copy.jsx'

const obstacleIcons = ['team', 'megaphone', 'gears']

export default function Story() {
  const [cycle, meanwhile, likeYou, seen] = story.body1
  const [velocityIntro, stuck, before] = story.body2

  return (
    <>
      {/* Band 1: the pain, as a chat thread (white with soft colour blobs) */}
      <section className="section band band--pain">
        <Wave color="var(--navy)" />
        <span className="blob blob--blue" aria-hidden="true" />
        <span className="blob blob--red" aria-hidden="true" />
        <div className="container container--narrow band__inner">
          <Reveal as="h2" className="h2 h2--blue center">{story.headline}</Reveal>

          <div className="bubbles">
            {story.painQuotes.map((q, i) => (
              <Reveal key={i} delay={i * 450} variant={i % 2 ? 'right' : 'left'} className={`bubble-row bubble-row--${i % 2 ? 'right' : 'left'}`}>
                <span className="bubble__avatar" aria-hidden="true"><Icon name="person" size={22} /></span>
                <div className="bubble">
                  <TypingDots />
                  <span className="bubble__text">{q}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="story__relate">
            <p className="story__relate-q">{story.relate}</p>
            <p className="story__relate-cycle">{story.cycle}</p>
          </Reveal>

          <Reveal variant="zoom" className="story__promise">
            <span className="shine" aria-hidden="true" />
            <p className="story__five">{story.fiveYears}</p>
            <p className="story__promise-quote"><strong><em>{story.promise}</em></strong></p>
          </Reveal>
        </div>
      </section>

      {/* Band 2: year after year (light grey with a faint grid) */}
      <section className="section band band--grid">
        <Wave color="var(--white)" />
        <div className="container story__chapters">
          <Reveal className="chapter">
            <Reveal variant="zoom"><CycleArt /></Reveal>
            <p className="chapter__text">{cycle}</p>
          </Reveal>

          <div className="chapter chapter--reverse">
            <Reveal variant="zoom" className="chapter__art chapter__art--win" aria-hidden="true">
              <span className="win__card win__card--a"><Icon name="trophy" size={34} /></span>
              <span className="win__card win__card--b"><Icon name="handshake" size={30} /></span>
              <span className="win__spark" />
            </Reveal>
            <div>
              <Reveal as="p" variant="left" className="chapter__text">{meanwhile}</Reveal>
              <Reveal as="p" variant="left" delay={150} className="aside-line">{likeYou}</Reveal>
            </div>
          </div>

          <Reveal as="p" className="statement">{seen}</Reveal>
        </div>
      </section>

      {/* Band 3: the turn + the Velocity case file (soft blue gradient) */}
      <section className="section band band--case">
        <Wave color="var(--navy)" />
        <div className="container container--narrow band__inner">
          <Reveal variant="zoom" className="bigq">
            <span className="bigq__mark" aria-hidden="true">?</span>
            <p className="bigq__text"><strong>{story.question}</strong></p>
          </Reveal>
        </div>

        <div className="container band__inner">
          <Reveal className="casefile">
            <p className="casefile__intro">{velocityIntro}</p>

            <div className="casefile__maze">
              <MazeArt />
              <div>
                <Reveal as="p" variant="right" className="casefile__stuck">{stuck}</Reveal>
                <Reveal as="p" variant="right" delay={150}>{before}</Reveal>
              </div>
            </div>

            <ul className="obstacles">
              {story.noMatter.map((p, i) => (
                <Reveal as="li" key={i} delay={i * 160} variant="pop" className="obstacle">
                  <IconBadge name={obstacleIcons[i]} tone="red" />
                  <span>{p}</span>
                </Reveal>
              ))}
            </ul>

            <div className="casefile__levers">
              <GearsArt />
              <Reveal as="p" variant="right" className="casefile__wall">{story.body3}</Reveal>
            </div>

            <div className="casefile__result">
              <GrowthArt />
              <Reveal as="p" variant="right" className="casefile__result-text">{story.result}</Reveal>
            </div>

            <Reveal as="p" variant="zoom" className="jump">{story.jump}</Reveal>
          </Reveal>

          <Reveal as="p" className="story__close">{story.close}</Reveal>
          <div className="center story__cta">
            <CtaButton>{story.cta}</CtaButton>
          </div>
        </div>
      </section>
    </>
  )
}
