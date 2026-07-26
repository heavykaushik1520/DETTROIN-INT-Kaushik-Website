import { PageHero } from '../components/shared'
import { PhotoGallery } from '../components/gallery'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'

export default function Gallery() {
  usePageTitle(PAGE_TITLES.gallery)

  return (
    <main>
      <PageHero title="Photo Gallery" />
      <PhotoGallery />
    </main>
  )
}
