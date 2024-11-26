import React from "react";
import BannerPng from "../../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeUp } from "./animation";

const Banner2 = () => {
  return (
    <section className="">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/*Brand Info*/}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1 className="text-3xl lg:text-6xl font-bold uppercase">
              {" "}
              Online Fruit Store 
            </motion.h1>
            <motion.p
            variants={FadeUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime!
            </motion.p>
            <motion.p
             variants={FadeUp(0.9)}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus omnis quae totam, modi officiis accusamus?
            </motion.p>
            {/* Button section */}
            <motion.div 
              variants={FadeUp(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start">
              <button className="primary-btn"> 
                  Learn More
                </button>
              </motion.div>
          </div>
        </div>
        {/*Banner Image*/}
        <div className="flex justify-center items-center">
          <motion.img 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2}}
          viewport={{ once: true }}
          src={BannerPng} 
          alt="" 
          className="w-[300px] md:max-w-[400px] h-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default Banner2