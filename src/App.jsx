import React from "react"
import Navbar from "./components/Navbar"
import ResponsiveMenu from "./components/ResponsiveMenu"
import Hero from "./components/Hero"

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <ResponsiveMenu />
      <Hero />
      
    </main>
  )
}

export default App
