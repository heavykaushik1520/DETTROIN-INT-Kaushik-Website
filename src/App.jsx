import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import AwardsAchievements from './pages/AwardsAchievements'
import ContactUs from './pages/ContactUs'
import Gallery from './pages/Gallery'
import AboutUs from './pages/AboutUs'
import VisionPhilosophy from './pages/VisionPhilosophy'
import CenterOfExcellence from './pages/CenterOfExcellence'
import OurTeam from './pages/OurTeam'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/vision-philosophy" element={<VisionPhilosophy />} />
          <Route path="/center-of-excellence" element={<CenterOfExcellence />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/awards-achievements" element={<AwardsAchievements />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
