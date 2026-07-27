import { PageHero } from '../components/shared'
import PlacementsContent from '../components/careers/PlacementsContent'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

export default function Placements() {
  usePageTitle(PAGE_TITLES.placements)

  return (
    <main>
      <PageHero title="Placements" breadcrumb="Placements" />

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <PlacementsContent />
        </div>
      </section>
    </main>
  )
}
