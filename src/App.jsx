import React from "react"
import Navbar from "./components/Navbar"
import ResponsiveMenu from "./components/ResponsiveMenu"
import Hero from "./components/Hero"
import Menus from "./components/Menus"
import Banner from "./components/Banner"
import Banner2 from "./components/Banner2"
import Banner3 from "./components/Banner3"

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <ResponsiveMenu />
      <Hero />
      <Menus/>
      <Banner/>
      <Banner2 />
      <Banner3 />
    </main>
  )
}

export default App
