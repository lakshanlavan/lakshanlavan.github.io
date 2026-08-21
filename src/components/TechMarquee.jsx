import { techMarquee } from '../data/profile.js'
import { TECH_LOGOS, TechLogo } from './TechIcons.jsx'

/**
 * Two-row core-stack marquee:
 *   • Row 1 — tools/skills that have a real brand logo (icon + label). Logos
 *     scroll left in a muted monochrome tone and "pop" to their official brand
 *     colour on hover (brand hex passed per-item via the `--brand` variable).
 *   • Row 2 — concepts & protocols with no brand logo, shown as pill chips,
 *     scrolling the opposite direction.
 * Each row's content is repeated then duplicated into two equal halves so the
 * `translateX(-50%)` loop is seamless on wide screens. On reduced-motion the
 * animation freezes (see styles.css).
 */
const hasLogo = (t) => Boolean(t.icon && TECH_LOGOS[t.icon])

// Repeat a list `reps` times — widens a short list so one loop-half always
// exceeds the viewport (avoids a visible gap mid-scroll).
function repeat(arr, reps) {
  const out = []
  for (let i = 0; i < reps; i++) out.push(...arr)
  return out
}

function LogoRow({ items, reverse }) {
  const seq = [...items, ...items]
  return (
    <div className="marquee">
      <div className={`marquee-track${reverse ? ' marquee-track--reverse' : ''}`} aria-hidden="true">
        {seq.map((tech, i) => {
          const brand = TECH_LOGOS[tech.icon]?.color
          return (
            <span className="marquee-item" key={i} style={brand ? { '--brand': brand } : undefined}>
              <TechLogo slug={tech.icon} />
              {tech.label}
            </span>
          )
        })}
      </div>
    </div>
  )
}

function ConceptRow({ items, reverse }) {
  const half = repeat(items, 3)
  const seq = [...half, ...half]
  return (
    <div className="marquee">
      <div className={`marquee-track${reverse ? ' marquee-track--reverse' : ''}`} aria-hidden="true">
        {seq.map((tech, i) => (
          <span className="marquee-chip" key={i}>{tech.label}</span>
        ))}
      </div>
    </div>
  )
}

export default function TechMarquee() {
  const logos = techMarquee.filter(hasLogo)
  const concepts = techMarquee.filter((t) => !hasLogo(t))
  const labels = techMarquee.map((t) => t.label)
  return (
    <div className="marquee-rows" role="img" aria-label={`Core stack: ${labels.join(', ')}`}>
      <LogoRow items={logos} />
      <ConceptRow items={concepts} reverse />
    </div>
  )
}
