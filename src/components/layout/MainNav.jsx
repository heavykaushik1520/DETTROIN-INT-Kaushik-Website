import { ChevronDownIcon } from '../icons'
import { NAV_ITEMS } from '../../constants/contact'

const linkBase =
  'text-sm font-medium transition-colors px-3 py-3.5 border-b-2 border-transparent hover:border-amber-400 text-white/90 hover:text-white'

const linkActive =
  'text-sm font-semibold transition-colors px-3 py-3.5 border-b-2 border-amber-400 text-amber-300 hover:text-amber-200'

function NavDropdown({ label }) {
  return (
    <div className="border-b-2 border-transparent px-3 py-3.5 hover:border-amber-400">
      <div className="relative">
        <button
          type="button"
          className="flex items-center gap-1 py-1 text-sm font-medium text-white/90 transition-colors hover:text-white"
        >
          {label}
          <ChevronDownIcon className="transition-transform" />
        </button>
      </div>
    </div>
  )
}

export default function MainNav({ mobile = false, onNavigate }) {
  if (mobile) {
    return (
      <nav className="flex flex-col gap-1" aria-label="Main navigation">
        {NAV_ITEMS.map((item) =>
          item.type === 'dropdown' ? (
            <button
              key={item.label}
              type="button"
              className="flex items-center justify-between px-1 py-2.5 text-left text-sm font-medium text-white/90"
            >
              {item.label}
              <ChevronDownIcon />
            </button>
          ) : (
            <a
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className={
                item.active
                  ? 'border-l-2 border-amber-400 py-2.5 pl-3 text-sm font-semibold text-amber-300'
                  : 'py-2.5 pl-3 text-sm font-medium text-white/90'
              }
            >
              {item.label}
            </a>
          ),
        )}
      </nav>
    )
  }

  return (
    <nav
      className="transition-all duration-300"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) =>
            item.type === 'dropdown' ? (
              <NavDropdown key={item.label} label={item.label} />
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={item.active ? linkActive : linkBase}
              >
                {item.label}
              </a>
            ),
          )}
        </div>
      </div>
    </nav>
  )
}
