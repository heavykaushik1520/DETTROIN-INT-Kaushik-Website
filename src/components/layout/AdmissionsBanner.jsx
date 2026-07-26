import { TICKER_TEXT } from '../../constants/contact'

export default function AdmissionsBanner() {
  return (
    <div
      className="whitespace-nowrap py-1.5 text-center text-[10px] font-bold tracking-[0.1em] text-white uppercase transition-all duration-300 sm:text-[11px] sm:tracking-[0.15em]"
      style={{
        background:
          'linear-gradient(135deg, rgb(9, 26, 79) 0%, rgb(13, 59, 134) 100%)',
      }}
    >
      {TICKER_TEXT}
    </div>
  )
}
