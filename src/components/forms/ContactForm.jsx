import { ArrowUpRight } from 'lucide-react'
import { quarries } from '../../data/siteContent'

function ContactForm({ onSubmit, buttonLabel = 'Contact Us', compact = false }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    onSubmit?.()
  }

  return (
    <form onSubmit={handleSubmit} className={`grid ${compact ? 'gap-3' : 'gap-7'}`}>
      <label className={`grid text-black ${compact ? 'gap-2 text-sm' : 'gap-3 text-lg'}`}>
        Full Name
        <input className={`${compact ? 'h-7' : 'h-10'} border-0 border-b-2 border-black bg-transparent outline-none`} name="name" required />
      </label>
      <label className={`grid text-black ${compact ? 'gap-2 text-sm' : 'gap-3 text-lg'}`}>
        E-mail
        <input className={`${compact ? 'h-7' : 'h-10'} border-0 border-b-2 border-black bg-transparent outline-none`} name="email" type="email" required />
      </label>
      <label className={`grid text-black ${compact ? 'gap-2 text-sm' : 'gap-3 text-lg'}`}>
        Phone Number
        <input className={`${compact ? 'h-7' : 'h-10'} border-0 border-b-2 border-black bg-transparent outline-none`} name="phone" type="tel" required />
      </label>
      <label className={`grid text-black ${compact ? 'gap-2 text-sm' : 'gap-3 text-lg'}`}>
        Quarry / Stone
        <select className={`${compact ? 'h-7' : 'h-10'} border-0 border-b-2 border-black bg-transparent outline-none`} name="quarry" defaultValue="" required>
          <option value="" disabled>
            Select quarry
          </option>
          {quarries.map((quarry) => (
            <option value={quarry.title} key={quarry.id}>
              {quarry.title}
            </option>
          ))}
        </select>
      </label>
      <label className={`grid text-black ${compact ? 'gap-2 text-sm' : 'gap-3 text-lg'}`}>
        Message
        <textarea className={`${compact ? 'min-h-14' : 'min-h-20'} resize-y border-0 border-b-2 border-black bg-transparent outline-none`} name="message" required />
      </label>
      <button
        className={`${compact ? 'mt-1 min-h-10 text-sm' : 'mt-4 min-h-12 text-lg'} inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-8 font-semibold text-white transition hover:bg-black`}
        type="submit"
      >
        {buttonLabel} <ArrowUpRight size={18} />
      </button>
    </form>
  )
}

export default ContactForm
