import { PageHero } from '../components/shared'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

export default function NewsEvents() {
  usePageTitle(PAGE_TITLES.newsEvents)

  return (
    <main>
      <PageHero title="News & Events" breadcrumb="News & Events" />

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-center text-base leading-relaxed text-gray-600 md:text-lg">
            Stay updated with the latest news, celebrations, and happenings at
            Vasant Valley School. Event listings and announcements will appear
            here.
          </p>
        </div>
      </section>
    </main>
  )
}
