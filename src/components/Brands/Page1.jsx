import React from "react";
import Navbar from "../Navbar";
import BackgroundOvals from "../ui/Backgroundovals";
import CollageBrand from "../ui/CollageBrand";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex max-md:flex-col relative overflow-hidden pt-12 md:px-27 md:mt-[10vh]">
        <BackgroundOvals />
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-6 sm:pr-10 py-10 md:mt-10 gap-4 md:pl-0 md:ml-0">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl popbold leading-[135%]  tracking-[0.02em] uppercase w-full ">
            PARTNER WITH <br className="hidden sm:block" /> SLAYYERS!
          </h1>
          <p className=" pop font-medium  md:leading-[180%] tracking-[0] text-xl text-[#ffffff]/50 ">
            Amplify Your Brand's Reach with India's Fastest Fashion Platform.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={() => navigate("/get-early-access")}
              className="text-white bg-[linear-gradient(214.02deg,_#B75CFF_6.04%,_#671AE4_92.95%)] hover:bg-[linear-gradient(270deg,_#0080FF_0%,_#A200FF_100%)] px-6 sm:px-7 py-3 text-lg font-bold rounded-[12px]"
            >
              Pre Register
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="text-white bg-white/10 px-6 sm:px-7 py-3 font-bold text-lg rounded-[12px] border hover:bg-[linear-gradient(270deg,_#0080FF_0%,_#A200FF_100%)]
 border-white/20"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:mt-32 md:w-1/2 flex justify-center items-center px-2 md:px-0 pt-4 md:py-0 gap-4 relative z-10">
          <CollageBrand />
          {/* Column 1 */}
          {/* <div className="flex flex-col gap-3">
            <img
              src="/shoes.png"
              className="h-[90px] sm:h-[187px] w-[100px] sm:w-[140px]"
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
          </div> */}

          {/* Column 2 */}
          {/* <div className="flex flex-col gap-3">
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
          </div> */}

          {/* Column 3 (hidden on small devices) */}
          {/* <div className="hidden md:flex">
            <img
              src="/tshirt3.png"
              className="h-[240px] sm:h-[412px] w-[100px] sm:w-[140px]"
              alt=""
            />
          </div> */}
        </div>

        {/* Background */}
        <img
          src="/bgColor.png"
          className="absolute left-3/4 w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] top-1/2  transform -translate-x-1/2 -translate-y-1/2"
          alt="Background Color"
        />
      </div>
    </>
  );
};

export default Page1;
