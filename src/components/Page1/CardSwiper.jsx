// // CardSwiper.jsx
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// // import "./CardSwiper.css";

// import { EffectCoverflow, Pagination } from "swiper/modules";

// const cards = [
//   {
//     image: "/img2.png",
//     label: "Streetwear",
//   },
//   {
//     image: "/img3.jpg",
//     label: "Fashion",
//   },
//   {
//     image: "/img1.png",
//     label: "Astronaut",
//   },
//   { image: "/img4.png", label: "Style" },
//   { image: "/img5.jpg", label: "Style" },
// ];

// export default function CardSwiper() {
//   return (
//     <div className="card-swiper-container mt-10">
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         initialSlide={2}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 80, // Negative value pulls slides closer
//           depth: 100, // try 100–300
//           modifier: 2.5, // try 1.5–3
//           slideShadows: false,
//         }}
//         pagination={{ clickable: false }}
//         modules={[EffectCoverflow]}
//         className="card-swiper"
//       >
//         {cards.map((card, index) => (
//           <SwiperSlide key={index} className="card-slide">
//             <img src={card.image} alt={card.label} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import { EffectCoverflow } from "swiper/modules";

// const cards = [
//   {
//     image: "/img2.png",
//     label: "Streetwear",
//   },
//   {
//     image: "/img3.jpg",
//     label: "Fashion",
//   },
//   {
//     image: "/img1.png",
//     label: "Astronaut",
//   },
//   { image: "/img4.png", label: "Style" },
//   { image: "/img5.jpg", label: "Style" },
// ];

// export default function CardSwiper() {
//   const swiperRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(1); // Start with center slide active

//   const handleSlideClick = (index) => {
//     setActiveIndex(index);
//     if (swiperRef.current) {
//       swiperRef.current.swiper.slideTo(index);
//     }
//   };

//   return (
//     <div className="card-swiper-container rounded-2xl mt-10">
//       <Swiper
//         ref={swiperRef}
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         initialSlide={2}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 80,
//           depth: 100,
//           modifier: 2.5,
//           slideShadows: false,
//         }}
//         pagination={{ clickable: true }}
//         modules={[EffectCoverflow]}
//         className="card-swiper"
//         onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//       >
//         {cards.map((card, index) => (
//           <SwiperSlide 
//             key={index} 
//             className={`card-slide rounded-2xl transition-transform duration-300 ${activeIndex === index ? 'scale-110 z-10' : 'scale-100'}`}
//             onClick={() => handleSlideClick(index)}
//           >
//             <img 
//               src={card.image} 
//               alt={card.label} 
//               className="w-full h-full object-cover rounded-2xl"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }



// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import { EffectCoverflow } from "swiper/modules";
// import { motion } from "framer-motion";

// const cards = [
//   {
//     image: "/img2.png",
//     label: "Streetwear",
//   },
//   {
//     image: "/img3.jpg",
//     label: "Fashion",
//   },
//   {
//     image: "/img1.png",
//     label: "Astronaut",
//   },
//   { image: "/img4.png", label: "Style" },
//   { image: "/img5.jpg", label: "Style" },
// ];

// export default function CardSwiper() {
//   const [activeIndex, setActiveIndex] = useState(2); // Start with center slide
//   const [direction, setDirection] = useState(0); // 0 = none, 1 = right, -1 = left

//   const handleSlideClick = (index) => {
//     const diff = index - activeIndex;
//     setDirection(diff > 0 ? 1 : -1);
//     setActiveIndex(index);
//   };

//   // Calculate positions for circular effect
//   const getPosition = (index) => {
//     const offset = (index - activeIndex + cards.length) % cards.length;
    
