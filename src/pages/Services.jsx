import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import FaqSection from '../components/sections/FaqSection'
import PageHero from '../components/sections/PageHero'
import ServicesSection from '../components/sections/ServicesSection'
import { images } from '../data/siteContent'

function Services() {
  return (
    <main>
      <PageHero title="Our Services" image={images.serviceBlocks} />
      <ServicesSection />
      <div className="flex flex-col items-center justify-center gap-6 bg-white px-6 pb-8 text-center text-[var(--color-muted)] sm:flex-row">
        <span>Discover our full range of granite services</span>
        <Link className="premium-hover-button inline-flex min-h-16 items-center justify-center gap-3 px-8 font-extrabold uppercase" to="/contact">
          Read More <ArrowRight size={16} />
        </Link>
      </div>
      <FaqSection />
    </main>
  )
}

export default Services
