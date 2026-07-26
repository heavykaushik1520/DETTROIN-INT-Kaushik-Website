import { PageHero } from '../components/shared'
import { AcademicsContent } from '../components/academics'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

export default function Academics() {
  usePageTitle(PAGE_TITLES.academics)

  return (
    <main>
      <PageHero title="Academics" />
      <AcademicsContent />
    </main>
  )
}
