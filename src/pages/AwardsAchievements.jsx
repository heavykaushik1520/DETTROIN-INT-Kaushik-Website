import { AwardsPageHero, AwardsGrid } from '../components/awards'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

export default function AwardsAchievements() {
  usePageTitle(PAGE_TITLES.awards)

  return (
    <main>
      <AwardsPageHero />
      <AwardsGrid />
    </main>
  )
}
