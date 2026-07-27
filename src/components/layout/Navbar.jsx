import {
  PhoneIcon,
  WhatsAppIcon,
  ClockIcon,
  MapPinIcon,
  MenuIcon,
  CloseIcon,
} from '../icons'
import { CONTACT, WHATSAPP_HREF } from '../../constants/contact'
import { Logo } from '../shared'
import MainNav from './MainNav'

function ContactDetails({ compact = false, scrolled = false }) {
  const textMuted = scrolled
    ? 'text-xs text-gray-500 transition-colors'
    : 'text-xs text-white/80 transition-colors'
  const iconClass = scrolled
    ? 'mt-0.5 shrink-0 text-amber-500 transition-colors'
    : 'mt-0.5 shrink-0 text-amber-300 transition-colors'
  const phonePrimary = scrolled
    ? 'block text-sm font-semibold text-gray-900 transition-colors hover:text-[#c21835]'
    : 'block text-sm font-semibold text-white transition-colors hover:text-amber-200'
  const phoneSecondary = scrolled
    ? 'block text-xs text-gray-500 transition-colors hover:text-gray-800'
    : 'block text-xs text-white/80 transition-colors hover:text-white'
  const divider = scrolled
    ? 'h-8 w-px bg-gray-200 transition-colors'
    : 'h-8 w-px bg-white/20 transition-colors'

  return (
    <>
      <div className="flex items-start gap-2">
        <PhoneIcon className={iconClass} />
        <div>
          <a href={CONTACT.phonePrimary.href} className={phonePrimary}>
            {CONTACT.phonePrimary.label}
          </a>
          <a href={CONTACT.phoneSecondary.href} className={phoneSecondary}>
            {CONTACT.phoneSecondary.label}
          </a>
        </div>
      </div>

      {!compact && <div className={divider} />}

      <div className="flex items-start gap-2">
        <ClockIcon className={iconClass} />
        <div>
          <p className={textMuted}>{CONTACT.hours.days}</p>
          <p className={textMuted}>{CONTACT.hours.time}</p>
        </div>
      </div>

      {!compact && <div className={divider} />}

      <div className="flex items-start gap-2">
        <MapPinIcon className={iconClass} />
        <div>
          <p className={textMuted}>{CONTACT.address.line1}</p>
          <p className={textMuted}>{CONTACT.address.line2}</p>
        </div>
      </div>
    </>
  )
}

export default function Navbar({ menuOpen, setMenuOpen, scrolled = false }) {
  return (
    <>
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'border-b border-gray-200' : 'border-b border-white/10'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-2.5 lg:gap-6 lg:py-2">
          <Logo className="h-10 w-auto object-contain transition-all duration-300 sm:h-12 lg:h-14" />

          <div className="ml-auto hidden items-center gap-8 lg:flex">
            <ContactDetails scrolled={scrolled} />
            <div
              className={
                scrolled
                  ? 'h-8 w-px bg-gray-200 transition-colors'
                  : 'h-8 w-px bg-white/20 transition-colors'
              }
            />
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-navbar-whatsapp"
              className="animate-glow-up flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-white transition-all hover:opacity-90"
              style={{ background: 'rgb(37, 211, 102)' }}
            >
              <WhatsAppIcon />
              Admission Enquiry
            </a>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <a
              href={CONTACT.phonePrimary.href}
              data-testid="link-navbar-call-mobile"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-[#9e0e21] transition-transform active:scale-95"
              aria-label="Call to book a visit"
            >
              <PhoneIcon size={16} />
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-navbar-whatsapp-mobile"
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform active:scale-95"
              aria-label="Admission Enquiry on WhatsApp"
              style={{ background: 'rgb(37, 211, 102)' }}
            >
              <WhatsAppIcon size={16} />
            </a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-900 transition-colors active:scale-95"
              data-testid="button-mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="max-h-[min(78vh,640px)] overflow-y-auto border-b border-gray-200 bg-white lg:hidden">
          <div className="container mx-auto px-4 py-3">
            <MainNav
              mobile
              scrolled
              onNavigate={() => setMenuOpen(false)}
            />
            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-gray-100 pt-4 pb-1">
              <a
                href={CONTACT.phonePrimary.href}
                className="flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-3 py-3 text-xs font-bold text-[#9e0e21]"
              >
                <PhoneIcon size={14} />
                Call
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-xs font-bold text-white"
                style={{ background: 'rgb(37, 211, 102)' }}
              >
                <WhatsAppIcon size={14} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
