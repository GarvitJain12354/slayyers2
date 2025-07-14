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

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper/modules";

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
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1); // Start with center slide active

  const handleSlideClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="card-swiper-container rounded-2xl mt-10">
      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow]}
        className="card-swiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {cards.map((card, index) => (
          <SwiperSlide 
            key={index} 
            className={`card-slide rounded-2xl transition-transform duration-300 ${activeIndex === index ? 'scale-110 z-10' : 'scale-100'}`}
            onClick={() => handleSlideClick(index)}
          >
            <img 
              src={card.image} 
              alt={card.label} 
              className="w-full h-full object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

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

//   const handleSlideClick = (index) => {
//     if (swiperRef.current) {
//       swiperRef.current.swiper.slideTo(index, 600); // 600ms animation
//     }
//   };

//   return (
//     <div className="w-full py-10 px-4 sm:px-6 lg:px-8">
//       <Swiper
//         ref={swiperRef}
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         initialSlide={2}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0, // More responsive starting point
//           depth: 200,
//           modifier: 2,
//           slideShadows: false,
//         }}
//         breakpoints={{
//           // Responsive breakpoints
//           320: { // Mobile
//             coverflowEffect: {
//               stretch: -40,
//               depth: 100,
//               modifier: 1.5
//             }
//           },
//           640: { // Tablet
//             coverflowEffect: {
//               stretch: 0,
//               depth: 150,
//               modifier: 1.8
//             }
//           },
//           1024: { // Desktop
//             coverflowEffect: {
//               stretch: 80,
//               depth: 200,
//               modifier: 2.5
//             }
//           }
//         }}
//         modules={[EffectCoverflow, Pagination]}
//         className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
//       >
//         {cards.map((card, index) => (
//           <SwiperSlide 
//             key={index} 
//             onClick={() => handleSlideClick(index)}
//             className="!w-[200px] sm:w-[250px] md:!w-[300px] lg:!w-[350px] !h-[250px] sm:!h-[300px] md:!h-[350px] lg:!h-[400px] rounded-lg overflow-hidden "
//           >
//             <div className="relative w-full h-full ">
//               <img 
//                 src={card.image} 
//                 alt={card.label} 
//                 className="w-full h-full object-cover "
//               />
//               <div className="absolute inset-0 bg-transparent bg-opacity-30 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <span className="text-white text-lg font-bold">{card.label}</span>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

