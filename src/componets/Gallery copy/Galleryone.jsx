import React from 'react'
import './galleryone.css'
import images from '../../assets/images';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const Galleryone = () => {


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
   
        <div className='galleryone'>
           
        <div className="app__gallery-imagess">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.barber, images.barber1, images.barber2].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
            
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrowss">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
       
        
      <div className='gallery-textt'>
              <div className='text-title'>
          <img src={images.second} className="second" alt="/" />
        <h1>Complete MakeOver</h1>
        <img src={images.second} className="second" alt="/" />
        
    </div>
    <div className='ultratext'>
    <h1>Affordable Prices </h1>

  </div>
  <img src={images.third} className="third" alt="/" />
<div className='text-small'>
  <p className="text-p">We offer reasonable rates for the quality work by our Expert Barbers that put their best into every haircut, line-up, or trim. Schedule your appointment online or by giving us a call.</p>
</div>
</div>
</div>




  )
}
export default Galleryone;
