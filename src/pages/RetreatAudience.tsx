import React from 'react'
import './RetreatAudience.css'

const icons = [
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>, // Beginners (info)
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/></svg>, // Emerging Writers (book)
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>, // Creative Seekers (clock)
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/></svg>, // Professionals (briefcase)
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 8 22 9 17 14 18 21 12 18 6 21 7 14 2 9 9 8 12 2"/></svg>, // Dreamers (star)
]

const audienceList = [
  {
    title: 'Beginners',
    text: 'Ready to start your writing journey with confidence and expert guidance from the very beginning',
  },
  {
    title: 'Emerging Writers',
    text: 'Working on manuscripts and seeking fresh perspectives, structure, and momentum',
  },
  {
    title: 'Creative Seekers',
    text: 'Anyone feeling stuck in the creative process and yearning for breakthrough inspiration',
  },
  {
    title: 'Professionals',
    text: 'Busy individuals needing a tranquil escape to finally complete that book project',
  },
  {
    title: 'Dreamers',
    text: 'Anyone dreaming of building or completing their book in a supportive, luxurious environment',
  },
]

const RetreatAudience: React.FC = () => {
  return (
    <section className="retreat-audience retreat-section">
      <div className="retreat-audience-inner retreat-inner">
        <h2 className="audience-title">Who Can Join This Journey</h2>
        <div className="audience-grid modern-grid">
          {audienceList.map((aud, idx) => (
            <article className="audience-card" key={aud.title}>
              <div className="audience-card-icon">{icons[idx]}</div>
              <h3 className="audience-card-title">{aud.title}</h3>
              <p className="audience-card-text">{aud.text}</p>
            </article>
          ))}
        </div>
        <p className="audience-note"><strong>No experience required — only passion.</strong> Whether you've written thousands of pages or none at all, this retreat welcomes your unique creative voice.</p>
      </div>
    </section>
  )
}

export default RetreatAudience
