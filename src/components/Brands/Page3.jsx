import React from "react";

const Page3 = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center gap-10 relative">
      <h1 className="pop relative z-20 font-extrabold text-[50px]">
        Categories
      </h1>

      <div className="flex flex-wrap   w-[80%] place-items-center place-content-center gap-10 gap-y-5 py-1.5">
        <div className="flex flex-col shrink-0 gap-3">
          <img className="w-[300px] h-[189.33px]" src="/clothes.png" alt="" />
          <button className="pop relative z-20 bg-white flex items-center justify-center rounded-3xl px-4 py-2 text-[#4000FF] pop font-extrabold gap-2">
            Clothing/Apparels
          </button>
        </div>

        <div className="flex flex-col shrink-0 gap-3">
          <img src="/footwear.png" alt="" />
          <button className="pop relative z-20 bg-white flex items-center justify-center rounded-3xl  py-2 text-[#4000FF] pop font-extrabold gap-2">
            Footwear and Lifestyle
          </button>
        </div>

        <div className="flex flex-col shrink-0 gap-3">
          <img src="/Group.png" alt="" />
          <button className="pop relative z-20 bg-white flex items-center justify-center rounded-3xl px-4 py-2 text-[#4000FF] pop font-extrabold gap-2">
            Accessories and Jwellery
          </button>
        </div>

        <div className="flex flex-col shrink-0  gap-3">
          <img src="/Objects.png" alt="" />
          <button className="pop relative z-20 bg-white flex items-center justify-center rounded-3xl px-4 py-2 text-[#4000FF] pop font-extrabold gap-2">
            Beauty and Personal Care
          </button>
        </div>

        <div className="flex flex-col shrink-0  gap-3">
          <img src="/design.png" alt="" />
          <button className="pop relative z-20 bg-white flex items-center justify-center rounded-3xl px-4 py-2 text-[#4000FF] pop font-extrabold gap-2">
            Designer Labelled Brands
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page3;

// <button className="pop relative z-20 bg-white flex items-center justify-center rounded-md px-4 py-2 text-[#007AFF] pop font-extrabold gap-2">
//       <img src="/send.png" alt="" />
//       Get Early Access
//     </button>
