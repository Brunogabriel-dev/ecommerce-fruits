import React from "react"
import Navbar from "./components/Navbar"
import ResponsiveMenu from "./components/ResponsiveMenu"
import Hero from "./components/Hero"
import Menus from "./components/Menus"

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <ResponsiveMenu />
      <Hero />
      <Menus/>
    </main>
  )
}

export default App
