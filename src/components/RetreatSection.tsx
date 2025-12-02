import React from 'react'
import { useNavigate } from 'react-router-dom'
import './RetreatSection.css'

const RetreatSection: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="retreat-bleed">
      <section className="retreat-promo">
        <div className="retreat-promo-inner">
          <div className="retreat-content">
            <h2>Spark Writers Retreat</h2>
            <p className="retreat-description">
              Join us for an immersive literary experience designed for aspiring and established writers. Connect, create, and elevate your craft in an inspiring community of storytellers.
            </p>
            <button 
              className="retreat-btn"
              onClick={() => navigate('/retreat')}
            >
              Explore the Retreat
            </button>
          </div>
          <div className="retreat-visual-preview">
            <img 
              className="retreat-preview-img" 
              src="/SparkWritersRetreat/book.jpg"
              alt="writers retreat preview" 
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default RetreatSection
