import { Hero } from '../components/hero'
import { Awards } from '../components/awards'
import { AdmissionJourney } from '../components/admission'
import { WhyChooseUs } from '../components/whyChoose'
import { DiscoverRainbow } from '../components/discover'
import { BeyondClassroom } from '../components/beyondClassroom'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

export default function Home() {
  usePageTitle(PAGE_TITLES.home)

  return (
    <main>
      <Hero />
      <Awards />
      <AdmissionJourney />
      <WhyChooseUs />
      <DiscoverRainbow />
      <BeyondClassroom />
    </main>
  )
}
