import React from "react";
import BannerPng from "../../assets/fruits-splash.png";

const Banner = () => {
  return (
    <section>
      <div className="container">
        {/*Banner Image*/}
        <div>
          <img src={BannerPng} alt="" />
        </div>


        {/*Banner Info*/}
      </div>
    </section>
  )
}

export default Banner