import { ACHIEVEMENT_CARDS } from '../../constants/awards'

function AchievementCard({ award, index }) {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm"
      data-testid={`card-award-${index}`}
    >
      <div
        className="h-1 w-full"
        style={{ background: 'rgb(251, 191, 36)' }}
      />
      <div className="flex-grow p-6">
        <h3
          className="mb-3 text-center text-lg font-black"
          style={{ color: 'rgb(194, 24, 53)' }}
        >
          {award.title}
        </h3>
        <p className="text-sm leading-relaxed whitespace-pre-line text-gray-600">
          {award.description}
        </p>
      </div>
    </div>
  )
}

export default function AwardsGrid() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span
            className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-bold tracking-[0.15em] uppercase"
            style={{
              background: 'rgb(253, 242, 243)',
              color: 'rgb(194, 24, 53)',
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Our Achievements
          </span>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Accolades earned by Vasant Valley School for being one of
            the most respected schools in New Delhi for the
            decade in the educational sphere.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENT_CARDS.map((award, index) => (
            <AchievementCard key={award.title} award={award} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

