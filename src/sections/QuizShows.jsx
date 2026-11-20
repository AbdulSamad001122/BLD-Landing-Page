import { CtaButton, Reveal } from '../components/primitives.jsx'
import { IconBadge, Wave } from '../components/art.jsx'
import { quizShows } from '../copy.jsx'

// One icon per item, matched to what that item covers.
const itemIcons = ['target', 'leak', 'wrongfix', 'clipboard', 'calculator', 'lighten', 'question']
const tones = ['blue', 'red', 'blue', 'green', 'red', 'green', 'blue']

export default function QuizShows() {
  return (
    <section className="section quizshows">
      <Wave color="var(--light)" />
      <div className="container">
        <Reveal as="h2" className="h2 h2--blue center quizshows__title">{quizShows.headline}</Reveal>
        <ol className="shows">
          {quizShows.items.map((it, i) => (
            <Reveal as="li" key={i} delay={(i % 2) * 120} variant="pop" className={`show show--${tones[i]}`}>
              <IconBadge name={itemIcons[i]} tone={tones[i]} />
              <p>
                <strong className="show__lead">
                  <svg className="show__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8h10M8.5 3.5 13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {it.lead}
                </strong>{' '}
                <span className="show__text">{it.text}</span>
              </p>
            </Reveal>
          ))}
        </ol>
        <div className="center">
          <CtaButton>{quizShows.cta}</CtaButton>
        </div>
      </div>
    </section>
  )
}
