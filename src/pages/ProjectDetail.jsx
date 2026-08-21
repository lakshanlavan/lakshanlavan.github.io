import { Link, useParams, Navigate } from 'react-router-dom'
import { projects } from '../data/profile.js'
import ProjectGallery from '../components/ProjectGallery.jsx'
import ResearchFigure from '../components/ResearchFigure.jsx'

/**
 * Long-form case study for an industry project. Driven entirely by the
 * `caseStudy` object on a project in src/data/profile.js — every section
 * renders only when the corresponding field exists, so a project can carry as
 * much or as little detail as its evidence supports. Projects without a
 * `caseStudy` never reach this route (see ProjectCard).
 */
export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project || !project.caseStudy) return <Navigate to="/projects" replace />

  const c = project.caseStudy
  const others = projects.filter((p) => p.detail && p.id !== project.id).slice(0, 3)

  return (
    <div className="page">
      <div className="page-layout page-layout--wide">
        <main className="page-main">
          <Link className="case-back" to="/projects">
            <span aria-hidden="true">←</span> All projects
          </Link>

          <span className="page-eyebrow">{project.category}</span>
          <h1 className="page-title">{project.title}</h1>
          {c.subtitle && <p className="research-lead">{c.subtitle}</p>}

          <dl className="case-facts">
            {c.role && <CaseFact term="Role" detail={c.role} />}
            {c.period && <CaseFact term="Period" detail={c.period} />}
            {c.context && <CaseFact term="Deployment" detail={c.context} />}
          </dl>

          {c.hero && (
            <ResearchFigure
              media={{ image: c.hero.src, imageAlt: c.hero.alt, caption: c.hero.caption }}
            />
          )}

          {c.metrics?.length > 0 && (
            <div className="metrics-row">
              {c.metrics.map((m) => (
                <div className="metric" key={m.label}>
                  <span className="metric-value">{m.value}</span>
                  <span className="metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {c.problem && (
            <section className="case-section">
              <h2 className="section-heading">The engineering problem</h2>
              <p className="case-prose">{c.problem}</p>
            </section>
          )}

          {c.solution && (
            <section className="case-section">
              <h2 className="section-heading">Technical solution</h2>
              <p className="case-prose">{c.solution}</p>
            </section>
          )}

          {c.architecture?.length > 0 && (
            <section className="case-section">
              <h2 className="section-heading">{c.architectureTitle || 'Communication architecture'}</h2>
              <ol className="case-flow" aria-label="Data path from sensors to the monitoring dashboard">
                {c.architecture.map((step, i) => (
                  <li className="case-flow-step" key={step}>
                    <span className="case-flow-index" aria-hidden="true">{i + 1}</span>
                    <span className="case-flow-text">{step}</span>
                  </li>
                ))}
              </ol>
              {c.architectureNote && <p className="case-note">{c.architectureNote}</p>}
            </section>
          )}

          {c.contribution?.length > 0 && (
            <section className="case-section">
              <h2 className="section-heading">What I did</h2>
              <p className="section-lead">
                {c.contributionNote ||
                  'Scoped to the work recorded against my own name in the training diary.'}
              </p>
              <ul className="case-list">
                {c.contribution.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          )}

          {(c.hardware?.length > 0 || c.firmware?.length > 0) && (
            <section className="case-section">
              <h2 className="section-heading">{specHeading(c)}</h2>
              <div className="case-cols">
                {c.hardware?.length > 0 && (
                  <div>
                    <h3 className="case-subheading">Hardware</h3>
                    <ul className="case-spec-list">
                      {c.hardware.map((h) => (
                        <li key={h.name}>
                          <strong>{h.name}</strong>
                          {h.note && <span>: {h.note}</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {c.firmware?.length > 0 && (
                  <div>
                    <h3 className="case-subheading">{c.firmwareTitle || 'Firmware & software'}</h3>
                    <ul className="case-spec-list">
                      {c.firmware.map((f) => <li key={f}>{f}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {c.challenges?.length > 0 && (
            <section className="case-section">
              <h2 className="section-heading">Engineering challenges</h2>
              <div className="case-challenges">
                {c.challenges.map((ch) => (
                  <article className="case-challenge" key={ch.title}>
                    <h3 className="case-challenge-title">{ch.title}</h3>
                    <p className="case-challenge-body">{ch.body}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {c.outcome && (
            <section className="case-section">
              <h2 className="section-heading">Outcome</h2>
              <p className="case-prose">{c.outcome}</p>
            </section>
          )}

          {c.stack?.length > 0 && (
            <section className="case-section">
              <h2 className="section-heading">Selected technologies</h2>
              <div className="tech-tags">
                {c.stack.map((t) => <span className="tech-tag" key={t}>{t}</span>)}
              </div>
            </section>
          )}

          {c.gallery?.length > 0 && (
            <section className="case-section">
              <h2 className="section-heading">Project gallery</h2>
              <p className="section-lead">
                Original project records. Click any image to enlarge.
              </p>
              <ProjectGallery images={c.gallery} label={`${project.title} project images`} />
            </section>
          )}

          {c.evidence && <p className="case-evidence">{c.evidence}</p>}

          {others.length > 0 && (
            <section className="case-section">
              <h2 className="section-heading">Other case studies</h2>
              <ul className="case-more" role="list">
                {others.map((p) => (
                  <li key={p.id}>
                    <Link className="case-more-link" to={`/projects/${p.id}`}>
                      <span className="case-more-cat">{p.category}</span>
                      <span className="case-more-title">{p.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}

/* "Hardware & firmware" reads wrong on a project that only has one of the two
   columns, or where the second column is a design workflow rather than
   firmware — `specTitle` overrides it where the default does not fit. */
function specHeading(c) {
  if (c.specTitle) return c.specTitle
  if (!c.firmware?.length) return 'Hardware'
  if (!c.hardware?.length) return c.firmwareTitle || 'Firmware & software'
  return 'Hardware & firmware'
}

function CaseFact({ term, detail }) {
  return (
    <div className="case-fact">
      <dt>{term}</dt>
      <dd>{detail}</dd>
    </div>
  )
}
