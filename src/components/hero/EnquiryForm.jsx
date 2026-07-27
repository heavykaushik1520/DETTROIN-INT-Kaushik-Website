import { useState } from 'react'
import { CalendarCheckIcon, MessageCircleIcon } from '../icons'
import {
  GRADE_OPTIONS,
  HERO_WHATSAPP_HREF,
  inputClassName,
} from '../../constants/hero'

const initialForm = {
  parentName: '',
  phone: '',
  studentName: '',
  grade: '',
  location: '',
  date: '',
  email: '',
}

export default function EnquiryForm() {
  const [form, setForm] = useState(initialForm)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="w-full flex-shrink-0 lg:w-[390px]">
      <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="border-b border-gray-100 px-6 pt-5 pb-3">
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full"
              style={{ background: 'rgb(13, 59, 134)' }}
            >
              <CalendarCheckIcon className="text-white" size={17} />
            </div>
            <div>
              <p className="text-[15px] leading-tight font-extrabold text-gray-900">
                Quick Admission Enquiry
              </p>
              <p className="text-xs text-gray-400">
                Our admissions counsellor will call you shortly.
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-5">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="hero-parent" className="sr-only">
                  Parent Name
                </label>
                <input
                  id="hero-parent"
                  name="parentName"
                  type="text"
                  placeholder="Parent Name *"
                  data-testid="input-hero-parent"
                  className={inputClassName}
                  value={form.parentName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="hero-phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="hero-phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number *"
                  data-testid="input-hero-phone"
                  className={inputClassName}
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="hero-child" className="sr-only">
                Child&apos;s Name
              </label>
              <input
                id="hero-child"
                name="studentName"
                type="text"
                placeholder="Child's Name *"
                data-testid="input-hero-child"
                className={inputClassName}
                value={form.studentName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="hero-grade" className="sr-only">
                Grade Applying For
              </label>
              <select
                id="hero-grade"
                name="grade"
                data-testid="select-hero-grade"
                aria-label="Grade Applying For"
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

            <div>
              <label htmlFor="hero-location" className="sr-only">
                Your Area / Location
              </label>
              <input
                id="hero-location"
                name="location"
                type="text"
                placeholder="Your Area / Location (optional)"
                data-testid="input-hero-location"
                className={inputClassName}
                value={form.location}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="hero-date" className="sr-only">
                Preferred Campus Visit Date
              </label>
              <input
                id="hero-date"
                name="date"
                type="date"
                data-testid="input-hero-date"
                className={inputClassName}
                value={form.date}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="hero-email" className="sr-only">
                Email Address
              </label>
              <input
                id="hero-email"
                name="email"
                type="email"
                placeholder="Email Address (optional)"
                data-testid="input-hero-email"
                className={inputClassName}
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              data-testid="button-hero-submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-lg active:scale-[0.99] disabled:opacity-60"
              style={{ background: 'rgb(9, 26, 79)' }}
            >
              <CalendarCheckIcon size={16} />
              Book a Campus Visit
            </button>

            <a
              href={HERO_WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-hero-whatsapp"
              className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-lg active:scale-[0.99]"
              style={{ background: 'rgb(18, 140, 75)' }}
            >
              <MessageCircleIcon size={17} />
              Chat on WhatsApp
            </a>

            <p className="pt-1 text-center text-[11px] text-gray-400">
              Mon - Sat, 9 AM - 6 PM. No entrance test for Nursery - Class 8
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
