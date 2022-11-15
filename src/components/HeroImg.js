import React from 'react'
import {Link} from "react-router-dom"
import './HeroImg.css'
import introImg from "../assets/intro-img.jpg"

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={introImg} />
        </div>
        <div className='content'>
          <p>HELLO?, MY NAME IS JEFF</p>
          <h1>bla bla bla bla</h1>
          <div>
          <Link to="/project" className='btn'>PROJECTS</Link>
          <Link to="/contact" className='btn btn-light'>CONTACT</Link>
        </div>
        </div>
        
    </div>
  )
}

export default HeroImg