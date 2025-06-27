import React from "react";

const Page5 = () => {
  return (
    <div className="min-h-screen w-full pop flex flex-col items-center justify-center py-10 gap-2">
      <h1 className="mt-24 text-5xl font-extrabold">
        We're Not Building Another Shopping App
      </h1>
      <h3 className="text-5xl text-center text-[#7300FF] font-extrabold">
        We're building the next wave of fashion culture, <br /> delivered fast.
      </h3>
      <div className="flex flex-col items-center justify-center gap-10 mt-24 relative h-full w-full p-10">
        <h1 className="text-5xl">Our Mission</h1>
        <h3 className="text-center text-lg">
          Build India's go-to social fashion platform — by India, for India.
          Empowering local and emerging <br /> fashion brands to thrive in
          India's Quick Commerce revolution.
        </h3>
        <h1 className="text-5xl">Brand Promise</h1>
        <h3 className="text-center text-lg">
          Where Fashion Meets Speed . <br /> The AI-powered, influencer-led,
          video-first fashion revolution
        </h3>
        <img
          src="/reactangle.png"
          className="w-full object-contain h-[80vh] absolute top-1/2 left-1/2 -translate-1/2"
          alt=""
        />
      </div>
    </div>
  );
};

export default Page5;
