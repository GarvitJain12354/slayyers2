import React from "react";
import Navbar from "../Navbar";

const Page1 = () => {
  return (
    <>
      <Navbar />
      <div
        className="w-full h-screen flex relative overflow-hidden
    "
      >
        <div className="w-1/2 h-full flex flex-col items-start px-10 justify-center gap-2">
          <h1 className="text-4xl font-extralight light italic">
            Revolutionize Your Style{" "}
          </h1>
          <h1 className="text-7xl uppercase font-extrabold mont w-full">
            Delivered in 60 <br /> Minutes
          </h1>
          <p className="text-2xl font-extrabold mt-4 text-[#A1A1AA] mont">
            India's First AI-Powered, Influencer-Driven, Video-First Fashion
            Platform
          </p>
          <div className="gradient-border2 w-full">
            <div className="inner-box p-2 w-full rounded-full flex items-start justify-center gap-4 bg-black">
              <button className="text-black btn-gradient px-10 py-3 font-bold h-full mr-auto rounded-full">
                Join Now
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 text-2xl mt-6 ">
            <h2>Trusted by 50k+ users</h2>
            <div className="flex items-center justify-center">
              <img src="/star.png" alt="" />
              <img src="/star.png" alt="" />
              <img src="/star.png" alt="" />
              <img src="/star.png" alt="" />
              <img src="/star.png" alt="" />
              <h1>4.1/5</h1>
              <h1>
                {"("} 14k Reviews {" )"}
              </h1>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center text-6xl relative">
          <img
            src="/bgColor.png"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
          <img
            src="/page1bg.png"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
        </div>
        <img src="/bgCircle.png" className="absolute top-0 left-0" alt="" />
        <h1 className="mont absolute bottom-4 text-xl font-semibold text-[#A1A1AA] left-1/2 -translate-x-1/2">
          For Gen Z & Millennials Who Don't Just Shop — They Slay
        </h1>
      </div>
    </>
  );
};

export default Page1;
