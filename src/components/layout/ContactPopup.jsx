import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import ContactForm from '../forms/ContactForm'

function ContactPopup() {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    if (isDismissed || pathname === '/contact') {
      return undefined
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true)
    }, 10000)

    return () => window.clearTimeout(timer)
  }, [isDismissed, pathname])

  const closePopup = () => {
    setIsOpen(false)
    setIsDismissed(true)
  }

  if (!isOpen) {
    return null
  }
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-black/70 px-4 py-4" role="dialog" aria-modal="true" aria-labelledby="contact-popup-title">
      <div className="relative max-h-[92svh] w-full max-w-[600px] overflow-y-auto bg-white p-5 shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:p-6 lg:max-w-[580px] lg:p-5">
        <button
          className="absolute right-4 top-4 grid size-10 place-items-center bg-black text-white transition hover:bg-[var(--color-accent)] lg:size-9"
          type="button"
          onClick={closePopup}
          aria-label="Close contact form"
        >
          <X size={20} />
        </button>

        <div className="pr-12">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-[var(--color-accent)]">Enquiry</p>
          <h2 id="contact-popup-title" className="text-2xl font-extrabold leading-tight text-black sm:text-3xl lg:text-[1.7rem]">
            Contact Us
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-text)]">
            Share your granite requirement and our team will review the material, finish, quantity, and delivery details.
          </p>
        </div>

        <div className="mt-4 border-2 border-black p-4 sm:p-5 lg:p-4">
          <ContactForm onSubmit={closePopup} compact />
        </div>
      </div>
    </div>
  )
}

export default ContactPopup
