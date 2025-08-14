import React from "react";
import phone1 from "/phone1.png";
import phone2 from "/phone2.png";
import phone3 from "/phone3.png";

const FashionContentSection = () => {
  return (
    <div className="bg-black text-white px-6 lg:px-20 py-16 space-y-20 pop w-full">
      {/* Title */}
      <h2 className="text-center text-2xl lg:text-5xl popbold bg-gradient-to-r from-[#9000E3] via-[#FFFFFF] to-[#009BD9] text-transparent bg-clip-text font-extrabold ">
        EVERYTHING YOU NEED TO CREATE ENGAGING FASHION CONTENT
      </h2>

      {/* Section 1 - Shoppable Video */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 w-full">
        <img src={phone1} alt="phone1" className="w-[300px]" />
        <div>
          <h3 className="text-3xl pops font-bold text-center mb-3">SHOPPABLE VIDEO FEATURES</h3>
          <p className="font-semibold text-center md:text-left mb-2">Capabilities:</p>
          <ul className="list-disc text-xl ml-5 space-y-1 text-gray-300">
            <li>Tag products directly in your videos</li>
            <li>Seamless shopping integration</li>
            <li>Interactive product discovery</li>
            <li>Instant purchase options for viewers</li>
          </ul>
        </div>
      </div>

      {/* Section 2 - Content Creation Support */}
      <div className="flex flex-col lg:flex-row items-center gap-10 w-full justify-center">
        <div>
          <h3 className="text-3xl pops mb-3 text-center">CONTENT CREATION SUPPORT</h3>
          <p className="font-semibold mb-2 text-center md:text-left">Tools Provided:</p>
          <ul className="list-disc text-xl ml-5 space-y-1 text-gray-300">
            <li>Product styling guidelines</li>
            <li>Photography tips and tricks</li>
            <li>Video editing resources</li>
            <li>Trending hashtag suggestions</li>
          </ul>
        </div>
        <img src={phone2} alt="phone2" className="w-[300px]" />
      </div>

      {/* Section 3 - Performance Analytics */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 w-full justify-center">
        <img src={phone3} alt="phone3" className="w-[300px]" />
        <div>
          <h3 className="text-3xl pops mb-3 text-center">PERFORMANCE ANALYTICS</h3>
          <p className="font-semibold mb-2 text-center md:text-left">Metrics Available:</p>
          <ul className="list-disc text-xl ml-5 space-y-1 text-gray-300">
            <li>Content engagement rates</li>
            <li>Click-through rates to products</li>
            <li>Conversion tracking</li>
            <li>Audience demographics</li>
            <li>Revenue generated per post</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FashionContentSection;
