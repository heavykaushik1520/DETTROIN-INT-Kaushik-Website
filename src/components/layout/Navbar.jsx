import {
  PhoneIcon,
  WhatsAppIcon,
  ClockIcon,
  MapPinIcon,
  MenuIcon,
  CloseIcon,
} from '../icons'
import { CONTACT, WHATSAPP_HREF } from '../../constants/contact'
import MainNav from './MainNav'

function ContactDetails({ compact = false }) {
  const textMuted = 'text-xs text-white/80 transition-colors'
  const iconClass =
    'mt-0.5 shrink-0 text-amber-300 transition-colors'

  return (
    <>
      <div className="flex items-start gap-2">
        <PhoneIcon className={iconClass} />
        <div>
          <a
            href={CONTACT.phonePrimary.href}
            className="block text-sm font-semibold text-white transition-colors hover:text-amber-200"
          >
            {CONTACT.phonePrimary.label}
          </a>
          <a
            href={CONTACT.phoneSecondary.href}
            className="block text-xs text-white/80 transition-colors hover:text-white"
          >
            {CONTACT.phoneSecondary.label}
          </a>
        </div>
      </div>

      {!compact && <div className="h-8 w-px bg-white/20 transition-colors" />}

      <div className="flex items-start gap-2">
        <ClockIcon className={iconClass} />
        <div>
          <p className={textMuted}>{CONTACT.hours.days}</p>
          <p className={textMuted}>{CONTACT.hours.time}</p>
        </div>
      </div>

      {!compact && <div className="h-8 w-px bg-white/20 transition-colors" />}

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

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <>
      <div className="border-b border-white/10 transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-2">
          <a href="/" className="flex shrink-0 items-center gap-2">
            <img
              alt="Rainbow International School"
              width="56"
              height="56"
              className="h-14 w-auto object-contain transition-all duration-300"
              src="/ris-logo.png"
            />
          </a>

          <div className="ml-auto hidden items-center gap-8 lg:flex">
            <ContactDetails />
            <div className="h-8 w-px bg-white/20 transition-colors" />
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-navbar-whatsapp"
              className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-white transition-all hover:opacity-90"
              style={{ background: 'rgb(37, 211, 102)' }}
            >
              <WhatsAppIcon />
              Admission Enquiry
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={CONTACT.phonePrimary.href}
              data-testid="link-navbar-call-mobile"
              className="flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-2 text-[10px] font-bold text-[#091a4f] transition-all"
              aria-label="Call to book a visit"
            >
              <PhoneIcon size={14} />
              Book Visit
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-navbar-whatsapp-mobile"
              className="flex items-center gap-1.5 rounded-full px-3 py-2 text-[10px] font-bold text-white"
              aria-label="Admission Enquiry on WhatsApp"
              style={{ background: 'rgb(37, 211, 102)' }}
            >
              <WhatsAppIcon />
              Admissions
            </a>
            <button
              type="button"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center p-2.5 text-white transition-colors"
              data-testid="button-mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="border-b border-white/10 bg-[#091a4f]/95 px-4 py-4 backdrop-blur-sm lg:hidden">
          <div className="container mx-auto flex max-w-lg flex-col gap-5 text-white">
            <div className="flex flex-col gap-4">
              <ContactDetails compact />
            </div>
            <MainNav mobile onNavigate={() => setMenuOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}
