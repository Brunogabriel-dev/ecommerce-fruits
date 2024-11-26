import React from "react"

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <h1 className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia">Healthy</h1>
            <br />
            <h1>
              Fresh <span
              className="text-secondary">Fruits!</span>{""}
            </h1>
          </div>
        </div>
        {/* Brand Images */}
      </div>
    </section>
  )
}

export default Hero