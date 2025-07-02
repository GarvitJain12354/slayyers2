import React from "react";
import partnersImage from "/contact2.png"; // image: contact2

const BrandPartners = () => {
  return (
    <div className="w-full h-screen flex items-center px-[10vh] pop">
      <section className="bg-[#37474F66] text-white p-6 rounded-3xl mb-6 shadow-md flex flex-col items-center justify-center">
        <h3 className="text-4xl font-bold uppercase text-center border-b w-fit mb-4">
          Brand Partners & Retailers
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img
            src={partnersImage}
            alt="Brand Partners"
            className="w-56 md:w-72"
          />
          <div className="md:w-2/3">
            <h4 className="text-lg font-semibold mb-2">
              D2C Brands, Home Grown Labels & Fashion Retailers
            </h4>
            <p className="text-sm mb-4">
              Ready to revolutionize how you reach customers? Let’s discuss how
              Slayyers can amplify your brand’s presence in the Gen Z &
              Millennial market.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="font-semibold">Partnership Opportunities:</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>D2C Home Grown Brands</li>
                  <li>Local Fashion Retailers</li>
                  <li>MBO/EBO Stores</li>
                  <li>Fashion & Lifestyle Brands</li>
                  <li>Emerging Designers</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">What We Discuss:</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>Partnership Terms and Benefits</li>
                  <li>Revenue Sharing Models</li>
                  <li>Marketing Collaboration</li>
                  <li>Technical Integration</li>
                  <li>Launch Strategy</li>
                </ul>
              </div>
            </div>
            <button className="mt-4 bg-white text-[#007AFF] px-4 py-2 rounded-md font-semibold">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandPartners;
