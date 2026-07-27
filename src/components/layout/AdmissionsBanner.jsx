import { TICKER_TEXT } from '../../constants/contact'

export default function AdmissionsBanner() {
  return (
    <div
      className="whitespace-nowrap px-4 py-1.5 text-center text-[10px] font-bold tracking-[0.1em] text-white uppercase transition-all duration-300 sm:text-[11px] sm:tracking-[0.15em] lg:px-12 xl:px-16 2xl:px-20"
      style={{
        background:
          'linear-gradient(135deg, rgb(158, 14, 33) 0%, rgb(194, 24, 53) 100%)',
      }}
    >
      {TICKER_TEXT}
    </div>
  )
}
