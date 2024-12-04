
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Prestation from './components/Prestation'
import Photos from './components/Photos'
import Contact from './components/Contact'
import Tarifs from './components/Tarifs'
import Newsletter from './components/Newsletter'
import Footer from './shared/Footer'


function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Photos />
      <Prestation />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
