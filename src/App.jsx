import React from "react"
import Navbar from "./components/Navbar"
import ResponsiveMenu from "./components/ResponsiveMenu"
import Hero from "./components/Hero"
import Menus from "./components/Menus"
import Banner from "./components/Banner"

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <ResponsiveMenu />
      <Hero />
      <Menus/>
      <Banner/>
    </main>
  )
}

export default App
