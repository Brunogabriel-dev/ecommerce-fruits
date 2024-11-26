import React from "react";
import BannerPng from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp } from "./animation";

const Banner = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/*Banner Image*/}
        <div className="flex justify-center items-center">
          <img 
          src={BannerPng} 
          alt="" 
          className="w-[300px] md:max-w-[400px] h-full object-cover" />
        </div>
        {/*Brand Info*/}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1 className="text-3xl lg:text-6xl font-bold uppercase">
              {" "}
               Brand Info 
            </motion.h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime!
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus omnis quae totam, modi officiis accusamus?
            </p>
            {/* Button section */}
            <motion.div 
              variants={FadeUp(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start">
              <button className="primary-btn"> 
                  Learn More
                </button>
              </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner