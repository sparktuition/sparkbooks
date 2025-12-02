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
      <RetreatHeroLanding />
      <RetreatHeroTwoColumn />
      <RetreatExtraordinary />
      <RetreatFeatures />
      <RetreatItinerary />
      <RetreatDaily />
      <RetreatMentors />
      <RetreatAudience />
      <RetreatVilla />
      <RetreatWhy />
      <RetreatCTA />
    </div>
  )
}

export default RetreatPage