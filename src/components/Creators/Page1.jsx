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
            Turn Your Fashion Influence into Revenue
          </h1>
          <h1 className="text-5xl uppercase font-extrabold mont w-full">
            Join India's Most Creator-Friendly Fashion Platform
          </h1>
          <p className="text-2xl font-extrabold mt-4 text-[#A1A1AA] mont">
            Monetize Your Style Expertise with Slayyers
          </p>
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center text-6xl relative">
          <img
            src="/bgColor.png"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
          <img
            src="/creator.png"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
        </div>
        <h3 className="absolute left-1/2 bottom-10 -translate-x-1/2 text-center">
          Ready to transform your fashion content into a profitable business?
          Whether you're a fashion blogger, style influencer, or lifestyle
          content creator, Slayyers offers the perfect platform to monetize your
          influence while helping your audience discover amazing fashion finds.
        </h3>
        <img src="/bgCircle.png" className="absolute top-0 left-0" alt="" />
      </div>
    </>
  );
};

export default Page1;
