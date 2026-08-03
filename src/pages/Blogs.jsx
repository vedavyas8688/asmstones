import FaqSection from '../components/sections/FaqSection'
import NewsSection from '../components/sections/NewsSection'
import PageHero from '../components/sections/PageHero'
import { images } from '../data/siteContent'

function Blogs() {
  return (
    <main>
      <PageHero title="Blogs" image={images.quarryDetail} />
      <NewsSection showAction={false} />
      <FaqSection />
    </main>
  )
}

export default Blogs
