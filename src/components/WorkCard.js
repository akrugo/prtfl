import React from 'react'
import './WorkCard.css'
import { NavLink } from 'react-router-dom'
import img from '../assets/intro-img.jpg'


const WorkCard = (props) => {
  return (
    <div className='prj-card'>
                <img src={props.imgsrc}/>
                <h2 className='prj-title'> {props.title}</h2>
                <div className='pro-details'>
                    <p>{props.text}</p>
                    <div className='pro-btns'>
                        <NavLink to="google.com" className="btn">View</NavLink>
                        <NavLink to="google.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard