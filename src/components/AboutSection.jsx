import React from 'react'
import AboutSattaKing from './common/AboutSattaKing'
import { aboutSattaKing } from './common/Helper'

function AboutSection() {
  return (
    <section className='w-full flex flex-col items-center justify-center bg-transparent py-4'>
      <AboutSattaKing aboutSattaKingData={aboutSattaKing[0]}/>
      <AboutSattaKing aboutSattaKingData={aboutSattaKing[1]}/>
      <AboutSattaKing aboutSattaKingData={aboutSattaKing[2]} aboutSattaKingDescription={aboutSattaKing[2].description}/>
      <AboutSattaKing aboutSattaKingData={aboutSattaKing[3]}/>
      <AboutSattaKing aboutSattaKingData={aboutSattaKing[4]}/>
    </section>
  )
}

export default AboutSection
