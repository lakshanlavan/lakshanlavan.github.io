/* Public-asset base URL.
 *
 * Locally the site is served from "/", but GitHub Pages serves it from the
 * repository sub-path ("/lakshan-l/"). Vite exposes whichever base the build
 * was configured with; stripping the trailing slash lets asset paths stay
 * written as "/assets/..." and simply gain the prefix when there is one.
 * Local dev and preview resolve BASE to "" so nothing changes there.
 */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
