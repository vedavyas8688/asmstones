import { useState } from 'react'
import { ZoomIn } from 'lucide-react'
import GalleryLightbox from './GalleryLightbox'
import { quarries, quarryGalleryItems } from '../../data/siteContent'

const galleryBatchSize = 9
const categoryFilters = [
  { id: 'blocks', label: 'Block Photos' },
  { id: 'quarry', label: 'Quarry Photos' },
]

function QuarryGallerySection() {
  const [activeQuarry, setActiveQuarry] = useState('all')
  const [activeCategory, setActiveCategory] = useState('blocks')
  const [visibleCount, setVisibleCount] = useState(galleryBatchSize)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const quarryFilters = [{ id: 'all', label: 'All' }, ...quarries.map((quarry) => ({ id: quarry.id, label: quarry.place }))]
  const filteredQuarries = activeQuarry === 'all' ? quarries : quarries.filter((quarry) => quarry.id === activeQuarry)
  const previewItems = filteredQuarries.flatMap((quarry) =>
    (quarryGalleryItems[quarry.id]?.length ? quarryGalleryItems[quarry.id] : [{ image: quarry.image, category: 'quarry' }]).map((item, index) => ({
      image: item.image,
      category: item.category,
      quarry,
      index,
    })),
  ).filter((item) => item.category === activeCategory)
  const visiblePreviewItems = previewItems.slice(0, visibleCount)
  const lightboxItems = previewItems.map((item, index) => ({
    image: item.image,
    alt: `${item.quarry.place} ${activeCategory === 'blocks' ? 'block' : 'quarry'} gallery image ${index + 1}`,
  }))
  const hasMoreImages = visibleCount < previewItems.length

  return (
    <section className="bg-[var(--color-deep)] px-5 py-24 lg:py-36">
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {quarryFilters.map((filter) => {
            const isActive = activeQuarry === filter.id

            return (
              <button
                className={`min-h-11 px-6 text-sm font-extrabold uppercase tracking-wide transition ${
                  isActive
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'border border-white/15 text-white/80 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
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

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categoryFilters.map((filter) => {
            const isActive = activeCategory === filter.id

            return (
              <button
                className={`min-h-10 px-5 text-xs font-extrabold uppercase tracking-wide transition ${
                  isActive
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'border border-white/15 text-white/80 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                }`}
                type="button"
                key={filter.id}
                onClick={() => {
                  setActiveCategory(filter.id)
                  setVisibleCount(galleryBatchSize)
                }}
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {visiblePreviewItems.map((item, index) => (
            <figure className="group relative overflow-hidden" key={`${item.quarry.id}-${item.index}`}>
              <button
                className="block w-full cursor-pointer text-left"
                type="button"
                aria-label="Open gallery image"
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  src={item.image}
                  alt={`${item.quarry.place} Absolute Black granite preview ${item.index + 1}`}
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute bottom-4 right-4 grid size-11 place-items-center bg-[var(--color-accent)] text-white opacity-100 transition md:opacity-0 md:group-hover:opacity-100">
                  <ZoomIn size={20} />
                </span>
              </button>
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
      </div>
      {lightboxIndex !== null ? (
        <GalleryLightbox items={lightboxItems} activeIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} onMove={setLightboxIndex} />
      ) : null}
    </section>
  )
}

export default QuarryGallerySection
