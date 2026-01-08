import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import Partners from './components/Partners'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import DownloadCTA from './components/DownloadCTA'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="partners"><Partners /></div>
      <div id="features"><Features /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="coverage"><MapSection /></div>
      <Testimonials />
      <FAQ />
      <DownloadCTA />
      <Footer />
    </div>
  )
}

export default App
