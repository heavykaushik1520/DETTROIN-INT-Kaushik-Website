import { useState } from 'react'
import { GRADE_OPTIONS, inputClassName } from '../../constants/hero'
import { CalendarCheckIcon } from '../icons'

const initialForm = {
  parentName: '',
  phone: '',
  email: '',
  studentName: '',
  grade: '',
  message: '',
}

export default function AdmissionForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-block">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
              Admissions 2026-27
            </span>
            <div className="mx-auto mt-2 h-0.5 w-8 bg-amber-400" />
          </div>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Admission Enquiry Form
          </h2>
          <p className="text-base text-gray-500">
            Share a few details and our admissions team will get in touch with
            you shortly.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <form className="space-y-4 p-6 sm:p-8" onSubmit={handleSubmit}>
            {submitted && (
              <div
                className="rounded-xl px-4 py-3 text-sm font-medium"
                style={{
                  background: 'rgb(236, 253, 245)',
                  color: 'rgb(6, 95, 70)',
                }}
                role="status"
              >
                Thank you! Your admission enquiry has been received. We&apos;ll
                call you soon.
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="admission-parent" className="sr-only">
                  Parent Name
                </label>
                <input
                  id="admission-parent"
                  name="parentName"
                  type="text"
                  placeholder="Parent Name *"
                  className={inputClassName}
                  value={form.parentName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="admission-phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="admission-phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number *"
                  className={inputClassName}
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="admission-email" className="sr-only">
                Email Address
              </label>
              <input
                id="admission-email"
                name="email"
                type="email"
                placeholder="Email Address (optional)"
                className={inputClassName}
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="admission-child" className="sr-only">
                  Child&apos;s Name
                </label>
                <input
                  id="admission-child"
                  name="studentName"
                  type="text"
                  placeholder="Child's Name *"
                  className={inputClassName}
                  value={form.studentName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="admission-grade" className="sr-only">
                  Grade Applying For
                </label>
                <select
                  id="admission-grade"
                  name="grade"
                  className={`${inputClassName} appearance-none`}
                  value={form.grade}
                  onChange={handleChange}
                  required
                >
                  <option value="">Grade Applying For *</option>
                  {GRADE_OPTIONS.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="admission-message" className="sr-only">
                Message
              </label>
              <textarea
                id="admission-message"
                name="message"
                rows="4"
                placeholder="Any additional message (optional)"
                className={`${inputClassName} resize-y`}
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
              style={{ background: 'rgb(158, 14, 33)' }}
            >
              <CalendarCheckIcon size={16} />
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
