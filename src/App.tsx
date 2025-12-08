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
import RetreatHeroLanding from './pages/RetreatHeroLanding'
import RetreatHeroTwoColumn from './pages/RetreatHeroTwoColumn'
import RetreatItinerary from './pages/RetreatItinerary'
import RetreatDaily from './pages/RetreatDaily'
import RetreatMentors from './pages/RetreatMentors'
import RetreatVilla from './pages/RetreatVilla'
import RetreatWhy from './pages/RetreatWhy'
import RetreatSeats from './pages/RetreatSeats'
import RetreatActivities from './pages/RetreatActivities'
import RetreatCTA from './pages/RetreatCTA'
import TransportArrangements from './pages/TransportArrangements'
import RetreatCuisine from './pages/RetreatCuisine'
import RetreatEssentials from './pages/RetreatEssentials'
import RetreatStay from './pages/RetreatStay'
import BookWritingPlan from './pages/BookWritingPlan'

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

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0a0e1a 0%, #0d1525 100%)' }}>
      <h1 style={{ fontSize: '3rem', color: '#fff', margin: '0 0 1rem 0' }}>404</h1>
      <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem' }}>Page not found</p>
      <a href="/" style={{ padding: '12px 24px', background: '#16f6a8', color: '#00221a', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>Go Home</a>
    </div>
  )
}

// Wrapper for individual sections
function SectionPage({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ paddingTop: '60px' }}>
      {children}
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/retreat" element={<RetreatPage />} />
        
        {/* Individual section routes */}
        <Route path="/stats" element={<SectionPage><Stats /></SectionPage>} />
        <Route path="/retreat-overview" element={<SectionPage><RetreatSection /></SectionPage>} />
        <Route path="/about" element={<SectionPage><About /></SectionPage>} />
        <Route path="/timeline" element={<SectionPage><Timeline /></SectionPage>} />
        <Route path="/books" element={<SectionPage><FeaturedBooks /></SectionPage>} />
        <Route path="/collection" element={<SectionPage><Collection /></SectionPage>} />
        <Route path="/author" element={<SectionPage><AuthorDetails /></SectionPage>} />
        <Route path="/collections-page" element={<SectionPage><CollectionsPage /></SectionPage>} />
        <Route path="/services" element={<SectionPage><AuthorServices /></SectionPage>} />
        <Route path="/social" element={<SectionPage><SocialPresence /></SectionPage>} />
        <Route path="/testimonials" element={<SectionPage><Testimonials /></SectionPage>} />
        <Route path="/events" element={<SectionPage><UpcomingEvents /></SectionPage>} />
        <Route path="/press" element={<SectionPage><PressCoverage /></SectionPage>} />
        <Route path="/behind-scenes" element={<SectionPage><BehindTheScenes /></SectionPage>} />
        <Route path="/contact" element={<SectionPage><ContactSection /></SectionPage>} />
        
        {/* Retreat individual section routes */}
        <Route path="/retreat/hero" element={<SectionPage><RetreatHeroLanding /></SectionPage>} />
        <Route path="/retreat/overview" element={<SectionPage><RetreatHeroTwoColumn /></SectionPage>} />
        <Route path="/retreat/mentors" element={<SectionPage><RetreatMentors /></SectionPage>} />
        <Route path="/retreat/itinerary" element={<SectionPage><RetreatItinerary /></SectionPage>} />
        <Route path="/retreat/daily" element={<SectionPage><RetreatDaily /></SectionPage>} />
        <Route path="/retreat/activities" element={<SectionPage><RetreatActivities /></SectionPage>} />
        <Route path="/retreat/accommodation" element={<SectionPage><RetreatVilla /></SectionPage>} />
        <Route path="/retreat/stay" element={<SectionPage><RetreatStay /></SectionPage>} />
        <Route path="/retreat/cuisine" element={<SectionPage><RetreatCuisine /></SectionPage>} />
        <Route path="/retreat/essentials" element={<SectionPage><RetreatEssentials /></SectionPage>} />
        <Route path="/retreat/seats" element={<SectionPage><RetreatSeats /></SectionPage>} />
        <Route path="/retreat/transport" element={<SectionPage><TransportArrangements /></SectionPage>} />
        <Route path="/retreat/writing-plan" element={<SectionPage><BookWritingPlan /></SectionPage>} />
        <Route path="/retreat/why" element={<SectionPage><RetreatWhy /></SectionPage>} />
        <Route path="/retreat/cta" element={<SectionPage><RetreatCTA /></SectionPage>} />
        
        {/* Catch-all 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
