import React from 'react'
import './CollectionsPage.css'

const CollectionsPage: React.FC = () => {
  return (
    <div className="collections-page">
      <section className="collections-hero">
        <div className="collections-hero-grid">
          <div className="collections-inner">
            <h1>Discover Our Exclusive Book Series &amp; Collections</h1>
            <p className="lead">Dive deeper into the worlds you love or embark on new literary adventures with our carefully curated book series and collections.</p>

            <div className="cards-grid">
              <article className="card outlined">
                <div className="card-content">
                  <h3>Epic Series &amp; Box Sets</h3>
                  <p className="card-desc">Immerse yourself fully in sprawling narratives with our complete series collections. Each box set brings together every installment, providing a seamless reading experience at an exceptional value.</p>
                  <p className="example"><strong>Example:</strong> The Eldoria Chronicles (3-Book Box Set)<span className="price"> Hardcover Set: $74.99</span></p>
                </div>
              </article>

              <article className="card outlined">
                <div className="card-content">
                  <h3>Special &amp; Limited Editions</h3>
                  <p className="card-desc">Elevate your collection with our exclusive special and limited editions. These books feature unique cover art, high-quality printing and, in many cases, author annotations.</p>
                  <p className="example"><strong>Example:</strong> "The Silent Patient's Echo" - Collector's Edition<span className="price"> Deluxe Hardcover: $49.99</span></p>
                </div>
              </article>

              <article className="card outlined">
                <div className="card-content">
                  <h3>Rare Collector's Items</h3>
                  <p className="card-desc">For the most dedicated enthusiasts, we offer rare collector's items including signed first editions, numbered prints, and exclusive memorabilia.</p>
                  <p className="example"><strong>Example:</strong> Whispers of the Sun — Signed First Edition<span className="price"> Price: $120.00</span></p>
                </div>
              </article>
            </div>

            <div className="bundles-section">
              <h4>Unlock More: Special Offers &amp; Bundle Savings</h4>
              <div className="bundles-grid">
                <div className="bundle">
                  <h5>Bundle &amp; Save Big</h5>
                  <p>Purchase any two full-series box sets and receive 20% off your order.</p>
                </div>
                <div className="bundle">
                  <h5>Subscriber Exclusive</h5>
                  <p>Join our mailing list for early access to drops, subscriber-only discounts, and announcement of upcoming limited editions.</p>
                </div>
                <div className="bundle">
                  <h5>Bulk Purchase Rewards</h5>
                  <p>Spend $250 or more and receive a complimentary gift and free expedited shipping.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="collections-visual">
            <img className="bookshelf-img" src="https://picsum.photos/seed/bookshelf/1000/1200" alt="bookshelf placeholder" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default CollectionsPage
