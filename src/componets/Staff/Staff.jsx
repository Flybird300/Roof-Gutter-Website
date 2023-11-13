import React from 'react'
import './staff.css'
import images from '../../assets/images'
export const Staff = () => {
  return (
    <div className='staff'>
       <div className='text-staff'>
          
          <h1>OUR SERVICES</h1>
          <img src={images.line} className="line" alt="/" />
          
      </div>


    <div className='staff-des'>
      <div className='staff-img'>
        
      <img className='img-staff' src={images.house} />
      <div className='barber-name'>
      <h1>Roof Cleaning</h1> 
      <p>Profesional</p>
      </div>
        </div>

         <div className='staff-img'>
      <img className='img-staff' src={images.solar} />
      <div className='barber-name'>
      <h1>Solar Panel Washing</h1>
      <p>Profesional</p>
      </div>
        </div>

        <div className='staff-img'>
        
        <img className='img-staff' src={images.person} />
        <div className='barber-name'>
        <h1>Gutter Care</h1>
        <p>Profesional</p>

        </div>
  
          
        
     
  
          </div>
        
</div>
    </div>
  )
}
export default Staff;
