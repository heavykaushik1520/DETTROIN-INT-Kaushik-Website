import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  TIMELINE_ARCHIVES,
  TIMELINE_EVENTS,
} from '../../constants/timeline'

export default function RecentEvents() {
  const scrollerRef = useRef(null)

  function scrollBy(direction) {
    const el = scrollerRef.current
    if (!el) return
    const amount = Math.min(360, el.clientWidth * 0.75)
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background:
          'linear-gradient(180deg, #fff 0%, #fdf2f3 45%, #fff 100%)',
      }}
    >
      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
              Browse Archives
            </span>
            <div className="mt-2 mb-4 h-0.5 w-8 bg-amber-400" />
            <h2
              className="text-3xl font-black leading-tight md:text-4xl lg:text-5xl"
              style={{ color: 'rgb(158, 14, 33)' }}
            >
              A Timeline of
              <br />
              Recent Events
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {TIMELINE_ARCHIVES.map((archive) => (
              <Link
                key={archive.label}
                to={archive.href}
                className="rounded-full border border-[#9e0e21]/20 bg-white px-4 py-2 text-xs font-bold tracking-wide text-[#9e0e21] uppercase transition-colors hover:bg-[#9e0e21] hover:text-white"
              >
                {archive.label}
              </Link>
            ))}
            <Link
              to="/news-events"
              className="rounded-full px-5 py-2 text-xs font-bold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
              style={{ background: 'rgb(158, 14, 33)' }}
            >
              View All
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="mb-4 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous events"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#9e0e21]/20 bg-white text-[#9e0e21] transition-colors hover:bg-[#9e0e21] hover:text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next events"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#9e0e21]/20 bg-white text-[#9e0e21] transition-colors hover:bg-[#9e0e21] hover:text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TIMELINE_EVENTS.map((event, index) => (
              <Link
                key={event.id}
                to={event.href}
                className="group relative w-[min(78vw,280px)] shrink-0 snap-start overflow-hidden rounded-[1.5rem] bg-white shadow-[0_12px_40px_rgba(158,14,33,0.08)] transition-transform duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold tracking-wide text-[#9e0e21] uppercase">
                    {event.date.split('–')[0].trim()}
                  </span>
                </div>

                <div className="space-y-2 p-5">
                  <h3 className="text-base leading-snug font-black text-gray-900 transition-colors group-hover:text-[#9e0e21]">
                    {event.title}
                  </h3>
                  <p className="text-xs font-medium tracking-wide text-gray-500">
                    {event.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
