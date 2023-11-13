import React from 'react'
import './find.css'
export const Find = () => {
    const style = {
        width:"100%",
        height:"100%", 
        style:"border:0;",
        allowFullScreen:"true",
         loading:"lazy" ,
         referrerPolicy:"no-referrer-when-downgrade",
      
         
    }
  return (
    <div className="find">
        
        <div className='middle'>
        
        <div className="location"> 
            <div className='location-div'>
            <h1>NewYork</h1>
            <p>
                5959 W Lawrence Ave, Chicago, Illinois 60630, United States</p>
            </div>
            <div className="location-div"v>
            <h1>NewYork</h1>
            <p>
                5959 W Lawrence Ave, Chicago, Illinois 60630, United States</p>
            </div>
            <div className="location-div"v>
            <h1>NewYork</h1>
            <p>
                5959 W Lawrence Ave, Chicago, Illinois 60630, United States</p>
            </div>
            <div className="location-div"v>
            <h1>NewYork</h1>
            <p>
                5959 W Lawrence Ave, Chicago, Illinois 60630, United States</p>
            </div>
            <div className="location-div"v>
            <h1>NewYork</h1>
            <p>
                5959 W Lawrence Ave, Chicago, Illinois 60630, United States</p>
            </div>
            <div className="location-div"v>
            <h1>NewYork</h1>
            <p>
                5959 W Lawrence Ave, Chicago, Illinois 60630, United States</p>
            </div>
        </div>
      
        <div className='map-embd'>
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.613105644618!2d31.729503374892133!3d30.01926377493626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcbf7f77532e7%3A0x96d53f33028d9e64!2sTaqueria%20Amigo%20Chino%202!5e0!3m2!1sen!2seg!4v1699893333483!5m2!1sen!2seg" 
        style={style}></iframe>
        </div>
        </div>
       
    </div>
  )
}
