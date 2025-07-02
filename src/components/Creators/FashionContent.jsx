import React from "react";
import phone1 from "/phone1.png";
import phone2 from "/phone2.png";
import phone3 from "/phone3.png";

const FashionContentSection = () => {
  return (
    <div className="bg-black text-white px-6 lg:px-20 py-16 space-y-20 pop w-full">
      {/* Title */}
      <h2 className="text-center text-4xl lg:text-5xl font-extrabold">
        <span className="text-white">EVERYTHING YOU NEED TO </span>
        <span className="text-purple-400">CREATE </span>
        <span className="text-cyan-400">ENGAGING FASHION CONTENT</span>
      </h2>

      {/* Section 1 - Shoppable Video */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
        <img src={phone1} alt="phone1" className="w-[300px]" />
        <div>
          <h3 className="text-3xl font-bold mb-3">SHOPPABLE VIDEO FEATURES</h3>
          <p className="font-semibold mb-2">Capabilities:</p>
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
          <h3 className="text-3xl font-bold mb-3">CONTENT CREATION SUPPORT</h3>
          <p className="font-semibold mb-2">Tools Provided:</p>
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
      <div className="flex flex-col lg:flex-row items-center gap-10 w-full justify-center">
        <img src={phone3} alt="phone3" className="w-[300px]" />
        <div>
          <h3 className="text-3xl font-bold mb-3">PERFORMANCE ANALYTICS</h3>
          <p className="font-semibold mb-2">Metrics Available:</p>
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
