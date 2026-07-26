import { Link } from 'react-router-dom'
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
} from '../icons'
import { CONTACT, NAV_ITEMS } from '../../constants/contact'
import { FOOTER_EMAIL, FOOTER_SOCIAL } from '../../constants/footer'
import { Logo } from '../shared'

const socialIconBg = { background: 'rgba(255, 255, 255, 0.05)' }
const contactIconBg = {
  background: 'rgba(251, 191, 36, 0.12)',
  border: '1px solid rgba(251, 191, 36, 0.2)',
}

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors duration-200 hover:gap-2 hover:text-white"
    >
      <span className="h-1 w-1 flex-shrink-0 rounded-full bg-current opacity-50 group-hover:opacity-100" />
      {children}
    </Link>
  )
}

function SocialIcon({ name }) {
  switch (name) {
    case 'facebook':
      return <FacebookIcon size={17} />
    case 'instagram':
      return <InstagramIcon size={17} />
    case 'youtube':
      return <YoutubeIcon size={17} />
    default:
      return null
  }
}

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        background:
          'linear-gradient(135deg, rgb(9, 26, 79) 0%, rgb(13, 59, 134) 100%)',
      }}
    >
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Logo
                  to={null}
                  className="h-14 w-14 object-contain"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-[17px] font-black tracking-tight">
                    Horizon
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.18em] text-white/50 uppercase">
                    International School
                  </span>
                </div>
              </div>
              <p className="mb-2 text-sm leading-relaxed text-white/60">
                <strong className="text-white/80">
                  World-Class Education, Indian Values.
                </strong>
              </p>
              <p className="mb-8 text-sm leading-relaxed text-white/50">
                One of the top CBSE schools in Thane — where every child dares to
                dream and becomes a lifelong learner.
              </p>
              <p className="mb-3 text-xs font-semibold tracking-wider text-white/40 uppercase">
                Follow Us
              </p>
              <div className="flex gap-3">
                {FOOTER_SOCIAL.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 transition-all duration-300 hover:border-yellow-400/60 hover:text-yellow-400"
                    style={socialIconBg}
                  >
                    <SocialIcon name={item.icon} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-base font-black text-white">Quick Links</h3>
              <ul className="space-y-2.5">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <FooterLink to={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-base font-black text-white">Get In Touch</h3>
              <ul className="space-y-5">
                <li>
                  <div className="flex items-start gap-3.5">
                    <div
                      className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
                      style={contactIconBg}
                    >
                      <span style={{ color: 'rgb(251, 191, 36)' }}>
                        <MapPinIcon size={16} />
                      </span>
                    </div>
                    <span className="text-sm leading-relaxed text-white/60">
                      {CONTACT.address.line1}
                      <br />
                      {CONTACT.address.line2}
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3.5">
                    <div
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
                      style={contactIconBg}
                    >
                      <span style={{ color: 'rgb(251, 191, 36)' }}>
                        <PhoneIcon size={16} />
                      </span>
                    </div>
                    <div>
                      <a
                        href={CONTACT.phonePrimary.href}
                        className="block text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {CONTACT.phonePrimary.label}
                      </a>
                      <a
                        href={CONTACT.phoneSecondary.href}
                        className="block text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {CONTACT.phoneSecondary.label}
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3.5">
                    <div
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
                      style={contactIconBg}
                    >
                      <span style={{ color: 'rgb(251, 191, 36)' }}>
                        <MailIcon size={16} />
                      </span>
                    </div>
                    <a
                      href={`mailto:${FOOTER_EMAIL}`}
                      className="text-sm leading-relaxed break-all text-white/60 transition-colors hover:text-white"
                    >
                      {FOOTER_EMAIL}
                    </a>
                  </div>
                </li>
              </ul>
              <div className="mt-7">
                <Link to="/contact-us">
                  <button
                    type="button"
                    className="w-full rounded-xl py-3 text-sm font-bold transition-all hover:opacity-90 hover:shadow-lg"
                    style={{
                      background: 'rgb(251, 191, 36)',
                      color: 'rgb(9, 26, 79)',
                    }}
                  >
                    Book a Campus Tour
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-5">
        <p className="text-center text-xs text-white/40">
          © {new Date().getFullYear()} Horizon International School. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
