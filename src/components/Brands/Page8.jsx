import React from "react";

const Page8 = () => {
  return (
    <div className="w-full relative h-screen gap-4 flex flex-col items-center justify-center bg-[#2563EB]">
      <h1 className="text-6xl font-semibold text-white">
        Get Started in <br /> 3 Simple Steps
      </h1>

      <ul className="list-disc font-extralight ml-5">
        <p className="text-left font-semibold">Step 1: Apply & Verify</p>
        <li>Submit brand application </li>
        <li>Document verification process</li>
        <li>Quality assessment</li>
        <li>Partnership agreement</li>
      </ul>
      <ul className="list-disc font-extralight ml-5">
        <p className="text-left font-semibold">Step 2: Setup & Integration</p>
        <li>Product catalogue upload</li>
        <li>Video content creation support</li>
        <li>Inventory integration</li>
        <li>Training and support</li>
      </ul>
      <ul className="list-disc font-extralight ml-5">
        <p className="text-left font-semibold">Step 3: Launch & Grow</p>
        <li>Soft launch with limited products</li>
        <li>Performance monitoring</li>
        <li>Scaling and optimization</li>
        <li>Continuous support</li>
      </ul>
      <button className="pop relative z-20 bg-white flex items-center justify-center rounded-md px-4 py-2 text-[#007AFF] pop font-extrabold gap-2">
        <img src="/send.png" alt="" />
        Partner with us!
      </button>
      <img
        src="/shape.png"
        className="absolute right-0 bottom-0 object-contain"
        alt=""
      />
      <img
        src="/shape2.png"
        className="absolute left-0 top-0 object-contain"
        alt=""
      />
    </div>
  );
};

export default Page8;
