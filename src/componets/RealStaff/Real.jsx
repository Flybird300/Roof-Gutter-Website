import React from 'react'
import './real.css'
import Navbar from '../Navbar/Nabar'
import images from '../../assets/images'
import AboveNavbar from '../AboveNavbar/AboveNavbar'
import Footer from '../Footer/Footer'

export const Real = () => {
  return (
    <div>
       <AboveNavbar />
    <Navbar />
   
    <div className='real'>
    
     
        <h1>Head Staff</h1>
        <div className='box'>
            <div className='box-box'>
     
              <img src={images.face} className="img" />
            <p>Nasr</p>
            <h4>CEO & Head Manager</h4>

            </div>
            <div className='box-box blobone'>
            <img src={images.facetwo} className="img" />            <p>Ali</p>
            <h4>CEO & Head Manager</h4>

            </div>
            <div className='box-box blobtwo'>
            <img src={images.facethree} className="img" />            <p>Hazam</p>
            <h4>CEO & Head Manager</h4>

            </div>
            <div className='box-box blobthree'>
            <img src={images.facefour} className="img" />            
            <p>Ashraf</p>
            <h4>CEO & Head Manager</h4>
            </div>

            </div>
            
            
    </div>
    <Footer />
    </div>
  )
}
export default Real;
