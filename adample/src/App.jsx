import './index.css'
import SEOHead from './components/SEOHead'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import {
  Problem,
  Solution,
  Services,
  WhyUs,
  Process,
  Results,
  Testimonials,
  AuditBand,
  Packages,
  FAQ,
  Footer,
} from './components/Sections'

export default function App() {
  return (
    <>
      <SEOHead />
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <WhyUs />
      <Process />
      <Results />
      <Testimonials />
      <AuditBand />
      <Packages />
      <FAQ />
      <Footer />
    </>
  )
}
