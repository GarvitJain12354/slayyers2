import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Page4 = () => {
  const gradients = [
    "linear-gradient(180deg, #1FA2FF 0%, #FF2C8E 100%)",
    "linear-gradient(180deg, #1FFFB4 0%, #562CFF 100%)",
    "linear-gradient(180deg, #1FFFAD 0%, #FFFF2C 100%)",
    "linear-gradient(180deg, #FF1F9E 0%, #412CFF 100%)",
    "linear-gradient(180deg, #34BC8A 0%, #3768AB 100%)",
    "linear-gradient(180deg, #1FA2FF 0%, #FF2C8E 100%)",
  ];

  const images = [
    { src: "/insta.png", alt: "Instagram" },
    { src: "/blinkit.png", alt: "Blinkit" },
    { src: "/myntra.png", alt: "Myntra" },
  ];

  // Function to return positions based on screen size
  const getPositions = (radius) => [
    { x: -radius, y: 0 },   // Left
    { x: 0, y: -radius },   // Top
    { x: radius, y: 0 },    // Right
    { x: 0, y: radius },    // Bottom
  ];

  const [index, setIndex] = useState(0);
  const [positions, setPositions] = useState(getPositions(240));

  useEffect(() => {
    // Update radius when screen size changes
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPositions(getPositions(100)); // Small screens
      } else if (window.innerWidth < 1024) {
        setPositions(getPositions(160)); // Medium screens
      } else {
        setPositions(getPositions(240)); // Large screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % gradients.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getShiftedPositions = (start) => {
    return positions.map((_, i) => positions[(i + start) % positions.length]);
  };

  const shiftedPositions = getShiftedPositions(index);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center py-10 relative overflow-hidden">
      <h1 className="font-extrabold text-center pop text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight z-20 max-w-[90%] mb-8">
        Slayyers = Instagram Reels + BlinkIt + Myntra
      </h1>

      <div className="relative flex items-center justify-center w-full min-h-[632px]">
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: "70vw",
            height: "70vw",
            maxWidth: 500,
            maxHeight: 500,
            background: gradients[index],
            filter: "blur(150px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.img
          src="/logo.png"
          alt="Slayyers"
          className="relative z-10 w-24 sm:w-32 md:w-40 lg:w-56"
        />

        {images.map((img, i) => {
          const pos = shiftedPositions[i];
          return (
            <motion.img
              key={i}
              src={img.src}
              alt={img.alt}
              className="absolute z-10 shadow-lg rounded-lg w-16 sm:w-20 md:w-28 lg:w-36"
              animate={{
                x: pos.x,
                y: pos.y,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page4;
