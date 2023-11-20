import React, { useState } from 'react'
import './swiper.css'
import images from '../../assets/images';

export const Swiper = () => {

  return (
   <div className='swiperr swiper'>

          
                   <h1>TESTIMONAILS</h1>             
<div className='swiper-wrapper swiper-div'>
            <article className='swiper-slide'>
                  <img className="stars" src={images.stars} />
                <div className="textt"> <h3><strong>"</strong>A company that sets the example for service, quality, and customer satisfaction!! For roofing needs, always contact Byrd on the Roof LLC first. They are Truly <strong>"</strong></h3></div>
             
                <p className='name'>|Name|</p>

            </article>
            
            <article className='swiper-slide'>
                  <img className="stars" src={images.stars} />
                <div className="textt"> <h3><strong>"</strong>A company that sets the example for service, quality, and customer satisfaction!! For roofing needs, always contact Byrd on the Roof LLC first. They are Truly <strong>"</strong></h3></div>
             
                <p className='name'>|Name|</p>

            </article>
            <article className='swiper-slide'>
                  <img className="stars" src={images.stars} />
                <div className="textt"> <h3><strong>"</strong>A company that sets the example for service, quality, and customer satisfaction!! For roofing needs, always contact Byrd on the Roof LLC first. They are Truly <strong>"</strong></h3></div>
             
                <p className='name'>|Name|</p>

            </article>
          
            
      </div>   
      <div class="swiper-pagination"></div>   


 


    </div>
  )
};
