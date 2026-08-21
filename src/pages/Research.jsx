import { research, publications, profile } from '../data/profile.js'
import ResearchFigure from '../components/ResearchFigure.jsx'

export default function Research() {
  return (
    <div className="page">
      <div className="page-layout page-layout--wide">
        <main className="page-main">
          <span className="page-eyebrow">Research</span>
          <h1 className="page-title">Autonomous Navigation for Agricultural Robotics</h1>

          <p className="research-lead">
            My research focuses on designing robot-centric environments and integrated perception–planning–control pipelines for autonomous operation in structured agricultural settings.
          </p>

          <section style={{ paddingBottom: '40px', borderBottom: '1px solid var(--rule)', marginBottom: '40px' }}>
            <h2 className="section-heading">Publications</h2>
            <p className="section-lead">Selected journal and conference publications. You can also find my articles on <a href={profile.scholar} target="_blank" rel="noreferrer">Google Scholar</a> and <a href={profile.orcid} target="_blank" rel="noreferrer">ORCID</a>.</p>

            <h3 style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', fontWeight: 400, margin: '24px 0 16px' }}>Journal Articles</h3>
            <hr style={{ border: 'none', borderTop: '1px solid var(--rule)', margin: '0 0 24px' }} />

            {publications.map((pub) => (
              <div className="pub-card pub-card--featured" key={pub.title}>
                <a className="pub-card-title" href={pub.arxiv || pub.doi} target="_blank" rel="noreferrer">{pub.title}</a>
                <p className="pub-card-venue">Published in <em>{pub.venue}</em>, {pub.year}</p>
                <p style={{ fontSize: '0.93rem', color: 'var(--ink-2)', margin: '8px 0' }}>
                  This work introduces a spiral crop field layout designed for robotic autonomy, integrating deep learning perception, path planning, and nonlinear MPC trajectory tracking for efficient navigation in agricultural environments.
                </p>
                <p className="pub-card-cite"><strong>Recommended citation:</strong> {pub.authors} ({pub.year}). "{pub.title}." <em>{pub.venue.split(':')[0].trim()}</em>. {pub.note}</p>
                <div className="pub-card-links">
                  {pub.arxiv && <a className="pub-card-link" href={pub.arxiv} target="_blank" rel="noreferrer">arXiv Preprint →</a>}
                  {pub.doi && <a className="pub-card-link" href={pub.doi} target="_blank" rel="noreferrer">DOI →</a>}
                </div>
              </div>
            ))}
          </section>

          <h2 className="section-heading">Research Projects</h2>

          {research.map((r) => (
            <section className="research-block" key={r.id}>
              <div className="research-block-header">
                <div>
                  <span className="research-block-tag">{r.tag}</span>
                  <h2 style={{ margin: 0, fontSize: '1.32rem' }}>{r.title}</h2>
                </div>
                <span className="research-block-period">{r.period}</span>
              </div>

              {r.status && <p className="research-block-status">{r.status}</p>}

              <p style={{ fontSize: '0.98rem', color: 'var(--ink-2)', lineHeight: 1.78, maxWidth: '700px', margin: '0 0 18px' }}>{r.description}</p>

              <ResearchFigure media={r.media} />

              <div className="metrics-row">
                {r.metrics.map((m) => (
                  <div className="metric" key={m.label}>
                    <span className="metric-value">{m.value}</span>
                    <span className="metric-label">{m.label}</span>
                  </div>
                ))}
              </div>

              <ul>
                {r.details.map((d) => <li key={d} style={{ fontSize: '0.93rem', color: 'var(--ink-2)', lineHeight: 1.7 }}>{d}</li>)}
              </ul>

              <div className="tech-tags">
                {r.stack.map((t) => <span className="tech-tag" key={t}>{t}</span>)}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  )
}
