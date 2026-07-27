import { PageHero } from '../components/shared'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'
import dayBanner from '../assets/img/infrastructure/a-day-in-school-banner.jpg'
import scheduleImg from '../assets/img/infrastructure/001.png'

const DAY_HIGHLIGHTS = [
  'Dynamic learning',
  'Inside & outside class',
  '3 sections per year',
  '~30 students each',
  'Alcove social hubs',
]

const DAY_BLOCKS = [
  '8:00 am – 9:35 am',
  '9:50 am – 11:10 am',
  '11:20 am – 1:20 pm',
  '1:45 pm – 3:00 pm',
]

const EARLY_YEARS = [
  { label: 'Foundation', time: '9:30 am – 1:00 pm' },
  { label: 'Nursery', time: '8:00 am – 1:00 pm' },
]

export default function ADayInSchool() {
  usePageTitle(PAGE_TITLES.aDayInSchool)

  return (
    <main>
      <PageHero title="A Day In School" breadcrumb="A Day In School" />

      <section className="bg-[#fdf2f3] py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
            <div className="relative min-h-[360px] md:min-h-[440px]">
              <img
                src={dayBanner}
                alt="Students gathered on the sports field at Vasant Valley School"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#9e0e21]/95 via-transparent to-[#9e0e21]/15" />

              <div className="relative z-10 flex min-h-[360px] flex-col justify-end p-6 md:min-h-[440px] md:p-10 lg:p-12">
                <span className="mb-3 text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase">
                  School Life
                </span>
                <div className="mb-5 h-0.5 w-8 bg-amber-400" />
                <p className="mb-4 max-w-3xl text-lg font-semibold leading-relaxed text-white md:text-2xl">
                  A typical day in Vasant Valley School involves an invigorating
                  and dynamic learning experience, both inside and outside the
                  classroom.
                </p>
                <p className="max-w-3xl text-sm leading-relaxed text-white/85 md:text-base">
                  Every year group is divided into three sections with about 30
                  students each. The classrooms are built around an alcove which
                  is the hub of social interaction for the children.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-gray-100 bg-white p-5 md:gap-3 md:px-10 md:py-6">
              {DAY_HIGHLIGHTS.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-amber-100 bg-[#fdf2f3] px-3.5 py-1.5 text-xs font-semibold text-[#c21835] md:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="group relative overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
              <img
                src={scheduleImg}
                alt="Students collaborating during the school day"
                className="h-full min-h-[360px] w-full object-cover transition duration-500 group-hover:scale-[1.03] lg:min-h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#9e0e21]/70 via-transparent to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-6 md:p-8">
                <span className="inline-block rounded-full bg-amber-400 px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#9e0e21] uppercase">
                  Learning Together
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-3xl border border-gray-100 bg-white p-7 shadow-sm md:p-10">
              <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
                Timings
              </span>
              <div className="mt-2 mb-5 h-0.5 w-8 bg-amber-400" />
              <h2
                className="mb-4 text-2xl font-black md:text-3xl"
                style={{ color: 'rgb(194, 24, 53)' }}
              >
                The Daily Schedule
              </h2>
              <p className="mb-6 text-base leading-relaxed text-gray-600">
                School timings are from 8:00 am to 3:00 pm and the day is divided
                into four blocks with three breaks in between:
              </p>

              <ul className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {DAY_BLOCKS.map((block) => (
                  <li
                    key={block}
                    className="flex items-center gap-2.5 rounded-2xl border border-gray-100 bg-[#fdf2f3]/60 px-3.5 py-3"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                    <span className="text-sm font-semibold text-[#c21835]">
                      {block}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mb-4 text-base leading-relaxed text-gray-600">
                Timings for the first two-year groups is as follows:
              </p>

              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {EARLY_YEARS.map((item) => (
                  <li
                    key={item.label}
                    className="rounded-2xl border border-gray-100 bg-[#fdf2f3]/60 px-4 py-3.5"
                  >
                    <span
                      className="mb-1 block text-xs font-bold tracking-wider uppercase"
                      style={{ color: 'rgb(194, 24, 53)' }}
                    >
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-gray-700">
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fdf2f3] py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
              Beyond the Bell
            </span>
            <div className="mt-2 mb-4 h-0.5 w-8 bg-amber-400" />
            <h2
              className="text-2xl font-black md:text-3xl"
              style={{ color: 'rgb(194, 24, 53)' }}
            >
              Making the most of each School Day
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm md:p-9">
              <div
                className="mb-5 inline-flex rounded-full px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase"
                style={{
                  background: 'rgb(254, 243, 199)',
                  color: 'rgb(194, 24, 53)',
                }}
              >
                Lessons & Breaks
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-gray-600 md:text-base">
                <p>
                  The duration of lessons varies from 20 to 60 minutes for
                  different year groups. There are no bells ringing in school to
                  indicate the beginning or end of a lesson. You will know that
                  it’s break time in school when you hear music playing in the
                  corridors!
                </p>
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  '20–60 min lessons',
                  'No school bells',
                  'Music signals break',
                  'Year-group flexibility',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 rounded-2xl border border-gray-100 bg-[#fdf2f3]/60 px-3.5 py-3 text-sm font-medium text-gray-700"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="flex flex-col rounded-3xl p-7 text-white shadow-sm md:p-9"
              style={{ background: 'rgb(194, 24, 53)' }}
            >
              <div className="mb-5 inline-flex self-start rounded-full bg-amber-400 px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#9e0e21] uppercase">
                Meals & Camps
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-white/85 md:text-base">
                <p>
                  We have three breaks in the day, breakfast, midday break and
                  lunch. All children eat breakfast and lunch provided in school.
                  The menu for the meals is accessible to students and parents.
                </p>
                <p>
                  After 3:00 pm children from Class 3 to 12 have the option of
                  staying back in school for camps, which are held in a wide
                  variety of sports and art forms. These camps are conducted by
                  experts in the field and focus on honing a child’s skills in
                  their areas of interest.
                </p>
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  'Breakfast & lunch',
                  'Midday break',
                  'After-school camps',
                  'Sports & arts',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 rounded-2xl bg-white/10 px-3.5 py-3 text-sm font-medium text-white"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
