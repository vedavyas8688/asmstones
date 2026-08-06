import { useState } from 'react'
import PageHero from '../components/sections/PageHero'
import { images, quarries, quarryImages } from '../data/siteContent'

const galleryBatchSize = 9

function Gallery() {
  const [activeQuarry, setActiveQuarry] = useState('chamarajanagar')
  const [visibleCount, setVisibleCount] = useState(galleryBatchSize)
  const quarryFilters = [...quarries.map((quarry) => ({ id: quarry.id, label: quarry.place })), { id: 'all', label: 'All' }]
  const filteredQuarries = activeQuarry === 'all' ? quarries : quarries.filter((quarry) => quarry.id === activeQuarry)
  const galleryItems = filteredQuarries.flatMap((quarry) =>
    (quarryImages[quarry.id]?.length ? quarryImages[quarry.id] : [quarry.image]).map((image, index) => ({
      image,
      quarry,
      index,
    })),
  )
  const visibleGallery = galleryItems.slice(0, visibleCount)
  const hasMoreImages = visibleCount < galleryItems.length

  return (
    <main>
      <PageHero title="Gallery" image={images.quarryAerial} />
      <section className="bg-white px-6 py-20 lg:py-32">
        <div className="mx-auto mb-12 flex w-full max-w-[1080px] flex-wrap justify-center gap-3">
          {quarryFilters.map((filter) => {
            const isActive = activeQuarry === filter.id

            return (
              <button
                className={`min-h-11 px-6 text-sm font-extrabold uppercase tracking-wide transition ${
                  isActive
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'border border-black text-black hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                }`}
                type="button"
                key={filter.id}
                onClick={() => {
                  setActiveQuarry(filter.id)
                  setVisibleCount(galleryBatchSize)
                }}
              >
                {filter.label}
              </button>
            )
          })}
        </div>
        <div className="mx-auto grid w-full max-w-[1080px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleGallery.map((item) => (
            <figure className="group relative overflow-hidden bg-[var(--color-line)]" key={`${item.quarry.id}-${item.index}`}>
              <img className="aspect-[1.48/1] w-full object-cover transition group-hover:scale-105" src={item.image} alt={`${item.quarry.place} Absolute Black granite quarry and slab gallery image ${item.index + 1}`} loading="lazy" decoding="async" />
            </figure>
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
