import React from 'react'
import './PressCoverage.css'

const PressCoverage: React.FC = () => {
  return (
    <section className="press-hero">
      <div className="press-inner">
        <h2>Press &amp; Media Coverage</h2>

        <div className="press-grid">
          <div className="press-copy">
            <h3>Featured In</h3>
            <p className="intro">Extensive coverage across prestigious publications and media outlets has established a strong presence in the literary world. From in-depth interviews to feature articles, the work continues to generate meaningful conversation.</p>

            <ul className="press-list">
              <li><strong>The Guardian</strong> – Author Profile Feature</li>
              <li><strong>BBC Radio 4</strong> – Book at Bedtime</li>
              <li><strong>The Times Literary Supplement</strong> – Cover Story</li>
              <li><strong>NPR Books</strong> – Fresh Air Interview</li>
              <li><strong>Vogue</strong> – Writers to Watch</li>
            </ul>
          </div>

          <div className="press-visual">
            <div className="mag-card">
              <img src="https://picsum.photos/seed/magazines/480/320" alt="magazine covers" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PressCoverage
