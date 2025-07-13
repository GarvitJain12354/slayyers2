import React from "react";
import Navbar from "../Navbar";

const Page1 = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col lg:flex-row relative overflow-hidden">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start px-6 md:px-10 justify-center gap-2 py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extralight italic">
            Revolutionize Your Style
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-extrabold mont w-full">
            Delivered in 60 <br /> Minutes
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-extrabold mt-4 text-[#A1A1AA] mont">
            India's First AI-Powered, Influencer-Driven, Video-First Fashion
            Platform
          </p>

          {/* Join Now Button */}
          <div className="gradient-border2 w-full mt-6">
            <div className="inner-box p-2 w-full rounded-full flex items-center justify-start gap-4 bg-black">
              <button className="text-black btn-gradient px-6 sm:px-10 py-3 font-bold w-fit rounded-full">
                Join Now
              </button>
            </div>
          </div>

          {/* Rating Section */}
          <div className="flex flex-col items-start gap-2 text-base sm:text-xl md:text-2xl mt-6">
            <h2>Trusted by 50k+ users</h2>
            <div className="flex items-center flex-wrap gap-1">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src="/star.png"
                  alt="star"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              ))}
              <h1 className="ml-2">4.1/5</h1>
              <h1 className="ml-1 text-[#A1A1AA]">(14k Reviews)</h1>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative min-h-[400px] sm:min-h-[500px]">
          <img
            src="/bgColor.png"
            className="absolute w-4/5 sm:w-3/4 md:w-2/3 lg:w-auto max-w-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt="Background Color"
          />
          <img
            src="/page1bg.png"
            className="absolute w-4/5 sm:w-3/4 md:w-2/3 lg:w-auto max-w-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt="Page Background"
          />
        </div>

        {/* Background Circle */}
        <img
          src="/bgCircle.png"
          className="absolute top-0 left-0 w-40 sm:w-60 md:w-80"
          alt="Circle Background"
        />

        {/* Footer Text */}
        <h1 className="mont text-center text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#A1A1AA] absolute bottom-4 left-1/2 -translate-x-1/2 px-2">
          For Gen Z & Millennials Who Don't Just Shop — They Slay
        </h1>
      </div>
    </>
  );
};

export default Page1;
