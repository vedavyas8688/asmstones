import { ArrowRight, Check, Gem, Handshake, PackageCheck, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/sections/PageHero'
import { aboutPoints, images } from '../data/siteContent'

const quarryAdvantages = [
  {
    title: 'Own Quarry Strength',
    description: 'Our direct quarry presence helps us maintain better control over material availability and block selection.',
    icon: Gem,
  },
  {
    title: 'Consistent Material Focus',
    description: 'We focus on Absolute Black granite with careful attention to tone, grain, structure, and finish suitability.',
    icon: ShieldCheck,
  },
  {
    title: 'Long-Term Supply Partner',
    description: 'Builders, exporters, and project teams can rely on steady coordination for repeat and bulk requirements.',
    icon: Handshake,
  },
]

const commitments = [
  'Consistent Absolute Black granite selection',
  'Custom block and slab sizing support',
  'Reliable coordination from quarry to delivery',
  'Export-ready packaging and dispatch planning',
]

function About() {
  return (
    <main>
      <PageHero title="About Us" image={images.quarryWide} />
      <section className="bg-white px-6 py-20 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
          <img className="aspect-[1.42/1] w-full max-w-[620px] justify-self-end object-cover" src={images.serviceSlabs} alt="Premium granite block in warehouse" decoding="async" />
          <div>
            <h2 className="max-w-xs text-[2rem] font-bold leading-tight text-[var(--color-ink)] sm:max-w-2xl sm:text-5xl">
              Providing Premium Granite Solutions
            </h2>
            <p className="mt-7 max-w-xs text-base leading-8 text-[var(--color-text)] sm:max-w-3xl sm:text-lg">
              Our company specializes in sourcing and supplying high-quality Absolute Black granite from our own
              quarries in Chamarajanagar, Khammam, and Thalavadi. With years of industry expertise, we deliver
              consistent quality, precision processing, and reliable supply for projects of all scales.
            </p>
            <ul className="my-8 grid gap-4 text-sm">
              {aboutPoints.slice(0, 3).map((point) => (
                <li className="flex items-center gap-3 text-[var(--color-ink)]" key={point}>
                  <Check className="text-[var(--color-accent-strong)]" size={15} /> {point}
                </li>
              ))}
            </ul>
            <Link className="premium-hover-button inline-flex min-h-14 items-center justify-center gap-3 px-7 font-extrabold uppercase" to="/services">
              Explore More <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1180px]">
          <div className="mb-8 max-w-3xl">
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-sm">
              Own Quarry Advantage
            </p>
            <h2 className="text-[2rem] font-extrabold leading-tight text-[var(--color-ink)] sm:text-5xl">
              Built around dependable Absolute Black granite supply
            </h2>
            <p className="mt-6 text-lg leading-9 text-[var(--color-text)]">
              Sri Adiseshu Minerals is not a generic stone trading brand. Our strength is quarry-backed sourcing,
              focused material selection, and dependable supply for customers who need consistency at scale.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {quarryAdvantages.map((item, index) => {
              const Icon = item.icon

              return (
                <article className="border border-[var(--color-line)] bg-white p-8 shadow-sm" key={item.title}>
                  <div className="mb-8 flex items-center justify-between">
                    <span className="grid size-16 place-items-center bg-[var(--color-accent)] text-white">
                      <Icon size={30} strokeWidth={1.8} />
                    </span>
                    <span className="text-5xl font-extrabold text-[var(--color-line)]">0{index + 1}</span>
                  </div>
                  <h3 className="mb-4 text-2xl font-extrabold text-[var(--color-ink)]">{item.title}</h3>
                  <p className="leading-8 text-[var(--color-text)]">{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1180px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-sm">
              Quality Promise
            </p>
            <h2 className="text-[2rem] font-extrabold leading-tight text-[var(--color-ink)] sm:text-5xl">
              Built for dependable granite supply
            </h2>
            <p className="mt-7 text-lg leading-9 text-[var(--color-text)]">
              Our focus is simple: deliver granite that is consistent, accurately processed, and ready for real project
              demands. Every order is handled with practical planning from material selection to dispatch.
            </p>
            <div className="mt-8 grid gap-4">
              {commitments.map((item) => (
                <div className="flex items-center gap-4 border-b border-[var(--color-line)] pb-4 font-bold text-[var(--color-ink)]" key={item}>
                  <PackageCheck className="text-[var(--color-accent-strong)]" size={22} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <img className="aspect-[1.25] w-full object-cover shadow-[var(--shadow-premium)]" src={images.blockClose} alt="Absolute Black granite block quality" decoding="async" />
        </div>
      </section>
    </main>
  )
}

export default About
