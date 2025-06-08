import React from 'react'
import Header from '../HomePage/Header/Header'
import HeroSection from '../CourcePage/HeroSection/HeroSection'
// import BackgroundSection from '../CourcePage/CourceSection/QuenchYourThirst/BackgroundSection'
// import BackgroundSection from '../CourcePage/CourceSection/IngniteYourpotential/BackgroundSection1'
import QuenchYourThirst from '../CourcePage/CourceSection/QuenchYourThirst/QuenchYourThirst'
import IngniteYourpotential from '../CourcePage/CourceSection/IngniteYourpotential/IngniteYourpotential'
import LongCources from '../CourcePage/CourceSection/LongCources/LongCources'
import CustomSection from '../CourcePage/customSection/CustomSection'
import Footer from '../HomePage/footer/Footer'

const CourcePage = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <QuenchYourThirst/>
      <IngniteYourpotential/>
      <LongCources/>
      <CustomSection/>
      <Footer/>
    </div>
  )
}

export default CourcePage
