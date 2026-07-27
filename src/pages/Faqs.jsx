import { useState } from 'react'
import { PageHero } from '../components/shared'
import { ChevronDownIcon } from '../components/icons'
import { usePageTitle } from '../hooks/usePageTitle'
import { FAQ_ITEMS } from '../constants/faq'
import { PAGE_TITLES } from '../constants/seo'

function FaqItem({ item, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <h2
          className="text-base font-black leading-snug md:text-lg"
          style={{ color: 'rgb(13, 59, 134)' }}
        >
          {item.question}
        </h2>
        <span
          className={`mt-1 shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          style={{ color: 'rgb(13, 59, 134)' }}
        >
          <ChevronDownIcon size={18} />
        </span>
      </button>

      {isOpen && (
        <div className="border-t border-gray-100 px-5 py-4">
          <p className="whitespace-pre-line text-sm leading-relaxed text-gray-600">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  )
}

export default function Faqs() {
  usePageTitle(PAGE_TITLES.faqs)
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <main>
      <PageHero title="Frequently Asked Questions" breadcrumb="FAQs" />

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                index={index}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
