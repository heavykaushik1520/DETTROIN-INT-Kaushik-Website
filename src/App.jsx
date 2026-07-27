import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import AwardsAchievements from './pages/AwardsAchievements'
import ContactUs from './pages/ContactUs'
import Gallery from './pages/Gallery'
import AboutUs from './pages/AboutUs'
import AboutVvs from './pages/AboutVvs'
import VisionPhilosophy from './pages/VisionPhilosophy'
import CenterOfExcellence from './pages/CenterOfExcellence'
import ProgrammesOffered from './pages/ProgrammesOffered'
import OurTeam from './pages/OurTeam'
import Faqs from './pages/Faqs'
import Careers from './pages/Careers'
import NewsEvents from './pages/NewsEvents'
import ADayInSchool from './pages/ADayInSchool'
import Infrastructure from './pages/Infrastructure'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-vvs" element={<AboutVvs />} />
          <Route path="/vision-philosophy" element={<VisionPhilosophy />} />
          <Route path="/center-of-excellence" element={<CenterOfExcellence />} />
          <Route path="/programmes-offered" element={<ProgrammesOffered />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/awards-achievements" element={<AwardsAchievements />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/a-day-in-school" element={<ADayInSchool />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
