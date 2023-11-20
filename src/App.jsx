
import './App.css'
import AboveNavbar from './componets/AboveNavbar/AboveNavbar'
import { FacebookMsg } from './componets/FacebookMsg'
import { Find } from './componets/Find/Find'
import Footer from './componets/Footer/Footer'
import Gallery from './componets/Gallery/Gallery'
import Hero from './componets/Hero/Hero'
import Navbar from './componets/Navbar/Nabar'
import Staff from './componets/Staff/Staff'
import { Between } from './componets/Between/Between'
import { Price } from './componets/Price/Price'
function App() {

  
  return (
    <>
    <AboveNavbar />
      <Navbar />
      <Hero />
      <Between />
      <Staff />
    
      <Gallery />
      <Price />
      <Find />
      
  
      <Footer />
      <FacebookMsg />
     
    </>
  )
}

export default App
