import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedContentFrames = () => {
  const frames = [
    {
      id: 1,
      text: [
        {
          key: "d2c",
          content: "• D2C Homegrown Brands – ",
          bold: "Scale your direct-to-consumer presence",
        },
        {
          key: "local",
          content:
            "• Local Fashion Retailers – Connect with hyperlocal customers",
        },
        {
          key: "mbo",
          content: "• MBO/EBO Stores – Multi-brand and exclusive brand outlets",
        },
      ],
      imageSrc: "/img10.jpg",
      altText: "",
    },
    {
      id: 2,
      text: [
        {
          key: "d2c",
          content:
            "• D2C Homegrown Brands – Scale your direct-to-consumer presence",
        },
        {
          key: "local",
          content: "• Local Fashion Retailers – ",
          bold: "Connect with hyperlocal customers",
        },
        {
          key: "mbo",
          content: "• MBO/EBO Stores – Multi-brand and exclusive brand outlets",
        },
      ],
      imageSrc: "/img20.jpg",
      altText: "",
    },
    {
      id: 3,
      text: [
        {
          key: "d2c",
          content:
            "• D2C Homegrown Brands – Scale your direct-to-consumer presence",
        },
        {
          key: "local",
          content:
            "• Local Fashion Retailers – Connect with hyperlocal customers",
        },
        {
          key: "mbo",
          content: "• MBO/EBO Stores – ",
          bold: "Multi-brand and exclusive brand outlets",
        },
      ],
      imageSrc: "/img30.jpg",
      altText: "",
    },
  ];

  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrameIndex((prevIndex) => (prevIndex + 1) % frames.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [frames.length]);

  // Animation variants for Framer Motion
  const slideVariants = {
    initial: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    }, // Slide in from right, fade in
    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } }, // Slide out to the left, fade out
  };

  const currentFrame = frames[currentFrameIndex];

  return (
    <div className=" flex items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24 max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFrame.id}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24"
          >
            <div className="w-full lg:w-3/4 px-2 sm:px-4 space-y-4">
              {currentFrame.text.map((item, index) => (
                <p
                  key={item.key}
                  className="text-white text-base sm:text-lg lg:text-xl leading-relaxed"
                >
                  {item.content}
                  {item.bold && (
                    <span className="font-extrabold">{item.bold}</span>
                  )}
                </p>
              ))}
            </div>

            {/* Image  */}
            <div className="w-full md:w-1/4 flex justify-center">
              <img
                src={currentFrame.imageSrc}
                alt={currentFrame.altText}
                className="w-full max-w-md object-contain rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedContentFrames;
