import { CloseIcon, ChevronRightIcon } from '../icons'

export default function GalleryLightbox({
  photos,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}) {
  if (activeIndex == null || !photos[activeIndex]) return null

  const photo = photos[activeIndex]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#9e0e21]/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        aria-label="Close gallery"
        onClick={onClose}
      >
        <CloseIcon size={22} />
      </button>

      <button
        type="button"
        className="absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-6"
        aria-label="Previous photo"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
      >
        <span className="rotate-180">
          <ChevronRightIcon size={20} />
        </span>
      </button>

      <button
        type="button"
        className="absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-6"
        aria-label="Next photo"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
      >
        <ChevronRightIcon size={20} />
      </button>

      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden rounded-2xl bg-black/40 shadow-2xl">
          <img
            src={photo.src}
            alt={photo.title}
            className="max-h-[70vh] w-full object-contain"
          />
        </div>
        <div className="mt-4 text-center text-white">
          <p className="text-lg font-extrabold tracking-tight">{photo.title}</p>
          <p className="mt-1 text-sm text-white/70">{photo.caption}</p>
          <p className="mt-3 text-xs tracking-widest text-amber-300 uppercase">
            {activeIndex + 1} / {photos.length}
          </p>
        </div>
      </div>
    </div>
  )
}
