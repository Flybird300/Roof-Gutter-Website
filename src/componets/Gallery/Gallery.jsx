import React from 'react'
import './gallery.css'

import images from '../../assets/images';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const Gallery = () => {


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
   
        <div className='gallery'>
            <div className='gallery-text'>
              <div className='text-title'>
          <img src={images.line} className="linee" alt="/" />
        <h1>Phoenix, AZ</h1>
        <img src={images.line} className="linee" alt="/" />
        
    </div>
    <div className='ultra-text'>
    <h1>White Glove Service</h1>

  </div>
<div className='text-small'>
  <p className="text-p">At All Arizona Plumbing, Heating & Air, our family-owned business, led by owner-operator Hazam, takes pride in delivering exceptional repair and replacement services at transparent, competitive prices. Available 365 days a year for same day-anyhour services anywhere along the Wasatch Front.

Healing your home is our top priority and with our impeccable White-Glove Service and high-caliber, name-brand products. We back our work with industry-leading guarantees, warranties, and flexible financing options. </p>
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
