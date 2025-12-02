import React from 'react'
import './RetreatItinerary.css'

const RetreatItinerary: React.FC = () => {
  return (
    <section className="retreat-itinerary retreat-section">
      <div className="retreat-itinerary-inner retreat-inner">
        <h2 className="itinerary-title">Your Seven-Day Transformative Experience</h2>

        <div className="timeline-wrapper">
          {/* Left Column - Content */}
          <div className="timeline-left">
            <div className="timeline-left-item">
              <h3 className="timeline-left-label">Arrival Day</h3>
              <p className="timeline-left-text">Sunday, 1 March 2026 — Settle into your luxurious villa, meet fellow writers, and embrace the mountain serenity</p>
            </div>

            <div className="timeline-left-item">
              <h3 className="timeline-left-label">Departure Day</h3>
              <p className="timeline-left-text">Sunday, 8 March 2026 — Leave transformed, inspired, and equipped with tools to continue your writing journey</p>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="timeline-right">
            <div className="timeline-connector-line"></div>
            
            <div className="timeline-node">
              <div className="timeline-number">1</div>
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-node">
              <div className="timeline-number">2</div>
              <div className="timeline-dot"></div>
              <div className="timeline-node-label">Days 2-6</div>
              <p className="timeline-node-text">Immersive creative sessions with field experiences, one-on-one mentorship, story development, and uninterrupted writing time</p>
            </div>

            <div className="timeline-node">
              <div className="timeline-number">3</div>
              <div className="timeline-dot"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RetreatItinerary
