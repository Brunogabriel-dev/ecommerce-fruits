import React from "react"
import Navbar from "./components/Navbar"
import ResponsiveMenu from "./components/ResponsiveMenu"
import Hero from "./components/Hero"
import Menus from "./components/Menus"
import Banner from "./components/Banner"
import Banner2 from "./components/Banner2"

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <ResponsiveMenu />
      <Hero />
      <Menus/>
      <Banner/>
      <Banner2 />
    </main>
  )
}

export default App
