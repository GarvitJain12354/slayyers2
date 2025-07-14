

import React from "react";
import shopperImage from "/contact1.png";

const FashionShoppers = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-20 py-10 pop">
      <section className="bg-[#37474F66] text-white p-5 sm:p-8 rounded-3xl shadow-md w-full max-w-5xl">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-center border-b border-white/20 pb-2 mb-6">
          Fashion Shoppers
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="w-full md:w-2/3 space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-center md:text-left">
              Ready For 60-Minute Fashion Delivery?
            </h4>

            <p className="text-sm sm:text-base text-center md:text-left">
              Get early access to India's fastest fashion platform. Be among the
              first to experience AI-powered styling and lightning-fast delivery
              in Lucknow.
            </p>

            <div>
              <p className="font-semibold text-center md:text-left mb-1">What We Offer:</p>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Early Access to Platform</li>
                <li>Beta Testing Opportunities</li>
                <li>Exclusive Launch Offers</li>
                <li>First-to-Know Updates</li>
              </ul>
            </div>

            <div className="flex justify-center md:justify-start">
              <button className="bg-white text-[#007AFF] px-5 py-2 rounded-md font-semibold text-sm hover:bg-opacity-90 transition">
                Get Early Access
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={shopperImage}
              alt="Fashion Shopper"
              className="w-40 sm:w-56 md:w-72 object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FashionShoppers;
