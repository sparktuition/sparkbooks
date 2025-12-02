import React from 'react'
import './RetreatCTA.css'

const RetreatCTA: React.FC = () => {
  return (
    <section className="retreat-cta retreat-section">
      <div className="retreat-cta-inner retreat-inner">
        <h2 className="cta-title">
          <span className="cta-highlight">This retreat brings all of it together — beautifully and powerfully.</span>
        </h2>

        <div className="cta-actions">
          <button className="btn btn-primary">Begin Your Transformation</button>
          <button className="btn btn-outline">Get in Touch</button>
        </div>
      </div>
    </section>
  )
}

export default RetreatCTA
