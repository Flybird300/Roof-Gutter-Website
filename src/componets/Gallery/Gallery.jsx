import React from 'react'
import './gallery.css'

import images from '../../assets/images';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const Gallery = () => {


  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 1000;
    } else {
      current.scrollLeft += 1000;
    }
  };

  return (
   
        <div className='gallery'>
            <div className='gallery-text'>
              <div className='text-title'>
          <img src={images.line} className="linee" alt="/" />
        <h1>Phoenix, AZ</h1>
        <img src={images.line} className="linee" alt="/" />
        
    </div>
    <div className='ultra-text'>
    <h1>FINEST STYILSTS </h1>

  </div>
  <img src={images.lineone} className="lineone" alt="/" />
<div className='text-small'>
  <p className="text-p">Founded in the end of 2019 in Everett, MA, Phoenix Barbershop was only possible because it combined the experience and talent of a professional with more than 30 years working as a barber, with the entrepreneurship, market vision and knowledge of a woman well ahead of your time.</p>
</div>
            </div>
        <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.one, images.three, images.two].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
            
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
      </div>
  )
}
export default Gallery;
