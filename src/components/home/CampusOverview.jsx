import { Link } from 'react-router-dom'
import campusImg from '../../assets/img/infrastructure/infra-banner-1.jpg'
import valleyImg from '../../assets/img/infrastructure/valley-1.png'

const HIGHLIGHTS = [
  {
    label: 'Two Wings',
    detail: 'Connected by an open amphitheatre',
  },
  {
    label: '8 Acres',
    detail: '4 acres built-up, rest lush green',
  },
  {
    label: 'Sandstone',
    detail: 'Red & beige, designed for children',
  },
]

export default function CampusOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div
        className="pointer-events-none absolute top-0 right-0 h-full w-1/2 max-w-xl opacity-[0.07]"
        style={{
          background:
            'radial-gradient(circle at 70% 40%, rgb(158, 14, 33), transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="container relative mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="relative lg:col-span-5">
            <div className="relative h-full min-h-90 overflow-hidden rounded-[2rem]">
              <img
                src={campusImg}
                alt="Vasant Valley School campus"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#9e0e21]/80 via-transparent to-transparent" />

              <div className="absolute right-5 bottom-5 left-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-amber-300 uppercase">
                  Vasant Kunj Campus
                </p>
                <p className="mt-1 text-2xl font-black text-white">
                  Eight acres of learning
                </p>
              </div>
            </div>

            <div className="absolute -right-3 -bottom-4 hidden w-40 overflow-hidden rounded-2xl border-4 border-white shadow-xl lg:block xl:-right-6">
              <img
                src={valleyImg}
                alt="Vasant Valley School entrance"
                className="aspect-square h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-7 lg:pl-8 xl:pl-12">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
              Our Campus
            </span>
            <div className="mt-2 mb-5 h-0.5 w-8 bg-amber-400" />

            <h2
              className="mb-6 text-3xl font-black leading-tight md:text-4xl"
              style={{ color: 'rgb(158, 14, 33)' }}
            >
              Built for children,
              <br />
              grounded in philosophy
            </h2>

            <div className="mb-8 space-y-4 text-base leading-relaxed text-gray-600 md:text-lg md:leading-8">
              <p>
                The School is divided into two wings, with an open amphitheatre
                connecting them. This eight acre campus has a built-up area of
                four acres, while the rest of the space comprises a lush, green
                cover.
              </p>
              <p>
                The red and beige sandstone building was designed and built
                keeping in mind the ideal environment for children, the
                philosophy of the school and evolving paradigms.
              </p>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#9e0e21]/10 bg-[#fdf2f3] px-4 py-4"
                >
                  <p
                    className="text-sm font-black"
                    style={{ color: 'rgb(158, 14, 33)' }}
                  >
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-gray-600">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/infrastructure"
              className="inline-flex w-fit items-center gap-2 rounded-full px-7 py-3 text-sm font-bold tracking-wide text-white uppercase transition-all hover:opacity-90 hover:shadow-lg"
              style={{ background: 'rgb(158, 14, 33)' }}
            >
              Infrastructure
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
