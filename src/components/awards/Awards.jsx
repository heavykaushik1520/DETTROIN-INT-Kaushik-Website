import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../icons'
import {
  AWARDS_ABOUT_PARAGRAPHS,
  AWARDS_COLUMN_DOWN,
  AWARDS_COLUMN_UP,
  HAS_AWARD_LOGOS,
} from '../../constants/awards'
import AwardColumn from './AwardColumn'

function AwardsCopy() {
  return (
    <div className="order-2 max-w-xl flex-1 text-center lg:text-left">
      <div className="mb-5 inline-block">
        <span className="text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase">
          Recognised & Awarded
        </span>
        <div className="mx-auto mt-2 h-0.5 w-8 bg-amber-400 lg:mx-0" />
      </div>

      <h2 className="mb-5 text-3xl leading-tight font-extrabold tracking-tight text-white md:text-4xl lg:text-[42px]">
        Welcome To Vasant Valley
        <br />
        <span className="text-amber-400">International School</span>
      </h2>

      {AWARDS_ABOUT_PARAGRAPHS.map((paragraph, index) => (
        <p
          key={paragraph}
          className={`mx-auto max-w-lg text-[15px] leading-[1.8] text-red-100/80 lg:mx-0 ${
            index === AWARDS_ABOUT_PARAGRAPHS.length - 1 ? 'mb-8' : 'mb-4'
          }`}
        >
          {paragraph}
        </p>
      ))}

      <Link
        to="/about-us"
        data-testid="button-awards-cta"
        className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-[#9e0e21] transition-all duration-300 hover:opacity-90 hover:shadow-lg"
        style={{ background: 'rgb(251, 191, 36)', borderRadius: '9999px' }}
      >
        About Us
        <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  )
}

function AwardColumns({ className }) {
  if (!HAS_AWARD_LOGOS) return null

  return (
    <div className={className}>
      {AWARDS_COLUMN_UP.length > 0 && (
        <AwardColumn awards={AWARDS_COLUMN_UP} direction="up" />
      )}
      {AWARDS_COLUMN_DOWN.length > 0 && (
        <AwardColumn awards={AWARDS_COLUMN_DOWN} direction="down" />
      )}
    </div>
  )
}

export default function Awards() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, rgb(158, 14, 33) 0%, rgb(194, 24, 53) 60%, rgb(158, 14, 33) 100%)',
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center gap-12 lg:flex-row xl:gap-20">
          <AwardColumns className="order-1 hidden h-[320px] flex-shrink-0 gap-4 overflow-hidden lg:flex" />
          <AwardsCopy />
        </div>

        <AwardColumns className="mt-10 flex h-[280px] justify-center gap-4 overflow-hidden lg:hidden" />
      </div>
    </section>
  )
}

