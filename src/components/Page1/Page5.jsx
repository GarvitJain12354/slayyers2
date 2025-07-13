import React from "react";

const Page5 = () => {
  return (
    <div className="min-h-screen w-full pop flex flex-col items-center justify-center px-4 py-10 gap-4 relative">
      <h1 className="mt-24 text-2xl sm:text-3xl lg:text-5xl font-extrabold text-center z-10">
        We're Not Building Another Shopping App
      </h1>
      <h3 className="text-xl sm:text-2xl lg:text-4xl text-center text-[#7300FF] font-extrabold z-10">
        We're building the next wave of fashion culture,{" "}
        <br className="hidden md:block" /> delivered fast.
      </h3>

      <div className="flex flex-col items-center justify-center gap-10 mt-24 w-full max-w-6xl px-4 sm:px-6 md:px-10 z-10">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center">
          Our Mission
        </h1>
        <h3 className="text-center text-sm sm:text-base lg:text-lg">
          Build India's go-to social fashion platform — by India, for India.
          Empowering local and emerging <br className="hidden md:block" />
          fashion brands to thrive in India's Quick Commerce revolution.
        </h3>

        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center">
          Brand Promise
        </h1>
        <h3 className="text-center text-sm sm:text-base lg:text-lg">
          Where Fashion Meets Speed. <br className="hidden md:block" />
          The AI-powered, influencer-led, video-first fashion revolution
        </h3>
      </div>

      <img
        src="/reactangle.png"
        className="w-full h-[40vh] sm:h-[60vh] lg:h-[80vh] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20"
        alt="Decorative background"
      />
    </div>
  );
};

export default Page5;
