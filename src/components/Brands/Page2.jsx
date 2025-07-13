import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const Page2 = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-8 lg:px-20 flex flex-col items-center gap-12 min-h-fit relative">
      <h1 className="text-2xl sm:text-3xl lg:text-[45px] font-extrabold text-center leading-snug">
        Perfect for Fashion Brands Across <br className="hidden sm:block" />{" "}
        Categories
      </h1>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24">
        {/* Text section */}
        <div className="w-full lg:w-1/2 px-2 sm:px-4 space-y-4">
          <p className="font-extrabold text-base sm:text-lg lg:text-xl">
            • D2C Homegrown Brands – Scale your direct-to-consumer presence
          </p>
          <p className="font-bold text-base sm:text-lg lg:text-xl">
            • Local Fashion Retailers – Connect with hyperlocal customers
          </p>
          <p className="font-bold text-base sm:text-lg lg:text-xl">
            • MBO/EBO Stores – Multi-brand and exclusive brand outlets
          </p>
        </div>

        {/* Image section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/work.png"
            alt="Fashion illustration"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Page2;
