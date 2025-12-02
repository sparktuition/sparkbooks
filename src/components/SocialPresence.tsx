import React from 'react'
import './SocialPresence.css'

const SocialPresence: React.FC = () => {
  return (
    <section className="social-hero">
      <div className="social-inner">
        <h1>Cultivating a Vibrant Digital Presence &amp; Social Media Engagement</h1>
        <p className="lead">In today's interconnected world, a strong digital footprint is essential. We actively cultivate our online presence across key platforms, engaging with readers, fostering communities, and amplifying our author's voice through strategic digital marketing, interactive events, and data-driven insights.</p>

        <div className="platforms-and-strategy">
          <div className="platforms">
            <h3>Our Digital Ecosystem &amp; Reach</h3>
            <div className="platform-grid">
              <div className="platform-card">
                <div className="p-icon" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8C6 6.9 6.9 6 8 6H16C17.1 6 18 6.9 18 8V16C18 17.1 17.1 18 16 18H8C6.9 18 6 17.1 6 16V8Z" stroke="#07F2CD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="p-content">
                  <strong>Facebook</strong>
                  <p>Over 150K followers. A vibrant community for discussions, author updates, and exclusive content. We host weekly Q&amp;A sessions.</p>
                </div>
              </div>

              <div className="platform-card">
                <div className="p-icon" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="6" stroke="#07F2CD" strokeWidth="1.4"/></svg>
                </div>
                <div className="p-content">
                  <strong>Instagram</strong>
                  <p>More than 100K followers. Visual storytelling through book aesthetics, behind-the-scenes glimpses, and engaging Reels to capture new readers.</p>
                </div>
              </div>

              <div className="platform-card">
                <div className="p-icon" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12H20" stroke="#07F2CD" strokeWidth="1.4" strokeLinecap="round"/></svg>
                </div>
                <div className="p-content">
                  <strong>X (Twitter)</strong>
                  <p>Approaching 75K followers. Real-time engagement, literary news, and thought-provoking discussions. Live tweeting during virtual events.</p>
                </div>
              </div>

              <div className="platform-card">
                <div className="p-icon" aria-hidden>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 4H19V20H5V4Z" stroke="#07F2CD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div className="p-content">
                  <strong>YouTube</strong>
                  <p>Over 25K subscribers. A hub for author interviews, book trailers, virtual readings, and writing tips. New content weekly.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="strategy">
            <h3>Impactful Digital Marketing Strategies</h3>
            <div className="strategy-list">
              <div className="strategy-item">
                <div className="s-icon">⬡</div>
                <div>
                  <strong>Content Marketing</strong>
                  <p>Crafting compelling blog posts, articles, and newsletters that resonate with our audience and drive traffic to our platforms.</p>
                </div>
              </div>

              <div className="strategy-item">
                <div className="s-icon">⬡</div>
                <div>
                  <strong>Targeted Ads</strong>
                  <p>Utilizing advanced analytics for precise audience targeting on social platforms, ensuring our books reach the most engaged readers.</p>
                </div>
              </div>

              <div className="strategy-item">
                <div className="s-icon">⬡</div>
                <div>
                  <strong>Influencer Outreach</strong>
                  <p>Collaborating with literary influencers and reviewers to expand our reach and generate authentic buzz around new releases.</p>
                </div>
              </div>

              <div className="strategy-item">
                <div className="s-icon">✉️</div>
                <div>
                  <strong>Email Campaigns</strong>
                  <p>Personalized email newsletters delivering exclusive content, early announcements, and special offers directly to our subscriber base.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="community">
          <h3>Engaging Our Community: Virtual Events &amp; Book Clubs</h3>
          <p>We host regular online book clubs and virtual events, creating dynamic spaces for readers to connect directly with the author and each other. These include:</p>
          <ul>
            <li>Monthly Author Q&amp;A Sessions</li>
            <li>Exclusive Sneak Peeks &amp; Chapter Readings</li>
            <li>Interactive Writing Workshops</li>
            <li>Panel Discussions with Literary Guests</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SocialPresence
