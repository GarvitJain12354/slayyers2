import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";

const Page3 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const cardData = [
    {
      name: "Tara",
      age: "(18–24)",
      description: "Can't discover local & latest trends fast enough",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.0_INywwz74o8LLO4Lz7vCAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Priya",
      age: "(25–30)",
      description: "Wants curated fashion styles, not just endless scrolling",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.jYVGn4nnq3epgFTW96BiLAHaE9?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Sameer",
      age: "(28–35, Seller)",
      description: "Struggles to showcase inventory in real time.",
      image:
        "https://img.freepik.com/free-photo/handsome-boy-yellow-background_432566-8286.jpg",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 890); // md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Card = ({ card, i }) => (
    <div
      className="flex flex-col items-center px-10 relative max-md:min-w-[90%] max-md:px-4 max-md:shrink-0"
    >
      <div
        className="relative w-[366px] h-[278px] cursor-pointer transition-transform duration-300 hover:scale-105"
        onMouseEnter={() => setActiveIndex(i)}
        onMouseLeave={() => setActiveIndex(null)}
      >
        {/* SVG background */}
        <svg
          width="366"
          height="278"
          viewBox="0 0 366 278"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg absolute top-0 left-0 z-0"
        >
          <g filter="url(#filter0_d)">
            <path
              d="M360 59.5361C360 70.858 350.822 80.0361 339.5 80.0361C328.178 80.0361 319 89.2143 319 100.536V169.465C319 180.787 328.178 189.965 339.5 189.965C350.822 189.965 360 199.143 360 210.465V238C360 254.569 346.569 268 330 268H36C19.4315 268 6 254.569 6 238V211.965C6 199.815 15.8497 189.965 28 189.965C40.1503 189.965 50 180.115 50 167.965V102.036C50 89.8859 40.1503 80.0361 28 80.0361C15.8497 80.0361 6 70.1864 6 58.0361V32C6 15.4315 19.4315 2 36 2H330C346.569 2 360 15.4315 360 32V59.5361Z"
              fill={
                activeIndex === i
                  ? "url(#hoverGradient)"
                  : "url(#normalGradient)"
              }
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0"
              y="0"
              width="366"
              height="278"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>

            <linearGradient
              id="normalGradient"
              x1="183"
              y1="2"
              x2="183"
              y2="268"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F82CFF" />
              <stop offset="1" stopColor="#570090" />
            </linearGradient>

            <linearGradient
              id="hoverGradient"
              x1="183"
              y1="2"
              x2="183"
              y2="268"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2CCEFF" />
              <stop offset="1" stopColor="#300090" />
            </linearGradient>
          </defs>
        </svg>

        {/* Card content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-2 h-full">
          <img
            src={card.image}
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-full object-cover shadow-md shadow-black"
            alt={card.name}
          />
          <h1 className="pop text-2xl sm:text-3xl md:text-4xl font-extrabold">
            {card.name}
          </h1>
          <h3 className="pop font-normal px-14 md:px-4 leading-[22px] tracking-[-0.41px] text-center align-middle text-sm sm:text-base md:text-lg">
            {card.age}
          </h3>
          <h3 className="pop font-normal px-14 md:px-4 leading-[22px] tracking-[-0.41px] text-center align-middle text-sm sm:text-base md:text-lg">
            {card.description}
          </h3>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-h-screen md:min-h-screen flex flex-col items-center justify-center gap-20 relative overflow-hidden px-4">
      {/* Button */}
      <button onClick={() => navigate("/get-early-access")} className="pop relative z-20 bg-white hover:bg-[linear-gradient(90deg,_#FA00A6_0%,_#1715BE_100%)] flex items-center justify-center rounded-md px-4 py-2 text-[#007AFF] hover:text-white font-extrabold gap-2 text-sm sm:text-base">
        <img src="/send.png" alt="" className="w-4 sm:w-5" />
        Get Early Access
      </button>

      {/* Heading */}
      <h1 className="popbold font-bold italic tracking-[-0.41px] align-middle text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight z-20 max-w-[90%]">
        <i> Today's Online Fashion Shopping is Broken</i>
      </h1>

      {/* Cards */}
      {isMobile ? (
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={16}
          slidesPerView={1}
          className="w-full"
        >
          {cardData.map((card, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <Card card={card} i={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex items-center justify-between w-full relative z-20">
          {cardData.map((card, i) => (
            <Card key={i} card={card} i={i} />
          ))}
        </div>
      )}

      {/* Background Image */}
      <img
        src="/bgColor.png"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] md:w-auto"
        alt=""
      />
    </div>
  );
};

export default Page3;
