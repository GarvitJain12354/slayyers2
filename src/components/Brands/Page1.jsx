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
          <h1 className="text-4xl font-extralight light italic"> </h1>
          <h1 className="text-7xl uppercase font-extrabold mont w-full">
            PARTNER WITH <br /> SLAYYERS !
          </h1>
          <p className="text-2xl font-extrabold mt-4 text-[#A1A1AA] mont">
            Amplify Your Brand's Reach with India's Fastest Fashion Platform.
          </p>

          <div className="inner-box  rounded-full flex items-start  gap-10  bg-black">
            <button className="text-black btn-gradient px-10 py-3 font-bold h-full mr-auto rounded-[12px]">
              Login Profile
            </button>

            <button className="text-white  px-10 py-3 font-bold h-full mr-auto rounded-[12px]">
              Create
            </button>
          </div>
          
        </div>
        <div className="w-1/2 h-full gap-3  py-24 flex flex-row  relative">
          <div className=" w-fit h-full gap-3 rounded-2xl flex  flex-col  ">
          <img src="/shoes.png" className="h-[140px] w-[187px]" alt="" />
          <img src="/tshirt.png" className="h-[220px] w-[187px]" alt="" />
          <img src="/Shoes3.png" className="h-[147px] w-[187px]" alt="" />

          </div>


  <div className=" w-fit h-full gap-3 rounded-2xl flex  flex-col  ">
          <img src="/shoes2.png" className="h-[108px] w-[187px]" alt="" />
          <img src="/tshirt2.png" className="h-[220px] w-[187px]" alt="" />
          <img src="/tshirt4.png" className="h-[159px] w-[179px]" alt="" />

          </div>
        


            <div className=" w-1/2 h-full px-2 py-14  flex flex-row  ">
          <img src="/tshirt3.png" className="h-[412px] w-[187px]" alt="" />
          
          </div>
        
         
        </div>
       
        <h1 className="mont absolute bottom-4 text-xl font-semibold  text-center text-[#A1A1AA] left-1/2 -translate-x-1/2">
        Join the revolution that's reshaping how fashion brands connect with Gen Z & Millennials.
        </h1>
      </div>
    </>
  );
};

export default Page1;
