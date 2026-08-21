/* Public-asset base URL.
 *
 * The site is served from the root of lakshanlavan.github.io, so this resolves
 * to "" and asset paths stay exactly as they are written ("/assets/..."). It is
 * derived from Vite's configured base rather than hard-coded, so a sub-path
 * deployment would prefix every asset automatically without touching the data.
 */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
