

import React from "react";

const Page3 = () => {
  const cardData = [
    {
      name: "Tara",
      age: "18–24",
      description: "Can't discover local & latest trends fast enough",
      image: "https://tse1.mm.bing.net/th/id/OIP.0_INywwz74o8LLO4Lz7vCAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3", 
    },
    {
      name: "Priya",
      age: "25–30",
      description: "Wants curated fashion styles, not just endless scrolling",
      image: "https://tse2.mm.bing.net/th/id/OIP.jYVGn4nnq3epgFTW96BiLAHaE9?rs=1&pid=ImgDetMain&o=7&rm=3", 
    },
    {
      name: "Sameer",
      age: "28–35, Brands",
      description:
        "Inventory's ready, visibility is not enough. Struggles in high RTO.",
      image: "https://img.freepik.com/free-photo/handsome-boy-yellow-background_432566-8286.jpg", 
    },
  ];

  return (
    <div className="w-full max-h-screen md:min-h-screen flex flex-col items-center justify-center gap-20 relative overflow-hidden px-4">
      {/* Button */}
      <button className="pop relative z-20 bg-white flex items-center justify-center rounded-md px-4 py-2 text-[#007AFF] font-extrabold gap-2 text-sm sm:text-base">
        <img src="/send.png" alt="" className="w-4 sm:w-5" />
        Get Early Access
      </button>

      {/* Heading */}
      <h1 className="font-extrabold text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl leading-tight z-20 max-w-[90%]">
        <i> Today's Online Fashion Shopping is Broken</i>
      </h1>

      {/* Swipable Cards */}
      <div className="flex items-center justify-between w-full relative z-20 max-md:justify-start max-md:overflow-x-auto max-md:overflow-y-hidden max-md:gap-4 scrollbar-hide">
        {cardData.map((card, i) => (
          <div
            key={i}
            className="flex flex-col items-center px-10 relative max-md:min-w-[90%] max-md:px-4 max-md:shrink-0"
          >
            <div className="flex flex-col items-center justify-center gap-4 h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img
                src={card.image}
                className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-full object-cover shadow-md shadow-black"
                alt={card.name}
              />
              <h1 className="pop text-2xl sm:text-3xl md:text-4xl font-extrabold">
                {card.name}
              </h1>
              <h3 className="pop text-sm sm:text-base md:text-lg text-center font-extrabold">
                {card.description}
              </h3>
            </div>
            <img src="/review.png" className="object-contain w-full" alt="" />
          </div>
        ))}
      </div>

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
