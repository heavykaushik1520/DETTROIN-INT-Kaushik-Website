import { PageHero } from '../components/shared'
import { AdmissionForm } from '../components/admissions'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

export default function Admissions() {
  usePageTitle(PAGE_TITLES.admissions)

  return (
    <main>
      <PageHero title="Admissions" />
      <AdmissionForm />
    </main>
  )
}
