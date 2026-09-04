import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Research from './pages/Research.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  useScrollReveal()
  useScrollToTop()
  useGoatCounter()
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/research" element={<Research />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

/* Router keeps the scroll offset when the path changes, which lands you
   mid-page after following a project card into its case study. Reset to the
   top on every navigation. */
function useScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
}

/* GoatCounter's count.js already counted the view we loaded on (see
   index.html), but it reads location.pathname, which never changes under
   HashRouter, so every later in-app navigation has to be reported by hand.
   The ref starts at null to stand for "count.js has this one", and then holds
   the last path sent, so a re-run never counts the same view twice. */
function useGoatCounter() {
  const { pathname } = useLocation()
  const counted = useRef(null)
  useEffect(() => {
    if (counted.current === null) { counted.current = pathname; return }
    if (counted.current === pathname) return
    counted.current = pathname

    /* Explicit checks rather than optional chaining: the config object in
       index.html always exists, but these methods appear only once count.js
       has loaded, and never at all if a blocker stops it. */
    const gc = window.goatcounter
    if (!gc || typeof gc.url !== 'function') return
    if (typeof gc.filter === 'function' && gc.filter()) return

    /* referrer:'' stops the original external referrer being re-sent on every
       route; count.js omits empty parameters entirely, so nothing is sent
       rather than something misleading. */
    const built = gc.url({ path: pathname, referrer: '' })
    if (!built) return

    /* count.js hardcodes q=location.search, which HashRouter never changes, so
       a landing ?utm_source=... would otherwise be re-attributed on every
       route -- and utm_source overrides the referrer server-side. The campaign
       belongs to the arrival, not to each page opened afterwards. */
    const url = new URL(built)
    url.searchParams.delete('q')
    const href = url.toString()

    if (!navigator.sendBeacon || !navigator.sendBeacon(href)) new Image().src = href
  }, [pathname])
}
