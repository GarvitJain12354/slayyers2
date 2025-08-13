import React from "react";

const Page3 = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-10 py-12 px-4 sm:px-6 lg:px-20 relative">
      <h1 className="popbold mb-2 uppercase z-20 font-extrabold text-3xl sm:text-4xl lg:text-[50px] text-center bg-gradient-to-r from-[#9000E3] via-[#ffffff] to-[#009bd9] bg-clip-text text-transparent">
        Categories
      </h1>

      <div className="flex flex-wrap  justify-center items-center gap-4 md:gap-24  w-full max-w-7xl">
        {/* Card 1 */}
        <div className="flex flex-col items-center gap-3 sm:w-1/2 lg:w-1/3 max-w-xs">
          <img
            className="w-full object-contain md:h-58 rounded-md"
            src="/clothes.png"
            alt="Clothing"
          />
          <button className=" bg-[#d9d9d9] hover:bg-[linear-gradient(270deg,_#0080FF_0%,_#A200FF_100%)]  font-[mon] w-full rounded-3xl px-4 py-2 text-[#4000FF] hover:text-white font-semibold text-sm sm:text-xl">
            Clothing / Apparels
          </button>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center gap-3 sm:w-1/2 lg:w-1/3 max-w-xs">
          <img
            className="w-full object-contain md:h-58 rounded-md"
            src="/footwear.png"
            alt="Footwear"
          />
          <button className=" bg-[#d9d9d9] hover:bg-[linear-gradient(270deg,_#0080FF_0%,_#A200FF_100%)] w-full font-[mon] rounded-3xl px-4 py-2 text-[#4000FF] hover:text-white font-semibold text-sm sm:text-xl text-center">
            Footwear & Lifestyle
          </button>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center gap-3 sm:w-1/2 lg:w-1/3 max-w-xs">
          <img
            className="w-full object-contain md:h-58 rounded-md"
            src="/Group.png"
            alt="Accessories"
          />
          <button className=" bg-[#d9d9d9] w-full font-[mon] hover:bg-[linear-gradient(270deg,_#0080FF_0%,_#A200FF_100%)] rounded-3xl px-4 py-2 text-[#4000FF] hover:text-white font-semibold text-sm sm:text-xl text-center">
            Accessories & Jewellery
          </button>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center gap-3 sm:w-1/2 lg:w-1/3 max-w-xs">
          <img
            className="w-full object-contain md:h-58 rounded-md"
            src="/Objects.png"
            alt="Beauty"
          />
          <button className=" bg-[#d9d9d9] w-full hover:bg-[linear-gradient(270deg,_#0080FF_0%,_#A200FF_100%)] font-[mon] rounded-3xl px-4 py-2 text-[#4000FF] hover:text-white font-semibold text-sm sm:text-xl text-center">
            Beauty & Personal Care
          </button>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col items-center gap-3 sm:w-1/2 lg:w-1/3 max-w-xs">
          <img
            className="w-full object-contain md:h-58 rounded-md"
            src="/design.png"
            alt="Designer Brands"
          />
          <button className=" bg-[#d9d9d9] w-full hover:bg-[linear-gradient(270deg,_#0080FF_0%,_#A200FF_100%)]
  font-[mon] rounded-3xl px-4 py-2 text-[#4000FF] hover:text-white font-semibold text-sm sm:text-xl text-center">
            Designer Labelled Brands
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page3;
