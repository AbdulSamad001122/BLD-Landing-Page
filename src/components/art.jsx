/*
 * Word-free icons and illustrations. Purely decorative (aria-hidden), no text inside,
 * so the page copy stays exactly as the doc has it.
 */
import { useInView } from './primitives.jsx'

const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' }

const paths = {
  person: <><circle cx="16" cy="11" r="5" {...S} /><path d="M6 27c1.5-5.5 5.5-8 10-8s8.5 2.5 10 8" {...S} /></>,
  team: <><circle cx="11" cy="12" r="4" {...S} /><circle cx="22" cy="12" r="4" {...S} /><path d="M3 26c1-4.5 4-7 8-7s7 2.5 8 7M15.5 21c1.4-1.3 3.4-2 6.5-2 4 0 7 2.5 8 7" {...S} /></>,
  megaphone: <><path d="M5 13v6h4l11 6V7L9 13H5z" {...S} /><path d="M24 12.5a5 5 0 0 1 0 7M9 19l2 7h3" {...S} /></>,
  gears: <><circle cx="12" cy="13" r="4" {...S} /><path d="M12 5v2.5M12 18.5V21M4 13h2.5M17.5 13H20M6.3 7.3l1.8 1.8M15.9 16.9l1.8 1.8M6.3 18.7l1.8-1.8M15.9 9.1l1.8-1.8" {...S} /><circle cx="23" cy="23" r="3" {...S} /><path d="M23 17.5V19M23 27v1.5M17.5 23H19M27 23h1.5" {...S} /></>,
  loop: <><path d="M7 14a9 9 0 0 1 15.5-5.5L25 11M25 18a9 9 0 0 1-15.5 5.5L7 21" {...S} /><path d="M25 5v6h-6M7 27v-6h6" {...S} /></>,
  calendar: <><rect x="5" y="7" width="22" height="20" rx="3" {...S} /><path d="M5 13h22M11 4v6M21 4v6" {...S} /><path d="M10 18h3M15 18h3M20 18h2M10 22h3M15 22h3" {...S} /></>,
  trophy: <><path d="M10 5h12v6a6 6 0 0 1-12 0V5z" {...S} /><path d="M10 7H6v2a4 4 0 0 0 4 4M22 7h4v2a4 4 0 0 1-4 4M16 17v5M11 27h10M12.5 22h7l1 5h-9z" {...S} /></>,
  coin: <><ellipse cx="16" cy="11" rx="8" ry="4" {...S} /><path d="M8 11v5c0 2.2 3.6 4 8 4s8-1.8 8-4v-5M8 16v5c0 2.2 3.6 4 8 4s8-1.8 8-4v-5" {...S} /></>,
  rocket: <><path d="M16 4c5 3 7 8 7 13l-3 4h-8l-3-4c0-5 2-10 7-13z" {...S} /><circle cx="16" cy="13" r="2.5" {...S} /><path d="M12 21l-3 5 5-2M20 21l3 5-5-2" {...S} /></>,
  handshake: <><path d="M3 14l5-4 5 2 3-2 5 1 8 3" {...S} /><path d="M8 10v8l6 5c1 .8 2.4.6 3.1-.4L22 17M13 12l4 4M29 14l-5 5" {...S} /></>,
  radar: <><circle cx="16" cy="16" r="12" {...S} /><circle cx="16" cy="16" r="6.5" {...S} /><circle cx="16" cy="16" r="2" fill="currentColor" /></>,
  contract: <><path d="M8 4h11l6 6v18H8z" {...S} /><path d="M19 4v6h6M12 15h9M12 19h6" {...S} /><path d="M12 24c2-2 3 1 5-1s2 1 4 0" {...S} /></>,
  book: <><path d="M4 7c4-1.5 8-1.5 12 1 4-2.5 8-2.5 12-1v19c-4-1.5-8-1.5-12 1-4-2.5-8-2.5-12-1z" {...S} /><path d="M16 8v19" {...S} /></>,
  target: <><circle cx="15" cy="17" r="10" {...S} /><circle cx="15" cy="17" r="5" {...S} /><path d="M15 17l11-11M21 6h5v5" {...S} /></>,
  leak: <><path d="M6 6h20l-7 10v7l-6 3V16z" {...S} /><path d="M24 22c0 1.7-1.3 3-3 3" {...S} /><circle cx="25" cy="28" r="1" fill="currentColor" /></>,
  wrongfix: <><circle cx="16" cy="16" r="11" {...S} /><path d="M9 23L23 9" {...S} /><path d="M14 11.5c-1.5 0-2.5.8-2.5 2s1 1.7 2.5 2 2.5.8 2.5 2-1 2-2.5 2" {...S} /></>,
  clipboard: <><rect x="7" y="6" width="18" height="22" rx="3" {...S} /><path d="M12 4h8v4h-8zM11 14h10M11 18h10M11 22h6" {...S} /></>,
  calculator: <><rect x="7" y="4" width="18" height="24" rx="3" {...S} /><rect x="10.5" y="7.5" width="11" height="5" rx="1" {...S} /><path d="M11 17h.01M16 17h.01M21 17h.01M11 21h.01M16 21h.01M21 21h.01M11 25h.01M16 25h.01M21 25h.01" {...S} strokeWidth="3" /></>,
  lighten: <><path d="M5 22h22M9 22l3-9h8l3 9" {...S} /><path d="M16 4v6M13 7l3-3 3 3" {...S} /></>,
  question: <><circle cx="16" cy="16" r="12" {...S} /><path d="M12.5 12.5a3.5 3.5 0 1 1 5 3.2c-1 .5-1.5 1.3-1.5 2.3v1" {...S} /><circle cx="16" cy="23" r="1.2" fill="currentColor" /></>,
  arrowUp: <><path d="M6 24l7-7 4 4 9-11" {...S} /><path d="M20 10h6v6" {...S} /></>,
  check: <><path d="M7 16.5l6 6L25 10" {...S} /></>,
}

