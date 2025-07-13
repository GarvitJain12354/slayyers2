import React from "react";
import Navbar from "../Navbar";

const Page1 = () => {
  return (
    <>
      <Navbar />
      <div
        className="w-full h-screen flex relative overflow-hidden max-md:flex-col max-md:mt-[10vh]
    "
      >
        <div className="w-1/2 h-full max-md:w-full flex flex-col items-start px-10 justify-center gap-2">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl uppercase font-extrabold pop w-full leading-tight">
            PARTNER WITH <br className="hidden sm:block" /> SLAYYERS!
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl font-extrabold text-[#A1A1AA] pop mt-2 lg:mt-4">
            Amplify Your Brand's Reach with India's Fastest Fashion Platform.
          </p>

          <div className="inner-box  rounded-full flex items-start  gap-10  bg-black mt-10">
            <button className="text-white btn-gradient px-10 py-3 font-bold h-full mr-auto rounded-[12px]">
              Login Profile
            </button>

            <button className="text-white  px-10 py-3 font-bold h-full mr-auto rounded-[12px]">
              Create
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full flex justify-center items-center gap-3 mt-8 lg:mt-0">
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <img
              src="/shoes.png"
              className="h-[100px] sm:h-[140px] w-[120px] sm:w-[187px]"
              alt=""
            />
            <img
              src="/tshirt.png"
              className="h-[160px] sm:h-[220px] w-[120px] sm:w-[187px]"
              alt=""
            />
            <img
              src="/Shoes3.png"
              className="h-[100px] sm:h-[147px] w-[120px] sm:w-[187px]"
              alt=""
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <img
              src="/shoes2.png"
              className="h-[90px] sm:h-[108px] w-[120px] sm:w-[187px]"
              alt=""
            />
            <img
              src="/tshirt2.png"
              className="h-[160px] sm:h-[220px] w-[120px] sm:w-[187px]"
              alt=""
            />
            <img
              src="/tshirt4.png"
              className="h-[120px] sm:h-[159px] w-[120px] sm:w-[179px]"
              alt=""
            />
          </div>

          {/* Column 3 */}
          <div className="hidden md:flex px-2 py-4">
            <img
              src="/tshirt3.png"
              className="h-[300px] sm:h-[412px] w-[120px] sm:w-[187px]"
              alt=""
            />
          </div>
        </div>

        <img src="/bgCircle.png" className="absolute top-0 left-0" alt="" />

        <h1 className="mont absolute bottom-4 text-center text-sm sm:text-base md:text-lg font-semibold text-[#A1A1AA] left-1/2 -translate-x-1/2 px-4 max-md:relative max-md:mt-10">
          Join the revolution that's reshaping how fashion brands connect with
          Gen Z & Millennials.
        </h1>
      </div>
    </>
  );
};

export default Page1;
