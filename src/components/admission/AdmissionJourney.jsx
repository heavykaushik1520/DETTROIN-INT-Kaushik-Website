import {
  BadgeCheckIcon,
  ClipboardListIcon,
  MapPinIcon,
  PhoneIcon,
  UserCheckIcon,
} from '../icons'
import { ADMISSION_JOURNEY_STEPS } from '../../constants/admission'

const connectorGradient =
  'linear-gradient(to right, rgb(13, 59, 134), rgb(245, 158, 11))'
const connectorGradientVertical =
  'linear-gradient(rgb(13, 59, 134), rgb(245, 158, 11))'

function StepIcon({ name, className, size }) {
  switch (name) {
    case 'clipboard':
      return <ClipboardListIcon className={className} size={size} />
    case 'phone':
      return <PhoneIcon className={className} size={size} />
    case 'mapPin':
      return <MapPinIcon className={className} size={size} />
    case 'userCheck':
      return <UserCheckIcon className={className} size={size} />
    case 'badgeCheck':
      return <BadgeCheckIcon className={className} size={size} />
    default:
      return null
  }
}

function DesktopStep({ step, index, isLast }) {
  return (
    <div
      className="relative flex flex-1 flex-col items-center px-3 text-center"
      data-testid={`step-journey-${index + 1}`}
    >
      {!isLast && (
        <div
          className="absolute top-8 left-1/2 z-0 h-0.5 w-full"
          aria-hidden="true"
          style={{ background: connectorGradient }}
        />
      )}
      <div
        className="relative z-10 mb-4 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl shadow-md"
        style={{ background: step.color }}
      >
        <StepIcon name={step.icon} className="h-7 w-7 text-white" size={28} />
      </div>
      <span className="mb-1 text-[10px] font-black tracking-widest text-amber-500 uppercase">
        Step {step.step}
      </span>
      <h3 className="mb-2 text-sm leading-snug font-extrabold text-gray-900">
        {step.title}
      </h3>
      <p className="text-xs leading-relaxed text-gray-500">{step.description}</p>
    </div>
  )
}

function MobileStep({ step, index, isLast }) {
  return (
    <div
      className="relative flex items-start gap-5"
      data-testid={`step-journey-mobile-${index + 1}`}
    >
      {!isLast && (
        <div
          className="absolute top-[64px] left-[30px] z-0 h-full w-0.5"
          aria-hidden="true"
          style={{ background: connectorGradientVertical }}
        />
      )}
      <div
        className="z-10 flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-2xl shadow-md"
        style={{ background: step.color }}
      >
        <StepIcon name={step.icon} className="h-6 w-6 text-white" size={24} />
      </div>
      <div className="pt-1">
        <span className="text-[10px] font-black tracking-widest text-amber-500 uppercase">
          Step {step.step}
        </span>
        <h3 className="mt-0.5 mb-1 text-sm font-extrabold text-gray-900">
          {step.title}
        </h3>
        <p className="text-xs leading-relaxed text-gray-500">
          {step.description}
        </p>
      </div>
    </div>
  )
}

export default function AdmissionJourney() {
  return (
    <section className="bg-white py-20" data-testid="section-admission-journey">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
              Simple & Transparent
            </span>
            <div className="mx-auto mt-2 h-0.5 w-8 bg-amber-400" />
          </div>
          <h2
            className="mb-3 text-3xl leading-tight font-extrabold tracking-tight text-gray-900 md:text-4xl"
            style={{ fontFamily: '"DM Sans", sans-serif' }}
          >
            Your Admission Journey at RIS
          </h2>
          <p className="mx-auto max-w-md text-base text-gray-500">
            Five straightforward steps from your first enquiry to your child&apos;s
            first day of school.
          </p>
        </div>

        <div className="relative mb-12 hidden items-start gap-0 lg:flex">
          {ADMISSION_JOURNEY_STEPS.map((step, index) => (
            <DesktopStep
              key={step.step}
              step={step}
              index={index}
              isLast={index === ADMISSION_JOURNEY_STEPS.length - 1}
            />
          ))}
        </div>

        <div className="mx-auto max-w-md space-y-6 lg:hidden">
          {ADMISSION_JOURNEY_STEPS.map((step, index) => (
            <MobileStep
              key={step.step}
              step={step}
              index={index}
              isLast={index === ADMISSION_JOURNEY_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
