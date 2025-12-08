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
              Internationally acclaimed author known as the <strong>"Agatha Christie of India"</strong>, Dr. Prabhu brings decades of expertise in mystery writing, cinematic storytelling, and author career building.
            </p>
            <ul className="mentor-skills stagger-list">
              <li>Founder & festival director of Pune International Literary Festival, building author-reader bridges</li>
              <li>Author of 22 titles across mystery, romance, science-fiction and children's literature with global reach</li>
              <li>Specializes in cinematic storytelling techniques that make scenes feel visual and immersive</li>
              <li>Guides writers on plot architecture, suspense pacing, and character psychology</li>
              <li>Experienced television content creator and producer, adept at adapting stories across media</li>
              <li>Mentors authors on brand building, festival pitching, and sustaining a long-term writing career</li>
            </ul>
          </article>

          <article className="mentor-card">
            <div className="mentor-image float-icon">
              <img
               src="/SparkWritersRetreat/jpeg%20(2).png"
                alt="Sunil Shelar"
              />
            </div>
            <h3 className="mentor-name">Sunil Shelar</h3>
            <p className="mentor-subtitle">
              Visionary architect, artist, and adventurer blending tradition, innovation, and sustainability across four decades of practice.
            </p>
            <ul className="mentor-skills stagger-list">
              <li>40+ years in architecture; alumnus of Sir J.J. College of Architecture, Mumbai</li>
              <li>Mentee of Charles Correa; founded AUM Group in Bangalore collaborating on large builds</li>
              <li>Leads diverse work from commercial complexes to sustainable initiatives like the Miyawaki Forest in Shirwal</li>
              <li>Notable projects include Manyata Tech Park/Township, Angadi Silks, and large mixed-use developments</li>
              <li>Exhibits as a landscape painter; channels travel and nature into design aesthetics</li>
              <li>Adventure-driven creativity: solo Kanyakumari-to-Kashmir rides and Himalayan treks inform his storytelling for spaces</li>
              <li>Note: distinct from Dr. Sunil Shelar, a Satara-based general physician (MBBS, MD, 31+ years)</li>
            </ul>
          </article>

          <article className="mentor-card">
            <div className="mentor-image float-icon">
              <img
                src="/SparkWritersRetreat/sangeetha.jfif"
                alt="Sangeeta Bahadur"
              />
            </div>
            <h3 className="mentor-name">Sangeeta Bahadur</h3>
            <p className="mentor-subtitle">
              Former Indian Foreign Service ambassador turned fantasy author of the Kaal Trilogy, weaving diplomacy, culture, and mythic storytelling.
            </p>
            <ul className="mentor-skills stagger-list">
              <li>35-year IFS career (1987-2022) with postings in Spain, Bulgaria, Mexico, and Belgium</li>
              <li>Served as Ambassador to Belarus, High Commissioner to Malta, and Director of The Nehru Centre, London</li>
              <li>Led cultural diplomacy as DDG at ICCR and faculty at the Sushma Swaraj Institute of Foreign Service</li>
              <li>Now a strategic advisor on international business/foreign collaborations and a guest mentor-speaker</li>
              <li>Author of the Kaal Trilogy (Jaal, Vikraal, Mahakaal) fusing Indian philosophy with heroic fantasy</li>
              <li>Latest stand-alone work: Devdasi; co-conceptualizes lore with architect-husband Yuresh Sinha</li>
              <li>Kolkata-born; Mumbai University PG in English Literature; educated across India</li>
            </ul>
          </article>
        </div>

        <p className="mentors-conclusion">Two remarkable mentors. Two powerful perspectives. One unforgettable creative transformation.</p>
      </div>
    </section>
  )
}

export default RetreatMentors
