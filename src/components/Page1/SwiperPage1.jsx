import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        speed={1000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./boy1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./boy2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./boy3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./boy1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./boy2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./boy3.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
