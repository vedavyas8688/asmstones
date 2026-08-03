import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import FaqSection from '../components/sections/FaqSection'
import { images, quarries } from '../data/siteContent'

const quarryDetailImages = {
  chamarajanagar: [
    images.quarrySunset,
    images.serviceSlabs,
    images.serviceBlocks,
    images.heroQuarry,
    images.quarryDetail,
    images.blockClose,
  ],
  khammam: [images.serviceSlabs],
  thalavadi: [images.heroQuarry],
}

function QuarryDetail() {
  const { id } = useParams()
  const quarry = quarries.find((item) => item.id === id)
  const [sliderState, setSliderState] = useState({ quarryId: id, imageIndex: 0 })
  const sliderImages = quarry ? quarryDetailImages[quarry.id] || [quarry.image] : []
  const activeImage = sliderState.quarryId === id ? sliderState.imageIndex : 0

  useEffect(() => {
    if (sliderImages.length <= 1) return undefined

    const timer = window.setInterval(() => {
      setSliderState((current) => ({
        quarryId: id,
        imageIndex: current.quarryId === id ? (current.imageIndex + 1) % sliderImages.length : 1 % sliderImages.length,
      }))
    }, 4000)

    return () => window.clearInterval(timer)
  }, [id, sliderImages.length])

  if (!quarry) {
    return <Navigate to="/quarries" replace />
  }

  const index = quarries.findIndex((item) => item.id === id)
  const previous = quarries[(index - 1 + quarries.length) % quarries.length]
  const next = quarries[(index + 1) % quarries.length]
  const otherQuarries = quarries.filter((item) => item.id !== quarry.id)

  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-6 py-12 lg:py-16">
        <div className="mb-8 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Our Quarries</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-[var(--color-ink)] md:text-5xl lg:text-6xl">
            {quarry.title}
          </h1>
        </div>
        <section className="relative">
          <div className="relative aspect-[16/10] max-h-[680px] w-full overflow-hidden lg:w-4/5">
            {sliderImages.map((image, imageIndex) => (
              <img
                className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
                  imageIndex === activeImage ? 'opacity-100' : 'opacity-0'
                }`}
                key={image}
                src={image}
                alt={`${quarry.place} quarry view ${imageIndex + 1}`}
                decoding="async"
              />
            ))}
            {sliderImages.length > 1 ? (
              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
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
          </div>
          <div className="absolute bottom-3 left-3 flex gap-1">
            <Link className="grid size-11 place-items-center bg-[var(--color-accent)] text-white transition hover:bg-[var(--color-accent-dark)]" to={`/quarries/${previous.id}`} aria-label="Previous quarry"><ArrowLeft size={20} /></Link>
            <Link className="grid size-11 place-items-center bg-[var(--color-accent)] text-white transition hover:bg-[var(--color-accent-dark)]" to={`/quarries/${next.id}`} aria-label="Next quarry"><ArrowRight size={20} /></Link>
          </div>
          <aside className="mt-5 bg-white p-7 shadow-[var(--shadow-premium)] md:absolute md:-bottom-16 md:right-0 md:mt-0 md:w-[340px] lg:right-10">
            <p className="mb-5 text-sm font-bold uppercase text-[var(--color-muted)]">Location<br /><strong className="mt-2 block text-base normal-case text-[var(--color-text)]">{quarry.place}</strong></p>
            <p className="mb-5 text-sm font-bold uppercase text-[var(--color-muted)]">Material Type<br /><strong className="mt-2 block text-base normal-case text-[var(--color-text)]">{quarry.material}</strong></p>
            <p className="mb-5 text-sm font-bold uppercase text-[var(--color-muted)]">Application<br /><strong className="mt-2 block text-base normal-case text-[var(--color-text)]">{quarry.application}</strong></p>
            <p className="text-sm font-bold uppercase text-[var(--color-muted)]">Finish<br /><strong className="mt-2 block text-base normal-case text-[var(--color-text)]">{quarry.finish}</strong></p>
          </aside>
        </section>
        <section className="max-w-[80%] pt-8 md:pt-20 max-lg:max-w-full">
          <h2 className="text-3xl font-extrabold text-[var(--color-ink)] md:text-4xl">Quarry Overview</h2>
          <p className="mt-5 text-lg leading-9 text-[var(--color-text)]">{quarry.description}</p>
          <p className="mt-5 text-lg leading-9 text-[var(--color-text)]">
            The quarry is supported by inspection-led extraction, careful sizing, and reliable dispatch planning. Our
            process focuses on material consistency, finishing quality, and supply dependability for premium granite
            requirements.
          </p>
          <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-9 text-[var(--color-text)]">
            <li><strong>Deep Jet-Black Color & Uniformity:</strong> Known for rich black tone and consistent appearance.</li>
            <li><strong>High Strength & Durability:</strong> Suitable for demanding construction and architectural use.</li>
            <li><strong>Minimal Variation & Fine Grain:</strong> Supports clean processing and refined finishes.</li>
            <li><strong>Precision Processing & Quality Control:</strong> Every block and slab is inspected before dispatch.</li>
          </ul>
        </section>
        <section className="mt-12">
          <div className="mb-7 flex items-end justify-between gap-5 max-sm:flex-col max-sm:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">Explore More</p>
              <h2 className="mt-2 text-3xl font-extrabold text-[var(--color-ink)] md:text-4xl">Remaining Quarries</h2>
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
                  <img className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-105" src={item.image} alt={`${item.place} quarry`} decoding="async" />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-extrabold text-[var(--color-ink)]">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-[var(--color-text)]">{item.description}</p>
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
    </main>
  )
}

export default QuarryDetail
