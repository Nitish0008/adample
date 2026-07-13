import { useEffect } from 'react'
import logo from '../img/logo.png'

/**
 * SEOHead – injects all <head> tags the React way.
 * No index.html modification needed beyond the bare Vite shell.
 */
export default function SEOHead() {
  useEffect(() => {
    // Title
    document.title = 'Adample Digital Marketing Agency'

    // Helper to upsert a <meta> tag
    const meta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el) }
      el.setAttribute('content', content)
    }

    meta('description', 'Adample helps small businesses & startups grow with AI-powered digital marketing — more leads, more sales, less guesswork. Get your free growth audit today.')
    meta('og:title', 'Adample — AI-Powered Digital Marketing', 'property')
    meta('og:description', 'More leads. More sales. Less guesswork. Powered by AI.', 'property')
    meta('og:type', 'website', 'property')
    meta('theme-color', '#0A1E3D')

    // Favicon
    let favicon = document.querySelector("link[rel='icon']")
    if (!favicon) { favicon = document.createElement('link'); favicon.rel = 'icon'; document.head.appendChild(favicon) }
    favicon.type = 'image/png'
    favicon.href = logo

    // Google Fonts — Inter + Manrope
    const fontsHref = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@500;600;700;800;900&display=swap'
    if (!document.querySelector(`link[href="${fontsHref}"]`)) {
      const pc1 = document.createElement('link'); pc1.rel = 'preconnect'; pc1.href = 'https://fonts.googleapis.com'
      const pc2 = document.createElement('link'); pc2.rel = 'preconnect'; pc2.href = 'https://fonts.gstatic.com'; pc2.crossOrigin = 'anonymous'
      const font = document.createElement('link'); font.rel = 'stylesheet'; font.href = fontsHref
      document.head.appendChild(pc1)
      document.head.appendChild(pc2)
      document.head.appendChild(font)
    }
  }, [])

  return null
}
