import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Agent from './components/Agent'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'
import ViewPlans from './components/ViewPlans'


function App() {


  return (
    <>
      <WhatsApp />
      <Navbar />
      <Home />
      <section id='about' >
        <Agent/>
      </section>
      <section id='reviews' >
        <Testimonials />
      </section>
      <section id='viewplans' >
         < ViewPlans />
      </section>
      <Footer />
     
     
    </>
  )
}

export default App
