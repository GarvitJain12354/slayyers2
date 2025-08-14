import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import AnimatedContentFrames from "./AnimatedContentFrames";

const Page2 = () => {
  return (
    <div className="w-full py-4 md:py-16 px-4 sm:px-8 lg:px-20 flex flex-col items-center gap-5 min-h-fit relative">
      <h1 className="font-[mon] font-extrabold md:leading-10 tracking-[0px] text-center text-xl  md:text-3xl text-gray-400 w-full px-4 md:px-20">
        Join the revolution that's reshaping how fashion brands connect with Gen
        Z & Millennials.
      </h1>
      <h1
        className="mt-6 popbold font-extrabold md:leading-[135%] tracking-[0px] text-center align-middle text-2xl sm:text-3xl lg:text-[50px] bg-gradient-to-r from-[#9000E3] via-[#ffffff] to-[#009bd9] bg-clip-text text-transparent
"
      >
        Perfect for Fashion Brands Across <br className="hidden sm:block" />{" "}
        Categories
      </h1>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24">
        <AnimatedContentFrames/>
        
      </div>
    </div>
  );
};

export default Page2;
