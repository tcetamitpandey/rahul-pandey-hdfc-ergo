import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Agent from './components/Agent'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'


function App() {


  return (
    <>
      <WhatsApp />
      <Navbar />
      <Home />
      <Agent/>
      <Testimonials />
      <Footer />
     
     
    </>
  )
}

export default App
