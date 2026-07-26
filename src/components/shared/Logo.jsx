import { Link } from 'react-router-dom'
import { LOGO_ALT, LOGO_SRC } from '../../constants/brand'

export default function Logo({ className = 'h-14 w-auto object-contain', to = '/' }) {
  const image = (
    <img
      alt={LOGO_ALT}
      width="56"
      height="56"
      className={className}
      src={LOGO_SRC}
    />
  )

  if (!to) return image

  return (
    <Link to={to} className="flex shrink-0 items-center gap-2">
      {image}
    </Link>
  )
}
