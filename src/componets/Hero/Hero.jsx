import React from 'react'
import './hero.css'
import images from '../../assets/images'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='first'>
        <img src={images.three} />
        </div>
        <div className='second'>
           <h1>
           All Utah Plumbing, Heating & Air
           </h1>
           <h3>24/7 Live Answer</h3>
           <p>Salt Lake City region, our certified technicians are dedicated to providing top-tier service in Plumbing, Drainage, Heating, Air Conditioning, Remodeling & more.</p>
           <button type="button" className='today'><a href="/contact">Schedule Today</a></button>

        </div>
    </div>
  )
}
export default Hero;