import React from 'react'
import './RetreatMentors.css'

const RetreatMentors: React.FC = () => {
  return (
    <section className="retreat-mentors retreat-section">
      <div className="retreat-mentors-inner retreat-inner">
        <h2 className="mentors-title">Meet Your Distinguished Mentors</h2>

        <div className="mentors-grid">
          <article className="mentor-card">
            <div className="mentor-image">
              <img
                src="/SparkWritersRetreat/jpeg%20(1).jpeg"
                alt="Dr. Manjiri Prabhu"
              />
            </div>
            <h3 className="mentor-name">Dr. Manjiri Prabhu</h3>
            <p className="mentor-subtitle">
              Internationally acclaimed author known as the <strong>"Agatha Christie of India"</strong>, Dr. Prabhu brings decades of expertise in mystery writing and narrative depth.
            </p>
            <ul className="mentor-skills">
              <li>Founder of Pune International Literary Festival</li>
              <li>Expert in creative thinking and storytelling</li>
              <li>Masterful guide for plot development</li>
              <li>Passionate mentor for emerging writers</li>
            </ul>
          </article>

          <article className="mentor-card">
            <div className="mentor-image">
              <img
               src="/SparkWritersRetreat/jpeg%20(2).jpeg"
                alt="Eshwar Sundaresan"
              />
            </div>
            <h3 className="mentor-name">Eshwar Sundaresan</h3>
            <p className="mentor-subtitle">
              Versatile author and journalist renowned for powerful, emotionally resonant, character-driven narratives that touch hearts and transform perspectives.
            </p>
            <ul className="mentor-skills">
              <li>Expert in finding clarity and structure</li>
              <li>Guides writers towards authentic voice</li>
              <li>Specialises in emotional storytelling</li>
              <li>Helps unlock creative honesty</li>
            </ul>
          </article>
        </div>

        <p className="mentors-conclusion">Two remarkable mentors. Two powerful perspectives. One unforgettable creative transformation.</p>
      </div>
    </section>
  )
}

export default RetreatMentors
