import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Reveal-on-scroll. Any element with the `reveal` class fades/slides in the
 * first time it enters the viewport. Add `reveal-d1`…`reveal-d4` for a stagger.
 * Honours prefers-reduced-motion (everything is shown immediately) and re-scans
 * whenever the route changes so each page animates on entry.
 */
export default function useScrollReveal() {
  const location = useLocation()

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal:not(.is-visible)'))
    if (!els.length) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [location.pathname])
}
