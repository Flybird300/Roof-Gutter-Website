import React from 'react'
import { Map } from './Map'
import Navbar from './componets/Navbar/Nabar'
import Footer from './componets/Footer/Footer'
import AboveNavbar from './componets/AboveNavbar/AboveNavbar'

export const Mappage = () => {
  return (
    <div>
        <AboveNavbar />
        <Navbar/>
        <Map />
        <Footer />
    </div>
  )
}
