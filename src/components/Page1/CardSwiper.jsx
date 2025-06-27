// CardSwiper.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "./CardSwiper.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

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
  return (
    <div className="card-swiper-container mt-10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 80, // Negative value pulls slides closer
          depth: 100, // try 100–300
          modifier: 2.5, // try 1.5–3
          slideShadows: false,
        }}
        pagination={{ clickable: false }}
        modules={[EffectCoverflow]}
        className="card-swiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="card-slide">
            <img src={card.image} alt={card.label} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
