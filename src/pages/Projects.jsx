import { projects } from '../data/profile.js'
import ProjectCard from '../components/ProjectCard.jsx'
import ProjectGallery from '../components/ProjectGallery.jsx'

export default function Projects() {
  const galleries = projects.filter((p) => p.gallery?.length)

  return (
    <div className="page">
      <div className="page-layout page-layout--wide">
        <main className="page-main">
          <span className="page-eyebrow">Industry Projects</span>
          <h1 className="page-title">Engineering & AI deployments</h1>

          <p className="research-lead">
            Real-world systems across edge-AI computer vision, drone agriculture, industrial IoT and
            embedded hardware, built to run reliably on real devices, not just in a notebook. Cards
            marked <em>Read the case study</em> open a full engineering write-up with the hardware,
            firmware, architecture and project images behind the work.
          </p>

          <p className="research-lead">
            Agricultural robotics and computer vision are the threads I want to keep pulling, and I am
            actively seeking graduate research opportunities in both.
          </p>

          <div className="work-grid work-grid--page">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} className={`reveal reveal-d${(i % 3) + 1}`} />
            ))}
          </div>

          {galleries.map((p) => (
            <section className="project-gallery-section" key={p.id}>
              <h2 className="section-heading">{p.title}: Dashboard</h2>
              <p className="section-lead">A closer look at the interface. Click any screen to enlarge.</p>
              <ProjectGallery images={p.gallery} label={`${p.title} dashboard screenshots`} />
            </section>
          ))}
        </main>
      </div>
    </div>
  )
}
