import { PageHero } from '../components/shared'
import {
  BadgeCheckIcon,
  BookOpenIcon,
  ClipboardListIcon,
  GraduationCapIcon,
  MapPinIcon,
  ShieldIcon,
  UserCheckIcon,
} from '../components/icons'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

const CORE_VALUES = [
  {
    title: 'Excellence',
    icon: BadgeCheckIcon,
    desc: 'We pursue the highest standards in academics and character.',
  },
  {
    title: 'Integrity',
    icon: UserCheckIcon,
    desc: 'We teach honesty, responsibility, and ethical conduct.',
  },
  {
    title: 'Compassion',
    icon: ShieldIcon,
    desc: 'We nurture empathy, kindness, and respect for all.',
  },
  {
    title: 'Global',
    icon: MapPinIcon,
    desc: 'We prepare learners for the world while staying rooted in India.',
  },
  {
    title: 'Innovation',
    icon: GraduationCapIcon,
    desc: 'We embrace creativity and critical thinking for future readiness.',
  },
  {
    title: 'Leadership',
    icon: ClipboardListIcon,
    desc: 'We build confidence to lead with clarity and conviction.',
  },
  {
    title: 'Resilience',
    icon: BookOpenIcon,
    desc: 'We support learners to grow through challenges with strength.',
  },
  {
    title: 'Curiosity',
    icon: BookOpenIcon,
    desc: 'We inspire lifelong learning through inquiry and discovery.',
  },
]

export default function VisionPhilosophy() {
  usePageTitle(PAGE_TITLES.visionPhilosophy)

  return (
    <main>
      <PageHero title="Vision & Philosophy" breadcrumb="Vision & Philosophy" />

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div
              className="rounded-3xl p-8 text-white shadow-sm"
              style={{ background: 'rgb(13, 59, 134)' }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                <BadgeCheckIcon size={28} className="text-amber-400" />
              </div>
              <h2 className="mb-4 text-2xl font-black">Vision</h2>
              <p className="leading-relaxed text-white/85">
                We at Vasant Valley School believe that each child entrusted to
                us will receive education in its finest form. Learning is a
                lifelong process, and all students and teachers are challenged to
                exceed their own expectations.
              </p>
            </div>

            <div
              className="rounded-3xl p-8 text-white shadow-sm"
              style={{ background: 'rgb(13, 59, 134)' }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                <ClipboardListIcon size={28} className="text-amber-400" />
              </div>
              <h2 className="mb-4 text-2xl font-black">Philosophy</h2>
              <p className="leading-relaxed text-white/85">
                This is a holistic experience that synergises the growth of
                mind, body and spirit. We nurture and prepare generations of
                individuals, the torchbearers of tomorrow who believe in the
                strength of their own convictions and take pride in being
                Indian—working together in the spirit of Global Citizenship. Our
                work in school shapes the future and no constraints shall daunt
                us.
              </p>
            </div>
          </div>

          <h2
            className="mb-10 text-center text-3xl font-black"
            style={{ color: 'rgb(13, 59, 134)' }}
          >
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm"
                  data-testid={`card-value-${index}`}
                >
                  <div
                    className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full"
                    style={{
                      background: 'rgb(254, 243, 199)',
                      color: 'rgb(13, 59, 134)',
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3
                    className="mb-2 text-lg font-black"
                    style={{ color: 'rgb(13, 59, 134)' }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {value.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
