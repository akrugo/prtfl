import React from 'react'
import './WorkCard.css'
import { NavLink } from 'react-router-dom'
import img from '../assets/intro-img.jpg'
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='prj-heading'>Projects</h1>
        <div className='prj-container'>
            {WorkCardData.map((val,ind)=>{
                return(
                    <WorkCard
                    key={ind} 
                    imgsrc={val.imgscr}
                    title={val.title}
                    text={val.text}
                    />
                )
            })}
        </div>
        
    </div>
  )
}

export default Work;