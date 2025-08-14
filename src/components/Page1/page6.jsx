import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function FramesAutoSwitch() {
  const frames = [
    {
      title: "Video-First Discovery",
      desc: "Shop through engaging reels and influencer content. No more boring product grids – discover fashion the way Gen Z loves it.",
      images: ["/deliever.jpg", "/instagramreel.jpg", "/women.jpg"],
    },
    {
      title: "AI-Powered Personal Stylist",
      desc: "Our AI learns your style, suggests outfits from your real closet, and helps you discover fashion smartly, not endlessly scrolling. ",
      images: ["/instagramreel.jpg", "/women.jpg", "/rec4.png"],
    },
    {
      title: "60-Minute Hyperlocal Delivery",
      desc: "From local stores to your doorstep in under an hour. Because when you find that perfect outfit, you want it NOW. ",
      images: ["/women.jpg", "/rec4.png", "/rec6.png"],
    },
    {
      title: "Try Before You Buy ",
      desc: "Get items delivered to try at home. Only pay for what you keep. No more sizing surprises or return hassles. ",
      images: ["/rec4.png", "/rec6.png", "/rec5.png"],
    },
    {
      title: "Local Brand Discovery",
      desc: "Discover trending styles from local D2C and retail brands in your city. Support homegrown fashion that speaks your language. ",
      images: ["/rec6.png", "/rec5.png", "/deliever.jpg"],
    },
    {
      title: "Live Order Tracking ",
      desc: "Track your fashion finds from store to doorstep, just like food delivery.",
      images: ["/rec5.png", "/deliever.jpg", "/instagramreel.jpg"],
    },
  ];

  const [index, setIndex] = useState(0);
  const intervalTime = 2000; // 2 seconds per frame

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % frames.length);
    }, intervalTime);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-white w-full md:min-h-[810px] flex justify-center items-center px-4 py-8">
  <AnimatePresence mode="wait">
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex flex-col items-center lg:h-[632px] justify-between text-center w-full"
    >
      {/* Title */}
      <h2 style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }} className="popbold  font-extrabold text-[22px] leading-tight tracking-[0.35px] text-black mb-4 sm:text-[28px] md:text-[34px] lg:text-[40px]">
        {frames[index].title}
      </h2>

      {/* Images row */}
      <div className="flex gap-3 sm:gap-4 md:gap-6 mb-6 items-center justify-center flex-wrap">
        {frames[index].images.map((src, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-xl shadow-lg flex-shrink-0 ${
              i === 1
                ? "w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px]"
                : "w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] lg:w-[300px] lg:h-[300px]"
            }`}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Description */}
      <p style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }} className=" font-normal  pop tracking-[0.35px] text-center align-middle max-w-[90%] text-sm sm:text-base md:text-3xl text-gray-700 leading-relaxed">
        {frames[index].desc}
      </p>
    </motion.div>
  </AnimatePresence>
</section>

  );
}
