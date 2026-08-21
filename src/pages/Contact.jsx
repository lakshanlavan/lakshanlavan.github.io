import { profile } from '../data/profile.js'
import { ICONS } from '../components/SocialIcons.jsx'

export default function Contact() {
  return (
    <div className="page">
      <div className="page-layout page-layout--wide">
        <main className="page-main">
          <span className="page-eyebrow">Contact</span>
          <h1 className="page-title">Get in touch</h1>

          <p className="research-lead">
            I am actively seeking graduate research opportunities in agricultural robotics and computer vision, so if you supervise work on perception or autonomy for field robots, I would very much like to hear from you. I read every message that comes my way, and I am equally glad to talk about a research collaboration, an industry project, or simply a question about the work shown here.
          </p>

          <table className="contact-table">
            <tbody>
              <ContactRow icon="email" label="Email" href={`mailto:${profile.email}`} value={profile.email} />
              <ContactRow icon="phone" label="Phone" href={`tel:${profile.phone}`} value={profile.phone} />
              <ContactRow icon="github" label="GitHub" href={profile.github} value="github.com/lakshanlavan" external />
              <ContactRow icon="linkedin" label="LinkedIn" href={profile.linkedin} value="linkedin.com/in/lakshan29" external />
            </tbody>
          </table>

          <div className="contact-note">
            <p>
              For research supervision or collaboration enquiries related to the Crop Spirals project, you may also contact my thesis supervisor,{' '}
              <a href="mailto:odesilva@lincoln.ac.uk">Dr. Rajitha de Silva</a>, Postdoctoral Research Associate at the Lincoln Centre for Autonomous Systems (L-CAS), University of Lincoln, UK.
            </p>
          </div>

          <div style={{ marginTop: '40px' }}>
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>Send email →</a>
          </div>
        </main>
      </div>
    </div>
  )
}

/* Round icon in place of the word label; the label still rides along for
   screen readers, which would otherwise hear an unnamed link column. */
function ContactRow({ icon, label, href, value, external = false }) {
  return (
    <tr>
      <td>
        <span className="contact-icon" role="img" aria-label={label}>{ICONS[icon]}</span>
      </td>
      <td>
        <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>{value}</a>
      </td>
    </tr>
  )
}
