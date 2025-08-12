

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import CardSwiper from "./CardSwiper";

const Page2 = () => {
  return (
    <div className="w-full min-h-screen relative">
      {/* Background Image - Responsive Height */}
      <img src="/orangeBg.png" className="h-full w-full object-cover" alt="" />

      {/* Content */}
      <div className="w-full absolute top-0 flex flex-col items-center justify-center pt-6 sm:pt-10 px-4 sm:px-6">
        {/* Main Heading */}
        <h1 className="pop font-extrabold uppercase text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl leading-tight text-center">
          Instagram is the mall.
        </h1>

        {/* Subheading */}
        <h2 className="pop font-medium mt-3 text-xs sm:text-sm md:text-base lg:text-lg max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl text-center">
          Reels are the new mannequins. And Gen Z? They're 
not shopping — they're slaying. 
        </h2>

        {/* Swiper */}
        <div className="w-full mt-6 sm:mt-8 px-2 sm:px-4 rounded-2xl">
          <CardSwiper />
        </div>

        {/* Bottom Statement */}
        <h1 className="pop font-extrabold uppercase text-sm sm:text-base md:text-lg lg:text-2xl w-[90%] sm:w-[80%] md:w-[60%] text-center mt-8 sm:mt-10">
         Yet traditional e-commerce is still stuck in static grids and 3–5 day deliveries. There's a massive 
gap.  <br /> Slayyers is the bridge.
        </h1>
      </div>
    </div>
  );
};

export default Page2;
