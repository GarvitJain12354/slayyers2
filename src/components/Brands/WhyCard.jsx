import React from "react";

const WhyCard = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center text-black text-center px-10 py-5 gap-2 max-md:py-4">
      <img src={data?.img} className="h-[40vh] max-md:object-contain max-md:h-fit" alt="" />
      <h1 className="font-extrabold text-xl">{data?.title}</h1>
      <p className="text-sm leading-relaxed">{data?.desc}</p>
    </div>
  );
};

export default WhyCard;
