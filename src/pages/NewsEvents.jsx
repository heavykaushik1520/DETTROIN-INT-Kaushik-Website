import { PageHero } from '../components/shared'
import NewsEventsTimeline from '../components/newsEvents/NewsEventsTimeline'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

export default function NewsEvents() {
  usePageTitle(PAGE_TITLES.newsEvents)

  return (
    <main>
      <PageHero title="News & Events" breadcrumb="News & Events" />
      <NewsEventsTimeline />
    </main>
  )
}
