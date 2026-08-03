import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import FaqSection from '../components/sections/FaqSection'
import PageHero from '../components/sections/PageHero'
import { contactLocations, images, site } from '../data/siteContent'

function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
  }

  return (
    <main>
      <PageHero title="Contact Us" image={images.quarryDetail} />
      <section className="bg-white px-6 py-12 lg:py-16">
        <div className="mx-auto w-full max-w-[1120px]">
          <div className="mb-10 grid gap-8 md:grid-cols-2 lg:mb-12">
            <a
              className="mx-auto inline-grid grid-cols-[4rem_1fr] items-center gap-4 text-[var(--color-ink)]"
              href={`mailto:${site.email}`}
            >
              <Mail size={42} strokeWidth={2.6} />
              <span>
                <span className="block text-3xl font-semibold leading-tight lg:text-4xl">Email</span>
                <strong className="mt-2 block text-sm font-medium text-[var(--color-text)]">{site.email}</strong>
              </span>
            </a>
            <a
              className="mx-auto inline-grid grid-cols-[4rem_1fr] items-center gap-4 text-[var(--color-ink)]"
              href={`tel:${site.phone.replace(/\s/g, '')}`}
            >
              <Phone size={42} strokeWidth={2.6} />
              <span>
                <span className="block text-3xl font-semibold leading-tight lg:text-4xl">Phone Number</span>
                <strong className="mt-2 block text-sm font-medium text-[var(--color-text)]">{site.phone}</strong>
              </span>
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {contactLocations.map((location) => (
              <article key={location.name}>
                <iframe
                  className="aspect-[1.45] w-full border border-[var(--color-line)]"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`}
                  title={`${location.name} map`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <strong className="mx-auto mt-5 block max-w-sm text-center text-xl font-extrabold leading-8 text-[var(--color-ink)]">
                  {location.name}
                </strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12 lg:py-16">
        <div className="mx-auto w-full max-w-[1120px]">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-10 text-4xl font-semibold leading-tight text-[#050711] lg:text-5xl">Send us a message</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <input className="min-h-16 border border-[var(--color-accent)] px-6 text-base outline-none transition focus:border-[var(--color-accent-dark)]" name="name" placeholder="Name" required />
              <input className="min-h-16 border border-[var(--color-accent)] px-6 text-base outline-none transition focus:border-[var(--color-accent-dark)]" name="email" type="email" placeholder="Email" required />
              <input className="min-h-16 border border-[var(--color-accent)] px-6 text-base outline-none transition focus:border-[var(--color-accent-dark)]" name="phone" placeholder="Phone" />
            </div>
            <textarea className="mt-7 w-full resize-y border border-[var(--color-accent)] px-6 py-5 text-base outline-none transition focus:border-[var(--color-accent-dark)]" name="message" placeholder="Your text here..." rows="8" required />
            <button type="submit" className="mt-8 inline-flex items-center gap-3 border-b border-black pb-3 text-xl font-medium text-black">
              Submit Now <ArrowUpRight size={15} />
            </button>
          </form>
        </div>
      </section>

      <FaqSection />
    </main>
  )
}

export default ContactUs
