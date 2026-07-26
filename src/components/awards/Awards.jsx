import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../icons'
import { AWARDS_COLUMN_DOWN, AWARDS_COLUMN_UP } from '../../constants/awards'
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
        Welcome To Horizon
        <br />
        <span className="text-amber-400">International School</span>
      </h2>

      <p className="mx-auto mb-8 max-w-lg text-[15px] leading-[1.8] text-blue-200/80 lg:mx-0">
        Recognised and awarded by leading education platforms across India,
        Horizon International School continues to set benchmarks in academic
        excellence, holistic development, and preparing students for success in
        an evolving world.
      </p>

      <Link
        to="/awards-achievements"
        data-testid="button-awards-cta"
        className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-[#091a4f] transition-all duration-300 hover:opacity-90 hover:shadow-lg"
        style={{ background: 'rgb(251, 191, 36)', borderRadius: '9999px' }}
      >
        View All Awards
        <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  )
}

function AwardColumns({ className }) {
  return (
    <div className={className}>
      <AwardColumn awards={AWARDS_COLUMN_UP} direction="up" />
      <AwardColumn awards={AWARDS_COLUMN_DOWN} direction="down" />
    </div>
  )
}

export default function Awards() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, rgb(9, 26, 79) 0%, rgb(13, 59, 134) 60%, rgb(9, 26, 79) 100%)',
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
