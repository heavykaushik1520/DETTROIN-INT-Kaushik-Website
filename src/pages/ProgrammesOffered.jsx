import { PageHero } from '../components/shared'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

import iconCambridge from '../assets/img/programmes-offered/1-1.png'
import iconCertificate from '../assets/img/programmes-offered/1-2.png'
import iconWorkshops from '../assets/img/programmes-offered/1-3.png'
import iconLeadership from '../assets/img/programmes-offered/1-6.png'
import iconMentorship from '../assets/img/programmes-offered/1-5.png'
import iconResearch from '../assets/img/programmes-offered/1-8.png'
import iconGlobalExperts from '../assets/img/programmes-offered/global-expert-icon.png'

const PROGRAMMES = [
  {
    title: 'Cambridge Professional Development Qualifications',
    description: 'Teacher leadership and professional growth programmes',
    icon: iconCambridge,
  },
  {
    title: "Vasant Valley School's Professional Development Certificate Courses",
    description: 'In-house certified development initiatives',
    icon: iconCertificate,
  },
  {
    title: 'Teacher Workshops',
    description: 'Skill-focussed workshops for classroom excellence',
    icon: iconWorkshops,
  },
  {
    title: 'Leaderships Seminars',
    description: 'Empowering leaders: insights and inspirations',
    icon: iconLeadership,
  },
  {
    title:
      'School Mentorship Programme for Whole School Improvement and Capacity Building',
    description:
      'Transforming schools through purposeful change and collective impact',
    icon: iconMentorship,
  },
  {
    title: 'Research Initiatives',
    description: 'Educational research and innovation projects',
    icon: iconResearch,
  },
  {
    title: 'Masterclass by Global Experts',
    description: 'Global Perspectives, inspiring excellence',
    icon: iconGlobalExperts,
  },
]

export default function ProgrammesOffered() {
  usePageTitle(PAGE_TITLES.programmesOffered)

  return (
    <main>
      <PageHero title="Programmes Offered" breadcrumb="Programmes Offered" />

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMMES.map((programme, index) => (
              <div
                key={programme.title}
                className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
                data-testid={`card-programme-${index}`}
              >
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: 'rgb(254, 243, 199)' }}
                >
                  <img
                    src={programme.icon}
                    alt=""
                    className="h-8 w-8 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3
                  className="mb-3 text-lg font-black leading-snug"
                  style={{ color: 'rgb(13, 59, 134)' }}
                >
                  {programme.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {programme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
