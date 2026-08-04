import { Phone } from 'lucide-react'
import { site } from '../../data/siteContent'

function WhatsAppIcon() {
  return (
    <svg className="size-6" viewBox="0 0 32 32" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.04 4C9.42 4 4.03 9.39 4.03 16c0 2.12.56 4.18 1.62 6L4 28l6.16-1.62A11.9 11.9 0 0 0 16.04 28C22.66 28 28 22.61 28 16S22.66 4 16.04 4Zm0 21.82c-1.88 0-3.72-.5-5.33-1.45l-.38-.22-3.65.96.98-3.56-.25-.4A9.78 9.78 0 0 1 6.21 16c0-5.41 4.41-9.82 9.83-9.82 5.4 0 9.78 4.41 9.78 9.82s-4.38 9.82-9.78 9.82Zm5.38-7.34c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z"
      />
    </svg>
  )
}

function FloatingContact() {
  const cleanPhone = site.phone.replace(/\D/g, '')
  const internationalPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 sm:bottom-7 sm:right-7">
      <a
        className="grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_16px_34px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:bg-[#1ebe5d]"
        href={`https://wa.me/${internationalPhone}`}
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon />
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
