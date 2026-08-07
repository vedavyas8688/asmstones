import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { useState } from 'react'

function GalleryLightbox({ items, activeIndex, onClose, onMove }) {
  const [touchStart, setTouchStart] = useState(null)
  const activeItem = items[activeIndex]

  if (!activeItem) {
    return null
  }

  const showPrevious = () => onMove((activeIndex - 1 + items.length) % items.length)
  const showNext = () => onMove((activeIndex + 1) % items.length)

  const handleTouchEnd = (event) => {
    if (touchStart === null) return

    const delta = touchStart - event.changedTouches[0].clientX
    if (Math.abs(delta) > 45) {
      if (delta > 0) {
        showNext()
      } else {
        showPrevious()
      }
    }
    setTouchStart(null)
  }

  return (
    <div className="fixed inset-0 z-[90] grid place-items-center bg-black/90 px-4 py-6" role="dialog" aria-modal="true">
      <button
        className="absolute right-4 top-4 z-20 grid size-11 place-items-center bg-[var(--color-accent)] text-white transition hover:bg-white hover:text-black"
        type="button"
        aria-label="Close gallery image"
        onClick={onClose}
      >
        <X size={22} />
      </button>

      {items.length > 1 ? (
        <button
          className="absolute left-4 top-1/2 z-20 hidden size-12 -translate-y-1/2 place-items-center bg-[var(--color-accent)] text-white transition hover:bg-white hover:text-black md:grid"
          type="button"
          aria-label="Previous gallery image"
          onClick={showPrevious}
        >
          <ArrowLeft size={24} />
        </button>
      ) : null}

      <figure
        className="w-full max-w-[1180px]"
        onTouchStart={(event) => setTouchStart(event.changedTouches[0].clientX)}
        onTouchEnd={handleTouchEnd}
      >
        <img
          className="max-h-[82svh] w-full object-contain"
          src={activeItem.image}
          alt={activeItem.alt}
          decoding="async"
        />
      </figure>

      {items.length > 1 ? (
        <button
          className="absolute right-4 top-1/2 z-20 hidden size-12 -translate-y-1/2 place-items-center bg-[var(--color-accent)] text-white transition hover:bg-white hover:text-black md:grid"
          type="button"
          aria-label="Next gallery image"
          onClick={showNext}
        >
          <ArrowRight size={24} />
        </button>
      ) : null}
    </div>
  )
}

export default GalleryLightbox
