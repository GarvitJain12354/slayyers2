

import React from "react";
import founderImg from "/founder.png"; // Make sure this path is correct

const FounderMessage = () => {
  return (
    <div className="bg-black text-white px-4 sm:px-6 lg:px-20 py-10 sm:py-16">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-center mb-8 sm:mb-12">
        FOUNDER MESSAGE
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text Block */}
        <div className="lg:w-1/2 space-y-6">
          <div className="text-4xl sm:text-5xl">“</div>
          <p className="text-xl sm:text-2xl lg:text-4xl font-semibold leading-snug">
            Fashion isn't just what you wear — it's how you own your confidence.
            No matter your color, size, gender, or vibe… Slayyers is here to
            help you flaunt your kind of fierce.
          </p>
          <p className="text-white/60 text-sm sm:text-base lg:text-xl">
            "People now recognise that having a good performance conversation
            means that something happens as a result. Fashion isn't just what
            you wear — it's how you own your confidence. No matter your color,
            size, gender, or vibe… Slayyers is here to help you flaunt your kind
            of fierce."
          </p>

          <button className="bg-white text-sm text-[#2F4EFF] font-bold px-4 py-2 rounded-full flex items-center gap-2 w-fit hover:shadow-md transition cursor-pointer">
            Follow for More Updates <span className="text-xs">↗</span>
          </button>
        </div>

        {/* Right Image Block */}
        <div className="lg:w-1/2 w-full relative flex flex-col">
          <div className="relative w-full">
            <img
              src={founderImg}
              alt="Founder"
              className="rounded-xl w-full max-h-[70vh] sm:max-h-[80vh] object-contain"
            />

            {/* Overlay Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-xl flex flex-col sm:flex-row items-start sm:items-end justify-between">
              <div>
                <p className="font-semibold text-white">Pankaj Verma</p>
                <p className="text-sm text-white/70">
                  CEO and Founder of Slayyers
                </p>
              </div>

              {/* Socials */}
              <div className="flex gap-4 mt-4 sm:mt-0 text-white/70 text-xl">
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
    </div>
  );
};

export default FounderMessage;
