import { PageHero } from '../components/shared'
import { WhyChooseUs } from '../components/whyChoose'
import { Awards } from '../components/awards'
import { BeyondClassroom } from '../components/beyondClassroom'
import { DiscoverHorizon } from '../components/discover'
import { AdmissionJourney } from '../components/admission'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

export default function AboutUs() {
  usePageTitle(PAGE_TITLES.about)

  return (
    <main>
      <PageHero title="About Us" />
      <WhyChooseUs />
      <Awards />
      <BeyondClassroom />
      <DiscoverHorizon />
      <AdmissionJourney />
    </main>
  )
}
