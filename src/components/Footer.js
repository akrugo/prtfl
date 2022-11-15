import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff" , marginRight:'2rem'}}/>
                    <div>
                        <p>123 someplace not here</p>
                        <p>home sweet home</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                    <FaPhone size={20} style={{color:"#fff" , marginRight:'2rem'}}/>
                    +212 555 55 55 55
                    </h4>              
                </div>
                <div className='email'>
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff" , marginRight:'2rem'}}/>
                    info@gmail.com
                    </h4>              
                </div>
            </div>
            <div className='right'>
                <h4>About the company</h4>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                    quae ab illo inventore veritatis et quasi architecto
                </p>
                <div className='social'>
                <FaFacebook size={20} style={{color:"#fff" , marginRight:'2rem'}}/>
                <FaTwitter size={20} style={{color:"#fff" , marginRight:'2rem'}}/>
                <FaLinkedin size={20} style={{color:"#fff" , marginRight:'2rem'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer