import { useState } from 'react'
import { PageHero } from '../components/shared'
import { usePageTitle } from '../hooks/usePageTitle'
import { PAGE_TITLES } from '../constants/seo'
import {
  BOARD_OPTIONS,
  CAREERS_CONTACT,
  CAREERS_GUIDELINES,
  CAREERS_INTRO,
  TITLE_OPTIONS,
  YEAR_GROUP_OPTIONS,
  SPECIALISATION_OPTIONS,
  careerInputClassName,
  emptyEducationRow,
  emptyEmploymentRow,
} from '../constants/careers'
import { FOOTER_MAP_URL } from '../constants/footer'

const initialForm = {
  specialisation: '',
  title: '',
  firstName: '',
  lastName: '',
  mobile: '',
  email: '',
  dob: '',
  experience: '',
  board: '',
  yearGroup: '',
  specialSection: '',
  resumeName: '',
}

function SectionTitle({ children }) {
  return (
    <h3
      className="mb-4 border-b border-gray-100 pb-2 text-lg font-black"
      style={{ color: 'rgb(194, 24, 53)' }}
    >
      {children}
    </h3>
  )
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-gray-600">
        {label}
        {required ? ' *' : ''}
      </span>
      {children}
    </label>
  )
}

function CareersForm() {
  const [form, setForm] = useState(initialForm)
  const [employment, setEmployment] = useState([
    emptyEmploymentRow(),
    emptyEmploymentRow(),
    emptyEmploymentRow(),
  ])
  const [education, setEducation] = useState([
    emptyEducationRow(),
    emptyEducationRow(),
    emptyEducationRow(),
  ])
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleEmploymentChange(index, field, value) {
    setEmployment((rows) =>
      rows.map((row, i) => (i === index ? { ...row, [field]: value } : row)),
    )
  }

  function handleEducationChange(index, field, value) {
    setEducation((rows) =>
      rows.map((row, i) => (i === index ? { ...row, [field]: value } : row)),
    )
  }

  function handleResumeChange(event) {
    const file = event.target.files?.[0]
    setForm((prev) => ({ ...prev, resumeName: file ? file.name : '' }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
    setEmployment([
      emptyEmploymentRow(),
      emptyEmploymentRow(),
      emptyEmploymentRow(),
    ])
    setEducation([
      emptyEducationRow(),
      emptyEducationRow(),
      emptyEducationRow(),
    ])
  }

  const showSpecialSection = form.yearGroup === 'Special Section'

  return (
    <>
      <div className="mb-12 text-center">
        <h2
          className="mb-3 text-3xl font-black"
          style={{ color: 'rgb(194, 24, 53)' }}
        >
          Contact Us
        </h2>
        <p className="text-base text-gray-600">
          {CAREERS_CONTACT.school}
          <br />
          {CAREERS_CONTACT.address}
        </p>
        <p className="mt-2">
          <a
            href={CAREERS_CONTACT.mapUrl || FOOTER_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-amber-600 hover:underline"
          >
            Explore our location
          </a>
        </p>
        <p className="mt-2 text-sm text-gray-600">
          {CAREERS_CONTACT.phones.map((phone, index) => (
            <span key={phone.href}>
              {index > 0 ? ' , ' : ''}
              <a
                href={phone.href}
                className="transition-colors hover:text-[#c21835]"
              >
                {phone.label}
              </a>
            </span>
          ))}
        </p>
      </div>

      <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-relaxed text-gray-600">
        {CAREERS_INTRO}
      </p>

      <div className="mb-10 rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
        <h2
          className="mb-3 text-2xl font-black"
          style={{ color: 'rgb(194, 24, 53)' }}
        >
          Guidelines
        </h2>
        {CAREERS_GUIDELINES.map((line) => (
          <p key={line} className="text-sm leading-relaxed text-gray-600">
            {line}
          </p>
        ))}
        <p className="mt-3 text-sm text-gray-600">
          You may also email your resume to{' '}
          <a
            href={`mailto:${CAREERS_CONTACT.email}`}
            className="font-semibold text-amber-600 hover:underline"
          >
            {CAREERS_CONTACT.email}
          </a>
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <form className="space-y-8 p-6 sm:p-8" onSubmit={handleSubmit}>
          {submitted && (
            <div
              className="rounded-xl px-4 py-3 text-sm font-medium"
              style={{
                background: 'rgb(236, 253, 245)',
                color: 'rgb(6, 95, 70)',
              }}
              role="status"
            >
              Thank you! Your application has been received. A confirmation
              will be sent to your email.
            </div>
          )}

          <div>
            <SectionTitle>Applied For</SectionTitle>
            <Field label="Area of Specialisation" required>
              <select
                name="specialisation"
                className={careerInputClassName}
                value={form.specialisation}
                onChange={handleChange}
                required
              >
                <option value="">- Select -</option>
                {SPECIALISATION_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div>
            <SectionTitle>Applicant Details</SectionTitle>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Title" required>
                <select
                  name="title"
                  className={careerInputClassName}
                  value={form.title}
                  onChange={handleChange}
                  required
                >
                  <option value="">- Select -</option>
                  {TITLE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="First Name" required>
                <input
                  name="firstName"
                  type="text"
                  maxLength={50}
                  className={careerInputClassName}
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </Field>
              <Field label="Last Name" required>
                <input
                  name="lastName"
                  type="text"
                  maxLength={20}
                  className={careerInputClassName}
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </Field>
              <Field label="Mobile No" required>
                <input
                  name="mobile"
                  type="tel"
                  maxLength={10}
                  className={careerInputClassName}
                  value={form.mobile}
                  onChange={handleChange}
                  required
                />
              </Field>
              <Field label="E-Mail" required>
                <input
                  name="email"
                  type="email"
                  maxLength={50}
                  className={careerInputClassName}
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Field>
              <Field label="Date of Birth">
                <input
                  name="dob"
                  type="date"
                  className={careerInputClassName}
                  value={form.dob}
                  onChange={handleChange}
                />
              </Field>
            </div>
          </div>

          <div>
            <SectionTitle>Experience</SectionTitle>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Total Teaching Experience" required>
                <input
                  name="experience"
                  type="text"
                  maxLength={20}
                  className={careerInputClassName}
                  value={form.experience}
                  onChange={handleChange}
                  required
                />
              </Field>
              <Field label="Board" required>
                <select
                  name="board"
                  className={careerInputClassName}
                  value={form.board}
                  onChange={handleChange}
                  required
                >
                  <option value="">- Select -</option>
                  {BOARD_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
              <Field
                label="Which year group of children would you like to work with?"
                required
              >
                <select
                  name="yearGroup"
                  className={careerInputClassName}
                  value={form.yearGroup}
                  onChange={handleChange}
                  required
                >
                  <option value="">- Select -</option>
                  {YEAR_GROUP_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
              {showSpecialSection && (
                <Field label="If special section, specify" required>
                  <input
                    name="specialSection"
                    type="text"
                    maxLength={50}
                    className={careerInputClassName}
                    value={form.specialSection}
                    onChange={handleChange}
                    required
                  />
                </Field>
              )}
            </div>
          </div>

          <div>
            <SectionTitle>Employment Details</SectionTitle>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-[720px] w-full text-left text-sm">
                <thead className="bg-gray-50 text-xs font-semibold text-gray-600">
                  <tr>
                    <th className="px-3 py-3">Name of the School & Address</th>
                    <th className="px-3 py-3">Designation</th>
                    <th className="px-3 py-3">Class & Subjects Taught</th>
                    <th className="px-3 py-3">Duration</th>
                    <th className="px-3 py-3">Reason of Leaving</th>
                  </tr>
                </thead>
                <tbody>
                  {employment.map((row, index) => (
                    <tr key={`emp-${index}`} className="border-t border-gray-100">
                      {[
                        'school',
                        'designation',
                        'classesSubjects',
                        'duration',
                        'reason',
                      ].map((field) => (
                        <td key={field} className="px-2 py-2">
                          <input
                            type="text"
                            className="w-full rounded-lg border-0 bg-transparent px-2 py-2 text-sm text-gray-700 outline-none focus:ring-1 focus:ring-red-100"
                            value={row[field]}
                            onChange={(event) =>
                              handleEmploymentChange(
                                index,
                                field,
                                event.target.value,
                              )
                            }
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 flex justify-end gap-2">
              <button
                type="button"
                className="rounded-lg bg-[#9e0e21] px-3 py-1.5 text-xs font-bold text-white"
                onClick={() =>
                  setEmployment((rows) =>
                    rows.length < 5
                      ? [...rows, emptyEmploymentRow()]
                      : rows,
                  )
                }
              >
                + Add
              </button>
              <button
                type="button"
                className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-bold text-gray-700"
                onClick={() =>
                  setEmployment((rows) =>
                    rows.length > 1 ? rows.slice(0, -1) : rows,
                  )
                }
              >
                Remove
              </button>
            </div>
          </div>

          <div>
            <SectionTitle>Education Information</SectionTitle>
            <p className="mb-3 text-xs text-gray-500">
              Please start most recent and include any Certifications
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-[900px] w-full text-left text-sm">
                <thead className="bg-gray-50 text-xs font-semibold text-gray-600">
                  <tr>
                    <th className="px-3 py-3">Certificate/Degree</th>
                    <th className="px-3 py-3">Year of Passing</th>
                    <th className="px-3 py-3">Board/University</th>
                    <th className="px-3 py-3">Institution Name and Location</th>
                    <th className="px-3 py-3">Subjects</th>
                    <th className="px-3 py-3">Subject Specialization</th>
                    <th className="px-3 py-3">Aggregate %age</th>
                  </tr>
                </thead>
                <tbody>
                  {education.map((row, index) => (
                    <tr key={`edu-${index}`} className="border-t border-gray-100">
                      {[
                        'degree',
                        'year',
                        'board',
                        'institution',
                        'subjects',
                        'specialization',
                        'percentage',
                      ].map((field) => (
                        <td key={field} className="px-2 py-2">
                          <input
                            type="text"
                            className="w-full rounded-lg border-0 bg-transparent px-2 py-2 text-sm text-gray-700 outline-none focus:ring-1 focus:ring-red-100"
                            value={row[field]}
                            onChange={(event) =>
                              handleEducationChange(
                                index,
                                field,
                                event.target.value,
                              )
                            }
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 flex justify-end gap-2">
              <button
                type="button"
                className="rounded-lg bg-[#9e0e21] px-3 py-1.5 text-xs font-bold text-white"
                onClick={() =>
                  setEducation((rows) =>
                    rows.length < 5
                      ? [...rows, emptyEducationRow()]
                      : rows,
                  )
                }
              >
                + Add
              </button>
              <button
                type="button"
                className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-bold text-gray-700"
                onClick={() =>
                  setEducation((rows) =>
                    rows.length > 1 ? rows.slice(0, -1) : rows,
                  )
                }
              >
                Remove
              </button>
            </div>
          </div>

          <div>
            <Field label="Upload Resume (PDF or Image)" required>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                className={careerInputClassName}
                onChange={handleResumeChange}
                required
              />
            </Field>
            {form.resumeName && (
              <p className="mt-2 text-xs text-gray-500">
                Selected: {form.resumeName}
              </p>
            )}
            <p className="mt-1 text-xs text-gray-400">
              .jpg, .png or .pdf format
            </p>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 sm:w-auto sm:px-10"
            style={{ background: 'rgb(158, 14, 33)' }}
          >
            Submit Application
          </button>
        </form>
      </div>
    </>
  )
}

export default function Careers() {
  usePageTitle(PAGE_TITLES.careers)

  return (
    <main>
      <PageHero title="Careers" breadcrumb="Careers" />

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <CareersForm />
        </div>
      </section>
    </main>
  )
}
