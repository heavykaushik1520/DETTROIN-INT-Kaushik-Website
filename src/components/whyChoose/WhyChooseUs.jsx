import { Link } from 'react-router-dom'
import {
  BadgeCheckIcon,
  BookOpenIcon,
  BusIcon,
  CalendarCheckIcon,
  GraduationCapIcon,
  MapPinIcon,
  ShieldIcon,
} from '../icons'
import { WHY_CHOOSE_BENEFITS, WHY_CHOOSE_STATS } from '../../constants/whyChoose'

function BenefitIcon({ name, color }) {
  const className = 'h-6 w-6'
  let icon = null

  switch (name) {
    case 'graduation':
      icon = <GraduationCapIcon className={className} size={24} />
      break
    case 'book':
      icon = <BookOpenIcon className={className} size={24} />
      break
    case 'mapPin':
      icon = <MapPinIcon className={className} size={24} />
      break
    case 'badge':
      icon = <BadgeCheckIcon className={className} size={24} />
      break
    case 'shield':
      icon = <ShieldIcon className={className} size={24} />
      break
    case 'bus':
      icon = <BusIcon className={className} size={24} />
      break
    default:
      return null
  }

  return <span style={{ color }}>{icon}</span>
}

function BenefitCard({ benefit, index }) {
  return (
    <div
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-amber-100 hover:shadow-md"
      data-testid={`card-benefit-${index}`}
    >
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
        style={{ background: benefit.iconBg }}
      >
        <BenefitIcon name={benefit.icon} color={benefit.iconColor} />
      </div>
      <h3 className="mb-1.5 text-sm leading-snug font-extrabold text-gray-900">
        {benefit.title}
      </h3>
      <p className="text-xs leading-relaxed text-gray-500">
        {benefit.description}
      </p>
    </div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="py-20" style={{ background: 'rgb(248, 250, 252)' }}>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
              Why Choose Us
            </span>
            <div className="mx-auto mt-2 h-0.5 w-8 bg-amber-400" />
          </div>
          <h2 className="mb-3 text-3xl leading-tight font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Why Parents Trust{' '}
            <span style={{ color: 'rgb(9, 26, 79)' }}>
              Horizon International School
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-base text-gray-500">
            A school that cares as much about character as it does about
            academic results — right here in Thane.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_BENEFITS.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              benefit={benefit}
              index={index}
            />
          ))}
        </div>

        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-4">
            {WHY_CHOOSE_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-all hover:border-amber-200 hover:shadow-md"
                style={{ transition: 'opacity 0.5s, transform 0.5s' }}
              >
                <div className="mb-1 text-2xl leading-none font-extrabold text-[#091a4f]">
                  {stat.value}
                </div>
                <div className="text-xs leading-snug font-medium text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              to="/admissions"
              data-testid="btn-about-book-visit"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-[#091a4f] transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{
                background: 'rgb(251, 191, 36)',
                borderRadius: '9999px',
              }}
            >
              <CalendarCheckIcon size={16} />
              Book a Campus Visit
            </Link>
            <Link
              to="/about-horizon-international-school"
              data-testid="btn-about-learn-more"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{
                background: 'rgb(9, 26, 79)',
                borderRadius: '9999px',
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
