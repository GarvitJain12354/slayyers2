

import React from "react";
import Navbar from "../Navbar";

const Page1 = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex max-md:flex-col relative overflow-hidden max-md:mt-[10vh]">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-6 sm:px-10 py-10 gap-4">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl uppercase font-extrabold pop w-full leading-tight">
            PARTNER WITH <br className="hidden sm:block" /> SLAYYERS!
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl font-extrabold text-[#A1A1AA] pop mt-2 lg:mt-4">
            Amplify Your Brand's Reach with India's Fastest Fashion Platform.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="text-white btn-gradient px-6 sm:px-10 py-3 font-bold rounded-[12px]">
              Login Profile
            </button>
            <button className="text-white bg-[#222] px-6 sm:px-10 py-3 font-bold rounded-[12px] border border-white/20">
              Create
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center py-10 md:py-0 gap-4 relative z-10">
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <img
              src="/shoes.png"
              className="h-[90px] sm:h-[140px] w-[100px] sm:w-[140px]"
              alt=""
            />
            <img
              src="/tshirt.png"
              className="h-[140px] sm:h-[220px] w-[100px] sm:w-[140px]"
              alt=""
            />
            <img
              src="/Shoes3.png"
              className="h-[90px] sm:h-[147px] w-[100px] sm:w-[140px]"
              alt=""
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <img
              src="/shoes2.png"
              className="h-[80px] sm:h-[108px] w-[100px] sm:w-[140px]"
              alt=""
            />
            <img
              src="/tshirt2.png"
              className="h-[140px] sm:h-[220px] w-[100px] sm:w-[140px]"
              alt=""
            />
            <img
              src="/tshirt4.png"
              className="h-[100px] sm:h-[159px] w-[100px] sm:w-[140px]"
              alt=""
            />
          </div>

          {/* Column 3 (hidden on small devices) */}
          <div className="hidden md:flex">
            <img
              src="/tshirt3.png"
              className="h-[240px] sm:h-[412px] w-[100px] sm:w-[140px]"
              alt=""
            />
          </div>
        </div>

        {/* Background */}
        <img
          src="/bgCircle.png"
          className="absolute top-0 left-0 w-[70vw] max-w-[500px] opacity-40 pointer-events-none"
          alt=""
        />

        {/* Bottom Caption */}
        <h1 className="mont absolute bottom-4 max-md:static max-md:mt-10 text-center text-sm sm:text-base md:text-lg font-semibold text-[#A1A1AA] w-full px-4">
          Join the revolution that's reshaping how fashion brands connect with
          Gen Z & Millennials.
        </h1>
      </div>
    </>
  );
};

export default Page1;
