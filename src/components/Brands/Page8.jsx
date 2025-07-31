import React from "react";
import { useNavigate } from "react-router-dom";

const Page8 = () => {
  const navigate=useNavigate();
  return (
    <div className="w-full relative min-h-screen gap-8 flex flex-col items-center justify-center bg-[#2563EB] px-4 py-16 sm:py-20">
      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white text-center leading-tight">
        Get Started in <br className="hidden sm:block" /> 3 Simple Steps
      </h1>

      {/* Steps Container */}
      <div className="flex flex-col sm:flex-row justify-center items-start gap-10 w-full max-w-5xl">
        {/* Step 1 */}
        <ul className="list-disc font-extralight text-white text-base sm:text-lg px-4 sm:px-0 sm:w-1/3">
          <p className="text-left font-semibold mb-2">Step 1: Apply & Verify</p>
          <li>Submit brand application</li>
          <li>Document verification process</li>
          <li>Quality assessment</li>
          <li>Partnership agreement</li>
        </ul>

        {/* Step 2 */}
        <ul className="list-disc font-extralight text-white text-base sm:text-lg px-4 sm:px-0 sm:w-1/3">
          <p className="text-left font-semibold mb-2">
            Step 2: Setup & Integration
          </p>
          <li>Product catalogue upload</li>
          <li>Video content creation support</li>
          <li>Inventory integration</li>
          <li>Training and support</li>
        </ul>

        {/* Step 3 */}
        <ul className="list-disc font-extralight text-white text-base sm:text-lg px-4 sm:px-0 sm:w-1/3">
          <p className="text-left font-semibold mb-2">Step 3: Launch & Grow</p>
          <li>Soft launch with limited products</li>
          <li>Performance monitoring</li>
          <li>Scaling and optimization</li>
          <li>Continuous support</li>
        </ul>
      </div>

      {/* Button */}
      <button onClick={() => navigate("/brandform")} className="pop mt-6 bg-white flex items-center justify-center rounded-md px-4 py-3 text-[#007AFF] font-extrabold gap-2 shadow-md">
        <img src="/send.png" alt="" className="w-5 h-5" />
        Partner with us!
      </button>

      {/* Background Shapes */}
      <img
        src="/shape.png"
        className="absolute right-0 bottom-0 object-contain w-[120px] sm:w-[200px]"
        alt=""
      />
      <img
        src="/shape2.png"
        className="absolute left-0 top-0 object-contain w-[120px] sm:w-[200px]"
        alt=""
      />
    </div>
  );
};

export default Page8;
