
import React from 'react';
import './RetreatVilla.css';

const villaImageFiles = [
 
  "jpg (1).jpg", "jpg (2).jpg", "jpg (3).jpg", "jpg (4).jpg", "jpg (5).jpg", "jpg (6).jpg",
  "jpg (7).jpg", "jpg (8).jpg", "jpg (9).jpg", "jpg (10).jpg", "jpg (11).jpg", "jpg (12).jpg",
  "jpg (13).jpg", "jpg (14).jpg", "jpg (15).jpg", "jpg (16).jpg", "jpg (17).jpg", "jpg (18).jpg",
  "jpg (19).jpg", "jpg (21).jpg", "jpg (22).jpg", "jpg (23).jpg", "jpg (24).jpg", "jpg (25).jpg",
  "jpg (26).jpg", "jpg (27).jpg", "jpg (28).jpg", "jpg (29).jpg"
];


const RetreatVilla: React.FC = () => {



  return (
    <section className="retreat-villa retreat-section parallax-bg">
      <div className="retreat-villa-inner retreat-inner">
        <h2 className="villa-title">The Villa: Your Creative Sanctuary</h2>

        {/* Gallery Section */}
        <div className="villa-gallery">
          {villaImageFiles.map((filename, idx) => (
            <div key={idx} className="gallery-item">
              <div className="villa-img-container">
                <img
                  src={`/SparkWritersRetreat/${filename}`}
                  alt={`Villa view ${idx + 1}`}
                  className="villa-img"
                />
              </div>
            </div>
          ))}
        </div>


         
        
      </div>
    </section>
  );
};

export default RetreatVilla;
