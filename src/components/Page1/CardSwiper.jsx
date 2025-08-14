import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";

const cards = [
  { image: "/img2.png", label: "Streetwear" },
  { image: "/img3.jpg", label: "Fashion" },
  { image: "/img1.png", label: "Astronaut" },
  { image: "/img4.png", label: "Style" },
  { image: "/img5.jpg", label: "Style" },
];

export default function CardSwiper() {
  const swiperRef = useRef(null);

  const handleClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="card-swiper-container mt-10" onClick={handleClick}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true} // make it rotate infinitely
        initialSlide={2}
        speed={800} // smoother movement
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 150,
          modifier: 2.5,
          slideShadows: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[EffectCoverflow]}
        className="card-swiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="card-slide">
            <img
              src={card.image}
              alt={card.label}
              className="rounded-2xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
