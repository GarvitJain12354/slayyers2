

import React from "react";
import Navbar from "../Navbar";

const Page1 = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col lg:flex-row relative overflow-hidden pt-16 md:pt-[10em]">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 justify-center gap-2 sm:gap-3 md:gap-4 py-8 sm:py-10 md:py-12 lg:py-0">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl font-extralight italic">
            Revolutionize Your Style
          </h1>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl uppercase font-extrabold w-full leading-tight sm:leading-tight">
            Delivered in 60 <br className="hidden xs:block" /> Minutes
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-medium  text-[#A1A1AA]">
            India's Premier AI-Powered, Influencer-Driven, Video-First Fashion Shopping Platform 
          </p>

   <div className="gradient-border2 w-full max-w-md mt-4 xs:mt-5 sm:mt-6 md:mt-8">
  <div
    className="inner-box p-1 sm:p-2 w-full rounded-full flex items-center gap-4 bg-black transition-all duration-500 relative"
    onFocus={(e) => {
      const button = e.currentTarget.querySelector(".slide-btn");
      button.classList.add("translate-x-full", "ml-28");
    }}
    onBlur={(e) => {
      const button = e.currentTarget.querySelector(".slide-btn");
      button.classList.remove("translate-x-full", "ml-28");
    }}
  >
    <button className="slide-btn text-black btn-gradient  px-5 sm:px-8 md:px-10 py-2 sm:py-3 font-bold w-fit rounded-full text-sm sm:text-base md:text-lg absolute left-2 transition-all duration-500 z-10">
      Join Now
    </button>
    <input
      type="text"
      placeholder="Search..."
      className="w-full  bg-transparent text-white placeholder-gray-400 outline-none px-8 py-2 text-sm sm:text-base md:text-lg"
    />
  </div>
</div>




          {/* Rating Section */}
          <div className="flex flex-col items-start gap-1 sm:gap-2 mt-4 xs:mt-5 sm:mt-6">
            <h2 className="text-sm xs:text-base sm:text-lg md:text-xl">Trusted by 50k+ users</h2>
            <div className="flex items-center flex-wrap gap-1">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src="/star.png"
                  alt="star"
                  className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6"
                />
              ))}
              <span className="ml-1 xs:ml-2 text-sm xs:text-base sm:text-lg md:text-xl">4.1/5</span>
              <span className="ml-1 text-[#A1A1AA] text-sm xs:text-base sm:text-lg md:text-xl">(14k Reviews)</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative min-h-[300px] xs:min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
          <img
            src="/bgColor.png"
            className="absolute w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt="Background Color"
          />
          <img
            src="/page1bg.png"
            className="absolute w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt="Page Background"
          />
        </div>

        {/* Background Circle */}
        <img
          src="/bgCircle.png"
          className="absolute top-0 left-0 w-32 xs:w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80"
          alt="Circle Background"
        />

        {/* Footer Text */}
        <h1 className="text-center text-xs xs:text-sm sm:text-base md:text-lg font-semibold text-[#A1A1AA] absolute bottom-2 xs:bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-4 w-full">
          For Gen Z & Millennials Who Don't Just Shop — They Slay
        </h1>
      </div>
    </>
  );
};

export default Page1;