


import React from "react";
import Navbar from "../Navbar";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col lg:flex-row relative overflow-hidden">
        {/* Content Section */}
        <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 justify-center lg:justify-start gap-4 sm:gap-6 pt-[15vh] lg:pt-[20vh] pb-[25vh] lg:pb-0">
          <img 
            src="/dms.png" 
            alt="Contact Us" 
            className="h-16 sm:h-20 md:h-24 object-contain"
          />
          
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl w-full lg:w-[70%] text-center font-extrabold leading-tight">
            Whether you're a shopper, brand, creator, investor, or just curious
          </h1>

          <p className="text-base sm:text-xl md:text-2xl w-full md:w-[80%] lg:w-[30%] text-center font-extrabold mt-2 sm:mt-4 text-[#A1A1AA]">
            We love hearing from EVERYONE! Don't be shy, hit us up!
          </p>
          
          <button className="pop relative z-20 bg-white flex items-center justify-center rounded-md px-4 sm:px-6 py-2 sm:py-3 text-[#007AFF] font-extrabold gap-2 mt-4 sm:mt-6">
            <img src="/send.png" alt="" className="h-4 sm:h-5" />
            Contact Us !
          </button>
        </div>

        {/* Background Images */}
        <img
          src="/contactHome.png"
          className="absolute bottom-0 left-0 w-full max-w-2xl lg:max-w-none lg:w-auto object-contain lg:object-cover z-10"
          alt="Contact illustration"
        />
        
        <img 
          src="/bgCircle.png" 
          className="absolute top-0 left-0 w-40 sm:w-52 md:w-64 lg:w-80" 
          alt="Background circle" 
        />

        {/* Footer Text */}
        <h1 className="mont absolute bottom-4 text-xs sm:text-sm md:text-base lg:text-lg text-center font-semibold text-white left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[70%] px-4 z-20">
          At Slayyers, we believe in building connections that go beyond just
          business. Whether you're excited about our 60-minute fashion delivery,
          want to partner with us, or simply want to be part of India's fashion
          revolution, we're here to listen and collaborate.
        </h1>
      </div>
    </>
  );
};

export default ContactUs;