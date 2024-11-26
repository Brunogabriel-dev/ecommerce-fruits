import React from "react";
import BannerPng from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeUp } from "./animation";

const Banner = () => {
  return (
    <section>
      <div className="container">
        {/*Banner Image*/}
        <div>
          <img src={BannerPng} alt="" className="w-[300px] md:max-w-[400px] h-full object-cover" />
        </div>
        {/*Brand Info*/}
        <div>
          <div>
            <h1> Brand Info </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner