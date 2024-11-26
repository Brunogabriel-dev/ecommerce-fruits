import React from "react"
import Fruit1 from "../../assets/apple.png";
import Fruit2 from "../../assets/orange.png";
import Fruit3 from "../../assets/avocado.png";
import Fruit4 from "../../assets/cherry.png";

const MenusData = [
  {
    id: 1,
    title: "Fresh Red Apples",
    link: "/",
    price: "$3.99"
  },
  {
    id: 1,
    title: "Fresh Oranges",
    link: "/",
    price: "$4.99"
  },
  {
    id: 1,
    title: "Fresh Avocado",
    link: "/",
    price: "$5.99"
  },
  {
    id: 1,
    title: "Fresh Cherries",
    link: "/",
    price: "$2.99"
  }
]

const Menus = () => {
  return (
    <section>
      <div className="container">
        <h1 className="text-2xl font-bold text-left pb-10 uppercase">
          Our Menu
          </h1>
          <div>
            {MenusData.map((menu) => (
              <div>
                <img src={menu.link} alt="" />
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Menus