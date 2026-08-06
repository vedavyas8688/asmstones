import { Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '../components/forms/ContactForm'
import FaqSection from '../components/sections/FaqSection'
import { contactLocations, images, site } from '../data/siteContent'

function ContactUs() {
  return (
    <main className="bg-white">
      <section className="px-6 py-12 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-14">
          <img
            className="aspect-[0.86/1] w-full object-cover shadow-sm max-lg:max-h-[520px]"
            src={images.khammamBlackGraniteDisplay}
            alt="ASM granite quarry blocks"
            decoding="async"
          />

          <div>
            <h1 className="text-[3.4rem] font-extrabold leading-none text-black sm:text-[5rem] lg:text-[6rem]">
              Contact Us
            </h1>

            <div className="mt-10 grid gap-10 border-2 border-black p-7 sm:p-10 lg:grid-cols-[1fr_0.78fr] lg:p-12">
              <ContactForm />

              <aside className="grid content-start gap-8 text-black">
                <div>
                  <h2 className="mb-3 text-2xl font-semibold">Contact</h2>
                  <a className="flex items-center gap-3 text-lg text-[var(--color-text)] transition hover:text-black" href={`mailto:${site.email}`}>
                    <Mail size={20} /> {site.email}
                  </a>
                  <a className="mt-3 flex items-center gap-3 text-lg text-[var(--color-text)] transition hover:text-black" href={`tel:${site.phone.replace(/\D/g, '')}`}>
                    <Phone size={20} /> {site.phone}
                  </a>
                </div>

                <div>
                  <h2 className="mb-3 text-2xl font-semibold">Based in</h2>
                  <div className="grid gap-3">
                    {contactLocations.map((location) => (
                      <a
                        className="flex items-start gap-3 text-base leading-7 text-[var(--color-text)] transition hover:text-black"
                        href={`https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}`}
                        target="_blank"
                        rel="noreferrer"
                        key={location.name}
                      >
                        <MapPin className="mt-1 shrink-0" size={18} />
                        {location.name}
                      </a>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
    </main>
  )
}

export default ContactUs
