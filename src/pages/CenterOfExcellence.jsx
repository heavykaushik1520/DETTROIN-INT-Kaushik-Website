import { PageHero } from '../components/shared'
import {
  BadgeCheckIcon,
  GraduationCapIcon,
  BookOpenIcon,
  ShieldIcon,
} from '../components/icons'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

const PROGRAMS = [
  {
    title: 'Academic Excellence',
    icon: GraduationCapIcon,
    desc: 'Rigorous curriculum with personalised attention to help every student reach their potential.',
  },
  {
    title: 'Research & Innovation',
    icon: BookOpenIcon,
    desc: 'Hands-on projects and inquiry-based learning that foster creativity and problem-solving.',
  },
  {
    title: 'Arts & Performance',
    icon: BadgeCheckIcon,
    desc: 'Visual arts, music, dance, and theatre programs to nurture creative expression.',
  },
  {
    title: 'Sports & Fitness',
    icon: ShieldIcon,
    desc: 'Comprehensive sports coaching across disciplines with modern facilities and trained coaches.',
  },
]

export default function CenterOfExcellence() {
  usePageTitle(PAGE_TITLES.centerOfExcellence)

  return (
    <main>
      <PageHero title="Center Of Excellence" breadcrumb="Center Of Excellence" />

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12 max-w-3xl">
            <p className="text-base leading-relaxed text-gray-600">
              Our Centers of Excellence are dedicated programs and learning
              initiatives designed to help students excel beyond the standard
              curriculum — in academics, co-curricular pursuits, and skills for
              the future.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {PROGRAMS.map((program, index) => {
              const Icon = program.icon
              return (
                <div
                  key={program.title}
                  className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
                  data-testid={`card-program-${index}`}
                >
                  <div
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                    style={{
                      background: 'rgb(254, 243, 199)',
                      color: 'rgb(13, 59, 134)',
                    }}
                  >
                    <Icon size={26} />
                  </div>
                  <h3
                    className="mb-3 text-xl font-black"
                    style={{ color: 'rgb(13, 59, 134)' }}
                  >
                    {program.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {program.desc}
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
