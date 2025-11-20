import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollScenes from './components/ScrollScenes'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <ScrollScenes />
        <Footer />
      </main>
    </div>
  )
}

export default App
