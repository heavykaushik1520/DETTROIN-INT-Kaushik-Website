import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../icons'
import { BEYOND_IMAGES, BEYOND_TAGS } from '../../constants/beyondClassroom'

const tagStyle = {
  background: 'rgb(248, 250, 252)',
  color: 'rgb(158, 14, 33)',
  border: '1.5px solid rgb(226, 232, 240)',
  borderRadius: '9999px',
}

export default function BeyondClassroom() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-16 lg:flex-row xl:gap-24">
          <div className="order-2 max-w-lg flex-1 lg:order-1">
            <div className="mb-5 inline-block">
              <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
                Extra Curricular
              </span>
              <div className="mt-2 h-0.5 w-8 bg-amber-400" />
            </div>

            <h2 className="mb-5 text-4xl leading-tight font-extrabold tracking-tight text-gray-900 md:text-5xl">
              Beyond The
              <br />
              <span style={{ color: 'rgb(158, 14, 33)' }}>Classroom</span>
            </h2>

            <p className="mb-3 text-[15px] leading-[1.8] text-gray-600">
              The real aim of education is not only knowledge but also{' '}
              <strong>ACTION.</strong>
            </p>
            <p className="mb-8 text-[15px] leading-[1.8] text-gray-600">
              We provide a rigorous, comprehensive and cohesive learning
              programme that is designed to meet the social, physical and
              cultural needs of our entire student community — preparing them
              for the real world.
            </p>

            <div className="mb-10 flex flex-wrap gap-2">
              {BEYOND_TAGS.map((tag) => (
                <div
                  key={tag}
                  className="cursor-default px-4 py-2 text-sm font-semibold transition-all hover:bg-amber-50"
                  style={tagStyle}
                >
                  {tag}
                </div>
              ))}
            </div>

            <Link
              to="/beyond-the-classroom"
              data-testid="button-beyond-classroom"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{
                background: 'rgb(158, 14, 33)',
                borderRadius: '9999px',
              }}
            >
              Know More
              <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="order-1 flex flex-1 justify-center lg:order-2">
            <div className="relative">
              <div
                className="h-80 w-80 overflow-hidden md:h-96 md:w-96"
                style={{ borderRadius: '20px' }}
              >
                <img
                  alt={BEYOND_IMAGES.main.alt}
                  width="384"
                  height="384"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                  src={BEYOND_IMAGES.main.src}
                />
              </div>

              <div className="absolute -top-4 -right-4 h-28 w-28 overflow-hidden rounded-2xl border-4 border-white shadow-xl">
                <img
                  alt={BEYOND_IMAGES.topRight.alt}
                  width="112"
                  height="112"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                  src={BEYOND_IMAGES.topRight.src}
                />
              </div>

              <div className="absolute -bottom-4 -left-4 h-24 w-24 overflow-hidden rounded-2xl border-4 border-white shadow-xl">
                <img
                  alt={BEYOND_IMAGES.bottomLeft.alt}
                  width="96"
                  height="96"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                  src={BEYOND_IMAGES.bottomLeft.src}
                />
              </div>

              <div
                className="absolute -bottom-6 right-8 bg-white px-5 py-3 shadow-xl"
                style={{
                  border: '1.5px solid rgb(251, 191, 36)',
                  borderRadius: '12px',
                }}
              >
                <p className="mb-0.5 text-xs font-medium text-gray-400">
                  Annual events
                </p>
                <p
                  className="text-xl font-extrabold"
                  style={{ color: 'rgb(158, 14, 33)' }}
                >
                  25+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
