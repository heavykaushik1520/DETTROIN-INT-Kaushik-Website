import { useEffect, useMemo, useState } from 'react'
import { PageHero } from '../components/shared'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

import rajImg from '../assets/img/our-team/Raj_Singh_Bhandal.jpg'
import rekhaImg from '../assets/img/our-team/Rekha-Krishnans-img.jpeg'
import charuImg from '../assets/img/our-team/Charu-Wahi-img.jpeg'
import kanishkImg from '../assets/img/our-team/Kanishk-Bhargava-img.jpeg'
import abhayImg from '../assets/img/our-team/Abhay-Goel.webp'
import abhaImg from '../assets/img/our-team/Abha-Thakur-img.jpg'

const TEAM_MEMBERS = [
  {
    name: 'Raj Singh Bhandal',
    designation: 'Trustee, Vasant Valley School',
    bio: '',
    img: rajImg,
  },
  {
    name: 'Rekha Krishnan',
    designation: 'Chief Education Officer',
    img: rekhaImg,
    bio: `Rekha Krishnan has been a school educator for 38 years and a school leader since 2001. She has recently retired as the Principal of Vasant Valley School, New Delhi. Rekha has completed her post graduate degree in Education from Northwestern University in USA and her graduation in History from Delhi University's Lady Shri Ram College. She has a keen interest in History and Social Sciences.\n\nPeople say that I am a good story teller and also an off-the-stage standup comic; skills I will use in my role as a Programme Leader.`,
  },
  {
    name: 'Charu Wahi',
    designation: 'Chief Operating Officer',
    img: charuImg,
    bio: `Charu Wahi has been a school educator for 33 years, of which 26 years she has been a Principal, driving excellence in all aspects of school functioning.\n\nShe has completed her post graduate degree in Applied Psychology from Delhi University and her graduation in Psychology from Delhi University's Lady Shri Ram College. She also attended the Project Zero programme at Harvard University.\n\nI am a spontaneous poet and a happy person with a positive outlook to life. I love movies, music and travelling to uncharted destinations.`,
  },
  {
    name: 'Kanishk Bhargava',
    designation:
      'Project Lead - Research, Action and Capacity Building',
    img: kanishkImg,
    bio: `Kanishk Bhargava is a Specialist in Curriculum and Pedagogy Development and the Programme Manager for the Cambridge Professional Development Programme. He completed his graduation in English from Ramjas College, University of Delhi, followed by completing the Teach for India Fellowship.\n\nI enjoy working with creative practices, bringing and bridging both play and learning.`,
  },
  {
    name: 'Abhay Goyal',
    designation: 'Operations Executive',
    img: abhayImg,
    bio: `Abhay Goyal is a growth professional with 6 years of experience across real estate, IT, and Ed-tech. He has worked in both B2B and B2C environments, handling sales, after-sales support, coordination, and management across different teams and functions.\n\nAbhay has built expertise in driving client relationships, streamlining operations, and delivering solutions that are practical and people-first. He’s known for staying close to the work, adapting quickly across industries, and creating processes that make the customer experience smoother from first conversation to long-term support.\n\nOutside of work, he enjoys travelling, exploring new places, and learning from different cultures and perspectives.`,
  },
  {
    name: 'Abha Thakur',
    designation:
      'Consultant- Research, Practice and Capacity Building',
    img: abhaImg,
    bio: `Abha Thakur is an education leader and coach with over two decades of experience across teaching, curriculum design, program leadership, and education reform. She has worked closely with schools, NGOs, government systems, and Ed-tech organizations to strengthen pedagogy, assessment, and teacher professional development, with deep expertise in foundational learning. Abha has completed her M.Ed. from the University of Delhi and her undergraduate degree in Elementary Education from Gargi College, University of Delhi. Abha is known for working closely with people, reflecting on her practice, and creating learning experiences that are meaningful and rooted in real contexts. Outside of work, she enjoys good conversations, travel, music, and spending time with friends and family.`,
  }
  
]

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function TeamModal({ member, onClose }) {
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  if (!member) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${member.name} bio`}
    >
      <div
        className="absolute inset-0 bg-[#9e0e21]/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="relative aspect-[4/3] w-full bg-[#9e0e21]">
              <img
                src={member.img}
                alt={member.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#9e0e21]/70 via-transparent to-transparent" />
            </div>
          </div>

          <div className="md:col-span-3 p-6 md:p-8">
            <div className="mb-3 flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl font-black"
                style={{ background: 'rgb(194, 24, 53)', color: 'white' }}
              >
                {initials(member.name)}
              </div>
              <div>
                <h2 className="text-2xl font-black text-gray-900">
                  {member.name}
                </h2>
                <p className="mt-0.5 text-sm font-semibold text-amber-600">
                  {member.designation}
                </p>
              </div>
            </div>

            <div className="mt-5 max-h-[55vh] overflow-auto pr-1">
              {member.bio ? (
                <p className="whitespace-pre-line text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              ) : (
                <p className="text-gray-500">
                  Bio will be updated soon.
                </p>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl bg-[#9e0e21] px-5 py-2.5 text-sm font-bold text-white hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OurTeam() {
  usePageTitle(PAGE_TITLES.ourTeam)
  const [selected, setSelected] = useState(null)

  const content = useMemo(() => TEAM_MEMBERS, [])

  return (
    <main>
      <PageHero title="Our Team" breadcrumb="Our Team" />

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-gray-900">People</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
              All programmes are run by educators with years of experience as
              classroom practitioners, policy makers, and school leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.map((member) => (
              <button
                key={member.name}
                type="button"
                onClick={() => setSelected(member)}
                className="group h-full text-left"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="relative aspect-[4/3] w-full bg-[#9e0e21]">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#9e0e21]/70 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-black text-gray-900">
                          {member.name}
                        </h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-amber-500">
                          {member.designation}
                        </p>
                      </div>
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 text-[#9e0e21]"
                        aria-hidden="true"
                      >
                        +
                      </div>
                    </div>
                    <p className="mt-3 line-clamp-3 flex-1 text-sm text-gray-600">
                      {member.bio ? member.bio.split('\n')[0] : ''}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <TeamModal member={selected} onClose={() => setSelected(null)} />
    </main>
  )
}
