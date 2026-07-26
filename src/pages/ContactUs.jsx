import { PageHero } from '../components/shared'
import { ContactSection } from '../components/contact'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

export default function ContactUs() {
  usePageTitle(PAGE_TITLES.contact)

  return (
    <main>
      <PageHero title="Connect With Us" />
      <ContactSection />
    </main>
  )
}
