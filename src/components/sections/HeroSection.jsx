import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import asmLogo from '../../assets/logos/asmstones-logo-1.webp'
import { images } from '../../data/siteContent'

function HeroSection() {
  return (
    <section
      className="relative min-h-[600px] overflow-hidden bg-cover bg-center text-white lg:h-[calc(100svh-104px)] lg:min-h-[610px] lg:bg-[position:center_48%]"
      style={{ backgroundImage: `url(${images.sunsetBlocks})` }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pt-[118px] pb-12 sm:px-8 sm:pt-[150px] lg:px-16 lg:pt-[160px] xl:px-[122px] xl:pt-[172px]">
        <img
          className="absolute left-5 top-[42px] size-16 object-contain sm:left-8 sm:top-[54px] sm:size-20 lg:left-16 lg:top-[78px] lg:size-20 xl:left-[122px] xl:top-[82px] xl:size-20"
          src={asmLogo}
          alt="Sri Adiseshu Minerals logo"
          decoding="async"
        />
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-white sm:text-sm sm:text-[var(--color-accent)] lg:mb-[28px] lg:text-[14px] lg:tracking-[0.38em]">
          Sri Adiseshu Minerals Pvt Ltd
        </p>
        <h1 className="max-w-[18rem] text-[2.15rem] font-extrabold leading-[1.14] text-white sm:max-w-3xl sm:text-5xl lg:max-w-[700px] lg:text-[46px] xl:max-w-[740px] xl:text-[50px]">
          Premium Absolute Black Granite, Delivered with Excellence
        </h1>
        <p className="mt-8 max-w-[20rem] text-[0.92rem] font-semibold leading-7 text-white sm:max-w-2xl sm:text-base lg:mt-8 lg:max-w-[700px] lg:text-[15px] lg:leading-6 xl:max-w-[740px]">
          Delivering world-class Absolute Black granite with unmatched quality and consistency. Trusted by builders,
          exporters, and architects across industries.
        </p>
        <Link
          className="premium-hover-button mt-9 inline-flex min-h-16 w-full items-center justify-center gap-3 px-8 text-[14px] font-extrabold uppercase sm:w-[296px] lg:mt-9 lg:min-h-[60px]"
          to="/quarries"
        >
          Explore Our Quarries <ArrowDown size={18} />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
