import React from "react";

const Page4 = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start py-10 gap-20 relative">
      <h1 className="font-extrabold text-center pop text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight z-20 max-w-[90%]">
        Slayyers = Instagram Reels + BlinkIt + Myntra
      </h1>
      {/* <div className="flex items-center justify-between w-full relative z-20">
        {[0, 1, 2]?.map((i) => (
          <div className="flex flex-col items-center px-10 relative">
            <div className="flex flex-col items-center justify-center gap-4 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/girl.png"
                className="h-28 w-28 rounded-full object-cover shadow-md shadow-black"
                alt=""
              />
              <h1 className="pop text-4xl font-extrabold">Priya</h1>
              <h3 className="pop text-lg text-center  font-extrabold">
                Wants curated fashion, not endless scrolling
              </h3>
            </div>
            <img src="/review.png" className="object-contain" alt="" />
          </div>
        ))}
      </div> */}

      <img
        src="/social.png"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
        alt=""
      />
    </div>
  );
};

export default Page4;
