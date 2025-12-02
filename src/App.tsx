import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero.tsx'
import Timeline from './components/Timeline.tsx'
import FeaturedBooks from './components/FeaturedBooks.tsx'
import Collection from './components/Collection.tsx'
import CollectionsShowcase from './components/CollectionsShowcase.tsx'
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
      <Hero />
      <Stats />
      <About />
      <Timeline />
      <FeaturedBooks />
      <Collection />
      <CollectionsShowcase />
      <AuthorDetails />
      <CollectionsPage />
      <AuthorServices />
      <SocialPresence />
      <Testimonials />
      <UpcomingEvents />
      <PressCoverage />
      <BehindTheScenes />
      <RetreatSection />
      <ContactSection />
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
