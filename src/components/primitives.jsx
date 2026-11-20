import { useEffect, useRef, useState } from 'react'
import { QUIZ_URL } from '../copy.jsx'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/** True once the element has scrolled into view (fires once). */
export function useInView(options = { threshold: 0.18 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { setInView(true); return }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); io.disconnect() }
    }, options)
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, inView]
}

/** Reveal on scroll. `variant`: up | left | right | zoom | pop. `delay` in ms for staggering. */
export function Reveal({ as: Tag = 'div', delay = 0, variant = 'up', className = '', children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${inView ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Animates a number from `from` to `to` once `start` is true. */
export function useCountUp(to, start, { from = 0, duration = 1400 } = {}) {
  const [val, setVal] = useState(from)
  useEffect(() => {
    if (!start) return
    if (prefersReducedMotion()) { setVal(to); return }
    let raf
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(from + (to - from) * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, to, from, duration])
  return val
}

function Arrow() {
  return (
    <svg className="btn__arrow" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Primary CTA. `kicker` renders a small line above the main label. */
export function CtaButton({ children, kicker, size = 'lg', className = '', href = QUIZ_URL }) {
  return (
    <a href={href} className={`btn btn--${size} ${kicker ? 'btn--stacked' : ''} ${className}`}>
      <span className="btn__label">
        {kicker && <span className="btn__kicker">{kicker}</span>}
        <span className="btn__main">{children}</span>
      </span>
      <Arrow />
    </a>
  )
}
