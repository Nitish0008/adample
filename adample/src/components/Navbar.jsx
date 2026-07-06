import { useEffect, useState } from 'react'
import logo from '../assets/logo.jpeg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* ── Announcement Bar ── */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0A1E3D] via-[#112B5E] to-[#0A1E3D] py-3 px-4 text-center text-xs sm:text-sm text-white font-medium">
        <div className="relative z-10 flex items-center justify-center gap-2">
          <span>🚀 Now onboarding <b>5 new clients</b> this month — free growth audit included.</span>
          <a href="#contact" className="text-orange-300 underline hover:text-orange-200 transition-colors font-semibold">
            Claim your spot →
          </a>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,122,47,0.12),transparent_70%)] pointer-events-none" />
      </div>

      {/* ── Main Header ── */}
      <nav className={`w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-100/50 border-b border-slate-100 py-3' : 'bg-white/90 backdrop-blur-sm border-b border-slate-100/50 py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <a href="#hero" className="flex items-center shrink-0">
            <img src={logo} alt="Adample" className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-102" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#0A1E3D]">
            {['services', 'results', 'process', 'faq'].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="relative py-1 capitalize hover:text-blue-600 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:height-[2px] after:h-[2px] after:bg-gradient-to-r after:from-blue-600 after:to-orange-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Action Row */}
          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+910000000000" className="flex items-center gap-2 text-sm font-bold text-[#0A1E3D] hover:text-blue-600 transition-colors">
              <span>📞</span> +91 00000 00000
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:to-orange-500 text-white font-bold text-sm shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Get My Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-[#0A1E3D] hover:bg-slate-50 transition-colors"
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`} />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full bg-white border-t border-slate-100 py-4 px-6 flex flex-col gap-4 shadow-xl shadow-slate-100/50">
            {['services', 'results', 'process', 'faq'].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[#0A1E3D] hover:text-blue-600 transition-colors capitalize py-1.5"
              >
                {link}
              </a>
            ))}
            <hr className="border-slate-100" />
            <a href="tel:+910000000000" className="flex items-center gap-2 text-base font-bold text-[#0A1E3D] py-1.5">
              <span>📞</span> +91 00000 00000
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-base shadow-md shadow-orange-500/10"
            >
              Get My Free Quote
            </a>
          </div>
        )}
      </nav>
    </div>
  )
}
