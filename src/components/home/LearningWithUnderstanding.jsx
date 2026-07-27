import { Link } from 'react-router-dom'

const LEARNING_PILLARS = [
  'Cerebral',
  'Social',
  'Physical',
  'Spiritual',
  'Emotional',
  'Environmental',
  'Creative',
  'Ethical',
]

export default function LearningWithUnderstanding() {
  return (
    <section
      className="relative overflow-hidden py-14 sm:py-16 md:py-24"
      style={{
        background:
          'linear-gradient(160deg, rgb(158, 14, 33) 0%, rgb(120, 10, 25) 55%, rgb(194, 24, 53) 100%)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(251,191,36,0.35), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.12), transparent 35%)',
        }}
        aria-hidden="true"
      />

      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="text-center lg:text-left">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase">
              Holistic Growth
            </span>
            <div className="mx-auto mt-2 mb-4 h-0.5 w-8 bg-amber-400 lg:mx-0" />

            <h2 className="mb-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:mb-5 lg:text-5xl">
              Learning with Understanding
            </h2>

            <p className="mx-auto mb-7 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base md:mb-8 md:text-lg md:leading-8 lg:mx-0">
              While high academic achievement is a priority, the school aims to
              create a community of well-rounded individuals, who are
              compassionate and confident. This fosters a spirit of cooperation
              and mutual respect among the students and teachers.
            </p>

            <Link
              to="/center-of-excellence"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-xs font-bold tracking-wide text-[#9e0e21] uppercase transition-all hover:bg-amber-300 hover:shadow-lg sm:px-7 sm:text-sm"
            >
              Learning Experience
            </Link>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative rounded-[1.75rem] border border-white/15 bg-white/5 p-5 backdrop-blur-sm sm:p-6 md:p-8">
              <div className="mb-5 flex justify-center sm:mb-6">
                <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white px-3 text-center shadow-xl sm:h-36 sm:w-36 md:h-40 md:w-40">
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-amber-500 uppercase sm:text-xs">
                    The
                  </p>
                  <p
                    className="mt-0.5 text-sm font-black leading-tight sm:text-base"
                    style={{ color: 'rgb(158, 14, 33)' }}
                  >
                    Vasant Valley
                  </p>
                  <p className="mt-1 text-[10px] font-bold tracking-[0.1em] text-gray-800 uppercase sm:text-[11px]">
                    Learning
                    <br />
                    Experience
                  </p>
                </div>
              </div>

              <ul className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {LEARNING_PILLARS.map((pillar) => (
                  <li key={pillar}>
                    <span className="flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-white/10 px-3 py-2.5 text-center text-xs font-bold tracking-wide text-white sm:min-h-12 sm:text-sm">
                      {pillar}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
