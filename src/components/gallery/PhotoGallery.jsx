import { useEffect, useMemo, useState } from 'react'
import { GALLERY_FILTERS, GALLERY_PHOTOS } from '../../constants/gallery'
import GalleryLightbox from './GalleryLightbox'

function GalleryCard({ photo, index, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      className={`group relative min-h-[220px] overflow-hidden rounded-2xl text-left shadow-sm ring-1 ring-black/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 md:min-h-[260px] ${photo.span}`}
    >
      <img
        src={photo.src}
        alt={photo.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#9e0e21]/90 via-transparent to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <span className="mb-2 inline-block rounded-full bg-amber-400/95 px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#9e0e21] uppercase">
          {photo.category}
        </span>
        <h3 className="text-lg leading-tight font-extrabold text-white">
          {photo.title}
        </h3>
        <p className="mt-1 max-h-0 overflow-hidden text-xs leading-relaxed text-white/75 transition-all duration-500 group-hover:max-h-16">
          {photo.caption}
        </p>
      </div>
      <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-sm font-bold text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
        +
      </div>
    </button>
  )
}

export default function PhotoGallery() {
  const [filter, setFilter] = useState('all')
  const [activeIndex, setActiveIndex] = useState(null)

  const photos = useMemo(() => {
    if (filter === 'all') return GALLERY_PHOTOS
    return GALLERY_PHOTOS.filter((photo) => photo.category === filter)
  }, [filter])

  useEffect(() => {
    if (activeIndex == null) return undefined

    function onKeyDown(event) {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowRight') {
        setActiveIndex((i) => (i + 1) % photos.length)
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((i) => (i - 1 + photos.length) % photos.length)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex, photos.length])

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-16 md:py-20">
      <div
        className="pointer-events-none absolute bottom-0 -left-20 h-80 w-80 rounded-full opacity-30 blur-3xl"
        style={{ background: 'rgb(194, 24, 53)' }}
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-4 inline-block">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
              Campus Stories
            </span>
            <div className="mx-auto mt-2 h-0.5 w-8 bg-amber-400" />
          </div>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            A glimpse into life at Vasant Valley
          </h2>
          <p className="text-base text-gray-500">
            Sports, labs, libraries and everyday moments — explore our campus
            through a curated visual journey.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {GALLERY_FILTERS.map((item) => {
            const isActive = filter === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setFilter(item.id)
                  setActiveIndex(null)
                }}
                className={`rounded-full px-4 py-2 text-xs font-bold tracking-wide uppercase transition-all ${
                  isActive
                    ? 'bg-[#9e0e21] text-white shadow-md'
                    : 'border border-gray-200 bg-white text-gray-600 hover:border-amber-300 hover:text-[#9e0e21]'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[260px] lg:grid-cols-4">
          {photos.map((photo, index) => (
            <GalleryCard
              key={photo.id}
              photo={photo}
              index={index}
              onOpen={setActiveIndex}
            />
          ))}
        </div>

        {photos.length === 0 && (
          <p className="py-16 text-center text-gray-500">
            No photos in this category yet.
          </p>
        )}
      </div>

      <GalleryLightbox
        photos={photos}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onPrev={() =>
          setActiveIndex((i) => (i - 1 + photos.length) % photos.length)
        }
        onNext={() => setActiveIndex((i) => (i + 1) % photos.length)}
      />
    </section>
  )
}

