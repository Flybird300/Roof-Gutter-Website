import images from '../../assets/images'
import './navbar.css'
import { useScroll } from 'framer-motion'
import { useState } from 'react'

import { motion } from 'framer-motion'
export const Navbar = () => { 

  const [move, setmove] = useState('false')
  
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <motion.div 
   id="navbar" 
   className="navbarone"
   initial={{ opacity: 0, y: -100}}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.8, delay: 0.5 }}
   >
        <div  className='logo'>
       <img src={images.logo}/> 

        </div>
        <ul className='navbar-ul'>
            <li><a href="/">Home</a></li>
            <li><a href="/real">Staff</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/Map">Find Us</a></li>
         
        </ul>
   
       
       
        <div className="app__navbar-smallscreen">
        <img src={images.whiteicon} color="#fff"class={toggleMenu ? "hide": "menu"} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay slide-bottom">
            <img src={images.menuicon} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
            <li><a href=""  onClick={() => setToggleMenu(false)} >Home</a></li>
            <li><a href=""  onClick={() => setToggleMenu(false)} >Services</a></li>
            <li><a href=""  onClick={() => setToggleMenu(false)} >Gallery</a></li>
            <li><a href=""  onClick={() => setToggleMenu(false)} >Find Us</a></li>
            <li><a href=""  onClick={() => setToggleMenu(false)} >Staff</a></li>
            <li><a href="" onClick={() => setToggleMenu(false)}>Who we are</a></li>
            </ul>
          </div>
        )}
      </div>
 
      
       </motion.div>
  )
}
export default Navbar;