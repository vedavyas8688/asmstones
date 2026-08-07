import { Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { site } from '../../data/siteContent'

function FloatingContact() {
  const cleanPhone = site.phone.replace(/\D/g, '')
  const internationalPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`

  return (
    <div className="fixed bottom-4 right-1 z-50 flex flex-col gap-3 xl:bottom-7 xl:right-7">
      <a
        className="grid size-10 place-items-center rounded-full bg-[var(--color-accent)] text-white shadow-[0_16px_34px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:bg-black xl:size-14"
        href={`https://wa.me/${internationalPhone}`}
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp className="size-5 xl:size-7" />
      </a>
      <a
        className="grid size-10 place-items-center rounded-full bg-[var(--color-accent)] text-white shadow-[0_16px_34px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:bg-[var(--color-ink)] xl:size-14"
        href={`tel:${cleanPhone}`}
        aria-label="Call Sri Adiseshu Minerals"
      >
        <Phone className="size-4 xl:size-6" />
      </a>
    </div>
  )
}

export default FloatingContact
