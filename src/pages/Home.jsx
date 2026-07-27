import { Hero } from '../components/hero'
import { Awards } from '../components/awards'
import ExcellenceInDeed from '../components/home/ExcellenceInDeed'
import EducationPreparation from '../components/home/EducationPreparation'
import CampusOverview from '../components/home/CampusOverview'
import LearningWithUnderstanding from '../components/home/LearningWithUnderstanding'
import RecentEvents from '../components/home/RecentEvents'
import { BeyondClassroom } from '../components/beyondClassroom'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

export default function Home() {
  usePageTitle(PAGE_TITLES.home)

  return (
    <main>
      <Hero />
      <Awards />
      <ExcellenceInDeed />
      <EducationPreparation />
      <CampusOverview />
      <LearningWithUnderstanding />
      <RecentEvents />
      <BeyondClassroom />
    </main>
  )
}
