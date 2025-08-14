import React from "react";
import Navbar from "../Navbar";
import BackgroundOvals from "../ui/Backgroundovals";
import { useNavigate } from "react-router-dom";

const ContactUsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full overflow-hidden min-h-[calc(100vh+92px)]">
      <Navbar />
      <div className="relative w-full pt-[92px]">
        <BackgroundOvals />

        <div className="relative w-full min-h-screen">
          {/* Top Text Content */}
          <div className="absolute top-[6vh] sm:top-[8vh] left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] max-w-4xl text-center z-30 px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight">
              <span className="popbold font-extrabold text-[42px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-[135%] uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#9000E3] via-[#FFFFFF] to-[#009BD9]">
                SLIDE INTO OUR DMS
              </span>
            </h1>

            <p className="pops font-semibold text-[20px] sm:text-[28px] md:text-[34px] leading-[135%] mt-2">
              Whether you're a shopper, brand, creator, investor, or just curious
            </p>

            <p className="mt-2 pop font-normal text-[#ffffff]/50 text-[18px] sm:text-[22px] md:text-[26px] leading-[150%]">
              We love hearing from EVERYONE!
              <br />
              Don't be shy, hit us up!
            </p>

            <button
              onClick={() => navigate("/get-early-access")}
              className="pop mx-auto px-6 sm:px-8 mt-6 bg-white hover:bg-[linear-gradient(90deg,_#FA00A6_0%,_#1715BE_100%)] 
                flex items-center justify-center rounded-md py-2 sm:py-3 text-[#007AFF] hover:text-white font-extrabold gap-2 shadow-md text-sm sm:text-base"
            >
              <img src="/send.png" alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
              Connect Us!
            </button>
          </div>

          {/* Left Image: Group of People */}
          <img
            src="/contactHome.png"
            alt="Group of people"
            className="absolute bottom-32 sm:bottom-0 left-4 sm:left-4 w-[85%] sm:w-[70%] md:w-[60%] lg:w-[43%] max-w-[700px] object-contain z-10"
          />

          {/* Right Image: Woman with Phone */}
          <img
            src="/mobi.jpg"
            alt="Woman holding a mobile phone"
            className="hidden md:block absolute bottom-20 sm:bottom-24 right-1 sm:right-4 w-[50%] sm:w-[45%] md:w-[40%] lg:w-[33%] max-w-[500px] object-contain z-20"
          />

          {/* Bottom Text */}
          <div className=" text-center absolute bottom-2 sm:bottom-0 left-2 sm:left-8 md:left-12 lg:left-40 w-[90%] sm:w-[75%] lg:w-[75%] z-30 px-2">
            <p className="text-xs sm:text-base md:text-xl text-[#ffffff] font-medium leading-relaxed text-center sm:text-left">
              At Slayyers, we believe in building connections that go beyond
              just business. Whether you're excited about our 60-minute fashion
              delivery, want to partner with us, or simply want to be part of
              India's fashion revolution, we're here to listen and collaborate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
