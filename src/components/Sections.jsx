import { useEffect, useRef, useState } from 'react'
import logo from '../img/logo.png'

/* ──────────────────────────────────────────────
   Intersection Observer Hook for Reveal Animations
────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0')
          el.classList.remove('opacity-0', 'translate-y-8')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}
const PAINS = [
  "You're spending on ads but can't tell what's actually working.",
  "You're too busy running the business to run the marketing.",
]

export function Problem() {
  const ref = useReveal()
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <span className="inline-block font-bold text-xs tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            Sound familiar?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1E3D]">
            Marketing shouldn't feel like flushing money away
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-12 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          {PAINS.map((p, i) => (
            <div key={i} className="flex gap-4 items-start bg-white border border-slate-100 rounded-2xl p-6 text-left shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-red-50 text-red-500 font-extrabold flex items-center justify-center text-sm shrink-0">
                ✕
              </div>
              <p className="text-slate-800 font-medium text-sm sm:text-base leading-relaxed">{p}</p>
            </div>
          ))}
        </div>

        <p className="font-extrabold text-[#0A1E3D] text-lg sm:text-xl">
          If you nodded at any of these, you're exactly who we built this for. 👇
        </p>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   SOLUTION / PILLARS
────────────────────────────────────────────── */
const PILLARS = [
  { icon: '📈', title: 'Revenue-focused', desc: "We optimise for leads & sales, not vanity metrics that look nice and pay nothing." },
  { icon: '🔍', title: 'Fully transparent', desc: "Plain-English reports and a live dashboard you can check any time, 24/7." },
  { icon: '🤝', title: 'No lock-in', desc: "Month-to-month partnership. We earn your business every single month." },
]

