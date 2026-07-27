import { PageHero } from '../components/shared'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

import img1 from '../assets/img/center-of-excellence/image-vv-1.jpg'
import img2 from '../assets/img/center-of-excellence/image-vv-2.jpg'
import img4 from '../assets/img/center-of-excellence/image-vv-4.jpg'
import img41 from '../assets/img/center-of-excellence/image-vv-4-1.jpg'
import img5 from '../assets/img/center-of-excellence/image-vv-5_image_.jpg'
import img6 from '../assets/img/center-of-excellence/image-vv-6.jpg'
import img7 from '../assets/img/center-of-excellence/image-vv-7.jpg'
import img8 from '../assets/img/center-of-excellence/image-vv-8.jpg'

const PROGRAMS = [
  {
    title: 'Academic Excellence',
    desc: 'Strong classroom practice and personalised learning pathways for every student.',
    image: img1,
  },
  {
    title: 'Pedagogy & Practice',
    desc: 'Research-backed teaching methods that make learning meaningful and lasting.',
    image: img2,
  },
  {
    title: 'Teacher Development',
    desc: 'Continuous professional learning for educators and school leaders.',
    image: img4,
  },
  {
    title: 'Curriculum Innovation',
    desc: 'Thoughtful curriculum design that balances depth, creativity and curiosity.',
    image: img41,
  },
  {
    title: 'Student Wellbeing',
    desc: 'Pastoral care and support systems that nurture mind, body and spirit.',
    image: img5,
  },
  {
    title: 'School Culture',
    desc: 'A values-driven community rooted in Indian ethos and global citizenship.',
    image: img6,
  },
  {
    title: 'Leadership Capacity',
    desc: 'Building confident leaders who shape classrooms, schools and systems.',
    image: img7,
  },
  {
    title: 'Global Collaboration',
    desc: 'Partnerships and programmes that connect learning beyond campus walls.',
    image: img8,
  },
]

export default function CenterOfExcellence() {
  usePageTitle(PAGE_TITLES.centerOfExcellence)

  return (
    <main>
      <PageHero title="Center Of Excellence" breadcrumb="Center Of Excellence" />

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 max-w-3xl">
            <p className="text-base leading-relaxed text-gray-600">
              Our Centers of Excellence are dedicated programmes and learning
              initiatives designed to help students and educators excel beyond
              the standard curriculum — in academics, pedagogy, wellbeing, and
              skills for the future.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRAMS.map((program, index) => (
              <div
                key={program.title}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm"
                data-testid={`card-program-${index}`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3
                    className="mb-2 text-lg font-black"
                    style={{ color: 'rgb(194, 24, 53)' }}
                  >
                    {program.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-gray-600">
                    {program.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
