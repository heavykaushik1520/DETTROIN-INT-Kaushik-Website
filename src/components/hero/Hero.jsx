import heroImg from '../../assets/img/hero-section/hero-section-image-2.png'
import HeroContent from './HeroContent'
import EnquiryForm from './EnquiryForm'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-blue-900/60" aria-hidden="true" />

      <div
        className="relative container mx-auto px-4 pt-48 pb-16 lg:px-8 lg:pt-44 lg:pb-16"
        style={{ zIndex: 2 }}
      >
        <div className="flex flex-col items-center gap-10 lg:flex-row xl:gap-16">
          <HeroContent />
          <EnquiryForm />
        </div>
      </div>
    </section>
  )
}