export function Solution() {
  const ref = useReveal()
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block font-bold text-xs tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            What Sets Us Apart
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1E3D] mb-4">
            A marketing partner that's actually accountable to results
          </h2>
          <p className="text-slate-500 text-lg sm:text-xl leading-relaxed">
            We combine strategy, execution and honest reporting so you always know what you're paying for — and what it's earning you.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          {PILLARS.map((p) => (
            <div key={p.title} className="relative group bg-white border border-slate-150/80 rounded-3xl p-8 text-center hover:shadow-2xl hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-4xl mb-6 flex justify-center">{p.icon}</div>
              <h3 className="text-xl font-bold text-[#0A1E3D] mb-3">{p.title}</h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:to-orange-500 text-white font-extrabold text-base shadow-xl shadow-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Get My Free Quote →
          </a>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   SERVICES
────────────────────────────────────────────── */
const SERVICES = [
  { icon: '🔎', title: 'Search Engine Optimisation', desc: "Get found by customers already searching for you. We rank your site for the terms that bring ready-to-buy traffic — and keep it there." },
  { icon: '🎯', title: 'Paid Ads — Google & Meta', desc: "Turn ad spend into predictable leads. Data-driven campaigns that stop the waste and scale only what works." },
  { icon: '📱', title: 'Social Media Marketing', desc: "Stay top-of-mind and build a following that buys. Content and community management that actually moves the needle." },
  { icon: '✍️', title: 'Content Marketing', desc: "Become the obvious choice in your niche with blogs, video and assets that attract, educate and convert." },
  { icon: '💻', title: 'Web Design & Landing Pages', desc: "A website that sells while you sleep. Fast, mobile-first pages built to turn clicks into customers." },
]

export function Services() {
  const ref = useReveal()
  return (
    <section className="services bg-slate-50 py-20 sm:py-24" id="services">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block font-bold text-xs tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            What we do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1E3D]">
            Everything you need to grow — under one roof
          </h2>
        </div>

        <div
          ref={ref}
          className="flex flex-wrap justify-center gap-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          {SERVICES.map((s) => (
            <div key={s.title} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] relative group bg-white border border-slate-100 rounded-2xl p-6.5 hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-orange-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              <div>
                <div className="text-3xl mb-5 flex">{s.icon}</div>
                <h3 className="text-lg font-bold text-[#0A1E3D] mb-2">{s.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">{s.desc}</p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-600 hover:gap-2 transition-all duration-200">
                Ask about this →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   WHY US
────────────────────────────────────────────── */
const DIFFS = [
  { title: 'Results, or we work for free', desc: "Clear KPIs agreed upfront — we're on the hook for them." },
  { title: 'A dedicated strategist', desc: "A real human who knows your business — not a rotating junior." },
  { title: 'Right-sized for you', desc: "Strategies scaled to a small-business budget — no bloat, no waste." },
]
const COMPARES = [
  { old: 'Locked into 12-month contracts', nw: 'Month-to-month freedom' },
  // { old: 'Confusing reports', nw: 'Plain-English + live dashboard' },
  { old: 'Vanity metrics', nw: 'Leads & revenue' },
  { old: 'You chase them', nw: 'Proactive weekly updates' },
]

export function WhyUs() {
  const ref = useReveal()
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div>
            <span className="inline-block font-bold text-xs tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
              Why choose us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1E3D] mb-8 leading-tight">
              Built for small budgets.<br />Obsessed with your results.
            </h2>

            <div className="flex flex-col gap-6">
              {DIFFS.map((d) => (
                <div className="flex gap-4 items-start" key={d.title}>
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-500 font-extrabold flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0A1E3D] mb-1">{d.title}</h4>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0A1E3D] to-[#0F2A55] rounded-3xl p-8 text-white shadow-xl shadow-slate-900/10">
            <h4 className="text-lg sm:text-xl font-bold mb-6 flex items-center gap-2">
              The old way vs. the Adample way
            </h4>
            <div className="flex flex-col gap-4">
              {COMPARES.map((c, i) => (
                <div key={i} className="flex items-center gap-4 py-3.5 border-b border-white/10 last:border-none text-xs sm:text-sm leading-normal">
                  <span className="text-slate-400 flex-1 flex items-center gap-2">
                    <span className="text-red-400 font-bold">✕</span> {c.old}
                  </span>
                  <span className="text-orange-400 font-bold font-mono">→</span>
                  <span className="text-white font-semibold flex-1 flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span> {c.nw}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   PROCESS
────────────────────────────────────────────── */
const STEPS = [
  { n: 1, title: 'Free Growth Audit', desc: "Tell us about your business. We analyse your current marketing and spot the quickest wins — no charge, no obligation." },
  { n: 2, title: 'Your Custom Game Plan', desc: "We present a clear, tailored strategy & quote built around your goals and budget. You decide if it's a fit." },
  { n: 3, title: 'We Launch & Grow', desc: "You approve, we execute, and you watch the leads roll in — with proactive weekly updates the whole way." },
]

export function Process() {
  const ref = useReveal()
  return (
    <section className="process bg-slate-50 py-20 sm:py-24" id="process">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block font-bold text-xs tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1E3D]">
            Up and running in 3 simple steps
          </h2>
        </div>

        <div
          ref={ref}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          {STEPS.map((s) => (
            <div className="relative z-10 bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300" key={s.n}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-[#0A1E3D] text-white font-extrabold text-xl flex items-center justify-center mb-6 shadow-md shadow-blue-500/10">
                {s.n}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0A1E3D] mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:to-orange-500 text-white font-extrabold text-base shadow-xl shadow-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Start With My Free Audit →
          </a>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   RESULTS
────────────────────────────────────────────── */
const STATS = [
  { val: '3.4×', lbl: 'Avg. return on ad spend' },
  { val: '+180%', lbl: 'Avg. lead increase' },
  { val: '49+', lbl: 'Businesses grown' },
  { val: '4.9★', lbl: 'Average client rating' },
]

export function Results() {
  const ref = useReveal()
  return (
    <section className="bg-gradient-to-br from-[#0A1E3D] via-[#0F2A55] to-[#112B5E] py-20 sm:py-24 text-white relative overflow-hidden" id="results">
      <div className="absolute inset-0 hero-grid-bg opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block font-bold text-xs tracking-widest uppercase text-blue-300 bg-blue-900/40 border border-blue-800 rounded-full px-4 py-1.5 mb-4">
            Proof, not promises
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Numbers our clients actually feel
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A snapshot of what happens when strategy meets accountable execution.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          {STATS.map((s) => (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:bg-white/8 transition-colors duration-300" key={s.lbl}>
              <div className="text-3xl sm:text-4xl font-black text-orange-400 mb-2 leading-none">{s.val}</div>
              <div className="text-slate-300 text-xs sm:text-sm font-medium leading-tight">{s.lbl}</div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center backdrop-blur-sm">
          <div className="text-slate-200 text-sm sm:text-base leading-relaxed flex-1">
            <b>Wildberry holidays K.B. Enterprise</b> — "We were burning budget on ads with nothing to show." In 90 days we delivered <b>2.5× more qualified leads at 40% lower cost per lead.</b>
          </div>
          <div className="flex flex-col items-center md:items-end shrink-0">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 leading-none mb-1">+152% leads</div>

          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   TESTIMONIALS
────────────────────────────────────────────── */
const TESTIMONIALS = [
  { initials: 'RA', name: 'Rishi Agarwal', role: 'Owner, Royaloak', quote: "Royaloak received high-intent leads with impressive quality and consistency. As an international furniture brand, finding the right audience was important for us, and the results delivered were exactly aligned with our expectations." },
  { initials: 'SB', name: 'Shrilekha Bhattacharjee', role: 'Founder, Wildberry Holidays', quote: "Wildberry Holidays saw great results through lead generation and website design support. The website was professionally created, and the enquiries we received were genuine, relevant, and valuable for our travel business." },
  { initials: 'MS', name: 'Monjolika Sinha', role: 'Founder, Fairytale Wedding', quote: "Fairytale Wedding received relevant leads for our matrimonial platform, and the overall experience was smooth and professional. The enquiries were from people genuinely interested in our services, which made the results truly valuable." },
]

export function Testimonials() {
  const ref = useReveal()
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block font-bold text-xs tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
            Don't take our word for it
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1E3D]">
            Loved by business owners like you
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          {TESTIMONIALS.map((t) => (
            <div className="bg-white border border-slate-150/80 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between" key={t.name}>
              <div>
                <div className="text-orange-400 text-sm tracking-widest mb-4">★★★★★</div>
                <p className="text-slate-800 font-medium italic text-sm sm:text-base leading-relaxed mb-6">"{t.quote}"</p>
              </div>
              <div className="flex items-center gap-3.5 mt-auto border-t border-slate-100 pt-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 to-[#0A1E3D] text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-extrabold text-sm text-[#0A1E3D]">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   AUDIT CTA BAND
────────────────────────────────────────────── */
export function AuditBand() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-[#0A1E3D] rounded-3xl p-8 sm:p-12 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-white shadow-xl shadow-blue-900/10 relative overflow-hidden">
          <div className="absolute top-[-100px] right-[-100px] w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-white leading-tight">
              Get a free, no-obligation marketing audit
            </h2>
            <ul className="flex flex-col gap-3 text-slate-200 text-sm sm:text-base">
              {[
                "A review of your website, ads & SEO",
                "Your 3 biggest quick-win opportunities",
                "A clear action plan — yours to keep, even if we never work together"
              ].map((item) => (
                <li key={item} className="flex gap-2.5 items-start">
                  <span className="text-emerald-400 font-extrabold shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 hover:to-orange-500 text-white font-extrabold text-base shadow-xl shadow-orange-500/25 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Claim My Free Audit
            </a>
            <p className="text-blue-200 text-xs sm:text-sm mt-3.5">
              No credit card. No pressure. Just clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


/* ──────────────────────────────────────────────
   FAQ
────────────────────────────────────────────── */
const FAQS = [
  { q: 'How much does it cost?', a: "It depends on your goals, channels and budget — which is exactly why we give every business a free, custom quote instead of a one-size-fits-all price. Request yours and we'll customise it for you." },
  { q: 'Am I locked into a contract?', a: "No. We work month-to-month, so we have to earn your business every single month." },
  { q: 'How soon will I see results?', a: "Paid channels can show movement within weeks; SEO and content compound over a few months. We set clear expectations upfront." },
  // { q: 'Do you work with businesses my size?', a: "Yes — small businesses and startups are exactly who we specialise in. Our strategies are built for lean budgets." },
  { q: 'What if it doesn\'t work?', a: "We agree KPIs upfront and stay accountable to them. No lock-in means you're never trapped if we're not delivering." },
]

export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-50/20 rounded-full blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column - Heading Block */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="inline-block font-extrabold text-xs tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-4">
              Good questions
            </span>
            <h2 className="text-3.5xl sm:text-5xl font-black text-[#0A1E3D] mb-6 leading-tight tracking-tight">
              Everything you might be wondering
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Find answers to commonly asked questions about our process, packages, performance reporting, and contracts.
            </p>

            {/* CTA box */}
            <div className="w-full bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <div className="text-sm font-bold text-slate-800 mb-2">Still have questions?</div>
              <div className="text-xs text-slate-400 mb-4">We're here to help you clear up any doubts.</div>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-extrabold text-blue-600 hover:text-blue-500 transition-colors">
                <span>📞</span> Contact Now
              </a>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {FAQS.map((f, i) => (
              <div
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-350 ${open === i ? 'border-blue-600 shadow-xl shadow-slate-100/50' : 'border-slate-150/80 hover:border-slate-350'}`}
                key={f.q}
              >
                <div
                  className="flex justify-between items-center px-6 py-5.5 cursor-pointer select-none font-bold text-sm sm:text-base text-[#0A1E3D] gap-4"
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  <span className="leading-snug">{f.q}</span>
                  <span className={`w-8 h-8 rounded-lg text-sm flex items-center justify-center shrink-0 transition-all duration-300 font-extrabold ${open === i ? 'rotate-180 bg-blue-600 text-white' : 'bg-blue-50/50 text-blue-600'}`}>
                    {open === i ? '–' : '+'}
                  </span>
                </div>
                {open === i && (
                  <div className="px-6 pb-6 text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-50 pt-4 bg-slate-50/10">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   FOOTER
────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="bg-[#080F1E] text-slate-400 py-16 lg:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/5">
          <div className="lg:col-span-6">
            <div className="mb-6 flex bg-white p-2 rounded-xl w-fit shadow-md">
              <img src={logo} alt="Adample" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm">
              The results-driven marketing partner for small businesses that want real, measurable growth — without the jargon or lock-in.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h5 className="font-extrabold text-sm text-white mb-6 uppercase tracking-wider">Services</h5>
            <div className="flex flex-col gap-3 text-sm font-semibold">
              <a href="#services" className="hover:text-white transition-colors">SEO</a>
              <a href="#services" className="hover:text-white transition-colors">Paid Ads</a>
              <a href="#services" className="hover:text-white transition-colors">Social Media</a>
              <a href="#services" className="hover:text-white transition-colors">Web Design</a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h5 className="font-extrabold text-sm text-white mb-6 uppercase tracking-wider">Company</h5>
            <div className="flex flex-col gap-3 text-sm font-semibold">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#results" className="hover:text-white transition-colors">Results</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5 py-8 border-b border-white/5 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
          {[
            'Google Partner',
            'Meta Business Partner',
            '★ 4.9 Google',
            '★ 4.9 Clutch',
            '🔒 SSL Secure'
          ].map((b) => (
            <span key={b} className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-slate-300">
              {b}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-between items-center text-xs text-slate-500 gap-4 mt-8">
          <span>© 2026 Adample. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
