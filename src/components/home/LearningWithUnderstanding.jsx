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
      className="relative overflow-hidden py-16 md:py-24"
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
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase">
              Holistic Growth
            </span>
            <div className="mt-2 mb-5 h-0.5 w-8 bg-amber-400" />

            <h2 className="mb-5 text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
              Learning with
              <br />
              Understanding
            </h2>

            <p className="mb-8 max-w-lg text-base leading-relaxed text-white/80 md:text-lg md:leading-8">
              While high academic achievement is a priority, the school aims to
              create a community of well-rounded individuals, who are
              compassionate and confident. This fosters a spirit of cooperation
              and mutual respect among the students and teachers.
            </p>

            <Link
              to="/center-of-excellence"
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3 text-sm font-bold tracking-wide text-[#9e0e21] uppercase transition-all hover:bg-amber-300 hover:shadow-lg"
            >
              Learning Experience
            </Link>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="learning-orbit absolute inset-[12%] rounded-full border border-white/15" />
            <div className="learning-orbit-slow absolute inset-[24%] rounded-full border border-dashed border-amber-300/30" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10 flex h-36 w-36 flex-col items-center justify-center rounded-full bg-white px-4 text-center shadow-2xl sm:h-44 sm:w-44">
                <p className="text-[10px] font-semibold tracking-[0.18em] text-amber-500 uppercase sm:text-xs">
                  The
                </p>
                <p
                  className="mt-0.5 text-sm font-black leading-tight sm:text-base"
                  style={{ color: 'rgb(158, 14, 33)' }}
                >
                  Vasant Valley
                </p>
                <p className="mt-1 text-[11px] font-bold tracking-[0.12em] text-gray-800 uppercase sm:text-xs">
                  Learning
                  <br />
                  Experience
                </p>
              </div>
            </div>

            {LEARNING_PILLARS.map((pillar, index) => {
              const angle = (index / LEARNING_PILLARS.length) * 360 - 90
              const delay = `${0.15 + index * 0.12}s`
              return (
                <div
                  key={pillar}
                  className="learning-pillar absolute top-1/2 left-1/2"
                  style={{
                    '--angle': `${angle}deg`,
                    animationDelay: delay,
                  }}
                >
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur-sm sm:px-4 sm:text-sm">
                    {pillar}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
