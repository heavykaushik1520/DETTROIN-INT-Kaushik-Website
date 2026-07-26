import { Hero } from '../components/hero'
import { Awards } from '../components/awards'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

export default function Home() {
  usePageTitle(PAGE_TITLES.home)

  return (
    <main>
      <Hero />
      <Awards />
    </main>
  )
}
