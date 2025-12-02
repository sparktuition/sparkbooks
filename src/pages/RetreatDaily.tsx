import React from 'react'
import './RetreatDaily.css'

const RetreatDaily: React.FC = () => {
  return (
    <section className="retreat-daily retreat-section">
      <div className="retreat-daily-inner retreat-inner">
        <h2 className="retreat-daily-title">What Awaits You Each Day</h2>

        {/* Item 1 */}
        <div className="daily-item daily-item-1">
          <div className="daily-content">
            <div className="daily-feature">
              <div className="feature-arrow">→</div>
              <h3 className="feature-title">Nature-Inspired Field Experiences</h3>
              <p className="feature-description">Daily walks through pristine Himalayan landscapes that spark creativity and clear mental blocks</p>
            </div>
          </div>
          <div className="daily-image">
            <img src="/SparkWritersRetreat/jpg (23).jpg" alt="Nature Field" className="daily-img" />
          </div>
        </div>

        {/* Item 2 */}
        <div className="daily-item daily-item-2">
          <div className="daily-content">
            <div className="daily-feature">
              <div className="feature-arrow">→</div>
              <h3 className="feature-title">Real-Time Mentorship Support</h3>
              <p className="feature-description">Continuous access to your mentors for guidance, feedback, and creative breakthroughs</p>
            </div>
          </div>
          <div className="daily-image">
            <img src="/SparkWritersRetreat/jpeg (5).jpeg" alt="Nature Field" className="daily-img" />
         </div>
        </div>

        {/* Item 3 */}
        <div className="daily-item daily-item-3">
          <div className="daily-content">
            <div className="daily-feature">
              <div className="feature-arrow">→</div>
              <h3 className="feature-title">Story Development Sessions</h3>
              <p className="feature-description">Structured workshops on plot, character, narrative arc, and finding your authentic voice</p>
            </div>
          </div>
          <div className="daily-image">
         <img src="/SparkWritersRetreat/jpeg (7).jpeg" alt="Nature Field" className="daily-img" />
         </div>
        </div>

        {/* Item 4 */}
        <div className="daily-item daily-item-4">
          <div className="daily-content">
            <div className="daily-feature">
              <div className="feature-arrow">→</div>
              <h3 className="feature-title">One-on-One Creative Insights</h3>
              <p className="feature-description">Personalised consultations tailored to your specific manuscript and creative challenges</p>
            </div>
          </div>
          <div className="daily-image">
           <img src="/SparkWritersRetreat/jpeg (8).jpeg" alt="Nature Field" className="daily-img" />
        </div>
        </div>

        {/* Item 5 */}
        <div className="daily-item daily-item-5">
          <div className="daily-content">
            <div className="daily-feature">
              <div className="feature-arrow">→</div>
              <h3 className="feature-title">Silent Writing Sanctuary</h3>
              <p className="feature-description">Protected hours of deep focus in a calm environment where your stories can truly unfold</p>
            </div>
          </div>
          <div className="daily-image">
            <img src="/SparkWritersRetreat/jpg (21).jpg" alt="Nature Field" className="daily-img" />
         </div>
        </div>

        {/* Item 6 */}
        <div className="daily-item daily-item-6">
          <div className="daily-content">
            <div className="daily-feature">
              <div className="feature-arrow">→</div>
              <h3 className="feature-title">Reconnection with Your Inner Storyteller</h3>
              <p className="feature-description">A transformative experience that helps you rediscover why you were meant to write</p>
            </div>
          </div>
          <div className="daily-image">
           <img src="/SparkWritersRetreat/jpg (12).jpg" alt="Nature Field" className="daily-img" />
         </div>
        </div>
      </div>
    </section>
  )
}

export default RetreatDaily
