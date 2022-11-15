import React from 'react'
import {Link} from "react-router-dom" 
import './PriceCard.css'

const PriceCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>-Basic-</h3> 
                <span className='bar'></span>
                <p className='btc'>price</p>
                <p>pages</p>
                <p>-features-</p>
                <p>-responsive</p>
                <Link to="/contact" className="btn"> PURCHASE NOW</Link>
            </div> 
            <div className='card'>
                <h3>-Basic-</h3> 
                <span className='bar'></span>
                <p className='btc'>price</p>
                <p>pages</p>
                <p>-features-</p>
                <p>-responsive</p>
                <Link to="/contact" className="btn"> PURCHASE NOW</Link>
            </div> 
            <div className='card'>
                <h3>-Basic-</h3> 
                <span className='bar'></span>
                <p className='btc'>price</p>
                <p>pages</p>
                <p>-features-</p>
                <p>-responsive</p>
                <Link to="/contact" className="btn"> PURCHASE NOW</Link>
            </div> 
        </div> 
    </div>
  )
}

export default PriceCard