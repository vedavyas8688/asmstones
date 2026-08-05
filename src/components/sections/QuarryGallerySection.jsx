import { useState } from 'react'
import { Link } from 'react-router-dom'
import { quarries, quarryImages } from '../../data/siteContent'

const galleryBatchSize = 9

function QuarryGallerySection() {
  const [activeQuarry, setActiveQuarry] = useState('all')
  const [visibleCount, setVisibleCount] = useState(galleryBatchSize)
  const quarryFilters = [{ id: 'all', label: 'All' }, ...quarries.map((quarry) => ({ id: quarry.id, label: quarry.place }))]
  const filteredQuarries = activeQuarry === 'all' ? quarries : quarries.filter((quarry) => quarry.id === activeQuarry)
  const previewItems = filteredQuarries.flatMap((quarry) =>
    (quarryImages[quarry.id]?.length ? quarryImages[quarry.id] : [quarry.image]).map((image, index) => ({
      image,
      quarry,
      index,
    })),
  )
  const visiblePreviewItems = previewItems.slice(0, visibleCount)
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {visiblePreviewItems.map((item) => (
            <Link
              className="group block overflow-hidden"
              to={`/quarries/${item.quarry.id}`}
              key={`${item.quarry.id}-${item.index}`}
              aria-label={item.quarry.title}
            >
              <img
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                src={item.image}
                alt={`${item.quarry.place} Absolute Black granite preview ${item.index + 1}`}
                loading="lazy"
                decoding="async"
              />
            </Link>
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
    </section>
  )
}

export default QuarryGallerySection
