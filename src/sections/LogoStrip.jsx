import { logos } from '../copy.jsx'

/*
 * Doc text, exactly: "Nasdaq, Meta, … ServiceNow, and more" (bold).
 * Each name sits on its own tile; the commas stay in the text, visually tucked in.
 */
export default function LogoStrip() {
  return (
    <section className="logos" aria-label={logos.label}>
      <div className="container">
        <p className="logos__label">{logos.label}</p>
        <p className="logos__list">
          <strong>
            {logos.names.map((n, i) => (
              <span key={n} className="logos__item" style={{ '--i': i }}>
                <span className="logos__tile">{n}</span>
                <span className="logos__sep">, </span>
              </span>
            ))}
            <span className="logos__more">{logos.more}</span>
          </strong>
        </p>
      </div>
    </section>
  )
}
