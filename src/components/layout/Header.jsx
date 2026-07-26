import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AdmissionsBanner from './AdmissionsBanner'
import Navbar from './Navbar'
import MainNav from './MainNav'

export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(!isHome)

  useEffect(() => {
    if (!isHome) {
      setScrolled(true)
      return undefined
    }

    function onScroll() {
      setScrolled(window.scrollY > 20)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300"
      role="banner"
    >
      <AdmissionsBanner />
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          scrolled={scrolled}
        />
        <MainNav scrolled={scrolled} />
      </div>
    </header>
  )
}
