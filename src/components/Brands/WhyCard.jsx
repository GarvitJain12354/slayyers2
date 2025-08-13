import React from "react";

const WhyCard = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center text-black text-center px-10 py-5 gap-2 max-md:py-4">
      <div className="relative inline-block group rounded-xl">
        <div
          className="absolute inset-0 rounded-xl p-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(270deg, #0080FF 0%, #A200FF 100%)",
          }}
        >
          <div className="w-full h-full bg-white rounded-xl"></div>
        </div>
        <img
          src={data?.img}
          alt=""
          className="relative h-[40vh] max-md:object-contain max-md:h-fit rounded-xl"
        />
      </div>

      <h1 className="font-extrabold text-xl">{data?.title}</h1>
      <p className="text-xs mont font-normal   tracking-[0.35px] text-center align-middle leading-relaxed">
        {data?.desc}
      </p>
    </div>
  );
};

export default WhyCard;
