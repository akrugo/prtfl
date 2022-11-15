import React from 'react'
import './HeroImgV2.css'

const HeroImgV2 = ({heading,text}) => {
  return (
    <div className='hero-img'>
        <div className='heading'>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default HeroImgV2