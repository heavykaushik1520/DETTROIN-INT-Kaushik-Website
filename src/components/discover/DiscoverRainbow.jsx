import { Link } from 'react-router-dom'
import { ArrowUpRightIcon } from '../icons'
import { DISCOVER_CARDS } from '../../constants/discover'

function DiscoverCard({ card, index }) {
  return (
    <Link to={card.href}>
      <div
        className="group relative cursor-pointer overflow-hidden"
        data-testid={`card-highlight-${index}`}
        style={{ height: '360px', borderRadius: '16px' }}
      >
        <img
          alt={card.title}
          width="300"
          height="360"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={card.image}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#091a4f]/90 via-[#091a4f]/30 to-transparent transition-all duration-500 group-hover:from-amber-600/85 group-hover:via-amber-600/20" />

        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-amber-400 px-3 py-1.5 text-xs font-bold text-[#091a4f]">
            {card.badge}
          </span>
        </div>

        <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRightIcon className="text-white" size={14} />
        </div>

        <div className="absolute right-0 bottom-0 left-0 p-5">
          <h3 className="mb-2 text-[17px] leading-tight font-extrabold text-white">
            {card.title}
          </h3>
          <p className="max-h-0 overflow-hidden text-xs leading-relaxed text-white/70 transition-all duration-500 group-hover:max-h-20">
            {card.description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default function DiscoverRainbow() {
  return (
    <section className="py-24" style={{ background: 'rgb(248, 250, 252)' }}>
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
              Life at Rainbow
            </span>
            <div className="mx-auto mt-2 h-0.5 w-8 bg-amber-400" />
          </div>
          <h2 className="mb-4 text-4xl leading-tight font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Let&apos;s Discover Rainbow!
          </h2>
          <p className="mx-auto max-w-xl text-base text-gray-500">
            Committed to educating, strengthening, and nurturing every student —
            and empowering lifelong learners.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DISCOVER_CARDS.map((card, index) => (
            <DiscoverCard key={card.href} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
