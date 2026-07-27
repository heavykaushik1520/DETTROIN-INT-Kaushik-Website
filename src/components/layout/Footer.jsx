import { Link } from 'react-router-dom'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutubeIcon,
  MapPinIcon,
  NavigationIcon,
} from '../icons'
import { CONTACT } from '../../constants/contact'
import {
  FOOTER_ABOUT_LINKS,
  FOOTER_CAMPUS,
  FOOTER_EMAIL,
  FOOTER_EXPLORE_LINKS,
  FOOTER_MAP_EMBED_URL,
  FOOTER_MAP_URL,
  FOOTER_QUICK_LINKS,
  FOOTER_SOCIAL,
} from '../../constants/footer'
import { SITE_NAME } from '../../constants/seo'

function FooterMenuLink({ href, children }) {
  const className =
    'text-sm text-white/70 transition-colors duration-200 hover:text-white'

  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    )
  }

  if (href === '#') {
    return (
      <span className="cursor-default text-sm text-white/70">{children}</span>
    )
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  )
}

function FooterMenuList({ items, title }) {
  return (
    <div>
      {title && (
        <h3 className="mb-4 text-sm font-black tracking-wide text-white uppercase">
          {title}
        </h3>
      )}
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <FooterMenuLink href={item.href}>{item.label}</FooterMenuLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SocialIcon({ name }) {
  switch (name) {
    case 'facebook':
      return <FacebookIcon size={17} />
    case 'instagram':
      return <InstagramIcon size={17} />
    case 'linkedin':
      return <LinkedInIcon size={17} />
    case 'youtube':
      return <YoutubeIcon size={17} />
    default:
      return null
  }
}

function CampusMap() {
  return (
    <div className="border-b border-white/10">
      <div className="container mx-auto px-4 pt-12 pb-0">
        <h3 className="mb-4 text-lg font-black text-white">Find Our Campus</h3>
        <a
          href={FOOTER_MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="link-campus-map"
          className="group relative block overflow-hidden rounded-2xl"
          style={{ height: 280 }}
        >
          <iframe
            title={`${FOOTER_CAMPUS.name} campus map`}
            src={FOOTER_MAP_EMBED_URL}
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="pointer-events-none h-full w-full border-0 object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ filter: 'brightness(0.9) saturate(1.05)' }}
          />

          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#091a4f]/60 via-transparent to-[#091a4f]/30" />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="relative flex flex-col items-center">
              <div
                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl"
                style={{
                  background: 'rgb(239, 68, 68)',
                  boxShadow:
                    'rgba(255, 255, 255, 0.9) 0px 0px 0px 4px, rgba(249, 115, 22, 0.5) 0px 0px 30px, rgba(0, 0, 0, 0.4) 0px 8px 24px',
                }}
              >
                <MapPinIcon size={26} className="text-white drop-shadow-lg" />
              </div>
              <div
                className="relative z-0 -mt-1 h-6 w-1"
                style={{
                  background: 'rgb(185, 28, 28)',
                  borderRadius: '0 0 2px 2px',
                }}
              />
              <div
                className="-mt-0.5 h-3 w-10 rounded-full"
                style={{
                  background:
                    'radial-gradient(rgba(0, 0, 0, 0.35), transparent 70%)',
                }}
              />
            </div>
          </div>

          <div
            className="pointer-events-none absolute top-4 left-4 flex max-w-65 items-center gap-3 rounded-2xl px-4 py-3 shadow-xl backdrop-blur-sm"
            style={{
              background: 'rgba(9, 26, 79, 0.85)',
              border: '1px solid rgba(251, 191, 36, 0.35)',
            }}
          >
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
              style={{
                background: 'rgba(251, 191, 36, 0.15)',
                border: '1px solid rgba(251, 191, 36, 0.3)',
              }}
            >
              <MapPinIcon size={18} className="text-amber-400" />
            </div>
            <div>
              <p className="text-xs leading-tight font-black text-white">
                {FOOTER_CAMPUS.name}
              </p>
              <p className="mt-0.5 text-[10px] leading-tight text-white/50">
                {FOOTER_CAMPUS.line1}
                <br />
                {FOOTER_CAMPUS.line2}
              </p>
            </div>
          </div>

          <div
            className="pointer-events-none absolute right-4 bottom-4 flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold shadow-lg transition-all group-hover:scale-105"
            style={{
              background: 'rgb(251, 191, 36)',
              color: 'rgb(9, 26, 79)',
            }}
          >
            <NavigationIcon size={12} />
            Get Directions
          </div>
        </a>
      </div>
    </div>
  )
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
      <CampusMap />

      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <FooterMenuList items={FOOTER_QUICK_LINKS} title="Quick Links" />
          <FooterMenuList items={FOOTER_ABOUT_LINKS} title="About Us" />
          <FooterMenuList items={FOOTER_EXPLORE_LINKS} title="Explore" />

          <div>
            <h3 className="mb-4 text-sm font-black tracking-wide text-white uppercase">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={CONTACT.phonePrimary.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {CONTACT.phonePrimary.label}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${FOOTER_EMAIL}`}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {FOOTER_EMAIL}
                </a>
              </li>
              <li className="text-sm leading-relaxed text-white/70">
                {FOOTER_CAMPUS.line1}
                <br />
                {FOOTER_CAMPUS.line2}
              </li>
              {/* <li>
                <a
                  href={FOOTER_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white transition-colors hover:text-amber-300"
                >
                  SEE MAP
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
          <p className="text-center text-xs text-white/50 sm:text-left">
            © {SITE_NAME} {new Date().getFullYear()}
          </p>

          <ul className="flex items-center justify-center gap-4 sm:justify-end">
            {FOOTER_SOCIAL.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  <SocialIcon name={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
