import heroImg from '../../assets/img/hero-section/hero-senior-secondary.webp'

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-blue-900/60" aria-hidden="true" />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Senior Secondary
          </h1>
          <p className="mt-4 text-base text-white/90 sm:text-lg md:text-xl">
            Building futures with excellence in education.
          </p>
        </div>
      </div>
    </section>
  )
}
