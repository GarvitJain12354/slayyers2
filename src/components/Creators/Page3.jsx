import React from "react";

const Page3 = ({ data }) => {
  return (
    <div
      className={`w-full ${data.bg} ${
        data.bg === "lgr" ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex flex-col lg:flex-row items-center justify-around min-h-screen px-4 sm:px-8 lg:px-[10vh] py-10 gap-10`}
    >
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-6xl">
          {data.title}
        </h1>

        <ul className="list-disc font-light text-base sm:text-lg lg:text-xl ml-4 sm:ml-6 opacity-80 space-y-2 sm:space-y-3 text-left">
          {data.categories.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* <button className="w-fit mx-auto lg:mx-0 px-6 py-3 create-btn rounded-lg font-semibold text-base sm:text-lg lg:text-xl">
          {data.btn}
        </button> */}
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={data.img}
          alt="illustration"
          className="w-[80%] max-w-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default Page3;
