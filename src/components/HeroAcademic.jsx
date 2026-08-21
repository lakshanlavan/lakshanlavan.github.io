import { BASE } from '../lib/base.js'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  profile,
  researchInterests,
  publications,
  awards,
} from '../data/profile.js'
import HeroBackdrop from './HeroBackdrop.jsx'

/**
 * ── HERO VARIANT B — "academicpages" first view (rajithadesilva.github.io style)
 *
 * A faithful take on the academic homepage layout: a left author-profile column
 * (round avatar, name, bio, employer + academic links) beside a content column
 * that opens with the intro paragraph, a strip of live work, then Research
 * Interests / Current Work / Selected Highlights / Selected Publications.
 *
 * The one deliberate difference from the reference: the whole academic "paper"
 * floats on top of the existing single-video hero backdrop, so the cinematic
 * reel method is kept, not replaced. Switch variants from Home.jsx
 * (HERO_VARIANT) — the previous centered hero is untouched.
 */

// The "homepage-gif-row" equivalent — four short loops of the real work.
// `start`/`end` trim a long clip down to a GIF-length window (the navigation
// video opens on a title card, so its tile starts after it).
const REEL = [
  {
    id: 'spiral',
    // 20 s web-weight cut of the full Gazebo run (public/assets/research/spiral.mp4
    // is 182 MB — far too heavy for a hero tile). Re-cut with:
    // ffmpeg -ss 32 -t 20 -i spiral.mp4 -an -vf "scale=800:-2,fps=24" \
    //   -c:v libx264 -crf 28 -preset slow -movflags +faststart spiral-loop.mp4
    video: `${BASE}/assets/research/spiral-loop.mp4`,
    image: `${BASE}/assets/research/spiral-loop.jpg`,
    label: 'Spiral field navigation',
    featured: true,
  },
  {
    id: 'nav',
    video: `${BASE}/assets/research/linear-field.mp4`,
    image: `${BASE}/assets/research/Linear_field_layout.png`,
    label: 'Crop-row nav',
    start: 12,
    end: 32,
  },
  {
    id: 'drone',
    video: `${BASE}/assets/projects/agrarian.mp4`,
    image: `${BASE}/assets/projects/agrarian.jpg`,
    label: 'Drone mapping',
  },
  {
    id: 'face',
    video: `${BASE}/assets/projects/face-recognition.mp4`,
    image: `${BASE}/assets/projects/face-recognition.jpg`,
    label: 'Edge-AI vision',
  },
  {
    id: 'dumping',
    video: `${BASE}/assets/projects/illegal-dumping.mp4`,
    image: `${BASE}/assets/projects/illegal-dumping.jpg`,
    label: 'Smart-city AI',
  },
]

