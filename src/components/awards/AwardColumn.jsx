import { useState } from 'react'

function AwardCard({ award, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed || !award.src) {
    return (
      <div
        className={`flex h-[100px] w-[140px] flex-shrink-0 items-center justify-center rounded-2xl bg-white/95 p-3 text-center shadow-lg ${className}`}
      >
        <span className="text-xs font-semibold leading-snug text-[#091a4f]">
          {award.alt}
        </span>
      </div>
    )
  }

  const content = (
    <img
      alt={award.alt}
      width="100"
      height="60"
      loading="lazy"
      decoding="async"
      className="max-h-full max-w-full object-contain"
      src={award.src}
      onError={() => setFailed(true)}
    />
  )

  if (!award.href) {
    return (
      <div
        className={`flex h-[100px] w-[140px] flex-shrink-0 items-center justify-center rounded-2xl bg-white p-4 shadow-lg ${className}`}
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
      className={`flex h-[100px] w-[140px] flex-shrink-0 items-center justify-center rounded-2xl bg-white p-4 shadow-lg transition-shadow hover:shadow-xl ${className}`}
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
    <div className="relative w-[140px] overflow-hidden">
      <div className={`flex flex-col gap-4 ${animationClass}`}>
        {items.map((award, index) => (
          <AwardCard key={`${award.alt}-${index}`} award={award} />
        ))}
      </div>
    </div>
  )
}
