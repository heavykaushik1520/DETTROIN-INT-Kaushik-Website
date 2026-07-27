import { Link } from 'react-router-dom'
import educationImg from '../../assets/img/homepage/image-vasant.png'

export default function EducationPreparation() {
  return (
    <section className="bg-[#fdf2f3] py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="overflow-hidden rounded-3xl order-2 lg:order-1">
            <img
              src={educationImg}
              alt="Education is preparation for life at Vasant Valley School"
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
              School Life
            </span>
            <div className="mt-2 mb-5 h-0.5 w-8 bg-amber-400" />

            <h2
              className="mb-5 text-3xl font-black leading-tight md:text-4xl"
              style={{ color: 'rgb(158, 14, 33)' }}
            >
              Education is
              <br />
              preparation for life.
            </h2>

            <p className="mb-6 text-base leading-relaxed text-gray-600 md:text-lg md:leading-8">
              The school day comprises academic and nonacademic Learning
              Experiences and is planned with special focus on the developmental
              needs of our students. The entire Campus is a &quot;Classroom&quot; and
              learning is continuous.
            </p>

            <Link
              to="/a-day-in-school"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
              style={{ background: 'rgb(158, 14, 33)' }}
            >
              A Day In School
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
