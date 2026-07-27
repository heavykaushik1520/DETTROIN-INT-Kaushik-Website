import { Link, useLocation } from 'react-router-dom'
import { ChevronDownIcon } from '../icons'
import {
  ABOUT_US_DROPDOWN_ITEMS,
  ACADEMICS_DROPDOWN_ITEMS,
  EXPLORE_DROPDOWN_ITEMS,
  NAV_ITEMS,
} from '../../constants/contact'

const NAV_DROPDOWNS = {
  'About Us': {
    items: ABOUT_US_DROPDOWN_ITEMS,
    isSection: (pathname) =>
      pathname === '/about-us' ||
      ABOUT_US_DROPDOWN_ITEMS.some((item) => item.href === pathname),
  },
  Academics: {
    items: ACADEMICS_DROPDOWN_ITEMS,
    isSection: (pathname) =>
      ACADEMICS_DROPDOWN_ITEMS.some((item) => item.href === pathname),
  },
  Explore: {
    items: EXPLORE_DROPDOWN_ITEMS,
    isSection: (pathname) =>
      EXPLORE_DROPDOWN_ITEMS.some((item) => item.href === pathname),
  },
}

export default function MainNav({
  mobile = false,
  onNavigate,
  scrolled = false,
}) {
  const { pathname } = useLocation()

  if (mobile) {
    return (
      <nav className="flex flex-col gap-1" aria-label="Main navigation">
        {NAV_ITEMS.map((item) => {
          const dropdown = NAV_DROPDOWNS[item.label]
          const isActive = dropdown
            ? dropdown.isSection(pathname)
            : pathname === item.href

          if (dropdown) {
            return (
              <details key={item.label} className="group">
                <summary
                  className={
                    isActive
                      ? 'border-l-2 border-amber-400 py-2.5 pl-3 text-sm font-semibold text-amber-500 cursor-pointer list-none'
                      : `py-2.5 pl-3 text-sm font-medium ${
                          scrolled ? 'text-gray-700' : 'text-white/90'
                        } cursor-pointer list-none`
                  }
                >
                  {item.label}
                  <span className="ml-2 inline-flex align-middle text-xs text-amber-400">
                    <ChevronDownIcon size={14} />
                  </span>
                </summary>
                <div className="mt-1 ml-4 flex flex-col gap-1">
                  {dropdown.items.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.href}
                      onClick={onNavigate}
                      className={`py-1.5 pl-2 text-sm font-medium ${
                        scrolled ? 'text-gray-700' : 'text-white/80'
                      } hover:text-amber-300 transition-colors`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </details>
            )
          }

          return (
            <Link
              key={item.label}
              to={item.href}
              onClick={onNavigate}
              className={
                isActive
                  ? 'border-l-2 border-amber-400 py-2.5 pl-3 text-sm font-semibold text-amber-500'
                  : `py-2.5 pl-3 text-sm font-medium ${
                      scrolled ? 'text-gray-700' : 'text-white/90'
                    }`
              }
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    )
  }

  const linkBase = scrolled
    ? 'text-sm font-medium transition-colors px-3 py-3.5 border-b-2 border-transparent hover:border-amber-400 text-gray-700 hover:text-[#0d3b86]'
    : 'text-sm font-medium transition-colors px-3 py-3.5 border-b-2 border-transparent hover:border-amber-400 text-white/90 hover:text-white'

  const linkActive = scrolled
    ? 'text-sm font-semibold transition-colors px-3 py-3.5 border-b-2 border-amber-400 text-amber-500 hover:text-amber-600'
    : 'text-sm font-semibold transition-colors px-3 py-3.5 border-b-2 border-amber-400 text-amber-300 hover:text-amber-200'

  return (
    <nav
      className="transition-all duration-300"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const dropdown = NAV_DROPDOWNS[item.label]
            const isActive = dropdown
              ? dropdown.isSection(pathname)
              : pathname === item.href

            if (dropdown) {
              return (
                <div key={item.label} className="relative group">
                  <button
                    type="button"
                    className={isActive ? linkActive : linkBase}
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <ChevronDownIcon
                      size={14}
                      className="ml-1 inline-block text-amber-400 transition-transform group-hover:rotate-180"
                    />
                  </button>
                  <div
                    className="absolute left-0 top-full z-50 hidden min-w-[240px] flex-col gap-2 rounded-xl border border-white/10 bg-[#091a4f]/95 p-2 shadow-lg group-hover:flex"
                    role="menu"
                  >
                    {dropdown.items.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={item.label}
                to={item.href}
                className={isActive ? linkActive : linkBase}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
