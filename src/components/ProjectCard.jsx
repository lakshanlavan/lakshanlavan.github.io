import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * Industry / engineering project card. The thumbnail tries a looping muted
 * `video` first (autoplayed unless the visitor prefers reduced motion, where
 * the `image` poster is shown instead), then the real `image`, then a
 * category-coloured gradient placeholder — so the grid always looks finished.
 * Drop real media at the paths in src/data/profile.js (see public/assets/README.md).
 *
 * A project flagged `detail` links through to its case study at
 * /projects/:id; otherwise an external `link` opens in a new tab, and a
 * project with neither renders as a plain article.
 */
export default function ProjectCard({ project, className = '' }) {
  const { id, category, title, description, tags = [], image, video, link, detail, accent = 'blue' } = project
  const reduced = usePrefersReducedMotion()
  const [vidOk, setVidOk] = useState(Boolean(video))
  const [imgOk, setImgOk] = useState(Boolean(image))
  const showVideo = vidOk && !reduced

  const Wrapper = detail ? Link : link ? 'a' : 'article'
  const wrapperProps = detail
    ? { to: `/projects/${id}` }
    : link
      ? { href: link, target: '_blank', rel: 'noreferrer' }
      : {}

  return (
    <Wrapper className={`project-card ${className}`.trim()} {...wrapperProps}>
      <div className={`project-card-media accent-${accent}`}>
        {showVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={image || undefined}
            onError={() => setVidOk(false)}
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : imgOk ? (
          <img src={image} alt={project.imageAlt || `${title} project thumbnail`} loading="lazy" onError={() => setImgOk(false)} />
        ) : (
          <span className="project-card-glyph" aria-hidden="true">
            {title.charAt(0)}
          </span>
        )}
        <span className="project-card-badge">{category}</span>
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">
          {title}
          <span className="project-card-arrow" aria-hidden="true">→</span>
        </h3>
        <p className="project-card-desc">{description}</p>
        <div className="project-card-tags">
          {tags.map((t) => (
            <span className="chip" key={t}>{t}</span>
          ))}
        </div>
        {detail && <span className="project-card-cta">Read the case study</span>}
      </div>
    </Wrapper>
  )
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
