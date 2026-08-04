import { Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { site } from '../../data/siteContent'

function FloatingContact() {
  const cleanPhone = site.phone.replace(/\D/g, '')
  const internationalPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 sm:bottom-7 sm:right-7">
      <a
        className="grid size-14 place-items-center rounded-full bg-[var(--color-accent)] text-white shadow-[0_16px_34px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:bg-black"
        href={`https://wa.me/${internationalPhone}`}
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp size={28} />
      </a>
      <a
        className="grid size-14 place-items-center rounded-full bg-[var(--color-accent)] text-white shadow-[0_16px_34px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:bg-[var(--color-ink)]"
        href={`tel:${cleanPhone}`}
        aria-label="Call Sri Adiseshu Minerals"
      >
        <Phone size={24} />
      </a>
    </div>
  )
}

export default FloatingContact