function initialsOf(name) {
  return name
    .replace(/[^A-Za-z .]/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function HeroAcademic() {
  return (
    <section className="hero hero--academic">
      <HeroBackdrop />

      <div className="acad-inner">
        <div className="acad-paper">
          <AuthorProfile />

          <div className="acad-body">
            <h1 className="acad-title">{profile.name}</h1>
            <p className="acad-subtitle">{profile.titles.join(' · ')}</p>

            <p className="acad-lead">{profile.positioning}</p>

            <p className="acad-note">
              <span aria-hidden="true">🌱</span> Currently building vision-based autonomy for
              agricultural robots, and shipping edge-AI systems that run on real hardware in the field.
            </p>

            <p className="acad-note">
              <span aria-hidden="true">🎓</span> Actively seeking graduate research opportunities in
              agricultural robotics and computer vision.
            </p>

            <div className="acad-reel">
              {REEL.map((clip) => (
                <ReelTile key={clip.id} clip={clip} />
              ))}
            </div>

            <div className="acad-cols">
              <div>
                <h2 className="acad-h2">Research Interests</h2>
                <ul className="acad-list">
                  {researchInterests.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="acad-h2">Selected Highlights</h2>
                <ul className="acad-list">
                  <li>arXiv preprint · under review at <em>Robotics and Autonomous Systems</em> (Elsevier)</li>
                  <li>28–30% shorter robot travel path with the Crop Spirals field layout</li>
                  <li>96.45% crop-row perception score (DH-ResNet18), 0.87° angular error</li>
                  {awards.slice(0, 1).map((a) => (
                    <li key={a.year}>{a.text}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="acad-h2">Selected Publications</h2>
            <ul className="acad-list acad-pubs">
              {publications.map((p) => (
                <li key={p.title}>
                  <a href={p.arxiv || p.doi} target="_blank" rel="noreferrer">{p.title}</a>
                  <span className="acad-pub-venue">{p.venue}, {p.year}</span>
                </li>
              ))}
            </ul>

            <div className="acad-actions">
              <Link className="btn btn-grad" to="/research">Read research</Link>
              <Link className="btn btn-outline" to="/projects">View projects</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AuthorProfile() {
  const [photoOk, setPhotoOk] = useState(Boolean(profile.photo))

  return (
    <aside className="acad-author" itemScope itemType="http://schema.org/Person">
      <div className="acad-avatar">
        {photoOk ? (
          <img
            src={profile.photo}
            alt={`${profile.name}, ${profile.role}`}
            onError={() => setPhotoOk(false)}
          />
        ) : (
          <span className="acad-initials">{initialsOf(profile.name)}</span>
        )}
      </div>

      <h3 className="acad-author-name">{profile.name}</h3>
      <p className="acad-author-bio">{profile.role}</p>

      <a className="acad-follow" href={`mailto:${profile.email}`}>Get in touch</a>

      <ul className="acad-urls">
        <li className="acad-url-static">
          <Icon.Building /> {profile.affiliation}
        </li>
        <li className="acad-url-static">
          <Icon.Status /> {profile.availability}
        </li>
        <li>
          <a href={`mailto:${profile.email}`}><Icon.Mail /> Email</a>
        </li>
        <li>
          <a href={profile.scholar} target="_blank" rel="noreferrer"><Icon.Scholar /> Google Scholar</a>
        </li>
        <li>
          <a href={profile.orcid} target="_blank" rel="noreferrer"><Icon.Orcid /> ORCID</a>
        </li>
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer"><Icon.Github /> GitHub</a>
        </li>
        <li>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon.Linkedin /> LinkedIn</a>
        </li>
      </ul>
    </aside>
  )
}

function ReelTile({ clip }) {
  // video → poster image → gradient tile, same resilience as HeroBackdrop.
  const [stage, setStage] = useState(clip.video ? 'video' : 'image')
  const start = clip.start || 0

  // Loop only the interesting window of a long clip.
  const seekToStart = (el) => {
    if (el && Math.abs(el.currentTime - start) > 0.5) el.currentTime = start
  }

  return (
    <figure className={`acad-reel-tile${clip.featured ? ' acad-reel-tile--wide' : ''}`}>
      {stage === 'video' ? (
        <video
          autoPlay
          muted
          loop={!clip.end}
          playsInline
          preload="metadata"
          poster={clip.image}
          onLoadedMetadata={(e) => seekToStart(e.currentTarget)}
          onTimeUpdate={(e) => {
            if (clip.end && e.currentTarget.currentTime >= clip.end) seekToStart(e.currentTarget)
          }}
          onEnded={(e) => {
            seekToStart(e.currentTarget)
            e.currentTarget.play().catch(() => {})
          }}
          onError={() => setStage('image')}
        >
          <source src={clip.video} type="video/mp4" />
        </video>
      ) : stage === 'image' ? (
        <img src={clip.image} alt={clip.label} loading="lazy" onError={() => setStage('blank')} />
      ) : (
        <div className="acad-reel-blank" />
      )}
      <figcaption>{clip.label}</figcaption>
    </figure>
  )
}

const Icon = {
  Building: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9,22 9,12 15,12 15,22" /></svg>
  ),
  Status: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
  ),
  Mail: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 7L2 7" /></svg>
  ),
  File: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
  ),
  Scholar: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" /></svg>
  ),
  Orcid: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-1.763 5.07a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92zM9.67 8.516h1.134v8.995H9.67V8.516zm2.876 0h3.05c2.9 0 4.644 1.787 4.644 4.498 0 2.71-1.744 4.497-4.644 4.497h-3.05V8.516zm1.134 1.008v6.98h1.834c2.232 0 3.576-1.363 3.576-3.49 0-2.127-1.344-3.49-3.576-3.49H13.68z" /></svg>
  ),
  Github: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg>
  ),
  Linkedin: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
  ),
}
