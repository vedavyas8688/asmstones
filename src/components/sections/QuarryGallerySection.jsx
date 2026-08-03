import { useState } from 'react'
import { Link } from 'react-router-dom'
import { images, quarries } from '../../data/siteContent'

const quarryPreviewImages = {
  chamarajanagar: [
    images.quarrySunset,
    images.serviceSlabs,
    images.serviceBlocks,
    images.heroQuarry,
    images.quarryDetail,
    images.blockClose,
  ],
  khammam: [],
  thalavadi: [],
}

function QuarryGallerySection() {
  const [activeQuarry, setActiveQuarry] = useState('all')
  const quarryFilters = [{ id: 'all', label: 'All' }, ...quarries.map((quarry) => ({ id: quarry.id, label: quarry.place }))]
  const filteredQuarries = activeQuarry === 'all' ? quarries : quarries.filter((quarry) => quarry.id === activeQuarry)
  const previewItems = filteredQuarries.flatMap((quarry) =>
    (quarryPreviewImages[quarry.id]?.length ? quarryPreviewImages[quarry.id] : [quarry.image]).map((image, index) => ({
      image,
      quarry,
      index,
    })),
  )

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
                onClick={() => setActiveQuarry(filter.id)}
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {previewItems.map((item) => (
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
                decoding="async"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuarryGallerySection
