import React from "react";

const Page3 = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-10 py-12 px-4 sm:px-6 lg:px-20 relative">
      <h1 className="pop z-20 font-extrabold text-3xl sm:text-4xl lg:text-[50px] text-center">
        Categories
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10 w-full max-w-7xl">
        {/* Card 1 */}
        <div className="flex flex-col items-center gap-3 max-w-xs">
          <img
            className="w-full object-contain rounded-md"
            src="/clothes.png"
            alt="Clothing"
          />
          <button className="pop bg-white rounded-3xl px-4 py-2 text-[#4000FF] font-extrabold text-sm sm:text-base">
            Clothing / Apparels
          </button>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center gap-3 max-w-xs">
          <img
            className="w-full object-contain rounded-md"
            src="/footwear.png"
            alt="Footwear"
          />
          <button className="pop bg-white rounded-3xl px-4 py-2 text-[#4000FF] font-extrabold text-sm sm:text-base text-center">
            Footwear & Lifestyle
          </button>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center gap-3 max-w-xs">
          <img
            className="w-full object-contain rounded-md"
            src="/Group.png"
            alt="Accessories"
          />
          <button className="pop bg-white rounded-3xl px-4 py-2 text-[#4000FF] font-extrabold text-sm sm:text-base text-center">
            Accessories & Jewellery
          </button>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center gap-3 max-w-xs">
          <img
            className="w-full object-contain rounded-md"
            src="/Objects.png"
            alt="Beauty"
          />
          <button className="pop bg-white rounded-3xl px-4 py-2 text-[#4000FF] font-extrabold text-sm sm:text-base text-center">
            Beauty & Personal Care
          </button>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col items-center gap-3 max-w-xs">
          <img
            className="w-full object-contain rounded-md"
            src="/design.png"
            alt="Designer Brands"
          />
          <button className="pop bg-white rounded-3xl px-4 py-2 text-[#4000FF] font-extrabold text-sm sm:text-base text-center">
            Designer Labelled Brands
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page3;
