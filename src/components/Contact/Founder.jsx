import React from "react";
import founderImg from "/founder.jpg"; // Replace with your actual image name

const FounderMessage = () => {
  return (
    <div className="bg-black text-white px-6 lg:px-20 py-16">
      <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-12">
        FOUNDER MESSAGE
      </h2>

      <div className="flex flex-col lg:flex-row pop items-center justify-between gap-10">
        {/* Left Text Block */}
        <div className="lg:w-1/2 space-y-6">
          <div className="text-5xl text-white">“</div>
          <p className="text-4xl font-semibold">
            People now recognise that having a good performance conversation
            means that something happens as a result.
          </p>
          <p className="text-white/60 text-xl">
            " Fashion isn't just what you wear — it's how you own your
            confidence. No matter your color, size, gender, or vibe… Slayyers is
            here to help you flaunt your kind of fierce."
          </p>

          <button className="bg-white text-sm text-[#2F4EFF] font-bold px-4 py-2 rounded-full flex items-center gap-2 w-fit hover:shadow-md transition">
            Follow for More Updates
            <span className="text-xs">↗</span>
          </button>
        </div>

        {/* Right Image Block */}
        <div className="lg:w-1/2 relative flex flex-col">
          <img
            src={founderImg}
            alt="Founder"
            className="rounded-xl w-full object-cover"
          />
          {/* Overlay info */}
          <div className="flex items-center justify-between">
            <div className=" bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-xl">
              <p className="font-semibold text-white">Pankaj Verma</p>
              <p className="text-sm text-white/70">
                CEO and Founder of Slayyers
              </p>
            </div>

            {/* Socials */}
            <div className="flex justify-center gap-4 mt-4 text-white/70 text-xl">
              <i className="ri-instagram-line cursor-pointer hover:text-white"></i>
              <i className="ri-twitter-x-line cursor-pointer hover:text-white"></i>
              <i className="ri-facebook-fill cursor-pointer hover:text-white"></i>
              <i className="ri-youtube-fill cursor-pointer hover:text-white"></i>
              <i className="ri-tiktok-fill cursor-pointer hover:text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderMessage;
