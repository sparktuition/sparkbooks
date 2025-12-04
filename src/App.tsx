import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero.tsx'
import Timeline from './components/Timeline.tsx'
import FeaturedBooks from './components/FeaturedBooks.tsx'
import Collection from './components/Collection.tsx'
import AuthorDetails from './components/AuthorDetails.tsx'
import Stats from './components/Stats.tsx'
import About from './components/About.tsx'
import CollectionsPage from './components/CollectionsPage'
import AuthorServices from './components/AuthorServices'
import SocialPresence from './components/SocialPresence'
import Testimonials from './components/Testimonials'
import UpcomingEvents from './components/UpcomingEvents'
import PressCoverage from './components/PressCoverage'
import BehindTheScenes from './components/BehindTheScenes'
import ContactSection from './components/ContactSection'
import RetreatSection from './components/RetreatSection'
import RetreatPage from './pages/RetreatPage'
import './App.css'

function HomePage() {
  return (
    <div>
      <div data-aos="fade-down" data-aos-duration="900"><Hero /></div>
      <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="15"><Stats /></div>
      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="100"><RetreatSection /></div>
      <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="25"><About /></div>
      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="30"><Timeline /></div>
      <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="35"><FeaturedBooks /></div>
      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="42"><Collection /></div>
      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="50"><AuthorDetails /></div>
      <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="55"><CollectionsPage /></div>
      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="60"><AuthorServices /></div>
      <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="68"><SocialPresence /></div>
      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="75"><Testimonials /></div>
      <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="80"><UpcomingEvents /></div>
      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="85"><PressCoverage /></div>
      <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="92"><BehindTheScenes /></div>

      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="105"><ContactSection /></div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/retreat" element={<RetreatPage />} />
      </Routes>
    </Router>
  )
}

export default App
