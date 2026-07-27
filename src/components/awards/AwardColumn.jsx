import { useState } from 'react'

function AwardCard({ award, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed || !award.src) {
    return (
      <div
        className={`flex h-[120px] w-[160px] flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/10 p-3 text-center shadow-lg ${className}`}
      >
        <span className="text-xs font-semibold leading-snug text-white/90">
          {award.alt}
        </span>
      </div>
    )
  }

  const content = (
    <img
      alt={award.alt}
      width="160"
      height="120"
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover"
      src={award.src}
      onError={() => setFailed(true)}
    />
  )

  if (!award.href) {
    return (
      <div
        className={`h-[120px] w-[160px] flex-shrink-0 overflow-hidden rounded-2xl shadow-lg ${className}`}
      >
        {content}
      </div>
    )
  }

  return (
    <a
      href={award.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block h-[120px] w-[160px] flex-shrink-0 overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02] ${className}`}
    >
      {content}
    </a>
  )
}

export default function AwardColumn({ awards, direction = 'up' }) {
  if (!awards?.length) return null

  const items = [...awards, ...awards, ...awards]
  const animationClass =
    direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-down'

  return (
    <div className="relative w-[160px] overflow-hidden">
      <div className={`flex flex-col gap-4 ${animationClass}`}>
        {items.map((award, index) => (
          <AwardCard key={`${award.alt}-${index}`} award={award} />
        ))}
      </div>
    </div>
  )
}
