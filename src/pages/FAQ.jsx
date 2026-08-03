import FaqSection from '../components/sections/FaqSection'
import PageHero from '../components/sections/PageHero'
import { images } from '../data/siteContent'

function FAQ() {
  return (
    <main>
      <PageHero title="Faq's" image={images.heroTexture} />
      <FaqSection columns />
    </main>
  )
}

export default FAQ
