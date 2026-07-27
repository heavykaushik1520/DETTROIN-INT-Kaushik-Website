import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

export default function NotFound() {
  usePageTitle(PAGE_TITLES.notFound)

  return (
    <main
      className="relative flex min-h-[70vh] items-center overflow-hidden py-28 md:py-36"
      style={{
        background:
          'linear-gradient(160deg, #fff 0%, #fdf2f3 50%, #fff 100%)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(158,14,33,0.12), transparent 40%), radial-gradient(circle at 85% 75%, rgba(251,191,36,0.18), transparent 35%)',
        }}
        aria-hidden="true"
      />

      <div className="container relative mx-auto max-w-3xl px-4 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
          Error 404
        </p>
        <div className="mx-auto mt-2 mb-6 h-0.5 w-8 bg-amber-400" />

        <p
          className="mb-4 text-7xl font-black leading-none md:text-8xl"
          style={{ color: 'rgb(158, 14, 33)' }}
        >
          404
        </p>

        <h1 className="mb-4 text-2xl font-black text-gray-900 md:text-4xl">
          Page Not Found
        </h1>

        <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-gray-600 md:text-base">
          The page you are looking for does not exist or may have been moved.
          Let&apos;s get you back to Vasant Valley School.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-bold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
            style={{ background: 'rgb(158, 14, 33)' }}
          >
            Back to Home
          </Link>
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center rounded-full border border-[#9e0e21]/25 bg-white px-7 py-3 text-sm font-bold tracking-wide text-[#9e0e21] uppercase transition-colors hover:bg-[#fdf2f3]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
