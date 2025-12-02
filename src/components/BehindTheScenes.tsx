import React from 'react'
import './BehindTheScenes.css'

const IMAGES = [
  'https://picsum.photos/seed/bts1/480/360',
  'https://picsum.photos/seed/bts2/480/360',
  'https://picsum.photos/seed/bts3/480/360',
  'https://picsum.photos/seed/bts4/480/360',
  'https://picsum.photos/seed/bts5/480/360',
  'https://picsum.photos/seed/bts6/480/360'
]

const BehindTheScenes: React.FC = () => {
  return (
    <section className="bts-hero">
      <div className="bts-inner">
        <h2>Behind the Scenes Gallery</h2>
        <p className="lead">Glimpses into the creative process, from quiet writing sessions to vibrant book tour moments. Every image tells a story of dedication, passion, and connection with readers worldwide.</p>

        <div className="bts-grid">
          {IMAGES.map((src, i) => (
            <div key={i} className="bts-item">
              <img src={src} alt={`Behind the scenes ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BehindTheScenes
