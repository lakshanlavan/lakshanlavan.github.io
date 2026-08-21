import { profile } from '../data/profile.js'
import SocialIcons from './SocialIcons.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-meta">
          <p className="footer-name">{profile.name}</p>
          <p>© {new Date().getFullYear()} · {profile.affiliation}</p>
        </div>

        <SocialIcons variant="social-icons--footer" />

        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
