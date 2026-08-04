import FaqSection from '../components/sections/FaqSection'
import PageHero from '../components/sections/PageHero'
import { pageBanners } from '../data/siteContent'

function FAQ() {
  return (
    <main>
      <PageHero title="Faq's" image={pageBanners.faq} />
      <FaqSection columns />
    </main>
  )
}

export default FAQ
