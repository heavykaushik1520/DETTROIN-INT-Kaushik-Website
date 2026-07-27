import { PageHero } from '../components/shared'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

const ACHIEVEMENTS = [
  'Ivy League Day School (Education World Survey 2025)',
  'Best Day Co-Ed School in Delhi NCR (C-Fore Rankings 2025)',
  'Best Co-Ed School in India (C-Fore Rankings 2025)',
]

const VALUES = [
  'Satisfying Curiosity',
  'Celebrating Diversity',
  'Focus on Equity',
  'Building Inclusion',
  'Strengthening Collaboration',
]

export default function AboutVvs() {
  usePageTitle(PAGE_TITLES.aboutVvs)

  return (
    <main>
      <PageHero title="About VVS" breadcrumb="About VVS" />

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="space-y-6 text-base leading-relaxed text-gray-600">
            <p>
              The Vasant Valley Centre for Excellence in Education, Vasant
              Valley School (CEE@VVS) was born out of the experience and
              expertise we have gained over the last thirty-six years of running
              Vasant Valley School.
            </p>

            <p>
              Vasant Valley School has consistently been ranked as one of the
              top co-educational day schools in India and Delhi/NCR over the
              last 15 years, frequently securing the No. 1 or No. 2 position in
              prominent rankings.
            </p>

            <div>
              <h2
                className="mb-4 text-2xl font-black"
                style={{ color: 'rgb(13, 59, 134)' }}
              >
                A few achievements this year
              </h2>
              <ul className="space-y-3">
                {ACHIEVEMENTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-sm"
                  >
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                      style={{ background: 'rgb(251, 191, 36)' }}
                    />
                    <span className="font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              Today Vasant Valley School is recognised as an ‘Institution of
              Excellence’ in the field of school education in India and we rely
              on this wide knowledge and experience of running one of the best
              schools in the country in our work at Vasant Valley Centre for
              Excellence in Education, Vasant Valley School CEE@VVS.
            </p>

            <p>
              With learner needs changing and pedagogies rapidly advancing,
              CEE@VVS was created to give teachers the space, stimuli, and
              support to pause, to reflect, to question, learn, and re-imagine
              their practice. Its purpose is not merely to upgrade skills, but
              to nurture curiosity, strengthen professional identity, and build
              a community of teachers who see themselves as lifelong learners
              shaping the future with intention and insight to create centres of
              excellence in school education.
            </p>

            <div className="pt-4">
              <h2
                className="mb-3 text-2xl font-black"
                style={{ color: 'rgb(13, 59, 134)' }}
              >
                Values
              </h2>
              <p className="mb-6">
                The Values that guide our work at The Vasant Valley Centre for
                Excellence in Education, Vasant Valley School (CEE@VVS) are:
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {VALUES.map((value) => (
                  <div
                    key={value}
                    className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                  >
                    <div
                      className="mb-3 flex h-10 w-10 items-center justify-center rounded-full text-sm font-black"
                      style={{
                        background: 'rgb(254, 243, 199)',
                        color: 'rgb(13, 59, 134)',
                      }}
                    >
                      {value.charAt(0)}
                    </div>
                    <h3
                      className="text-base font-black"
                      style={{ color: 'rgb(13, 59, 134)' }}
                    >
                      {value}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
