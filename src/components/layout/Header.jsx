import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/logos/sri-adieseshu-minerals-logo.png'
import { navItems, quarries, site } from '../../data/siteContent'

function scrollToPageTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}

function Logo() {
  return (
    <NavLink to="/" onClick={scrollToPageTop} className="block shrink-0" aria-label="Sri Adiseshu home">
      <img className="w-[205px] sm:w-[235px] lg:w-[276px]" src={logo} alt="Sri Adiseshu Minerals Pvt Ltd" />
    </NavLink>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [quarryDropdownOpen, setQuarryDropdownOpen] = useState(false)
  const location = useLocation()
  const phoneHref = `tel:${site.phone.replace(/\s/g, '')}`
  const closeNavigation = () => {
    setOpen(false)
    setQuarryDropdownOpen(false)
    scrollToPageTop()
  }

  return (
    <header className="sticky top-0 z-50 h-[96px] bg-white lg:h-[120px]">
      <div className="mx-auto flex h-full w-full max-w-[1600px] items-center justify-between px-4 sm:px-8 lg:justify-start lg:px-[42px]">
        <Logo />
        <button
          className="inline-flex size-11 items-center justify-center border border-[#e7e9ee] bg-white text-[#061f33] lg:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav
          className={`absolute left-0 right-0 top-[96px] flex-col bg-white shadow-2xl lg:static lg:ml-[100px] lg:flex lg:flex-row lg:items-center lg:gap-8 lg:bg-transparent lg:shadow-none xl:ml-[150px] xl:gap-10 ${
            open ? 'flex' : 'hidden'
          }`}
        >
          {navItems.map((item) => {
            if (item.path === '/quarries') {
              const isQuarryActive = location.pathname.startsWith('/quarries')

              return (
                <div
                  className="relative border-b border-[var(--color-line)] lg:border-0"
                  key={item.path}
                  onMouseEnter={() => setQuarryDropdownOpen(true)}
                  onMouseLeave={() => setQuarryDropdownOpen(false)}
                >
                  <div
                    className={`flex items-center justify-between gap-2 text-[16px] font-medium text-[var(--color-ink)] transition hover:text-[var(--color-accent)] ${
                      isQuarryActive ? 'text-[var(--color-accent)]' : ''
                    }`}
                  >
                    <NavLink className="px-5 py-4 lg:p-0" to={item.path} onClick={closeNavigation}>
                      {item.label}
                    </NavLink>
                    <button
                      className="grid size-11 place-items-center lg:size-6"
                      type="button"
                      onClick={() => setQuarryDropdownOpen((value) => !value)}
                      aria-label="Toggle quarry links"
                    >
                      <ChevronDown className={`transition ${quarryDropdownOpen ? 'rotate-180' : ''}`} size={16} />
                    </button>
                  </div>
                  <div
                    className={`bg-white lg:absolute lg:left-0 lg:top-full lg:z-50 lg:min-w-[280px] lg:border lg:border-black lg:shadow-[var(--shadow-premium)] ${
                      quarryDropdownOpen ? 'grid' : 'hidden'
                    }`}
                  >
                    {quarries.map((quarry) => (
                      <NavLink
                        className={({ isActive }) =>
                          `border-t border-[var(--color-line)] px-8 py-3 text-sm font-extrabold text-[var(--color-ink)] transition hover:bg-[var(--color-accent)] hover:text-white lg:border-t-0 lg:border-b lg:px-5 lg:py-4 lg:last:border-b-0 ${
                            isActive ? 'bg-[var(--color-accent)] text-white' : ''
                          }`
                        }
                        to={`/quarries/${quarry.id}`}
                        onClick={closeNavigation}
                        key={quarry.id}
                      >
                        {quarry.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )
            }

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeNavigation}
                className={({ isActive }) =>
                  `border-b border-[var(--color-line)] px-5 py-4 text-[16px] font-medium text-[var(--color-ink)] transition hover:text-[var(--color-accent)] lg:border-0 lg:p-0 ${
                    isActive ? 'text-[var(--color-accent)]' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          })}
          <div className="flex flex-col gap-4 border-b border-[var(--color-line)] px-5 py-5 lg:hidden">
            <a className="inline-flex items-center gap-3 text-base font-extrabold text-[var(--color-ink)]" href={phoneHref}>
              <Phone size={18} className="text-[var(--color-accent)]" />
              {site.phone}
            </a>
            <NavLink
              className="premium-hover-button inline-flex min-h-12 items-center justify-center px-6 text-sm font-extrabold uppercase"
              to="/contact"
              onClick={closeNavigation}
            >
              Contact Us
            </NavLink>
          </div>
        </nav>
        <div className="ml-auto hidden items-center gap-5 xl:flex">
          <a className="inline-flex items-center gap-1 text-sm font-extrabold text-[var(--color-ink)] transition hover:text-[var(--color-accent)]" href={phoneHref}>
            <span className="grid size-6 place-items-center text-[var(--color-accent)]">
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
