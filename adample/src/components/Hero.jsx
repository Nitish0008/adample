import { useState } from 'react'

export default function Hero() {
  const [service, setService] = useState('🎯 Paid Ads')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setDone(true)
    }, 1500)
  }

  const services = ['🎯 Paid Ads', '🔎 SEO', '📱 Social Media', '💻 Website']

  return (
    <header className="relative bg-gradient-to-br from-[#0A1E3D] via-[#0F2A55] to-[#102240] py-20 lg:py-28 overflow-hidden min-h-screen flex items-center">
      {/* ── Background Elements ── */}
      <div className="absolute inset-0 hero-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[80px] animate-float-orb" />
        <div className="absolute bottom-[-10%] right-[25%] w-[400px] h-[400px] rounded-full bg-orange-500/15 blur-[80px] animate-float-orb" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-[30%] right-[5%] w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[80px] animate-float-orb" style={{ animationDelay: '-5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ══════════════════════════════
              LEFT SIDE: Content & Dashboard
          ══════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">



            {/* Section Eyebrow */}
            <div className="inline-block font-bold text-xs sm:text-sm tracking-widest uppercase text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
              Digital marketing for small businesses
            </div>

            {/* Main Headline */}
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6.5xl font-black leading-[1.08] mb-6 tracking-tight">
              More Leads.<br />
              More Sales.<br />
              <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">Less Guesswork.</span>
            </h1>

            {/* Sub-description */}
            <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed max-w-xl mb-8">
              We help small businesses &amp; startups turn websites, ads and social media into a predictable stream of customers — with clear reporting and no long-term lock-in.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap gap-4 w-full sm:w-auto mb-8">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:to-orange-500 text-white font-extrabold text-base shadow-xl shadow-orange-500/25 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Get My Free Quote →
              </a>
              <a
                href="#results"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-extrabold text-base border border-white/20 hover:border-white/30 transition-all duration-200 backdrop-blur-md"
              >
                See our results
              </a>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-4 text-slate-300 text-xs sm:text-sm font-medium mb-12 border-b border-white/10 pb-6 w-full max-w-xl">
              <span className="flex items-center gap-1.5">
                <span className="text-orange-400">★★★★★</span>
                <b className="text-white">4.9/5</b> from 120+ owners
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-500" />
              <span>✔ Google &amp; Meta Certified</span>
              <span className="w-1 h-1 rounded-full bg-slate-500" />
              <span>✔ No lock-in contracts</span>
            </div>

            {/* ── Growth Dashboard card ── */}
            <div className="w-full max-w-xl bg-white rounded-3xl border border-slate-100 p-6 sm:p-7 shadow-2xl shadow-black/35 relative group hover:border-slate-200/80 transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <span className="font-extrabold text-base text-slate-900 tracking-tight">Growth Dashboard</span>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-100 group-hover:bg-red-400 transition-colors duration-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-100 group-hover:bg-yellow-400 transition-colors duration-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-100 group-hover:bg-green-400 transition-colors duration-300" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3.5 mb-6">
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">3.4×</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1.5">ROAS</div>
                  <div className="text-[10px] sm:text-xs font-bold text-emerald-500 flex items-center gap-0.5 mt-1">▲ 22%</div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">+180%</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1.5">Leads</div>
                  <div className="text-[10px] sm:text-xs font-bold text-emerald-500 flex items-center gap-0.5 mt-1">▲ 61%</div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none">₹42</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1.5">Cost / lead</div>
                  <div className="text-[10px] sm:text-xs font-bold text-emerald-500 flex items-center gap-0.5 mt-1">▼ 38%</div>
                </div>
              </div>

              {/* Sparkline chart SVG */}
              <div className="h-20 bg-gradient-to-b from-blue-50/40 to-white rounded-2xl overflow-hidden border border-blue-50/50 mb-6">
                <svg width="100%" height="80" viewBox="0 0 400 80" preserveAspectRatio="none" className="w-full h-full">
                  <path d="M0,62 C50,55 90,40 140,38 C190,36 230,20 290,14 C340,9 370,6 400,2 L400,80 L0,80 Z" fill="url(#grd)" />
                  <path d="M0,62 C50,55 90,40 140,38 C190,36 230,20 290,14 C340,9 370,6 400,2" fill="none" stroke="#2563EB" strokeWidth="2.5" />
                  <circle cx="400" cy="2" r="4" fill="#2563EB" />
                </svg>
              </div>

              {/* Toast Lead Captured */}
              <div className="flex items-center gap-3.5 bg-white border border-slate-100 rounded-2xl p-3.5 shadow-md shadow-slate-100/50 max-w-xs sm:max-w-sm">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center font-bold text-sm shrink-0">✓</div>
                <div>
                  <div className="font-extrabold text-xs sm:text-sm text-slate-900">New lead captured</div>
                  <div className="text-[10px] sm:text-xs text-slate-400">Quote requested · just now</div>
                </div>
              </div>

              {/* Absolute floating badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-slate-900 text-white rounded-2xl px-5 py-3 text-[11px] sm:text-xs font-semibold shadow-xl shadow-black/20">
                Revenue
                <strong className="block font-black text-lg sm:text-2xl text-orange-400 mt-0.5">+64%</strong>
                this quarter
              </div>
            </div>
          </div>

          {/* ══════════════════════════════
              RIGHT SIDE: Contact Form Card
          ══════════════════════════════ */}
          <div className="lg:col-span-5 w-full">
            <div className="relative bg-white/97 rounded-3xl p-8 sm:p-10 shadow-3xl shadow-black/30 border border-white/20 backdrop-blur-xl">
              {/* Colored border overlay */}
              <div className="absolute inset-[-2px] rounded-[26px] bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-orange-500/40 -z-10" />

              {/* Form Step Indicator */}
              <div className="flex gap-2 mb-2">
                <span className="h-1.5 rounded-full flex-1 bg-blue-600" />
                <span className="h-1.5 rounded-full flex-1 bg-slate-100" />
                <span className="h-1.5 rounded-full flex-1 bg-slate-100" />
              </div>
              <div className="text-xs font-bold text-slate-400 mb-6">Step 1 of 3</div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1.5 tracking-tight">What do you need help with?</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">Pick one to get started — takes 30 seconds.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                {/* Service Selector Grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-2">
                  {services.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setService(s)}
                      className={`font-bold text-xs sm:text-sm py-3 px-2 text-center rounded-xl border-1.5 cursor-pointer transition-all duration-200 ${service === s ? 'border-blue-600 bg-blue-50/50 text-blue-600 shadow-sm' : 'border-slate-100 bg-white text-slate-700 hover:border-slate-200'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                {/* Name Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-800">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Riya Kapoor"
                    className="w-full border-1.5 border-slate-100 rounded-xl px-4 py-3 text-sm text-slate-900 bg-white outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all duration-200"
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-800">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@business.com"
                    className="w-full border-1.5 border-slate-100 rounded-xl px-4 py-3 text-sm text-slate-900 bg-white outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all duration-200"
                  />
                </div>

                {/* Phone Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-800">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full border-1.5 border-slate-100 rounded-xl px-4 py-3 text-sm text-slate-900 bg-white outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all duration-200"
                  />
                </div>

                {/* Submitting button */}
                <button
                  type="submit"
                  disabled={loading || done}
                  className={`w-full py-4 rounded-xl font-extrabold text-sm sm:text-base text-white tracking-wide shadow-lg cursor-pointer transition-all duration-200 relative overflow-hidden animate-shimmer-btn ${done ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-500 shadow-emerald-500/20' : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-500 shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5 active:translate-y-0'}`}
                >
                  {done ? '✓ We\'ll reply within 1 business day!' : loading ? 'Sending…' : 'Get My Free Quote →'}
                </button>
              </form>

              <p className="text-slate-400 text-[11px] text-center mt-4">
                🔒 Free &amp; no-obligation. We reply within 1 business day.
              </p>

              {/* Bottom badging */}
              <div className="flex justify-center items-center gap-4 border-t border-slate-100 mt-6 pt-5 flex-wrap text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">
                <span>Google Partner</span>
                <span>Meta Business Partner</span>
                <span>★ 4.9 on Google</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
