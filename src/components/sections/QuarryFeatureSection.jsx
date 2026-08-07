import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { quarries, quarryFeatureImages } from '../../data/siteContent'

function QuarryFeatureSection() {
  return (
    <section className="bg-white px-6 py-20 lg:py-32">
      <div className="mx-auto mb-9 w-full max-w-[1180px] text-center">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-sm">
          Our Quarries
        </p>
        <h2 className="mx-auto max-w-4xl text-[2rem] font-bold leading-tight text-[var(--color-ink)] sm:text-4xl xl:text-5xl">
          Three Dedicated Absolute Black Granite Sources
        </h2>
        <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[var(--color-text)] sm:text-lg">
          Explore our quarry locations with clear sourcing, consistent material selection, and dependable processing
          support for project-ready granite.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-[1180px] gap-10">
        {quarries.map((quarry, index) => (
          <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14" key={quarry.id}>
            <Link className={`group block overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`} to={`/quarries/${quarry.id}`}>
              <img
                className="aspect-[1.35] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                src={quarryFeatureImages[quarry.id] || quarry.image}
                alt={`${quarry.title} Absolute Black granite quarry`}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                Quarry {quarry.index}
              </p>
              <h3 className="text-3xl font-extrabold leading-tight text-[var(--color-ink)] lg:text-4xl xl:text-5xl">
                {quarry.title}
              </h3>
              <p className="mt-6 text-lg leading-9 text-[var(--color-text)]">{quarry.description}</p>
              <div className="mt-7 grid gap-3 text-sm font-bold uppercase tracking-wide text-[var(--color-muted)] sm:grid-cols-2">
                <span>Material: {quarry.material}</span>
                <span>Finish: {quarry.finish}</span>
                <span>State: {quarry.state}</span>
                <span>Application: {quarry.application}</span>
              </div>
              <Link
                className="premium-hover-button mt-8 inline-flex min-h-14 items-center justify-center gap-3 px-7 font-extrabold uppercase"
                to={`/quarries/${quarry.id}`}
              >
                View Details <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default QuarryFeatureSection
