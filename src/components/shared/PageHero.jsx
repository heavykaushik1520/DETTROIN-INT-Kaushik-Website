import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '../icons'

export default function PageHero({ title, breadcrumb }) {
  return (
    <div
      className="relative overflow-hidden pt-44 pb-16 md:pt-48 md:pb-20"
      style={{
        background:
          'linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(240, 244, 255) 40%, rgb(232, 238, 255) 100%)',
      }}
    >
      <div
        className="absolute right-0 bottom-0 left-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgb(226, 232, 240), transparent)',
        }}
      />

      <div className="relative container mx-auto px-4">
        <nav
          className="mb-5 flex flex-wrap items-center gap-1.5 text-sm"
          style={{ color: 'rgb(107, 114, 128)' }}
          aria-label="Breadcrumb"
        >
          <Link to="/" className="transition-colors hover:text-amber-500">
            Horizon International
          </Link>
          <span className="flex items-center gap-1.5">
            <ChevronRightIcon size={14} />
            <span className="font-medium" style={{ color: 'rgb(9, 26, 79)' }}>
              {breadcrumb || title}
            </span>
          </span>
        </nav>

        <h1
          className="mb-3 text-4xl font-black tracking-tight md:text-5xl"
          style={{
            fontFamily: '"DM Sans", sans-serif',
            color: 'rgb(9, 26, 79)',
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  )
}
