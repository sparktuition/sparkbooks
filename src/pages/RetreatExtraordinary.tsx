import React from 'react'
import './RetreatExtraordinary.css'

const RetreatExtraordinary: React.FC = () => {
  return (
    <section className="retreat-extraordinary retreat-section">
      <div className="retreat-extraordinary-inner retreat-inner">
        <h2 className="retreat-extra-title">What Makes This Retreat Extraordinary</h2>

        <div className="extra-grid">
          <div className="extra-item">
            <div className="extra-top">
              <div className="extra-icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l9 4.5-9 4.5-9-4.5L12 3z" stroke="#0b5a3e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <hr className="extra-divider" />
            </div>
            <h3 className="extra-heading">Inspiring Location</h3>
            <p className="extra-text">Surrounded by pristine Himalayan nature that awakens your deepest creativity and provides endless inspiration</p>
          </div>

          <div className="extra-item">
            <div className="extra-top">
              <div className="extra-icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2 4 4 .5-3 2 1 4-4-2-4 2 1-4-3-2 4-.5L12 2z" stroke="#0b5a3e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <hr className="extra-divider" />
            </div>
            <h3 className="extra-heading">Premium Comfort</h3>
            <p className="extra-text">A luxury stay that prioritises silence, comfort, and peace — essential ingredients for creative breakthrough</p>
          </div>

          <div className="extra-item">
            <div className="extra-top">
              <div className="extra-icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6h12M6 12h12M6 18h12" stroke="#0b5a3e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <hr className="extra-divider" />
            </div>
            <h3 className="extra-heading">Flexible Writing Time</h3>
            <p className="extra-text">Free-flowing creative sessions without rigid schedules, allowing your imagination to unfold naturally</p>
          </div>

          <div className="extra-item">
            <div className="extra-top">
              <div className="extra-icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M2 12h20" stroke="#0b5a3e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <hr className="extra-divider" />
            </div>
            <h3 className="extra-heading">Expert Mentorship</h3>
            <p className="extra-text">Personalised creative guidance from acclaimed authors who understand your journey intimately</p>
          </div>

          <div className="extra-item">
            <div className="extra-top">
              <div className="extra-icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s4-4 6-6 4-6 4-10c0-4-3-6-7-6s-7 2-7 6c0 4 2 8 4 10s6 6 6 6" stroke="#0b5a3e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <hr className="extra-divider" />
            </div>
            <h3 className="extra-heading">Authentic Environment</h3>
            <p className="extra-text">Real Himalayan villa with genuine property photographs — transparency and trust are our foundation</p>
          </div>

          <div className="extra-item">
            <div className="extra-top">
              <div className="extra-icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21h18M4 7h16M7 3h10" stroke="#0b5a3e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <hr className="extra-divider" />
            </div>
            <h3 className="extra-heading">Transformative Experience</h3>
            <p className="extra-text">Gentle, non-structured sessions designed to nurture creativity and help you discover your unique voice</p>
          </div>
        </div>

        <p className="extra-conclusion">This is more than a retreat — it's a profound journey into your imagination, where silence becomes your canvas and nature becomes your muse.</p>
      </div>
    </section>
  )
}

export default RetreatExtraordinary
