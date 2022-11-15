import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImgV2 from '../components/HeroImgV2';
import PriceCard from '../components/PriceCard';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
        <Navbar />
        <HeroImgV2 heading="PROJECTS" text='I am once againg asking u to end the project asap '/>
        
        <Work/>
        <PriceCard />
       
        <Footer />
        
    </div>
  )
}

export default Project