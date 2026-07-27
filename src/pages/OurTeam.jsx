import { PageHero } from '../components/shared'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

const TEAM_MEMBERS = [
  {
    name: 'Principal',
    role: 'School Principal',
    desc: 'Leading the school vision with decades of experience in education and administration.',
  },
  {
    name: 'Vice Principal',
    role: 'Vice Principal',
    desc: 'Overseeing academic programs and day-to-day school operations.',
  },
  {
    name: 'Head of Academics',
    role: 'Academic Coordinator',
    desc: 'Designing and implementing curriculum strategies for student success.',
  },
  {
    name: 'Head of Co-Curricular',
    role: 'Co-Curricular Coordinator',
    desc: 'Managing sports, arts, clubs, and student engagement beyond the classroom.',
  },
  {
    name: 'Counsellor',
    role: 'Student Wellness',
    desc: 'Providing emotional support and career guidance to every student.',
  },
  {
    name: 'IT Head',
    role: 'Technology & Innovation',
    desc: 'Driving digital learning tools and campus technology infrastructure.',
  },
]

export default function OurTeam() {
  usePageTitle(PAGE_TITLES.ourTeam)

  return (
    <main>
      <PageHero title="Our Team" breadcrumb="Our Team" />

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12 max-w-3xl">
            <p className="text-base leading-relaxed text-gray-600">
              Experienced educators and staff committed to guiding every learner
              with care, clarity, and continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={member.name}
                className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm"
                data-testid={`card-team-${index}`}
              >
                <div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-xl font-black text-white"
                  style={{ background: 'rgb(13, 59, 134)' }}
                >
                  {member.name
                    .split(' ')
                    .map((w) => w[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <h3
                  className="mb-1 text-lg font-black"
                  style={{ color: 'rgb(13, 59, 134)' }}
                >
                  {member.name}
                </h3>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-amber-500">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
