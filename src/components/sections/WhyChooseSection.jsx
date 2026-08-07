import { BadgeCheck, Play, X } from 'lucide-react'
import { useState } from 'react'
import quarryVideo from '../../assets/images/absolute-black-granite-quarry-video.mp4'
import { images, qualityStats, reasons } from '../../data/siteContent'

function WhyChooseSection() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section className="relative min-h-[46rem] overflow-hidden text-white lg:min-h-[54rem]">
      <img className="absolute inset-0 size-full object-cover" src={images.quarryWide} alt="" loading="lazy" decoding="async" aria-hidden="true" />
      <div className="absolute inset-0 bg-black/90" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] gap-12 px-6 py-20 pb-52 lg:grid-cols-[1.05fr_1fr] lg:gap-24 lg:py-28 lg:pb-56">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-white sm:text-sm">Why Choose Us</p>
          <h2 className="max-w-xl text-[2rem] font-bold leading-tight text-white sm:text-4xl xl:text-5xl">
            Many Reasons to Partner With Us
          </h2>
          <div className="mt-12 grid gap-7">
            {qualityStats.map((stat) => (
              <div key={stat.label}>
                <div className="mb-2 flex justify-between gap-4 text-sm font-extrabold uppercase text-white">
                  <strong>{stat.label}</strong>
                  <span>{stat.value}%</span>
                </div>
                <div className="h-2 border border-[var(--color-accent)]">
                  <div className="h-full bg-[var(--color-accent)]" style={{ width: `${stat.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-9 sm:grid-cols-2">
          {reasons.map((reason) => (
            <article className="grid gap-4 sm:grid-cols-[auto_1fr]" key={reason.title}>
              <BadgeCheck className="text-[var(--color-accent-strong)]" size={38} />
              <div>
                <h3 className="mb-3 text-2xl font-extrabold leading-tight text-white">{reason.title}</h3>
                <p className="leading-8 text-white">{reason.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="relative z-20 ml-auto mr-4 -mt-44 w-[min(calc(100%-2rem),860px)] lg:mr-[max(1rem,calc((100vw-1280px)/2))]">
        <img className="h-64 w-full object-cover lg:h-88" src={images.sunsetBlocks} alt="Absolute Black granite quarry blocks at sunset" loading="lazy" decoding="async" />
        <button
          className="absolute bottom-0 left-0 grid size-22 place-items-center bg-[var(--color-accent)] text-white transition hover:bg-[var(--color-accent-strong)]"
          type="button"
          aria-label="Play quarry video"
          onClick={() => setVideoOpen(true)}
        >
          <Play size={28} />
        </button>
      </div>
      {videoOpen && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/80 px-5 py-8">
          <div className="relative w-full max-w-[1080px] bg-black shadow-2xl">
            <button
              className="absolute -top-14 right-0 grid size-11 place-items-center border border-white/25 text-white transition hover:bg-white hover:text-black"
              type="button"
              aria-label="Close quarry video"
              onClick={() => setVideoOpen(false)}
            >
              <X size={22} />
            </button>
            <video
              className="aspect-video w-full bg-black object-cover"
              src={quarryVideo}
              autoPlay
              controls
              muted
              loop
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default WhyChooseSection
