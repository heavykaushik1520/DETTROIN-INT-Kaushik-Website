import { useState } from 'react'
import {
  TIMELINE_ARCHIVES,
  TIMELINE_EVENTS,
} from '../../constants/timeline'

function monthKey(date) {
  const lower = date.toLowerCase()
  if (lower.includes('july')) return 'july'
  if (lower.includes('june')) return 'june'
  if (lower.includes('may')) return 'may'
  if (lower.includes('april')) return 'april'
  return 'other'
}

export default function NewsEventsTimeline() {
  const [activeMonth, setActiveMonth] = useState('all')

  const filtered =
    activeMonth === 'all'
      ? TIMELINE_EVENTS
      : TIMELINE_EVENTS.filter((event) => monthKey(event.date) === activeMonth)

  const [featured, ...rest] =
    filtered.length > 0 ? filtered : [null, ...[]]

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
                Browse Archives
              </p>
              <div className="mt-2 mb-6 h-0.5 w-8 bg-amber-400" />

              <ul className="space-y-1">
                <li>
                  <button
                    type="button"
                    onClick={() => setActiveMonth('all')}
                    className={`flex w-full items-center justify-between border-b border-gray-100 py-3 text-left text-sm font-semibold transition-colors ${
                      activeMonth === 'all'
                        ? 'text-[#9e0e21]'
                        : 'text-gray-700 hover:text-[#9e0e21]'
                    }`}
                  >
                    All Events
                    <span className="text-[#9e0e21]">→</span>
                  </button>
                </li>
                {TIMELINE_ARCHIVES.map((archive) => {
                  const key = archive.label.split(' ')[0].toLowerCase()
                  return (
                    <li key={archive.label}>
                      <button
                        type="button"
                        onClick={() => setActiveMonth(key)}
                        className={`flex w-full items-center justify-between border-b border-gray-100 py-3 text-left text-sm font-semibold transition-colors ${
                          activeMonth === key
                            ? 'text-[#9e0e21]'
                            : 'text-gray-700 hover:text-[#9e0e21]'
                        }`}
                      >
                        {archive.label}
                        <span className="text-[#9e0e21]">→</span>
                      </button>
                    </li>
                  )
                })}
              </ul>

              <p className="mt-8 text-sm leading-relaxed text-gray-500">
                Stay updated with the latest news, celebrations, and happenings
                at Vasant Valley School.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-9">
            {featured && (
              <article className="mb-12 overflow-hidden rounded-[1.75rem] bg-[#9e0e21]">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative min-h-56 md:min-h-72">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-7 md:p-10">
                    <p className="text-xs font-semibold tracking-[0.18em] text-amber-300 uppercase">
                      Latest
                    </p>
                    <h2 className="mt-3 text-2xl font-black leading-tight text-white md:text-3xl">
                      {featured.title}
                    </h2>
                    <p className="mt-3 text-sm text-white/75">{featured.date}</p>
                  </div>
                </div>
              </article>
            )}

            <h2
              className="mb-8 text-2xl font-black md:text-3xl"
              style={{ color: 'rgb(158, 14, 33)' }}
            >
              A Timeline of Recent Events
            </h2>

            {filtered.length === 0 ? (
              <p className="text-gray-500">No events found for this archive.</p>
            ) : (
              <ol className="relative border-l-2 border-[#9e0e21]/15">
                {rest.map((event, index) => (
                  <li
                    key={event.id}
                    className="relative grid grid-cols-1 gap-4 border-b border-gray-100 py-7 last:border-b-0 sm:grid-cols-[140px_1fr] sm:gap-6 md:grid-cols-[160px_1fr] md:gap-8"
                  >
                    <div className="absolute top-9 -left-[5px] h-2.5 w-2.5 rounded-full bg-[#9e0e21] ring-4 ring-white" />

                    <div className="pl-6 sm:pl-8">
                      <div className="overflow-hidden rounded-2xl">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="aspect-4/3 h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col justify-center pl-6 sm:pl-0">
                      <p className="text-xs font-bold tracking-wide text-amber-600 uppercase">
                        {event.date}
                      </p>
                      <h3 className="mt-2 text-lg font-black leading-snug text-gray-900 md:text-xl">
                        {event.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Event {String(index + 2).padStart(2, '0')} of{' '}
                        {filtered.length}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            )}

            {filtered.length === 1 && (
              <p className="mt-2 text-sm text-gray-500">
                Showing the latest entry for this archive.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
