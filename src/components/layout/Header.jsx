import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/sri-adieseshu-minerals-logo.svg'
import { navItems, site } from '../../data/siteContent'

function scrollToPageTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

function Logo() {
  return (
    <NavLink to="/" onClick={scrollToPageTop} className="block shrink-0" aria-label="Sri Adiseshu home">
      <img className="w-[190px] sm:w-[218px] lg:w-[256px]" src={logo} alt="Sri Adiseshu Minerals Pvt Ltd" />
    </NavLink>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const phoneHref = `tel:${site.phone.replace(/\s/g, '')}`

  return (
    <header className="sticky top-0 z-50 h-[82px] bg-white lg:h-[120px]">
      <div className="mx-auto flex h-full w-full max-w-[1600px] items-center justify-between px-4 sm:px-8 lg:justify-start lg:px-[42px]">
        <Logo />
        <button
          className="inline-flex size-11 items-center justify-center border border-[var(--color-line)] bg-white text-[var(--color-ink)] lg:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          className={`absolute left-0 right-0 top-[82px] flex-col bg-white shadow-2xl lg:static lg:ml-[100px] lg:flex lg:flex-row lg:items-center lg:gap-8 lg:bg-transparent lg:shadow-none xl:ml-[150px] xl:gap-10 ${
            open ? 'flex' : 'hidden'
          }`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => {
                setOpen(false)
                scrollToPageTop()
              }}
              className={({ isActive }) =>
                `border-b border-[var(--color-line)] px-5 py-4 text-[16px] font-medium text-[#050711] transition hover:text-[var(--color-accent)] lg:border-0 lg:p-0 ${
                  isActive ? 'text-[var(--color-accent)]' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="flex flex-col gap-4 border-b border-[var(--color-line)] px-5 py-5 lg:hidden">
            <a className="inline-flex items-center gap-3 text-base font-extrabold text-[var(--color-ink)]" href={phoneHref}>
              <Phone size={18} className="text-[var(--color-accent)]" />
              {site.phone}
            </a>
            <NavLink
              className="premium-hover-button inline-flex min-h-12 items-center justify-center px-6 text-sm font-extrabold uppercase"
              to="/contact"
              onClick={() => {
                setOpen(false)
                scrollToPageTop()
              }}
            >
              Contact Us
            </NavLink>
          </div>
        </nav>
        <div className="ml-auto hidden items-center gap-5 xl:flex">
          <a className="inline-flex items-center gap-3 text-sm font-extrabold text-[var(--color-ink)] transition hover:text-[var(--color-accent)]" href={phoneHref}>
            <span className="grid size-11 place-items-center border border-[var(--color-line)] text-[var(--color-accent)]">
              <Phone size={18} />
            </span>
            {site.phone}
          </a>
          <NavLink
            className="premium-hover-button inline-flex min-h-14 items-center justify-center px-7 text-sm font-extrabold uppercase"
            to="/contact"
            onClick={scrollToPageTop}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
