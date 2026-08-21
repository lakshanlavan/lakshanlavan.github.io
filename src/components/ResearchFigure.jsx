import { useState } from 'react'

/**
 * Renders a research figure (image) and/or a demo video.
 * Each slot references a fixed file path; until that file exists, an elegant
 * "forthcoming" placeholder is shown — so real media can be dropped in later
 * with zero code changes. See public/assets/README.md.
 */
export default function ResearchFigure({ media }) {
  if (!media) return null

  return (
    <div className="research-media">
      {media.figures?.map((fig) => (
        <FigureImage key={fig.image} src={fig.image} alt={fig.imageAlt} caption={fig.caption} />
      ))}
      {media.image && (
        <FigureImage src={media.image} alt={media.imageAlt} caption={media.caption} />
      )}
      {media.video && (
        <FigureVideo src={media.video} poster={media.videoPoster || media.image} caption={media.videoCaption} />
      )}
    </div>
  )
}

function FigureImage({ src, alt, caption }) {
  const [ok, setOk] = useState(true)
  return (
    <figure className="research-figure">
      {ok ? (
        <img
          className="research-figure-img"
          src={src}
          alt={alt || ''}
          loading="lazy"
          onError={() => setOk(false)}
        />
      ) : (
        <div className="media-placeholder" role="img" aria-label={alt || 'Figure forthcoming'}>
          <PlaceholderIcon />
          <span>Figure forthcoming</span>
        </div>
      )}
      {caption && <figcaption className="research-figcaption">{caption}</figcaption>}
    </figure>
  )
}

function FigureVideo({ src, poster, caption }) {
  const [ok, setOk] = useState(true)
  return (
    <figure className="research-figure">
      {ok ? (
        <video
          className="research-figure-video"
          controls
          preload="metadata"
          playsInline
          poster={poster}
          onError={() => setOk(false)}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="media-placeholder media-placeholder--video" role="img" aria-label="Demo video forthcoming">
          <PlayIcon />
          <span>Demo video forthcoming</span>
        </div>
      )}
      {caption && <figcaption className="research-figcaption">{caption}</figcaption>}
    </figure>
  )
}

function PlaceholderIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5v7l6-3.5z" fill="currentColor" stroke="none" />
    </svg>
  )
}
