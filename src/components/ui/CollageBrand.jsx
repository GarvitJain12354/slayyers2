import React from "react";

const ImageCollage = () => {
  return (
    <div className="w-full flex flex-row justify-center items-start py-4 gap-[15px] relative z-10 mx-auto max-w-screen-xl">
      <div className="flex flex-row gap-[15px] w-[calc(60%-7.5px)] md:w-[389px] flex-shrink-0">
        {/* Column 1: */}
        <div className="flex flex-col gap-[15px] w-[calc(50%-7.5px)] md:w-[187px] flex-shrink-0">
          <div className="w-full h-auto overflow-hidden flex items-center justify-center">
            <img
              src="/shoes.png"
              className="w-full h-auto md:h-[140px] object-cover"
              alt="White and purple sneakers"
            />
          </div>

          <div className="w-full h-auto overflow-hidden flex items-center justify-center">
            <img
              src="/tshirt.png"
              className="w-full h-auto md:h-[220px] object-cover"
              alt="Mountain graphic t-shirt"
            />
          </div>

          <div className="w-full h-auto overflow-hidden flex items-center justify-center">
            <img
              src="/Shoes3.png"
              className="w-full h-auto md:h-[127px] object-cover"
              alt="Green and black sneakers"
            />
          </div>
        </div>

        {/* Column 2*/}

        <div className="flex flex-col gap-[15px] w-[calc(50%-7.5px)] md:w-[187px] flex-shrink-0">
          {/* Image 4: Brown and blue sneakers (shoes2.png) */}
          <div className="w-full h-auto overflow-hidden flex items-center justify-center">
            <img
              src="/shoes2.png"
              className="w-full h-auto md:h-[108px] object-cover"
              alt="Brown and blue sneakers"
            />
          </div>
          <div className="w-full h-auto overflow-hidden flex items-center justify-center">
            <img
              src="/tshirt2.png"
              className="w-full h-auto md:h-[220px] object-cover"
              alt="Black chicken graphic t-shirt"
            />
          </div>
          <div className="w-full h-auto overflow-hidden flex items-center justify-center">
            <img
              src="/tshirt4.png"
              className="w-full h-auto md:h-[159px] object-cover"
              alt="Olive green 'code now' t-shirt"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[15px] w-[calc(40%-7.5px)] md:w-[187px] flex-shrink-0 md:mt-[59px]">
        {/* col 3 */}
        <div className="w-full h-auto overflow-hidden flex items-center justify-center">
          <img
            src="/tshirt3.png"
            className="w-full h-auto md:h-[412px] object-cover"
            alt="Person wearing black t-shirt"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCollage;
