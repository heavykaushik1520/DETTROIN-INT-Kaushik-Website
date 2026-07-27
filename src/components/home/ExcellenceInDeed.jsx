import { Link } from 'react-router-dom'
import excellenceImg from '../../assets/img/homepage/image-vasant2.png'

export default function ExcellenceInDeed() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
              Our Philosophy
            </span>
            <div className="mt-2 mb-5 h-0.5 w-8 bg-amber-400" />

            <h2
              className="mb-5 text-3xl font-black leading-tight md:text-4xl"
              style={{ color: 'rgb(158, 14, 33)' }}
            >
              &ldquo;Excellence in Deed&rdquo;
            </h2>

            <p className="mb-6 text-base leading-relaxed text-gray-600 md:text-lg md:leading-8">
              The School&apos;s motto sets the standard for Vasant Valley School.
              Individualized attention for each student, a &quot;process-focused&quot;
              learning framework, equity of all stakeholders and commitment to
              society are the pillars of the School&apos;s philosophy. We believe
              that education is an enjoyable and interactive process.
            </p>

            <Link
              to="/vision-philosophy"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
              style={{ background: 'rgb(158, 14, 33)' }}
            >
              Vision
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src={excellenceImg}
              alt="Vasant Valley School students celebrating excellence on Sports Day"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
