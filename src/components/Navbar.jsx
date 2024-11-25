import React from "react"
import { FaLeaf } from "react-icons/fa";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Product",
    link: "#",
  },
  {
    id: 3,
    title: "About",
    link: "#",
  },
  {
    id: 4,
    title: "Shop",
    link: "#",
  },
  {
    id: 5,
    title: "Contacts",
    link: "#",
  }
]

const Navbar = () => {
  return (
    <nav>
    <div className="container flex justify-between items-center py-4 md:pt-4">
      {/* Logo section */}
      <div className="text-2xl flex items-center gap-2 font-bold uppercase">
        <p className="text-primary">Fruit</p>
        <p className="text-secondary">Store</p>
        <FaLeaf className="text-green-500"/>
      </div>
      {/* Menu section */}
    <div className="hidden md:block">
      <ul className="flex items-center gap-6 text-gray-600">
        {NavbarMenu.map((menu) => (
          <li key={menu.id} className="text-xl">
            <a href={menu.link}>{menu.title}</a>
          </li>
        ))}
      </ul>
      </div>
    </div>
    </nav>
  )
}

export default Navbar