//     // Positions: left, center, right
//     const positions = [
//       { scale: 0.8, x: '-80%', zIndex: 1, rotateY: -30, opacity: 0.8 },
//       { scale: 0.9, x: '-40%', zIndex: 2, rotateY: -15, opacity: 0.9 },
//       { scale: 1.1, x: '0%', zIndex: 3, rotateY: 0, opacity: 1 },
//       { scale: 0.9, x: '40%', zIndex: 2, rotateY: 15, opacity: 0.9 },
//       { scale: 0.8, x: '80%', zIndex: 1, rotateY: 30, opacity: 0.8 }
//     ];

//     return positions[offset];
//   };

//   return (
//     <div className="card-swiper-container rounded-2xl mt-10 w-full h-[300px] sm:h-[400px] md:h-[500px] relative">
//       <div className="relative w-full h-full">
//         {cards.map((card, index) => {
//           const position = getPosition(index);
//           const isActive = activeIndex === index;
          
//           return (
//             <motion.div
//               key={index}
//               className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden cursor-pointer ${
//                 isActive ? 'z-10' : 'z-0'
//               }`}
//               style={{
//                 width: isActive ? '300px' : '250px',
//                 height: isActive ? '400px' : '350px',
//               }}
//               initial={false}
//               animate={{
//                 x: position.x,
//                 scale: position.scale,
//                 rotateY: position.rotateY,
//                 opacity: position.opacity,
//                 zIndex: position.zIndex
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 15,
//                 duration: 0.5
//               }}
//               onClick={() => handleSlideClick(index)}
//               whileHover={{ scale: position.scale * 1.05 }}
//             >
//               <img 
//                 src={card.image} 
//                 alt={card.label} 
//                 className="w-full h-full object-cover rounded-2xl shadow-xl"
//               />
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    image: "/img2.png",
    label: "Streetwear",
  },
  {
    image: "/img3.jpg",
    label: "Fashion",
  },
  {
    image: "/img1.png",
    label: "Astronaut",
  },
  { image: "/img4.png", label: "Style" },
  { image: "/img5.jpg", label: "Style" },
];

export default function CardSwiper() {
  const [activeIndex, setActiveIndex] = useState(2); // Start with center slide

  const handleSlideClick = (index) => {
    setActiveIndex(index);
  };

  // Calculate positions for circular effect
  const getPosition = (index) => {
    const offset = (index - activeIndex + cards.length) % cards.length;
    
    // Positions: left, center, right
    const positions = [
      { scale: 0.8, x: '-80%', zIndex: 1, rotateY: -30, opacity: 0.8 },
      { scale: 0.9, x: '-40%', zIndex: 2, rotateY: -15, opacity: 0.9 },
      { scale: 1.1, x: '0%', zIndex: 3, rotateY: 0, opacity: 1 },
      { scale: 0.9, x: '40%', zIndex: 2, rotateY: 15, opacity: 0.9 },
      { scale: 0.8, x: '80%', zIndex: 1, rotateY: 30, opacity: 0.8 }
    ];

    return positions[offset];
  };

  return (
    <div className="card-swiper-container rounded-2xl mt-10 w-full h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[750px] relative">
      <div className="relative w-full h-full">
        {cards.map((card, index) => {
          const position = getPosition(index);
          const isActive = activeIndex === index;
          
          return (
            <motion.div
              key={index}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden cursor-pointer ${
                isActive ? 'z-10' : 'z-0'
              }`}
              style={{
                width: isActive 
                  ? 'clamp(280px, 30vw, 500px)' 
                  : 'clamp(230px, 25vw, 400px)',
                height: isActive 
                  ? 'clamp(450px, 50vw, 650px)' 
                  : 'clamp(450px, 50vw, 650px)',
              }}
              initial={false}
              animate={{
                x: position.x,
                scale: position.scale,
                rotateY: position.rotateY,
                opacity: position.opacity,
                zIndex: position.zIndex
              }}
              transition={{
                // type: "spring",
                stiffness: 120,
                damping: 5,
                duration: 0.5
              }}
              onClick={() => handleSlideClick(index)}
              whileHover={{ scale: position.scale * 1.05 }}
            >
              <img 
                src={card.image} 
                alt={card.label} 
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}