import heroImg from '../../assets/img/hero-section/hero-section-image-2.png'
import EnquiryForm from './EnquiryForm'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
      aria-label="Hero"
    >
      <div
        className="relative container mx-auto flex min-h-screen items-center justify-center px-4 pt-44 pb-16 lg:justify-end lg:pt-40 lg:pb-16"
        style={{ zIndex: 2 }}
      >
        <EnquiryForm />
      </div>
    </section>
  )
}
