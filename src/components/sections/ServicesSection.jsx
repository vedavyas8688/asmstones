import { ArrowLeft, ArrowRight, Box, Boxes, PackageCheck, Ruler, Settings, Truck } from 'lucide-react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../../data/siteContent'

const serviceIcons = {
  'Granite Block Supply': Box,
  'Precision Cut Slabs': Ruler,
  'Custom Size Processing': Settings,
  'Bulk Order Fulfillment': Boxes,
  'Export-Grade Packaging & Delivery': PackageCheck,
}

function ServicesSection({ limit = 3, showIntro = true }) {
  const [responsiveLimit, setResponsiveLimit] = useState(() => {
    if (typeof window === 'undefined') return limit
    if (window.innerWidth < 768) return 1
    if (window.innerWidth < 1024) return 2
    return limit
  })
  const [startIndex, setStartIndex] = useState(0)
  const visibleCount = Math.min(responsiveLimit, limit, services.length)

  const moveServices = useCallback((direction) => {
    setStartIndex((current) => (current + direction + services.length) % services.length)
  }, [])

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setResponsiveLimit(1)
        return
      }

      if (window.innerWidth < 1024) {
        setResponsiveLimit(2)
        return
      }

      setResponsiveLimit(limit)
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)

    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [limit])

  useEffect(() => {
    if (services.length <= visibleCount) return undefined

    const intervalId = window.setInterval(() => {
      moveServices(1)
    }, 3000)

    return () => window.clearInterval(intervalId)
  }, [moveServices, visibleCount])

  const visibleServices = useMemo(
    () =>
      Array.from({ length: visibleCount }, (_, index) => {
        const serviceIndex = (startIndex + index) % services.length
        return { ...services[serviceIndex], serviceIndex }
      }),
    [startIndex, visibleCount],
  )

  return (
    <section className="bg-white py-20 lg:py-32">
      {showIntro && (
        <div className="mx-auto mb-8 w-full max-w-[1180px] px-6 text-center lg:mb-10">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-sm">
            Our Services
          </p>
          <h2 className="mx-auto text-[2rem] font-bold leading-tight text-[var(--color-ink)] sm:text-4xl xl:text-5xl">
            Premium Granite Solutions You Can Trust
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[var(--color-text)] sm:text-lg">
            We specialize in supplying high-quality Absolute Black granite directly from our quarries. Whether you need
            bulk orders or customized sizes, our team ensures timely delivery and consistent quality.
          </p>
        </div>
      )}
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-7 px-5 sm:px-6 xl:grid-cols-[4.2rem_1fr_4.2rem]">
        <button
          className="hidden size-[4.2rem] place-items-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-accent)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white xl:grid"
          type="button"
          aria-label="Previous services"
          onClick={() => moveServices(-1)}
        >
          <ArrowLeft size={22} />
        </button>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visibleServices.map((service) => {
            const Icon = serviceIcons[service.title] || Truck

            return (
            <article
              className="group flex min-h-[500px] flex-col transition duration-500 ease-out sm:min-h-[540px] xl:min-h-[560px]"
              key={`${service.title}-${service.serviceIndex}`}
            >
              <div
                className="h-[240px] shrink-0 overflow-hidden bg-[var(--color-line)] bg-cover bg-center transition duration-700 ease-out group-hover:scale-[1.025] sm:h-[280px] xl:h-[312px]"
                style={{ backgroundImage: `url(${service.image})` }}
                role="img"
                aria-label={service.title}
              />
              <div className="relative ml-0 -mt-12 flex min-h-[260px] flex-1 flex-col bg-white px-6 pb-8 pt-[76px] shadow-[var(--shadow-premium)] transition duration-500 ease-out group-hover:-translate-y-1 sm:-mt-14 sm:ml-[30px] sm:px-8 sm:pb-9 sm:pt-[84px]">
                <span className="absolute -top-9 left-6 grid size-[72px] place-items-center border border-[var(--color-line)] bg-white text-[var(--color-accent-strong)] shadow-sm transition duration-500 ease-out group-hover:border-[var(--color-accent-strong)] group-hover:bg-[var(--color-accent-strong)] group-hover:text-white sm:-top-10 sm:left-8 sm:size-20">
                  <Icon size={30} strokeWidth={1.8} className="sm:size-[34px]" />
                </span>
                <h3 className="mb-4 min-h-[58px] text-[1.45rem] font-extrabold leading-tight text-[var(--color-ink)] sm:min-h-[64px] sm:text-2xl">
                  {service.title}
                </h3>
                <p className="min-h-[96px] leading-8 text-[var(--color-text)]">{service.description}</p>
                <Link to="/services" className="mt-auto inline-flex items-center gap-2 pt-6 font-extrabold uppercase text-[var(--color-ink)] transition hover:-translate-y-0.5">
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </article>
            )
          })}
        </div>
        <button
          className="hidden size-[4.2rem] place-items-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-accent)] transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white xl:grid"
          type="button"
          aria-label="Next services"
          onClick={() => moveServices(1)}
        >
          <ArrowRight size={22} />
        </button>
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-[1440px] justify-center gap-4 px-6 xl:hidden">
        <button
          className="grid size-12 place-items-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-accent)]"
          type="button"
          aria-label="Previous services"
          onClick={() => moveServices(-1)}
        >
          <ArrowLeft size={20} />
        </button>
        <button
          className="grid size-12 place-items-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-accent)]"
          type="button"
          aria-label="Next services"
          onClick={() => moveServices(1)}
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  )
}

export default ServicesSection
