import { useEffect, useRef, useState } from 'react'
import { showcase } from '../data/profile.js'

const ROTATE_MS = 6000

/**
 * Dimmed, cinematic hero background (reference-style moving backdrop).
 *
 * It rotates through the `showcase` slides; each slide tries its MP4 first,
 * then its image, then an animated blue-gradient fallback — so the hero is
 * fully "video-ready" yet never breaks when media is missing. Drop a real
 * file at a slide's `video` path (e.g. /assets/hero-demo.mp4) and it plays
 * automatically with zero code change.
 *
 * A single static background is also supported: if you only want one MP4,
 * keep one entry in `showcase` and rotation simply turns itself off.
 */
export default function HeroBackdrop() {
  const [active, setActive] = useState(0)
  const reduced = usePrefersReducedMotion()
  const slides = showcase.length ? showcase : [{ id: 'fallback', accent: 'blue' }]

  useEffect(() => {
    if (reduced || slides.length < 2) return
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), ROTATE_MS)
    return () => clearInterval(t)
  }, [reduced, slides.length])

  const current = slides[active] || slides[0]

  return (
    <div className="hero-backdrop" aria-hidden="true">
      {slides.map((slide, i) => (
        <div key={slide.id} className={`hero-bg-slide ${i === active ? 'is-active' : ''}`}>
          <SlideMedia slide={slide} active={i === active} reduced={reduced} />
        </div>
      ))}

      {/* Thin dividers so the 2×2 tiled clips read as a clean grid. */}
      {current.grid && <div className="hero-backdrop-splitlines" aria-hidden="true" />}

      {/* Legibility wash + faint engineering grid over the media. */}
      <div className="hero-backdrop-veil" />
      <div className="hero-backdrop-grid" />

      {slides.length > 1 && (
        <div className="hero-backdrop-meta">
          {current.category && <span className="hero-backdrop-cat">{current.category}</span>}
          <div className="hero-backdrop-dots" role="tablist" aria-label="Background highlights">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                role="tab"
                aria-selected={i === active}
                aria-label={slide.category || `Slide ${i + 1}`}
                className={`hero-backdrop-dot ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function SlideMedia({ slide, active, reduced }) {
  // video → image → gradient placeholder, falling back on the first that loads.
  const [stage, setStage] = useState(slide.video ? 'video' : slide.image ? 'image' : 'placeholder')

  if (stage === 'video') {
    return (
      <video
        className="hero-bg-media"
        autoPlay={!reduced}
        muted
        loop
        playsInline
        preload="metadata"
        poster={slide.image}
        onError={() => setStage(slide.image ? 'image' : 'placeholder')}
      >
        <source src={slide.video} type="video/mp4" />
      </video>
    )
  }

  if (stage === 'image') {
    return (
      <img
        className="hero-bg-media"
        src={slide.image}
        alt=""
        loading={active ? 'eager' : 'lazy'}
        onError={() => setStage('placeholder')}
      />
    )
  }

  return <div className={`hero-bg-fallback accent-${slide.accent || 'blue'}`} />
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  const mq = useRef(null)
  useEffect(() => {
    mq.current = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.current.matches)
    update()
    mq.current.addEventListener('change', update)
    return () => mq.current.removeEventListener('change', update)
  }, [])
  return reduced
}
