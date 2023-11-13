
import './App.css'
import AboveNavbar from './componets/AboveNavbar/AboveNavbar'
import { FacebookMsg } from './componets/FacebookMsg'
import { Find } from './componets/Find/Find'
import { Footer } from './componets/Footer/Footer'
import Gallery from './componets/Gallery/Gallery'
import Hero from './componets/Hero/Hero'
import Navbar from './componets/Navbar/Nabar'
import Staff from './componets/Staff/Staff'
import { Test } from './Test/Test'

function App() {

  
  return (
    <>
    <AboveNavbar />
      <Navbar />
      <Hero />
      <Staff />
      <Gallery />
      <Find />
      
      <Test />
     <FacebookMsg />
      <Footer />
    </>
  )
}

export default App
