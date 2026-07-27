import { CalendarCheckIcon, ChevronRightIcon } from '../icons'
import { HERO_QUICK_LINKS, HERO_STATS } from '../../constants/hero'

export default function HeroContent() {
  return (
    <div className="flex-1">
      <button
        type="button"
        data-testid="button-check-seats"
        className="group mb-6 inline-flex cursor-pointer items-center gap-2.5 rounded-full px-5 py-2.5 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
        style={{
          background: 'rgba(251, 191, 36, 0.15)',
          border: '1.5px solid rgba(251, 191, 36, 0.5)',
        }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.7)]" />
        </span>
        <span className="text-[11px] font-semibold tracking-[0.14em] text-amber-300 uppercase">
          Check Seat Availability 2026–27
        </span>
        <ChevronRightIcon className="text-amber-400 transition-transform group-hover:translate-x-0.5" />
      </button>

      <h1 className="mb-4 text-4xl leading-[1.08] font-extrabold tracking-tight text-white md:text-5xl xl:text-6xl">
        Best CBSE School
        <br />
        <span className="text-amber-400">in New Delhi</span>
        <br />
        <span className="text-3xl md:text-4xl xl:text-5xl">
          Nursery to Class 12
        </span>
      </h1>

      <p className="mb-2 text-base font-semibold text-blue-100 md:text-lg">
        Admissions Open 2026–27 at Vasant Valley School.
      </p>
      <p className="mb-8 max-w-lg text-sm leading-relaxed font-light text-blue-200/70 md:text-base">
        A CBSE-affiliated K–12 school with a 3.5-acre campus, strong academics,
        sports, safety, transport, and holistic learning.
      </p>

      <div className="mb-8 flex flex-wrap gap-3">
        {HERO_STATS.map((stat) => (
          <div
            key={stat.value}
            className="rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-center backdrop-blur-sm"
          >
            <div className="mb-1 text-sm leading-none font-extrabold text-amber-400">
              {stat.value}
            </div>
            <div className="text-[10px] font-medium tracking-wide text-blue-200/60 uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        <a
          href="/admissions"
          data-testid="btn-hero-book-visit"
          className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-[#091a4f] transition-all hover:scale-[1.02] hover:shadow-lg"
          style={{ background: 'rgb(251, 191, 36)' }}
        >
          <CalendarCheckIcon size={16} />
          Book a Campus Visit
        </a>
        <a
          href="/application-form"
          data-testid="btn-hero-apply"
          className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
        >
          Apply Now
          <ChevronRightIcon size={15} />
        </a>
      </div>

      <div className="hidden flex-wrap gap-2 border-t border-white/10 pt-6 lg:flex">
        {HERO_QUICK_LINKS.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            data-testid={`link-quick-${index}`}
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}



