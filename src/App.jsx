import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Features from './components/Features'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import Partners from './components/Partners'
import HowItWorks from './components/HowItWorks'

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Partners />
      <Features />
      <HowItWorks />
      <MapSection />
      <Footer />
    </div>
  )
}

export default App
