import { BASE } from '../lib/base.js'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  profile,
  heroStats,
  capabilities,
  projects,
  research,
  publications,
} from '../data/profile.js'
import HeroBackdrop from '../components/HeroBackdrop.jsx'
import HeroAcademic from '../components/HeroAcademic.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import TechMarquee from '../components/TechMarquee.jsx'
import SocialIcons from '../components/SocialIcons.jsx'
import { CapIcon, hasCapIcon } from '../components/CapIcon.jsx'

/* ── FIRST-VIEW VARIANT SWITCH ────────────────────────────────────────────
   'academic'  — rajithadesilva.github.io-style author-profile + content view
                 (still played over the single-video hero backdrop).
   'cinematic' — the previous centered hero. Nothing was removed: flip this
                 one string to go straight back to it.
   ─────────────────────────────────────────────────────────────────────── */
const HERO_VARIANT = 'academic'

function initialsOf(name) {
  return name.replace(/[^A-Za-z .]/g, '').split(/\s+/).filter(Boolean).map((w) => w[0]).slice(0, 2).join('').toUpperCase()
}

export default function Home() {
  const featuredResearch = research[0]

  return (
    <div className="home">

      {/* ── 1 · HERO — first view ── */}
      {HERO_VARIANT === 'academic' ? <HeroAcademic /> : <HeroCinematic />}

      {/* ── TECH MARQUEE ── */}
      <section className="marquee-band" aria-label="Core technologies">
        <TechMarquee />
      </section>

      {/* ── 3 · PROFESSIONAL SUMMARY ── */}
      <section className="band band-soft">
        <div className="container summary-grid">
          <div className="summary-text reveal">
            <span className="eyebrow">Professional Summary</span>
            <h2 className="band-title">From research to real-world deployment</h2>
            <p>{profile.summary}</p>
          </div>
          <div className="cap-grid">
            {capabilities.map((c, i) => (
              <div className={`cap-card accent-${c.accent} reveal reveal-d${(i % 4) + 1}`} key={c.label}>
                {hasCapIcon(c.icon) ? (
                  <span className="cap-icon"><CapIcon name={c.icon} /></span>
                ) : (
                  <span className="cap-dot" />
                )}
                <div>
                  <h3 className="cap-label">{c.label}</h3>
                  <p className="cap-detail">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 · FEATURED WORK — RESEARCH FIRST ── */}
      <section className="band">
        <div className="container">
          <div className="band-head reveal">
            <div>
              <span className="eyebrow">Featured Work</span>
              <h2 className="band-title">Research</h2>
              <p className="band-lead">Peer-reviewed robotics research in perception, planning and control for autonomous systems.</p>
            </div>
            <Link className="btn btn-outline" to="/research">All research →</Link>
          </div>

          <div className="research-feature reveal">
            <img
              className="research-feature-media"
              src={`${BASE}/assets/research/system-overview.png`}
              alt="Full system overview of the Crop Spirals pipeline: square-spiral crop-field layout with integrated perception, pixel-to-odometry projection, A*/TSP planning and nonlinear MPC control."
              loading="lazy"
            />
            <div className="research-feature-body">
              <span className="research-feature-tag">{featuredResearch.tag}</span>
              <h3 className="research-feature-title">{featuredResearch.title}</h3>
              <p className="research-feature-status">{featuredResearch.status}</p>
              <p className="research-feature-desc">{featuredResearch.description}</p>
              <div className="research-feature-metrics">
                {featuredResearch.metrics.slice(0, 4).map((m) => (
                  <div className="rf-metric" key={m.label}>
                    <span className="rf-metric-value">{m.value}</span>
                    <span className="rf-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
              <div className="project-card-tags" style={{ marginTop: '18px' }}>
                {featuredResearch.stack.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
            </div>
          </div>

          {publications.map((pub) => (
            <div className="pub-card pub-card--featured" key={pub.title} style={{ marginTop: '8px' }}>
              <a className="pub-card-title" href={pub.arxiv || pub.doi} target="_blank" rel="noreferrer">{pub.title}</a>
              <p className="pub-card-venue">Published in <em>{pub.venue}</em>, {pub.year}</p>
              <p className="pub-card-cite">{pub.note}</p>
              <div className="pub-card-links">
                {pub.arxiv && <a className="pub-card-link" href={pub.arxiv} target="_blank" rel="noreferrer">arXiv preprint →</a>}
                {pub.doi && <a className="pub-card-link" href={pub.doi} target="_blank" rel="noreferrer">DOI →</a>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4 · FEATURED WORK — INDUSTRY ── */}
      <section className="band band-soft">
        <div className="container">
          <div className="band-head reveal">
            <div>
              <span className="eyebrow">Featured Work</span>
              <h2 className="band-title">Industry Projects</h2>
              <p className="band-lead">Edge-AI computer vision, drone agriculture, industrial IoT and embedded systems, built to run reliably on real hardware. The agricultural robotics and computer vision work here is the direction I am looking to continue in graduate research.</p>
            </div>
            <Link className="btn btn-outline" to="/projects">All projects →</Link>
          </div>

          <div className="work-grid">
            {projects.slice(0, 6).map((p, i) => (
              <ProjectCard key={p.id} project={p} className={`reveal reveal-d${(i % 3) + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="cta-band">
        <div className="container cta-inner reveal">
          <div>
            <h2 className="cta-title">Let’s build intelligent systems together.</h2>
            <p className="cta-lead">{profile.interests}</p>
          </div>
          <div className="cta-actions">
            <Link className="btn btn-grad" to="/contact">Get in touch</Link>
            <a className="btn btn-outline-light" href={`mailto:${profile.email}`}>Email me</a>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ── HERO VARIANT A — the original centered hero over the single-video
   backdrop. Preserved verbatim; selected by HERO_VARIANT = 'cinematic'. ── */
function HeroCinematic() {
  return (
    <section className="hero">
      <HeroBackdrop />

      <div className="hero-inner">
        <div className="hero-content">
          <HeroAvatar />

          <h1 className="hero-name">{profile.name}</h1>

          <span className="hero-divider" aria-hidden="true" />

          <p className="hero-titles">
            {profile.titles.map((t, i) => (
              <span key={t}>
                <span className="hero-title-seg">{t}</span>
                {i < profile.titles.length - 1 && <span className="hero-title-sep">/</span>}
              </span>
            ))}
          </p>

          <p className="hero-tagline">{profile.positioning}</p>

          <div className="hero-actions">
            <Link className="btn btn-grad" to="/projects">View Projects</Link>
            <Link className="btn btn-outline-light" to="/research">Read Research</Link>
          </div>

          <SocialIcons variant="social-icons--hero" />
        </div>
      </div>

      <div className="hero-stats">
        {heroStats.map((s, i) => (
          <div className={`hero-stat reveal reveal-d${i + 1}`} key={s.label}>
            <span className="hero-stat-value">{s.value}</span>
            <span className="hero-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function HeroAvatar() {
  const [photoOk, setPhotoOk] = useState(Boolean(profile.photo))
  return (
    <div className="hero-id">
      <div className="hero-photo">
        {photoOk ? (
          <img src={profile.photo} alt={`${profile.name}, ${profile.role}`} onError={() => setPhotoOk(false)} />
        ) : (
          <span className="hero-initials">{initialsOf(profile.name)}</span>
        )}
        <span className="hero-photo-ring" aria-hidden="true" />
      </div>
      <span className="status-pill">
        <span className="status-dot" />
        {profile.availability}
      </span>
    </div>
  )
}
