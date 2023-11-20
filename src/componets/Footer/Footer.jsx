import React from 'react'
import './footer.css'
import images from '../../assets/images'

const Footer = () => {
    
  return (
    <div className='footer'>
      
       <div className='footer-sec'>
       <div className='footer-logo'>
      <img src={images.logo}  />
      </div>

       </div>
       <div className='footer-down'>
        <div className='down-down'>
          <div><p className='no-line'>CONTACT US</p></div>
<div> <p className='borer'>PIVACY POLICES</p></div>
   
   <div> <p className='borer'>FACEBOOK</p></div>
    <div><p className='borer'>CUSTOMER REVIEWS</p></div>
    </div>
    <div className="just-text">
    <p>Office Hours: Monday – Friday from 7am – 5pm, Saturday: 7am – 2pm</p>
<p>24/7, live, in-house representative available for all emergency services, as schedule allows.</p>
    <p>*A higher dispatch fee will be charged for services outside of regular office hours or during holidays. We don’t charge extra for the work to be performed.</p>
    <p className='copyright'>Copyright © 2023 All Arizona Roof. All Rights Reserved</p>

       </div>
         </div>
    </div>
  )
}
export default Footer;

