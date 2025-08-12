import React, { useState } from "react";
import Navbar from "../Navbar";
import { motion, AnimatePresence } from "framer-motion";
// import { motion, AnimatePresence } from "framer-motion";

import ladka1 from "../../../public/ladka1.png";
import ladka2 from "../../../public/ladka2.png";
import ladka3 from "../../../public/ladka3.png";
import { MotionConfig } from "framer-motion";
import BackgroundOvals from "../ui/Backgroundovals";
// import BackgroundOvals from "../ui/Backgroundovals";
const Page1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [ladka1, ladka2, ladka3];

  // Positions for the images (center, left, right)
  const positions = [
    { scale: 1.1, zIndex: 30, x: "-50%", y: "-50%", rotateY: 0 }, // center
    { scale: 0.9, zIndex: 20, x: "-80%", y: "-50%", rotateY: -15 }, // left
    { scale: 0.9, zIndex: 20, x: "-20%", y: "-50%", rotateY: 15 }, // right
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Navbar />
      <div className="w-full  min-h-screen flex flex-col lg:flex-row relative overflow-hidden pt-16 md:pt-[10em]">
        <BackgroundOvals />
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 justify-center gap-2 sm:gap-3 md:gap-4 py-8 sm:py-10 md:py-12 lg:py-0">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl font-extralight italic">
            Revolutionize Your Style
          </h1>
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl uppercase font-extrabold w-full leading-tight sm:leading-tight">
            Delivered in 60 <br className="hidden xs:block" /> Minutes
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-medium  text-[#A1A1AA]">
            India's Premier AI-Powered, Influencer-Driven, Video-First Fashion
            Shopping Platform
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
            <h2 className="text-sm xs:text-base sm:text-lg md:text-xl">
              Trusted by 50k+ users
            </h2>
            <div className="flex items-center flex-wrap gap-1">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src="/star.png"
                  alt="star"
                  className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6"
                />
              ))}
              <span className="ml-1 xs:ml-2 text-sm xs:text-base sm:text-lg md:text-xl">
                4.1/5
              </span>
              <span className="ml-1 text-[#A1A1AA] text-sm xs:text-base sm:text-lg md:text-xl">
                (14k Reviews)
              </span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center relative min-h-[300px] xs:min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
          <img
            src="/bgColor.png"
            className="absolute w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt="Background Color"
          />

          <div className="relative w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] top-30 md:top-70 left-110 md:left-120 transform -translate-x-1/2 -translate-y-1/2">
            <AnimatePresence>
              {images.map((img, index) => {
                const positionIndex =
                  (index - activeIndex + images.length) % images.length;

                // Responsive positions - different for mobile vs larger screens
                const positions = [
                  {
                    // Center position
                    scale: 1.2,
                    zIndex: 30,
                    x: window.innerWidth < 768 ? "-150%" : "-50%",
                    // x: "-50%",
                    y: "-50%",
                    rotateY: 0,
                    opacity: 1,
                  },
                  {
                    // Left position - closer on mobile
                    scale: window.innerWidth < 768 ? 0.9 : 0.85,
                    zIndex: 20,
                    x: window.innerWidth < 768 ? "-300%" : "-150%",
                    y: "-50%",
                    rotateY: window.innerWidth < 768 ? -15 : -25,
                    opacity: 0.9,
                  },
                  {
                    // Right position - closer on mobile
                    scale: window.innerWidth < 768 ? 0.9 : 0.85,
                    zIndex: 20,
                    x: window.innerWidth < 768 ? "-150%" : "20%",
                    y: "-50%",
                    rotateY: window.innerWidth < 768 ? 15 : 25,
                    opacity: 0.9,
                  },
                ];

                const position = positions[positionIndex];

                return (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`Ladka ${index + 1}`}
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer 
            ${
              positionIndex === 0
                ? "w-[180px] sm:w-[240px] md:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[450px]"
                : "w-[120px] sm:w-[180px] md:w-[220px] lg:w-[250px] xl:w-[280px] 2xl:w-[300px]"
            }`}
                    initial={false}
                    animate={{
                      scale: position.scale,
                      zIndex: position.zIndex,
                      x: position.x,
                      y: position.y,
                      rotateY: position.rotateY,
                      filter:
                        positionIndex === 0
                          ? "brightness(1.2) drop-shadow(0 10px 15px rgba(0,0,0,0.3))"
                          : "brightness(0.85) drop-shadow(0 5px 8px rgba(0,0,0,0.2))",
                      opacity: position.opacity,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 20,
                      duration: 0.6,
                    }}
                    onClick={() => handleClick(index)}
                    whileHover={{
                      scale: position.scale * 1.08,
                      transition: { duration: 0.2 },
                    }}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Background Circle */}
        {/* <img
          src="/bgCircle.png"
          className="absolute top-0 left-0 w-32 xs:w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80"
          alt="Circle Background"
        /> */}

        {/* Footer Text */}
        <h1 className="text-center text-xs xs:text-sm sm:text-base md:text-lg font-semibold text-[#A1A1AA] absolute bottom-2 xs:bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-4 w-full">
          For Gen Z & Millennials Who Don't Just Shop — They Slay
        </h1>
      </div>
    </>
  );
};

export default Page1;
