import React from 'react'

import RetreatHeroLanding from './RetreatHeroLanding'
import RetreatHeroTwoColumn from './RetreatHeroTwoColumn'
import RetreatItinerary from './RetreatItinerary'
import RetreatDaily from './RetreatDaily'
import RetreatMentors from './RetreatMentors'
import RetreatVilla from './RetreatVilla'
import RetreatWhy from './RetreatWhy'
import RetreatSeats from './RetreatSeats'
import RetreatActivities from './RetreatActivities'
import RetreatCTA from './RetreatCTA'
import TransportArrangements from './TransportArrangements';
import RetreatCuisine from './RetreatCuisine';
import RetreatEssentials from './RetreatEssentials';
import RetreatStay from './RetreatStay';
import BookWritingPlan from './BookWritingPlan';
import './RetreatBase.css'
import './RetreatAnimations.css'

const RetreatPage: React.FC = () => {
  return (
    <div className="retreat-page-container">
      {/* 1. Welcome & Registration */}
      <div data-aos="fade-down" data-aos-duration="900"><RetreatHeroLanding /></div>
      {/* 2. Overview & Inspiration */}
      <div data-aos="fade-right" data-aos-duration="750" data-aos-delay="15"><RetreatHeroTwoColumn /></div>
      {/* 4. Features & Amenities */}

    {/* 7. Schedule & Timeline */}
      <div className="theme-amber" data-aos="fade-up" data-aos-duration="800" data-aos-delay="42"><RetreatItinerary /></div>
      {/* 8. Daily Experiences */}
      <div className="theme-lime" data-aos="fade-up" data-aos-duration="800" data-aos-delay="50"><RetreatDaily /></div>
      {/* 9. Special Activities */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="75"><RetreatActivities /></div>
      {/* 10. Accommodation Details */}
      <div className="theme-sand" data-aos="zoom-in" data-aos-duration="850" data-aos-delay="78"><RetreatVilla /></div>
      {/* 11. Resort Experience & Payment */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="82"><RetreatStay /></div>
      {/* 12. Food & Dining */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="85"><RetreatCuisine /></div>
      {/* 13. What to Bring & Guidelines */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="86"><RetreatEssentials /></div>
      {/* 14. Limited Seats & Pricing */}
      <div className="theme-mint" data-aos="zoom-in-up" data-aos-duration="850" data-aos-delay="78"><RetreatSeats /></div>
      {/* 15. Transport Arrangements */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="88"><TransportArrangements /></div>
      {/* 6. Meet the Mentors */}
      <div className="theme-plum" data-aos="fade-right" data-aos-duration="800" data-aos-delay="60"><RetreatMentors /></div>
     
      {/* 17. Writing Plan Support */}
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="92"><BookWritingPlan /></div>
      {/* 18. Why Choose This Retreat */}
      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="88"><RetreatWhy /></div>
      {/* 19. Final Call to Action */}
      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="98"><RetreatCTA /></div>
    </div>
  )
}

export default RetreatPage