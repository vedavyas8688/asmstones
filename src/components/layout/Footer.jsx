import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logos/sri-adieseshu-minerals-logo.png'
import { navItems, quarries, services, site } from '../../data/siteContent'

const contactLinks = [
  ...site.locations.map((location) => ({
    ...location,
    icon: MapPin,
    external: true,
  })),
  {
    label: site.phone,
    href: `tel:${site.phone.replace(/\s/g, '')}`,
    icon: Phone,
  },
  {
    label: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
]

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.1fr] lg:py-24">
        <div>
          <Link className="inline-block bg-white px-5 py-4" to="/" aria-label="Sri Adiseshu home">
            <img className="w-[220px]" src={logo} alt="Sri Adiseshu Minerals Pvt Ltd" loading="lazy" decoding="async" />
          </Link>
          <p className="mt-7 max-w-md text-[15px] leading-8 text-white">
            Premium Absolute Black granite sourced from trusted quarry operations, processed for consistent quality,
            reliable supply, and project-ready delivery.
          </p>
        </div>

        <div>
          <h2 className="mb-7 text-lg font-extrabold uppercase tracking-wide">Pages</h2>
          <nav className="grid gap-4">
            {navItems.map((item) => (
              <Link className="w-fit text-white transition hover:text-[var(--color-accent)]" to={item.path} key={item.path}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="mb-7 text-lg font-extrabold uppercase tracking-wide">Quarries</h2>
          <nav className="grid gap-4">
            {quarries.map((quarry) => (
              <Link
                className="w-fit text-white transition hover:text-[var(--color-accent)]"
                to={`/quarries/${quarry.id}`}
                key={quarry.id}
              >
                {quarry.title}
              </Link>
            ))}
          </nav>
          <h2 className="mb-5 mt-10 text-lg font-extrabold uppercase tracking-wide">Services</h2>
          <div className="grid gap-3">
            {services.slice(0, 4).map((service, index) => (
              <Link
                className="w-fit text-sm text-white transition hover:text-[var(--color-accent)]"
                to="/services"
                key={`${service.title}-${index}`}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-7 text-lg font-extrabold uppercase tracking-wide">Contact</h2>
          <div className="grid gap-5">
            {contactLinks.map((item) => {
              const Icon = item.icon

              return (
                <a
                  className="grid grid-cols-[2.75rem_1fr] gap-4 text-white transition hover:text-[var(--color-accent)]"
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  key={item.label}
                >
                  <span className="grid size-11 place-items-center border border-[var(--color-accent)] bg-[var(--color-accent)] text-white">
                    <Icon size={18} />
                  </span>
                  <span className="pt-2 text-sm font-semibold leading-7">{item.label}</span>
                </a>
              )
            })}
          </div>
          <Link
            className="premium-hover-button mt-8 inline-flex min-h-14 items-center justify-center px-7 text-sm font-extrabold uppercase"
            to="/contact"
          >
            Send Enquiry
          </Link>
        </div>
      </div>
      <div className="border-t border-white px-6 py-6">
        <div className="mx-auto w-full max-w-[1320px] text-center text-sm font-semibold text-white">
          <p>
            Copyright &copy; 2026 Sri Adiseshu Minerals Pvt Ltd. All Rights Reserved. Designed by{' '}
            <a
              className="text-white underline underline-offset-4 transition hover:text-[var(--color-accent)]"
              href="https://hirolainfotech.com/"
              target="_blank"
              rel="noreferrer"
            >
              Hirola InfoTech Solutions Pvt Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
