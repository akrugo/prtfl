import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImgV2 from '../components/HeroImgV2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImgV2 heading="CONTACT" text="lets have a cat" />
      <Form />
      <Footer />
    </div>
    
  )
}

export default Contact