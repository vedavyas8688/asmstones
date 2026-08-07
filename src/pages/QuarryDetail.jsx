import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ZoomIn } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import FaqSection from '../components/sections/FaqSection'
import GalleryLightbox from '../components/sections/GalleryLightbox'
import { quarries, quarryGalleryItems, quarryImages } from '../data/siteContent'

const galleryBatchSize = 9
const categoryFilters = [
  { id: 'blocks', label: 'Block Photos' },
  { id: 'quarry', label: 'Quarry Photos' },
]

function filterLabel(category) {
  return categoryFilters.find((filter) => filter.id === category)?.label || 'Gallery Photos'
}

function QuarryDetail() {
  const { id } = useParams()
  const quarry = quarries.find((item) => item.id === id)
  const [sliderState, setSliderState] = useState({ quarryId: id, imageIndex: 0 })
  const [galleryState, setGalleryState] = useState({ quarryId: id, category: 'blocks', visibleCount: galleryBatchSize })
  const [lightboxState, setLightboxState] = useState({ quarryId: id, imageIndex: null })
  const sliderImages = quarry ? quarryImages[quarry.id] || [quarry.image] : []
  const activeCategory = galleryState.quarryId === id ? galleryState.category : 'blocks'
  const visibleCount = galleryState.quarryId === id ? galleryState.visibleCount : galleryBatchSize
  const galleryItems = quarry
    ? (quarryGalleryItems[quarry.id] || [{ image: quarry.image, category: 'quarry' }]).filter((item) => item.category === activeCategory)
    : []
  const visibleGalleryItems = galleryItems.slice(0, visibleCount)
  const lightboxItems = galleryItems.map((item, index) => ({
    image: item.image,
    alt: `${quarry?.place || 'Quarry'} ${filterLabel(activeCategory)} ${index + 1}`,
  }))
  const lightboxIndex = lightboxState.quarryId === id ? lightboxState.imageIndex : null
  const hasMoreGalleryImages = visibleCount < galleryItems.length
  const activeImage = sliderState.quarryId === id ? sliderState.imageIndex : 0
  const showPreviousImage = () => {
    setSliderState((current) => ({
      quarryId: id,
      imageIndex:
        current.quarryId === id ? (current.imageIndex - 1 + sliderImages.length) % sliderImages.length : 0,
    }))
  }
  const showNextImage = () => {
    setSliderState((current) => ({
      quarryId: id,
      imageIndex: current.quarryId === id ? (current.imageIndex + 1) % sliderImages.length : 0,
    }))
  }

  useEffect(() => {
    if (sliderImages.length <= 1) return undefined

    const timer = window.setInterval(() => {
      setSliderState((current) => ({
        quarryId: id,
        imageIndex: current.quarryId === id ? (current.imageIndex + 1) % sliderImages.length : 1 % sliderImages.length,
      }))
    }, 3000)

    return () => window.clearInterval(timer)
  }, [id, sliderImages.length])

  if (!quarry) {
    return <Navigate to="/quarries" replace />
  }

  const otherQuarries = quarries.filter((item) => item.id !== quarry.id)

  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
        <div className="mb-8 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Our Quarries</p>
          <h1 className="mt-3 break-words text-3xl font-extrabold leading-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl lg:text-6xl">
            {quarry.title}
          </h1>
        </div>
        <section className="relative">
          <div className="relative aspect-[4/3] max-h-[680px] w-full overflow-hidden sm:aspect-[16/10] lg:w-4/5">
            {sliderImages.map((image, imageIndex) => (
              <img
                className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
                  imageIndex === activeImage ? 'opacity-100' : 'opacity-0'
                }`}
                key={image}
                src={image}
                alt={`${quarry.place} quarry view ${imageIndex + 1}`}
                loading={imageIndex === activeImage ? 'eager' : 'lazy'}
                decoding="async"
              />
            ))}
            {sliderImages.length > 1 ? (
              <div className="absolute bottom-4 left-1/2 z-10 hidden -translate-x-1/2 gap-2 sm:flex">
                {sliderImages.map((image, imageIndex) => (
                  <button
                    className={`size-2.5 rounded-full transition ${
                      imageIndex === activeImage ? 'bg-[var(--color-accent)]' : 'bg-white/70 hover:bg-white'
                    }`}
                    key={`${image}-dot`}
                    type="button"
                    aria-label={`Show quarry image ${imageIndex + 1}`}
                    onClick={() => setSliderState({ quarryId: id, imageIndex })}
                  />
                ))}
              </div>
            ) : null}
            {sliderImages.length > 1 ? (
              <div className="absolute bottom-3 left-3 z-10 flex gap-1">
                <button className="grid size-10 place-items-center bg-[var(--color-accent)] text-white transition hover:bg-[var(--color-accent-dark)] sm:size-11" type="button" aria-label="Previous quarry image" onClick={showPreviousImage}><ArrowLeft size={20} /></button>
                <button className="grid size-10 place-items-center bg-[var(--color-accent)] text-white transition hover:bg-[var(--color-accent-dark)] sm:size-11" type="button" aria-label="Next quarry image" onClick={showNextImage}><ArrowRight size={20} /></button>
              </div>
            ) : null}
          </div>
          <aside className="mt-5 bg-white p-5 shadow-[var(--shadow-premium)] sm:p-7 md:absolute md:-bottom-16 md:right-0 md:mt-0 md:w-[340px] lg:right-10">
            <p className="mb-5 text-sm font-bold uppercase text-[var(--color-muted)]">Location<br /><strong className="mt-2 block text-base normal-case text-[var(--color-text)]">{quarry.place}</strong></p>
            <p className="mb-5 text-sm font-bold uppercase text-[var(--color-muted)]">Material Type<br /><strong className="mt-2 block text-base normal-case text-[var(--color-text)]">{quarry.material}</strong></p>
            <p className="mb-5 text-sm font-bold uppercase text-[var(--color-muted)]">Application<br /><strong className="mt-2 block text-base normal-case text-[var(--color-text)]">{quarry.application}</strong></p>
            <p className="text-sm font-bold uppercase text-[var(--color-muted)]">Finish<br /><strong className="mt-2 block text-base normal-case text-[var(--color-text)]">{quarry.finish}</strong></p>
          </aside>
        </section>
        <section className="max-w-[80%] pt-10 md:pt-24 max-lg:max-w-full">
          <h2 className="text-2xl font-extrabold text-[var(--color-ink)] md:text-4xl">
            {quarry.detailHeading || 'Quarry Overview'}
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-text)] md:text-lg md:leading-9">{quarry.description}</p>
          {quarry.detailIntro ? (
            <p className="mt-5 text-base leading-8 text-[var(--color-text)] md:text-lg md:leading-9">{quarry.detailIntro}</p>
          ) : null}
          <ul className="mt-6 space-y-4 text-base leading-8 text-[var(--color-text)] md:text-lg md:leading-9">
            {(quarry.detailPoints || []).map((point) => (
              <li className="border-l-4 border-[var(--color-accent)] pl-5" key={point.title}>
                <strong className="block text-[var(--color-ink)]">{point.title}</strong>
                {point.description}
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-16">
          <div className="mb-8 flex items-end justify-between gap-5 max-sm:flex-col max-sm:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Gallery</p>
              <h2 className="mt-2 text-2xl font-extrabold text-[var(--color-ink)] md:text-4xl">
                {quarry.title} Gallery
              </h2>
            </div>
            <div className="flex w-full flex-wrap gap-3 sm:w-auto">
              {categoryFilters.map((filter) => {
                const isActive = activeCategory === filter.id

                return (
                  <button
                      className={`min-h-10 flex-1 px-4 text-xs font-extrabold uppercase tracking-wide transition sm:flex-none sm:px-5 ${
                      isActive
                        ? 'bg-[var(--color-accent)] text-white'
                        : 'border border-black text-black hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                    }`}
                    type="button"
                    key={filter.id}
                    onClick={() => {
                      setGalleryState({ quarryId: id, category: filter.id, visibleCount: galleryBatchSize })
                      setLightboxState({ quarryId: id, imageIndex: null })
                    }}
                  >
                    {filter.label}
                  </button>
                )
              })}
            </div>
          </div>

          {visibleGalleryItems.length ? (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visibleGalleryItems.map((item, index) => (
                  <figure className="group relative overflow-hidden bg-[var(--color-line)]" key={`${quarry.id}-${activeCategory}-${index}`}>
                    <button
                      className="block w-full cursor-pointer text-left"
                      type="button"
                      aria-label="Open gallery image"
                      onClick={() => setLightboxState({ quarryId: id, imageIndex: index })}
                    >
                      <img
                        className="aspect-[1.48/1] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                        src={item.image}
                        alt={`${quarry.place} ${filterLabel(activeCategory)} ${index + 1}`}
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
              {hasMoreGalleryImages ? (
                <div className="mt-10 flex justify-center">
                  <button
                    className="premium-hover-button inline-flex min-h-14 cursor-pointer items-center justify-center px-8 text-sm font-extrabold uppercase"
                    type="button"
                    onClick={() =>
                      setGalleryState((current) => ({
                        quarryId: id,
                        category: current.quarryId === id ? current.category : activeCategory,
                        visibleCount: (current.quarryId === id ? current.visibleCount : visibleCount) + galleryBatchSize,
                      }))
                    }
                  >
                    Load More
                  </button>
                </div>
              ) : null}
            </>
          ) : (
            <p className="border border-[var(--color-line)] p-8 text-lg font-bold text-[var(--color-text)]">
              No {filterLabel(activeCategory).toLowerCase()} available for this quarry yet.
            </p>
          )}
        </section>
        <section className="mt-12">
          <div className="mb-7 flex items-end justify-between gap-5 max-sm:flex-col max-sm:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Explore More</p>
              <h2 className="mt-2 text-2xl font-extrabold text-[var(--color-ink)] md:text-4xl">Remaining Quarries</h2>
            </div>
            <Link className="inline-flex items-center gap-2 text-sm font-extrabold uppercase text-[var(--color-ink)] transition hover:text-[var(--color-accent)]" to="/quarries">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-7 md:grid-cols-2">
            {otherQuarries.map((item) => (
              <Link
                key={item.id}
                to={`/quarries/${item.id}`}
                className="group block overflow-hidden bg-white shadow-[var(--shadow-soft)] transition duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-premium)]"
              >
                <div className="relative">
                  <img className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[300px]" src={item.image} alt={`${item.place} Absolute Black granite quarry`} loading="lazy" decoding="async" />
                </div>
                <div className="p-5 sm:p-7">
                  <h3 className="text-xl font-extrabold text-[var(--color-ink)] sm:text-2xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-text)] sm:text-base sm:leading-8">{item.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold uppercase text-[var(--color-ink)] transition group-hover:text-[var(--color-accent)]">
                    More Details <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <FaqSection />
      {lightboxIndex !== null ? (
        <GalleryLightbox
          items={lightboxItems}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxState({ quarryId: id, imageIndex: null })}
          onMove={(imageIndex) => setLightboxState({ quarryId: id, imageIndex })}
        />
      ) : null}
    </main>
  )
}

export default QuarryDetail
