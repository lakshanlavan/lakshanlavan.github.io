import { useState, useEffect, useCallback } from 'react'

/**
 * Thumbnail strip + lightbox for a project's screenshots. Pass an array of
 * { src, caption, alt }. Clicking a thumbnail opens an accessible overlay with
 * prev/next navigation, keyboard control (Esc / ← / →) and scroll-locking.
 * Renders nothing when there are no images, so it's safe on every project.
 */
export default function ProjectGallery({ images = [], label = 'Screenshot gallery' }) {
  const [index, setIndex] = useState(-1)
  const count = images.length
  const open = index >= 0

  const close = useCallback(() => setIndex(-1), [])
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.classList.add('lightbox-open')
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.classList.remove('lightbox-open')
    }
  }, [open, close, next, prev])

  if (!count) return null

  const active = open ? images[index] : null

  return (
    <>
      <ul className="project-gallery" role="list">
        {images.map((img, i) => (
          <li className="project-gallery-item" key={img.src}>
            <button
              type="button"
              className="project-gallery-thumb"
              onClick={() => setIndex(i)}
              aria-label={`Open image ${i + 1} of ${count}${img.caption ? `: ${img.caption}` : ''}`}
            >
              <img src={img.src} alt={img.alt || img.caption || ''} loading="lazy" />
            </button>
            {img.caption && <span className="project-gallery-caption">{img.caption}</span>}
          </li>
        ))}
      </ul>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={label} onClick={close}>
          <button className="lightbox-close" type="button" aria-label="Close gallery" onClick={close}>
            &times;
          </button>

          {count > 1 && (
            <button
              className="lightbox-nav lightbox-prev"
              type="button"
              aria-label="Previous image"
              onClick={(e) => { e.stopPropagation(); prev() }}
            >
              &lsaquo;
            </button>
          )}

          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img className="lightbox-img" src={active.src} alt={active.alt || active.caption || ''} />
            <figcaption className="lightbox-caption">
              <span className="lightbox-counter">{index + 1} / {count}</span>
              {active.caption}
            </figcaption>
          </figure>

          {count > 1 && (
            <button
              className="lightbox-nav lightbox-next"
              type="button"
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); next() }}
            >
              &rsaquo;
            </button>
          )}
        </div>
      )}
    </>
  )
}
