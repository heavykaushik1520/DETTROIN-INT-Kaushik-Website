import { PageHero } from '../components/shared'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'
import infraBanner from '../assets/img/infrastructure/infra-banner-1.jpg'
import learningSpacesImg from '../assets/img/infrastructure/valley-1.png'

const CAMPUS_HIGHLIGHTS = [
  'Sports fields',
  'Gardens & courtyards',
  'Play areas',
  '400+ plant species',
  'Challenge compliant',
]

const LEARNING_FEATURES = [
  'Science laboratories',
  'Two libraries',
  'Occupational Therapy facility',
  'Auditorium & gymnasium',
  'Sports facilities',
  'Visual & Performing Arts centre',
  'AV-enabled classrooms',
  'Campus-wide Wi‑Fi',
]

export default function Infrastructure() {
  usePageTitle(PAGE_TITLES.infrastructure)

  return (
    <main>
      <PageHero title="Infrastructure" breadcrumb="Infrastructure" />

      <section className="bg-[#eef5ff] py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
            <div className="relative min-h-[360px] md:min-h-[440px]">
              <img
                src={infraBanner}
                alt="Vasant Valley School campus"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091a4f]/95 via-[#091a4f]/45 to-[#091a4f]/15" />

              <div className="relative z-10 flex min-h-[360px] flex-col justify-end p-6 md:min-h-[440px] md:p-10 lg:p-12">
                <span className="mb-3 text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase">
                  Our Campus
                </span>
                <div className="mb-5 h-0.5 w-8 bg-amber-400" />
                <p className="mb-4 max-w-3xl text-lg font-semibold leading-relaxed text-white md:text-2xl">
                  The campus has sports fields, gardens, play areas and
                  courtyards, with over 400 species of trees and plants.
                </p>
                <p className="max-w-3xl text-sm leading-relaxed text-white/85 md:text-base">
                  The school is surrounded by the busy neighbourhood of Vasant
                  Kunj on one side and the main road connecting the capital city
                  to the airport on the other. While there is a planned space
                  for every activity, there are also many open “mixed-use”
                  areas. The entire campus is challenge compliant.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-gray-100 bg-white p-5 md:gap-3 md:px-10 md:py-6">
              {CAMPUS_HIGHLIGHTS.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-amber-100 bg-[#eef5ff] px-3.5 py-1.5 text-xs font-semibold text-[#0d3b86] md:text-sm"
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
            <div className="flex flex-col justify-center rounded-3xl border border-gray-100 bg-white p-7 shadow-sm md:p-10">
              <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
                Facilities
              </span>
              <div className="mt-2 mb-5 h-0.5 w-8 bg-amber-400" />
              <h2
                className="mb-4 text-2xl font-black md:text-3xl"
                style={{ color: 'rgb(13, 59, 134)' }}
              >
                Learning Spaces
              </h2>
              <p className="mb-8 text-base leading-relaxed text-gray-600">
                The School has well equipped Science laboratories, two
                libraries, a state-of-the-art Occupational Therapy facility an
                auditorium and gymnasium, extensive sports facilities and a
                specialized centre for the Visual and Performing Arts. All
                classrooms are equipped for streaming audio/visual content and
                the entire campus is wireless enabled.
              </p>

              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {LEARNING_FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 rounded-2xl border border-gray-100 bg-[#eef5ff]/60 px-3.5 py-3"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                    <span className="text-sm font-medium text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
              <img
                src={learningSpacesImg}
                alt="Vasant Valley School entrance and learning spaces"
                className="h-full min-h-[360px] w-full object-cover transition duration-500 group-hover:scale-[1.03] lg:min-h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091a4f]/70 via-transparent to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-6 md:p-8">
                <span className="inline-block rounded-full bg-amber-400 px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#091a4f] uppercase">
                  Campus View
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5ff] py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
              Care & Access
            </span>
            <div className="mt-2 mb-4 h-0.5 w-8 bg-amber-400" />
            <h2
              className="text-2xl font-black md:text-3xl"
              style={{ color: 'rgb(13, 59, 134)' }}
            >
              Health, Safety & Transport
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm md:p-9">
              <div
                className="mb-5 inline-flex rounded-full px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase"
                style={{
                  background: 'rgb(254, 243, 199)',
                  color: 'rgb(13, 59, 134)',
                }}
              >
                Priority One
              </div>
              <h3
                className="mb-5 text-xl font-black md:text-2xl"
                style={{ color: 'rgb(13, 59, 134)' }}
              >
                Health & Safety
              </h3>
              <div className="space-y-4 text-sm leading-relaxed text-gray-600 md:text-base">
                <p>
                  To ensure high quality primary medical care for the students
                  and teachers, we have 3 full time, qualified nurses on the
                  campus and a Paediatrician available on call. There are two
                  fully equipped medical rooms and by virtue of our location, we
                  have several big hospitals within a kilometre of the school
                  campus.
                </p>
                <p>
                  We regularly conduct trainings, workshops and seminars to
                  educate our students and staff on First Responder drills for
                  health, fire, earthquakes and other natural disasters. All
                  staff members and senior students are trained in basic minimum
                  first aid. School regularly conducts various mock drills,
                  safety workshops and sessions to prepare our staff and
                  children to deal with an emergency.
                </p>
                <p>
                  An annual health check-up is conducted for students as well as
                  all staff members. Our foremost priority is the safety and
                  security of everyone on campus as well as the community.
                </p>
                <p>
                  CCTV cameras and fire extinguishers as well as air purifiers
                  are installed throughout the school building and the school
                  grounds. The School has a strict zero tolerance policy
                  regarding bullying and substance abuse of any kind. Regular
                  workshops and training sessions are held for teachers and
                  students regarding Cyber Safety and norms of safe use of
                  technology.
                </p>
              </div>
            </div>

            <div
              className="flex flex-col rounded-3xl p-7 text-white shadow-sm md:p-9"
              style={{ background: 'rgb(13, 59, 134)' }}
            >
              <div className="mb-5 inline-flex self-start rounded-full bg-amber-400 px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#091a4f] uppercase">
                Getting Here
              </div>
              <h3 className="mb-5 text-xl font-black md:text-2xl">Transport</h3>
              <div className="space-y-4 text-sm leading-relaxed text-white/85 md:text-base">
                <p>
                  Students from the neighbouring areas of South Delhi can avail
                  the facility of school transport. The School encourages
                  carpooling amongst the students who come to school in their
                  own vehicles. We also encourage parents to organize private
                  buses in areas where the School buses do not ply.
                </p>
                <p>
                  The buses comply with all the guidelines of the Government of
                  NCT, Delhi and the Hon’ble Supreme Court of India.
                </p>
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  'School bus facility',
                  'Carpooling encouraged',
                  'Private bus options',
                  'NCT & SC guidelines',
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
