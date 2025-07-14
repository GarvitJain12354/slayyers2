import React from "react";

const Page4 = () => {
  return (
    <div className="w-full h-screen md:min-h-screen flex flex-col items-center justify-start py-10 gap-20 relative mt-32 md:mt-0 md:mb-10">
      <h1 className="font-extrabold text-center pop text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight z-20 max-w-[90%]">
        Slayyers = Instagram Reels + BlinkIt + Myntra
      </h1>
     

      <img
        src="/social.png"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
        alt=""
      />
    </div>
  );
};

export default Page4;
