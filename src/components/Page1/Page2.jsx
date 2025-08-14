

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
        <h1 className="popbold font-extrabold  tracking-[0px] text-center align-bottom uppercase  text-xl sm:text-2xl md:text-4xl lg:text-7xl xl:text-[90px]">
          Instagram is the mall.
        </h1>

        {/* Subheading */}
        <h2 className="pops font-semibold lg:text-[27px] leading-[26px] tracking-[0px] align-bottom text-xs sm:text-sm md:text-base text-center">
          Reels are the new mannequins. And Gen Z? They're 
not shopping — they're slaying. 
        </h2>

        {/* Swiper */}
        <div className="w-full mt-6 sm:mt-8 px-2 sm:px-4 rounded-2xl">
          <CardSwiper />
        </div>

        {/* Bottom Statement */}
        <h1 className="popbold font-extrabold lg:text-[30px] leading-[31px] tracking-[-0.41px] align-middle uppercase text-sm sm:text-base md:text-lg md:px-32 text-center mt-8 sm:mt-10">
         Yet traditional e-commerce is still stuck in static grids and 3–5 day deliveries. There's a massive 
gap.  <br /> Slayyers is the bridge.
        </h1>
      </div>
    </div>
  );
};

export default Page2;
