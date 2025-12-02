import React from 'react'
import './UpcomingEvents.css'

const EVENTS = [
  {
    title: 'Book Launch Celebration',
    datetime: '15th March 2024, 7:00 PM',
    location: 'Grand Literary Hall, London',
    desc: 'Celebrate the launch of the highly anticipated new novel with an evening of readings, Q&A, and book signing. Light refreshments provided.'
  },
  {
    title: "Writers' Workshop Series",
    datetime: 'Every Saturday in April, 2:00 PM',
    location: 'Creative Writing Centre, Manchester',
    desc: 'Four-week intensive workshop covering character development, plot structure, and finding your unique voice. Limited spots available.'
  },
  {
    title: 'Literary Festival Appearance',
    datetime: '12th May 2024, 3:30 PM',
    location: 'Edinburgh International Book Festival',
    desc: 'Panel discussion on contemporary fiction trends, followed by audience questions and signing session.'
  }
]

const UpcomingEvents: React.FC = () => {
  return (
    <section className="events-hero">
      <div className="events-inner">
        <h2>Upcoming Events &amp; Workshops</h2>
        <p className="lead">Join intimate conversations, book signings, and creative writing workshops. Experience literature in dialogue with fellow readers and aspiring writers.</p>

        <div className="events-grid">
          {EVENTS.map((e, idx) => (
            <article key={idx} className="event-card">
              <div className="event-icon" aria-hidden>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="2" stroke="#07F2CD" strokeWidth="1.6"/><path d="M7 2V6" stroke="#07F2CD" strokeWidth="1.6" strokeLinecap="round"/><path d="M17 2V6" stroke="#07F2CD" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </div>
              <h3 className="event-title">{e.title}</h3>
              <p className="event-datetime">{e.datetime}</p>
              <p className="event-location">{e.location}</p>
              <p className="event-desc">{e.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents
