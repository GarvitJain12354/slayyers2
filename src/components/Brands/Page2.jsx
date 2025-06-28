import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
// import CardSwiper from "./CardSwiper";

// import './styles.css';

const Page2 = () => {
  return (
    <div className="w-full  py-20  gap-24 flex flex-col min-h-fit relative">
      <h1 className="text-[45px] font-extrabold text-center">
        Perfect for Fashion Brands Across <br /> Categories
      </h1>
      <div className=" h-fit w-full  px-15">
        <div className="h-fit flex flex-row gap-64 ">
          <div className="px-10  ">
            <p className="font-extrabold text-[20px] ">
              . D2C Homegrown Brands - Scale your direct-to-consumer presence
            </p>
            <p className="font-bold py-2">
              . Local Fashion Retailers - Connect with hyperlocal customers
            </p>
            <p className="font-bold">
              . MBO/EBO Stores - Multi-brand and exclusive brand outlets{" "}
            </p>
          </div>

          <img src="/work.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Page2;
