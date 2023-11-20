import React from 'react'
import './galleryy.css'
import galleryImages from '../../assets/Galleryimagess'
import WSPGallery from '../WSPGallery/WSPGallery'

const Galleryy = () => {

   


    return (
            
        <div className='galleryy'>
           
            <div className="gallery-logo">
                </div>
            <WSPGallery 
            galleryImages={galleryImages}
            />
       
            </div>
    )
}
export default Galleryy;
