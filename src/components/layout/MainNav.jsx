import { Link, useLocation } from 'react-router-dom'
import { NAV_ITEMS } from '../../constants/contact'

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
          const isActive = pathname === item.href
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
            const isActive = pathname === item.href
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
