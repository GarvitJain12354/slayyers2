import React from "react";
import shopperImage from "/contact1.png"; // image: contact1

const FashionShoppers = () => {
  return (
    <div className="w-full h-screen flex items-center px-[10vh] pop">
      <section className="bg-[#37474F66] text-white p-6 rounded-3xl mb-6 shadow-md flex flex-col items-center justify-center">
        {/* <h2 className="text-center text-3xl font-bold text-[#02d1f7] mb-4 uppercase">
          How Can We Help You Today?
        </h2> */}
        <h3 className="text-4xl font-bold uppercase text-center border-b w-fit mb-4">
          Fashion Shoppers
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-2/3">
            <h4 className="text-lg font-semibold mb-2">
              Ready For 60-Minute Fashion Delivery?
            </h4>
            <p className="text-sm mb-4 w-1/2">
              Get early access to India’s fastest fashion platform. Be among the
              first to experience AI-powered styling and lightning-fast delivery
              in Lucknow.
            </p>
            <div className="mb-4">
              <p className="font-semibold">What We Offer:</p>
              <ul className="list-disc ml-6 text-sm">
                <li>Early Access to Platform</li>
                <li>Beta Testing Opportunities</li>
                <li>Exclusive Launch Offers</li>
                <li>First-to-Know Updates</li>
              </ul>
            </div>
            <button className="bg-white text-[#007AFF] px-4 py-2 rounded-md font-semibold">
              Get Early Access
            </button>
          </div>
          <img
            src={shopperImage}
            alt="Fashion Shopper"
            className="w-56 md:w-72"
          />
        </div>
      </section>
    </div>
  );
};

export default FashionShoppers;
