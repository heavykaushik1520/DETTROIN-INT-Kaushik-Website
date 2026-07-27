import { PageHero } from '../components/shared'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

import specialNeedsBannerImg from '../assets/img/infrastructure/image-1.jpg'
import specialImage1 from '../assets/img/infrastructure/special-education-needs/specialeducation-image1.jpg'
import specialImage2 from '../assets/img/infrastructure/special-education-needs/specialeducation-image2.jpg'
import specialImage3 from '../assets/img/infrastructure/special-education-needs/specialeducation-image3.jpg'
import specialImage4 from '../assets/img/infrastructure/special-education-needs/specialeducation-image4.jpg'
import specialImage5 from '../assets/img/infrastructure/special-education-needs/specialeducation-image5.jpg'
import specialImage6 from '../assets/img/infrastructure/special-education-needs/specialeducation-image6.jpg'
import specialImage7 from '../assets/img/infrastructure/special-education-needs/specialeducation-image7.jpg'
import specialImage8 from '../assets/img/infrastructure/special-education-needs/specialeducation-image8.jpg'
import specialImage9 from '../assets/img/infrastructure/special-education-needs/specialeducation-image9.jpg'
import specialImage10 from '../assets/img/infrastructure/special-education-needs/specialeducation-image10.jpg'
import specialImage11 from '../assets/img/infrastructure/special-education-needs/specialeducation-image11.jpg'
import specialImage12 from '../assets/img/infrastructure/special-education-needs/specialeducation-image12.jpg'
import specialImage13 from '../assets/img/infrastructure/special-education-needs/specialeducation-image13.jpg'
import specialImage14 from '../assets/img/infrastructure/special-education-needs/specialeducation-image14.jpg'

const SPECIAL_NEEDS_IMAGES = [
  specialImage1,
  specialImage2,
  specialImage3,
  specialImage4,
  specialImage5,
  specialImage6,
  specialImage7,
  specialImage8,
  specialImage9,
  specialImage10,
  specialImage11,
  specialImage12,
  specialImage13,
  specialImage14,
]

export default function SpecialEducationNeeds() {
  usePageTitle(PAGE_TITLES.specialEducationNeeds)

  return (
    <main>
      <PageHero
        title="Special Education Needs"
        breadcrumb="Special Education Needs"
      />

      <section className="bg-[#eef5ff] py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
            <div className="relative min-h-90 md:min-h-110">
              <img
                src={specialNeedsBannerImg}
                alt="Vasant Valley School Special Education Needs facilities"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#091a4f]/95 via-[#091a4f]/45 to-[#091a4f]/15" />

              <div className="relative z-10 flex min-h-90 flex-col justify-end p-6 md:min-h-110 md:p-10 lg:p-12">
                <span className="mb-3 text-xs font-semibold tracking-[0.2em] text-amber-400 uppercase">
                  Special Education Needs
                </span>
                <div className="mb-5 h-0.5 w-8 bg-amber-400" />

                <h2 className="max-w-4xl text-lg font-semibold leading-relaxed text-white md:text-2xl">
                  Vasant Valley School has a multi-disciplinary Special
                  Education Needs Section, consisting of Special Education
                  teachers, Occupational Therapists, Physiotherapists,
                  Language Therapists, Psychologists and a Dyslexia Therapist.
                </h2>
              </div>
            </div>

            <div className="space-y-4 px-6 py-6 text-sm leading-relaxed text-gray-600 md:px-10 md:py-8 md:text-base lg:px-12">
              <p>
                The inclusive model of special education is followed and
                children with additional needs are supported within the
                general education classroom. Occupational Therapy,
                Physiotherapy and Language Therapy are provided within school
                hours. The school has a fully equipped Occupational Therapy
                room, with state-of-the-art facilities for Occupational
                Therapy, Physiotherapy and Sensory Integration.
              </p>

              <p>
                Each child has an Individual Education Plan (IEP) and all
                intervention is specific and individualised. The focus is on
                building skills based on the strengths and affinities of each
                child. The Early Intervention Programme is an outside
                classroom programme for younger children who are not yet ready
                for an in-class experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
              Special Education Needs
            </span>
            <div className="mt-2 mb-4 h-0.5 w-8 bg-amber-400" />
            <h2
              className="text-2xl font-black md:text-3xl"
              style={{ color: 'rgb(13, 59, 134)' }}
            >
              Facilities in Action
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SPECIAL_NEEDS_IMAGES.map((src, index) => (
              <div
                key={src}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm"
              >
                <div className="relative aspect-4/3">
                  <img
                    src={src}
                    alt={`Special Education Needs facility ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#091a4f]/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

