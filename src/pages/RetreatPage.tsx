import React from 'react'

import RetreatHeroLanding from './RetreatHeroLanding'
import RetreatHeroTwoColumn from './RetreatHeroTwoColumn'
import RetreatExtraordinary from './RetreatExtraordinary'
import RetreatFeatures from './RetreatFeatures'
import RetreatItinerary from './RetreatItinerary'
import RetreatDaily from './RetreatDaily'
import RetreatMentors from './RetreatMentors'
import RetreatAudience from './RetreatAudience'
import RetreatVilla from './RetreatVilla'
import RetreatWhy from './RetreatWhy'
import RetreatCTA from './RetreatCTA'
import './RetreatBase.css'

const RetreatPage: React.FC = () => {
  return (
    <div className="retreat-page-container">
      <div data-aos="fade-down" data-aos-duration="900"><RetreatHeroLanding /></div>
      <div data-aos="fade-right" data-aos-duration="750" data-aos-delay="50"><RetreatHeroTwoColumn /></div>
      <div data-aos="fade-left" data-aos-duration="750" data-aos-delay="80"><RetreatExtraordinary /></div>
      <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="110"><RetreatFeatures /></div>
      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="140"><RetreatItinerary /></div>
      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="170"><RetreatDaily /></div>
      <div data-aos="fade-right" data-aos-duration="700" data-aos-delay="200"><RetreatMentors /></div>
      <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="230"><RetreatAudience /></div>
      <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="260"><RetreatVilla /></div>
      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="290"><RetreatWhy /></div>
      <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="320"><RetreatCTA /></div>
    </div>
  )
}

export default RetreatPage