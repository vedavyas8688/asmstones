import { Camera, Mail, MapPin, MessageCircle, Phone, Share2, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/sri-adieseshu-minerals-logo.svg'
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

const socialLinks = [
  { label: 'Facebook', href: '#', icon: Users },
  { label: 'Instagram', href: '#', icon: Camera },
  { label: 'LinkedIn', href: '#', icon: Share2 },
  { label: 'X', href: '#', icon: MessageCircle },
]

function Footer() {
  return (
    <footer className="bg-[var(--color-deep)] text-white">
      <div className="mx-auto grid w-full max-w-[1320px] gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.1fr] lg:py-24">
        <div>
          <Link className="inline-block bg-white px-5 py-4" to="/" aria-label="Sri Adiseshu home">
            <img className="w-[220px]" src={logo} alt="Sri Adiseshu Minerals Pvt Ltd" />
          </Link>
          <p className="mt-7 max-w-md text-[15px] leading-8 text-white/75">
            Premium Absolute Black granite sourced from trusted quarry operations, processed for consistent quality,
            reliable supply, and project-ready delivery.
          </p>
          <div className="mt-7 flex gap-3" aria-label="Social links">
            {socialLinks.map((item) => {
              const Icon = item.icon

              return (
                <a
                  className="grid size-11 place-items-center border border-white/15 text-white/80 transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white"
                  href={item.href}
                  aria-label={item.label}
                  key={item.label}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h2 className="mb-7 text-lg font-extrabold uppercase tracking-wide">Pages</h2>
          <nav className="grid gap-4">
            {navItems.map((item) => (
              <Link className="w-fit text-white/75 transition hover:text-[var(--color-accent)]" to={item.path} key={item.path}>
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
                className="w-fit text-white/75 transition hover:text-[var(--color-accent)]"
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
                className="w-fit text-sm text-white/70 transition hover:text-[var(--color-accent)]"
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
                  className="grid grid-cols-[2.75rem_1fr] gap-4 text-white/75 transition hover:text-white"
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  key={item.label}
                >
                  <span className="grid size-11 place-items-center border border-white/15 text-[var(--color-accent)]">
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
      <div className="border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-3 text-sm font-semibold text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Sri Adiseshu Minerals Pvt Ltd. All rights reserved.</p>
          <p>Absolute Black Granite | Blocks | Slabs | Export Supply</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
