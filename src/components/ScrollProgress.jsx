import { useEffect, useState } from 'react'

/**
 * Thin gradient progress bar pinned to the very top of the viewport that tracks
 * how far the page has been scrolled. Purely decorative.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      setProgress(max > 0 ? el.scrollTop / max : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span className="scroll-progress-bar" style={{ transform: `scaleX(${progress})` }} />
    </div>
  )
}
