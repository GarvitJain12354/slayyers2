import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import CardSwiper from "./CardSwiper";

// import './styles.css';

const Page2 = () => {
  return (
    <div className="w-full min-h-screen relative">
      <img src="/orangeBg.png" className="h-full w-full" alt="" />
      <div className="w-full absolute top-0 flex flex-col items-center justify-center pt-10">
        <h1 className="pop font-extrabold uppercase text-7xl">
          {" "}
          Instagram is the mall.
        </h1>
        <h2 className="pop font-extrabold uppercase text-lg">
          Reels are the new mannequins. And Gen Z? They're not shopping —
          they're slaying.
        </h2>
        <CardSwiper />
        <h1 className="pop font-extrabold uppercase text-2xl w-[60%] text-center mt-10">
          Yet traditional e-commerce is still stuck in static grids and 3–5 day
          deliveries. There's a massive gap. <br /> Slayyers is the bridge.
        </h1>
      </div>
    </div>
  );
};

export default Page2;
