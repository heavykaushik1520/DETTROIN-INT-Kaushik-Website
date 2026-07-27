import { useState } from 'react'
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  MessageCircleIcon,
} from '../icons'
import { CONTACT, WHATSAPP_HREF } from '../../constants/contact'
import { FOOTER_EMAIL } from '../../constants/footer'

const inputClassName =
  'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all bg-white'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
}

function ContactCard({ icon, title, children }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-amber-100 hover:shadow-md">
      <div className="flex items-start gap-4">
        <div
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
          style={{
            background: 'rgba(251, 191, 36, 0.12)',
            border: '1px solid rgba(251, 191, 36, 0.2)',
          }}
        >
          <span style={{ color: 'rgb(217, 119, 6)' }}>{icon}</span>
        </div>
        <div className="min-w-0">
          <h3 className="mb-1 text-sm font-extrabold text-gray-900">{title}</h3>
          <div className="text-sm leading-relaxed text-gray-600">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default function ContactSection() {
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
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 inline-block">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">
              Get In Touch
            </span>
            <div className="mt-2 h-0.5 w-8 bg-amber-400" />
          </div>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            We&apos;d love to hear from you
          </h2>
          <p className="text-base text-gray-500">
            Reach out for admissions, campus visits, or any questions about
            Vasant Valley School. Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 xl:gap-14">
          <div className="space-y-4 lg:col-span-2">
            <ContactCard icon={<MapPinIcon size={18} />} title="Visit Us">
              {CONTACT.address.line1}
              <br />
              {CONTACT.address.line2}
            </ContactCard>

            <ContactCard icon={<PhoneIcon size={18} />} title="Call Us">
              <a
                href={CONTACT.phonePrimary.href}
                className="block transition-colors hover:text-[#0d3b86]"
              >
                {CONTACT.phonePrimary.label}
              </a>
              <a
                href={CONTACT.phoneSecondary.href}
                className="block transition-colors hover:text-[#0d3b86]"
              >
                {CONTACT.phoneSecondary.label}
              </a>
            </ContactCard>

            <ContactCard icon={<MailIcon size={18} />} title="Email Us">
              <a
                href={`mailto:${FOOTER_EMAIL}`}
                className="break-all transition-colors hover:text-[#0d3b86]"
              >
                {FOOTER_EMAIL}
              </a>
            </ContactCard>

            <ContactCard icon={<ClockIcon size={18} />} title="Office Hours">
              {CONTACT.hours.days}
              <br />
              {CONTACT.hours.time}
            </ContactCard>

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
              style={{ background: 'rgb(18, 140, 75)' }}
            >
              <MessageCircleIcon size={17} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="border-b border-gray-100 px-6 py-5 sm:px-8">
                <h3 className="text-lg font-extrabold text-gray-900">
                  Send us a message
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Fill in the form and we&apos;ll get back to you shortly.
                </p>
              </div>

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
                    Thank you! Your message has been received. We&apos;ll
                    contact you soon.
                  </div>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Full Name *"
                      className={inputClassName}
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
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

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-email" className="sr-only">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className={inputClassName}
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="sr-only">
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      className={`${inputClassName} appearance-none`}
                      value={form.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Subject *</option>
                      <option value="Admissions">Admissions</option>
                      <option value="Campus Visit">Campus Visit</option>
                      <option value="Fees & Documents">Fees & Documents</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="Your Message *"
                    className={`${inputClassName} resize-y`}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-lg sm:w-auto sm:px-10"
                  style={{ background: 'rgb(9, 26, 79)' }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
          <iframe
            title="Vasant Valley School location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.0312895011443!2d77.14169947495316!3d28.533446788574253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c2dca9fdfe5%3A0xd8b5e5dc38264933!2sVasant%20Valley%20School!5e1!3m2!1sen!2sin!4v1785133064265!5m2!1sen!2sin"
            className="h-64 w-full border-0 md:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

