import React from 'react'
import './RetreatMentors.css'

const RetreatMentors: React.FC = () => {
  return (
    <section className="retreat-mentors retreat-section">
      <div className="retreat-mentors-inner retreat-inner">
        <h2 className="mentors-title">Meet Your Distinguished Mentors</h2>

        <div className="mentors-grid">
          <article className="mentor-card">
            <div className="mentor-image float-icon">
              <img
                src="/SparkWritersRetreat/jpeg%20(1).jpeg"
                alt="Dr. Manjiri Prabhu"
              />
            </div>
            <h3 className="mentor-name">Dr. Manjiri Prabhu</h3>
            <p className="mentor-subtitle">
              Internationally acclaimed author known as the <strong>"Agatha Christie of India"</strong>, Dr. Prabhu brings decades of expertise in mystery writing and narrative depth.
            </p>
            <ul className="mentor-skills stagger-list">
              <li>Founder of Pune International Literary Festival</li>
              <li>Expert in creative thinking and storytelling</li>
              <li>Masterful guide for plot development</li>
              <li>Passionate mentor for emerging writers</li>
            </ul>
          </article>

          <article className="mentor-card">
            <div className="mentor-image float-icon">
              <img
               src="/SparkWritersRetreat/jpeg%20(2).png"
                alt="Eshwar Sundaresan"
              />
            </div>
            <h3 className="mentor-name">Sunil Shelar</h3>
           <p className="mentor-subtitle">
    Practising Architecture since 1983, including 7 years with world-renowned Architect Charles Correa (1983-1990). Established independent practice in Bangalore in 1990.
</p>
<ul className="mentor-skills stagger-list">
    <li>Worked on key large projects including Vidhan Bhavan (Bhopal), JNIDB (Hyderabad), IUCAA (Pune), and Jawahar Kala Kendra (Jaipur).</li>
    <li>Rich experience in large Residential, Institutional, IT, Industrial, Health Care, Commercial, and Hospitality projects.</li>
    <li>Specialises in Town Planning and complex multi-disciplinary architectural design.</li>
</ul>
          </article>
        </div>

        <p className="mentors-conclusion">Two remarkable mentors. Two powerful perspectives. One unforgettable creative transformation.</p>
      </div>
    </section>
  )
}

export default RetreatMentors
