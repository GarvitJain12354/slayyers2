import React from "react";

const Page3 = ({ data }) => {
  return (
    <div
      className={`w-full ${data.bg} ${
        data.bg === "lgr" && "flex-row-reverse"
      } h-screen flex items-center px-[10vh] mont justify-around`}
    >
      <div className="w-1/2 flex flex-col gap-10">
        <h1 className="font-extrabold text-6xl">{data.title}</h1>
        <ul className="list-disc font-extralight ml-5 opacity-55 text-xl space-y-3">
          {data.categories.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button className="w-fit px-6 py-3 cursor-pointer create-btn rounded-lg font-semibold text-xl">
          {data.btn}
        </button>
      </div>
      <img src={data.img} className="object-contain" alt="" />
    </div>
  );
};

export default Page3;
