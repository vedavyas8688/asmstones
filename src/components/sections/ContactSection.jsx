import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '../../data/siteContent'

function ContactSection() {
  return (
    <section className="grid gap-8 bg-black px-6 py-16 text-white lg:grid-cols-[0.8fr_1.2fr] lg:px-[max(1.5rem,calc((100vw-1280px)/2))] lg:py-24">
      <div>
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-sm">Contact</p>
        <h2 className="text-[2rem] font-bold leading-tight text-white sm:text-4xl xl:text-5xl">Let us discuss your granite requirements.</h2>
      </div>
      <div className="grid content-center gap-6 font-bold text-white">
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
          {site.locations.map((location) => (
            <a className="inline-flex items-center gap-2 transition hover:text-[var(--color-accent)]" href={location.href} target="_blank" rel="noreferrer" key={location.label}>
              <MapPin className="text-[var(--color-accent)]" size={18} /> {location.label}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
          <Link className="premium-hover-button inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-extrabold uppercase" to="/contact">Send Enquiry <ArrowUpRight size={18} /></Link>
          <a className="inline-flex items-center gap-2 transition hover:text-[var(--color-accent)]" href={`mailto:${site.email}`}><Mail className="text-[var(--color-accent)]" size={18} /> {site.email}</a>
          <a className="inline-flex items-center gap-2 transition hover:text-[var(--color-accent)]" href={`tel:${site.phone.replace(/\s/g, '')}`}><Phone className="text-[var(--color-accent)]" size={18} /> {site.phone}</a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