export function Icon({ name, size = 28, className = '' }) {
  return (
    <svg className={`icon ${className}`} viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

/** Round tinted badge holding an icon. */
export function IconBadge({ name, tone = 'blue', size = 'md' }) {
  return (
    <span className={`ibadge ibadge--${tone} ibadge--${size}`} aria-hidden="true">
      <Icon name={name} size={size === 'lg' ? 34 : 26} />
    </span>
  )
}

/** "Mid-market maze": a maze with a dot stuck inside and the exit out of reach. */
export function MazeArt() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  return (
    <svg ref={ref} className={`art art--maze ${inView ? 'is-in' : ''}`} viewBox="0 0 240 240" aria-hidden="true">
      <rect x="10" y="10" width="220" height="220" rx="18" className="maze__bg" />
      <path className="maze__walls" d="M30 30h180v70M30 30v180h120M70 70h100v100H90M70 70v100M110 110h40v40M190 130v80h-20M150 190h40M130 70v20M30 130h20M210 100v10" />
      <path className="maze__trail" d="M50 210V150h40v-60h60v40h-30" />
      <circle className="maze__dot" cx="120" cy="130" r="8" />
      <path className="maze__exit" d="M212 40h18M222 32l8 8-8 8" />
    </svg>
  )
}

/** Growth bars that rise when scrolled into view (no labels). */
export function GrowthArt() {
  const [ref, inView] = useInView({ threshold: 0.35 })
  const bars = [22, 26, 24, 30, 46, 62, 80, 100]
  return (
    <div ref={ref} className={`growth ${inView ? 'is-in' : ''}`} aria-hidden="true">
      <div className="growth__bars">
        {bars.map((h, i) => (
          <span key={i} className={`growth__bar ${i >= 4 ? 'is-up' : ''}`} style={{ '--h': `${h}%`, transitionDelay: `${i * 90}ms` }} />
        ))}
      </div>
      <svg className="growth__line" viewBox="0 0 100 60" preserveAspectRatio="none">
        <path d="M2 52 L30 46 L46 40 L62 26 L80 14 L98 3" />
      </svg>
    </div>
  )
}

/** Calendar pages repeating around a loop: "the next year, and the next…" */
export function CycleArt() {
  return (
    <div className="cycleart" aria-hidden="true">
      <span className="cycleart__ring" />
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="cycleart__page" style={{ '--i': i }}>
          <Icon name="calendar" size={26} />
        </span>
      ))}
      <span className="cycleart__center"><Icon name="loop" size={34} /></span>
    </div>
  )
}

/** Empty logo bar slots filling up, for the final section. */
export function LogoBarArt() {
  const [ref, inView] = useInView({ threshold: 0.5 })
  return (
    <div ref={ref} className={`logobar ${inView ? 'is-in' : ''}`} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className={`logobar__slot ${i < 3 ? 'is-filled' : ''}`} style={{ '--i': i }}>
          {i < 3 && <Icon name="check" size={20} />}
        </span>
      ))}
    </div>
  )
}

/** Curved divider drawn at the top of a section in the previous section's colour. */
export function Wave({ color, flip = false }) {
  return (
    <svg className={`wave ${flip ? 'wave--flip' : ''}`} viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 0H1440V22C1200 70 960 70 720 40S240 0 0 34Z" fill={color} />
    </svg>
  )
}

/** Three bouncing dots, shown before a chat bubble appears. */
export function TypingDots() {
  return (
    <span className="typing" aria-hidden="true"><i /><i /><i /></span>
  )
}
