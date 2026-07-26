import { Link } from 'react-router-dom'
import { FileTextIcon } from '../icons'
import {
  ACADEMICS_ACADEMIC_DOCS,
  ACADEMICS_DOCUMENTS,
  ACADEMICS_GENERAL,
  ACADEMICS_INFRASTRUCTURE,
  ACADEMICS_MANDATORY,
  ACADEMICS_STAFF,
} from '../../constants/academics'
import {
  InfoTable,
  SectionHeading,
  VacantDocsTable,
  VacantResultsTable,
} from './AcademicsTables'

export default function AcademicsContent() {
  return (
    <section className="flex-grow bg-white py-16">
      <div className="container mx-auto max-w-5xl space-y-14 px-4">
        <div>
          <SectionHeading letter="A" title="General Information" />
          <InfoTable rows={ACADEMICS_GENERAL} />
        </div>

        <div>
          <SectionHeading letter="B" title="Documents and Information" />
          <VacantDocsTable documents={ACADEMICS_DOCUMENTS} />
        </div>

        <div>
          <SectionHeading letter="C" title="Academic Details & Results" />
          <VacantDocsTable documents={ACADEMICS_ACADEMIC_DOCS} />
          <VacantResultsTable title="Result — Class X" />
          <VacantResultsTable title="Result — Class XII" />
        </div>

        <div>
          <SectionHeading letter="D" title="Staff (Teaching)" />
          <InfoTable rows={ACADEMICS_STAFF} />
        </div>

        <div>
          <SectionHeading letter="E" title="School Infrastructure" />
          <InfoTable rows={ACADEMICS_INFRASTRUCTURE} />
        </div>

        <div>
          <SectionHeading letter="F" title="Mandatory Public Disclosure" />
          <VacantDocsTable documents={ACADEMICS_MANDATORY} />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
              style={{ background: 'rgb(240, 244, 255)' }}
            >
              <span style={{ color: 'rgb(13, 59, 134)' }}>
                <FileTextIcon size={20} />
              </span>
            </div>
            <div>
              <p
                className="text-sm font-black"
                style={{ color: 'rgb(13, 59, 134)' }}
              >
                Declaration
              </p>
              <p className="mt-0.5 text-xs text-gray-400">Coming soon</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
              style={{ background: 'rgb(255, 247, 237)' }}
            >
              <span style={{ color: 'rgb(180, 83, 9)' }}>
                <FileTextIcon size={20} />
              </span>
            </div>
            <div>
              <p
                className="text-sm font-black"
                style={{ color: 'rgb(180, 83, 9)' }}
              >
                Book List 2026–27
              </p>
              <p className="mt-0.5 text-xs text-gray-400">Coming soon</p>
            </div>
          </div>
        </div>

        <div
          className="flex items-start gap-3 rounded-2xl border border-gray-100 p-6"
          style={{ background: 'rgb(248, 250, 255)' }}
        >
          <span
            className="mt-0.5 flex-shrink-0"
            style={{ color: 'rgb(13, 59, 134)' }}
          >
            <FileTextIcon size={18} />
          </span>
          <p className="text-sm leading-relaxed text-gray-600">
            For complete and up-to-date CBSE mandatory disclosures, please refer
            to the{' '}
            <a
              href="https://cbse.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
              style={{ color: 'rgb(13, 59, 134)' }}
            >
              official CBSE website
            </a>{' '}
            or{' '}
            <Link
              to="/contact-us"
              className="font-semibold underline"
              style={{ color: 'rgb(13, 59, 134)' }}
            >
              contact the school administration
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
