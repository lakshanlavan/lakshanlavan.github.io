import { useState } from 'react'
import { profile } from '../data/profile.js'

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

export default function ProfileSidebar() {
  // Show the real photo if public/assets/profile.jpg exists; otherwise fall
  // back to the monogram. No code change is needed to swap the photo in.
  const [photoOk, setPhotoOk] = useState(Boolean(profile.photo))

  return (
    <aside className="profile-sidebar">
      <div className="profile-photo">
        {photoOk ? (
          <img
            src={profile.photo}
            alt={`${profile.name}, ${profile.role}`}
            loading="lazy"
            onError={() => setPhotoOk(false)}
          />
        ) : (
          <span className="profile-initials">{initialsOf(profile.name)}</span>
        )}
      </div>
      <h2 className="sidebar-name">{profile.name}</h2>
      <p className="sidebar-role">{profile.role}</p>

      <div className="sidebar-links">

        <a href={`mailto:${profile.email}`} className="sidebar-link">
          {/* Email */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>
          Email
        </a>

        <a href={profile.github} target="_blank" rel="noreferrer" className="sidebar-link">
          {/* GitHub */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
          GitHub
        </a>

        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="sidebar-link">
          {/* LinkedIn */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </a>

        <a href={profile.scholar} target="_blank" rel="noreferrer" className="sidebar-link">
          {/* Google Scholar — mortarboard icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>
          Google Scholar
        </a>

        <a href={profile.orcid} target="_blank" rel="noreferrer" className="sidebar-link">
          {/* ORCID — distinctive iD icon shape */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-1.763 5.07a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92zM9.67 8.516h1.134v8.995H9.67V8.516zm2.876 0h3.05c2.9 0 4.644 1.787 4.644 4.498 0 2.71-1.744 4.497-4.644 4.497h-3.05V8.516zm1.134 1.008v6.98h1.834c2.232 0 3.576-1.363 3.576-3.49 0-2.127-1.344-3.49-3.576-3.49H13.68z"/>
          </svg>
          ORCID
        </a>

      </div>

      <div className="sidebar-affil">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
        {profile.affiliation}
      </div>
    </aside>
  )
}
