import { Plus } from 'lucide-react'
import { useState } from 'react'
import PageHero from '../components/sections/PageHero'
import { gallery, images } from '../data/siteContent'

const galleryBatchSize = 9

function Gallery() {
  const [visibleCount, setVisibleCount] = useState(galleryBatchSize)
  const visibleGallery = gallery.slice(0, visibleCount)
  const hasMoreImages = visibleCount < gallery.length

  return (
    <main>
      <PageHero title="Gallery" image={images.quarryAerial} />
      <section className="bg-white px-6 py-20 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1080px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleGallery.map((image, index) => (
            <button className="group relative overflow-hidden bg-[var(--color-line)]" type="button" key={`${image}-${index}`}>
              <img className="aspect-[1.48/1] w-full object-cover transition group-hover:scale-105" src={image} alt={`ASM granite gallery ${index + 1}`} decoding="async" />
              <span className="absolute bottom-0 right-0 grid size-10 place-items-center bg-[var(--color-accent)] text-white">
                <Plus size={18} />
              </span>
            </button>
          ))}
        </div>
        {hasMoreImages ? (
          <div className="mt-10 flex justify-center">
            <button
              className="premium-hover-button inline-flex min-h-14 cursor-pointer items-center justify-center px-8 text-sm font-extrabold uppercase"
              type="button"
              onClick={() => setVisibleCount((current) => current + galleryBatchSize)}
            >
              Load More
            </button>
          </div>
        ) : null}
      </section>
    </main>
  )
}

export default Gallery
