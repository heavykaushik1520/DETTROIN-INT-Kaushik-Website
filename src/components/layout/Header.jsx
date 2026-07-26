import { useState } from 'react'
import AdmissionsBanner from './AdmissionsBanner'
import Navbar from './Navbar'
import MainNav from './MainNav'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300"
      role="banner"
    >
      <AdmissionsBanner />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MainNav />
    </header>
  )
}
