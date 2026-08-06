import PageHero from '../components/sections/PageHero'
import QuarryFeatureSection from '../components/sections/QuarryFeatureSection'
import QuarryGallerySection from '../components/sections/QuarryGallerySection'
import { images } from '../data/siteContent'

function Quarries() {
  return (
    <main>
      <PageHero title="Our Quarries" image={images.quarrySunset} />
      <QuarryFeatureSection />
      <QuarryGallerySection />
    </main>
  )
}

export default Quarries
