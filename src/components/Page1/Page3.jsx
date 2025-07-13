import React from "react";

const Page3 = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-20 relative overflow-hidden">
      <button className="pop relative z-20 bg-white flex items-center justify-center rounded-md px-4 py-2 text-[#007AFF] pop font-extrabold gap-2">
        <img src="/send.png" alt="" />
        Get Early Access
      </button>
      <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight z-20 max-w-[90%]">
        <i>Today's Fashion Commerce is Broken</i>
      </h1>
      <div className="flex items-center justify-between w-full relative z-20 max-md:justify-start max-md:overflow-hidden max-md:overflow-x-auto">
        {[0, 1, 2]?.map((i) => (
          <div className="flex flex-col items-center px-10 relative max-md:shrink-0 max-md:justify-center ">
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
            <img src="/review.png" className="object-contain " alt="" />
          </div>
        ))}
      </div>
      <img
        src="/bgColor.png"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        alt=""
      />
    </div>
  );
};

export default Page3;
