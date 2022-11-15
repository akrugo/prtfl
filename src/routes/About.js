import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImgV2 from '../components/HeroImgV2';
import AboutContent from '../components/AboutContent';

 const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImgV2 heading="ABOUT" text='Some of stolen work '/>
      <AboutContent/>
      <Footer />
    </div>
  )
}
export default About;