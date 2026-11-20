import { Reveal } from '../components/primitives.jsx'
import { IconBadge, Wave } from '../components/art.jsx'
import { bio } from '../copy.jsx'

export default function Bio() {
  const [founder, closed, trenches, mostPeople, iHave, documented, quiz] = bio.body

  return (
    <section className="section bio">
      <Wave color="var(--navy)" />
      <span className="bio__shape bio__shape--a" aria-hidden="true" />
      <span className="bio__shape bio__shape--b" aria-hidden="true" />
      <div className="container bio__grid">
        <Reveal variant="left" className="bio__media">
          <div className="bio__frame">
            <img src={bio.photo} alt="David “Ledge” Ledgerwood" width="800" height="800" loading="lazy" />
          </div>
        </Reveal>

        <div className="bio__copy">
          <Reveal as="p" className="bio__intro"><strong>{bio.intro}</strong></Reveal>

          <div className="creds">
            <Reveal variant="pop" className="cred">
              <IconBadge name="rocket" tone="blue" />
              <p>{founder}</p>
            </Reveal>
            <Reveal delay={140} variant="pop" className="cred">
              <IconBadge name="handshake" tone="green" />
              <p>{closed}</p>
            </Reveal>
          </div>

          <Reveal className="bio__row">
            <IconBadge name="radar" tone="blue" size="sm" />
            <p>{trenches}</p>
          </Reveal>

          <Reveal variant="zoom" className="bio__contrast">
            <p>{mostPeople}</p>
            <p className="bio__punch">{iHave}</p>
          </Reveal>

          <Reveal className="bio__row">
            <IconBadge name="book" tone="blue" size="sm" />
            <p>{documented}</p>
          </Reveal>

          <Reveal className="bio__quiz">
            <IconBadge name="target" tone="red" size="sm" />
            <p>{quiz}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
