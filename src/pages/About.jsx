import { profile, education, researchInterests, skills, experiences, awards, volunteering, publications, references } from '../data/profile.js'
import ProfileSidebar from '../components/ProfileSidebar.jsx'

export default function About() {
  return (
    <div className="page">
      <div className="page-layout">
        <ProfileSidebar />

        <main className="page-main">
          <span className="page-eyebrow">About</span>
          <h1 className="page-title">{profile.name}</h1>

          <h2 className="section-heading">Background</h2>
          <p>I have been fascinated by machines that can see and move on their own for as long as I can remember, and that curiosity is what led me into robotics. I am a Bachelor of Engineering Technology (Hons.) graduate from the University of Colombo, specialising in Instrumentation and Automation, and my research and engineering work connect autonomous navigation, robot perception, computer vision, control systems, and embedded hardware.</p>
          <p>My undergraduate thesis, <em>Crop Spirals</em>, introduced a robot-centric spiral crop field layout that integrates deep learning perception, pixel-to-odometry projection, A*/TSP planning, and nonlinear MPC trajectory tracking to enable efficient and accurate autonomous navigation for agricultural robots.</p>
          <p>Beyond research, I have industry experience in embedded AI engineering, industrial IoT firmware, and PCB design, giving me a practical perspective on deploying AI systems to real hardware.</p>

          <h2 className="section-heading">Research Interests</h2>
          <ul className="interests-list">
            {researchInterests.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <h2 className="section-heading">Education</h2>
          {education.map((edu) => (
            <div className="edu-item" key={edu.degree}>
              <h3>{edu.degree}</h3>
              <p className="edu-inst">{edu.institution} · {edu.location}</p>
              <p className="edu-year">{edu.period}{edu.gpa && <>&nbsp;·&nbsp; {edu.gpa}</>}</p>
              {edu.note && <p className="edu-note">{edu.note}</p>}
            </div>
          ))}

          <h2 className="section-heading">Experience</h2>
          {experiences.map((exp) => (
            <div className="exp-block" key={exp.role + exp.org}>
              <div className="exp-block-header">
                <strong className="exp-role">{exp.role}</strong>
                <span className="exp-period">{exp.period}</span>
              </div>
              <p className="exp-org-line">{exp.org} · {exp.location}</p>
              <ul>
                {exp.points.map((pt) => <li key={pt} style={{ fontSize: '0.93rem', color: 'var(--ink-2)' }}>{pt}</li>)}
              </ul>
            </div>
          ))}

          <h2 className="section-heading">Publications</h2>
          <p className="section-lead">
            Also available on{' '}
            <a href={profile.scholar} target="_blank" rel="noreferrer">Google Scholar</a>
            {' '}and{' '}
            <a href={profile.orcid} target="_blank" rel="noreferrer">ORCID iD</a>.
          </p>
          {publications.map((pub) => (
            <div className="pub-card" key={pub.title}>
              <a className="pub-card-title" href={pub.arxiv || pub.doi} target="_blank" rel="noreferrer">{pub.title}</a>
              <p className="pub-card-venue">Published in <em>{pub.venue}</em>, {pub.year}</p>
              <p className="pub-card-authors">{pub.authors}</p>
              <p className="pub-card-cite">{pub.note}</p>
              <div className="pub-card-links">
                {pub.arxiv && <a className="pub-card-link" href={pub.arxiv} target="_blank" rel="noreferrer">arXiv preprint →</a>}
              </div>
            </div>
          ))}

          <h2 className="section-heading">Technical Skills</h2>
          <table className="skills-table">
            <tbody>
              {skills.map((s) => (
                <tr key={s.category}>
                  <td>{s.category}</td>
                  <td>{s.items}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="section-heading">Awards & Honours</h2>
          <ul className="awards-list">
            {awards.map((a) => <li key={a.text}><strong>{a.year}</strong> &nbsp;{a.text}</li>)}
          </ul>

          <h2 className="section-heading">Volunteering</h2>
          <ul className="awards-list">
            {volunteering.map((v) => <li key={v.text}><strong>{v.year}</strong> &nbsp;{v.text}</li>)}
          </ul>

          <h2 className="section-heading">References</h2>
          {references.map((ref) => (
            <div className="exp-block" key={ref.name}>
              <strong className="exp-role">{ref.name}</strong>
              <p className="exp-org-line">{ref.title}</p>
              <p style={{ fontSize: '0.93rem' }}>
                <a href={`mailto:${ref.email}`}>{ref.email}</a>
              </p>
            </div>
          ))}
          <p className="edu-note" style={{ marginTop: '8px' }}>Additional references available upon request.</p>

        </main>
      </div>
    </div>
  )
}
