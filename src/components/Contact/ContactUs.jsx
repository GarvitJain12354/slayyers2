import React from "react";
import Navbar from "../Navbar";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div
        className="w-full h-screen flex relative overflow-hidden
    "
      >
        <div className="w-full flex flex-col items-center px-10 justify-start gap-2 mt-[20vh]">
          <img src="/dms.png" alt="" />
          <h1 className="text-5xl w-[70%] text-center font-extrabold">
            Whether you're a shopper, brand, creator, investor, or just curious{" "}
          </h1>

          <p className="text-2xl w-[30%] text-center font-extrabold mt-4 text-[#A1A1AA] mont">
            We love hearing from EVERYONE! Don't be shy, hit us up!
          </p>
          <button className="pop relative z-20 bg-white flex items-center justify-center rounded-md px-4 py-2 text-[#007AFF] pop font-extrabold gap-2 mt-2">
            <img src="/send.png" alt="" />
            Contact Us !
          </button>
        </div>
        {/* <div className="w-1/2 h-full flex flex-col items-center justify-center text-6xl relative">
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
        </div> */}
        <img
          src="/contactHome.png"
          className="absolute bottom-0 left-0"
          alt=""
        />
        <img src="/bgCircle.png" className="absolute top-0 left-0" alt="" />
        <h1 className="mont absolute bottom-4 text-lg text-center font-semibold text-white left-1/2 -translate-x-1/2">
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
