import React from 'react'
import './RetreatAudience.css'

const RetreatAudience: React.FC = () => {
  return (
    <section className="retreat-audience retreat-section">
      <div className="retreat-audience-inner retreat-inner">
        <h2 className="audience-title">Who Can Join This Journey</h2>

        <div className="audience-grid">
          <article className="audience-card">
            <h3 className="audience-card-title">Beginners</h3>
            <p className="audience-card-text">Ready to start your writing journey with confidence and expert guidance from the very beginning</p>
          </article>

          <article className="audience-card">
            <h3 className="audience-card-title">Emerging Writers</h3>
            <p className="audience-card-text">Working on manuscripts and seeking fresh perspectives, structure, and momentum</p>
          </article>

          <article className="audience-card">
            <h3 className="audience-card-title">Creative Seekers</h3>
            <p className="audience-card-text">Anyone feeling stuck in the creative process and yearning for breakthrough inspiration</p>
          </article>

          <article className="audience-card">
            <h3 className="audience-card-title">Professionals</h3>
            <p className="audience-card-text">Busy individuals needing a tranquil escape to finally complete that book project</p>
          </article>

          <article className="audience-card">
            <h3 className="audience-card-title">Dreamers</h3>
            <p className="audience-card-text">Anyone dreaming of building or completing their book in a supportive, luxurious environment</p>
          </article>
        </div>

        <p className="audience-note"><strong>No experience required — only passion.</strong> Whether you've written thousands of pages or none at all, this retreat welcomes your unique creative voice.</p>
      </div>
    </section>
  )
}

export default RetreatAudience
