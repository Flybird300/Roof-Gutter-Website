import React from 'react'
import './hero.css'
import images from '../../assets/images'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { motion } from 'framer-motion';
export const Hero = () => {


  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    
<div className='hero'>
    
<div className='title'>
   <img src={images.logo} />
  
   </div>
   <div className='text-down'>
<h1 className='up'>WE ARE</h1>
<h1 className='down'>HERE FOR YOU</h1>
</div>
    
  </div>
  )
}
export default Hero;
