import { ArrowUpRight, ChevronsRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { aboutPoints, images } from '../../data/siteContent'

function AboutSection({ compact = false }) {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-[0.95fr_1fr] lg:gap-14 xl:gap-24">
        <div
          className="min-h-[24rem] bg-[var(--color-tile)] bg-cover bg-center shadow-[var(--shadow-premium)] lg:min-h-[34rem] xl:min-h-[42rem]"
          style={{ backgroundImage: `url(${compact ? images.serviceSlabs : images.aboutStone})` }}
          role="img"
          aria-label="Absolute Black granite block"
        />
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-sm">
            About Us
          </p>
          <h2 className="max-w-xs text-[2rem] font-bold leading-tight text-[var(--color-ink)] sm:max-w-2xl sm:text-4xl xl:text-5xl">
            Welcome to Sri Adiseshu Minerals Pvt Ltd
          </h2>
          <p className="mt-7 max-w-xs text-base leading-8 text-[var(--color-text)] sm:max-w-3xl sm:text-lg">
            We specialize in sourcing and supplying premium Absolute Black granite from our own quarries located in
            Chamarajanagar - Absolute Black, Khammam - Absolute (Telangana), and Thalavadi - Absolute Black. With years of industry expertise, we take pride in
            delivering high-quality granite blocks and slabs trusted by builders, exporters, and architects.
          </p>
          <ul className="my-8 grid gap-4">
            {aboutPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 font-bold text-[var(--color-ink)]">
                <ChevronsRight className="mt-0.5 shrink-0 text-[var(--color-accent-strong)]" size={20} />
                {point}
              </li>
            ))}
          </ul>
          <Link
            className="premium-hover-button inline-flex min-h-16 items-center justify-center gap-3 px-8 font-extrabold uppercase"
            to="/about"
          >
            Read More <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
