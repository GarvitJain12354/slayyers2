import React from "react";
import partnersImage from "/contact2.png"; // Make sure this path is correct
import { useNavigate } from "react-router-dom";

const BrandPartners = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full  flex items-center justify-center px-4 sm:px-6 lg:px-10 py-10 pop">
      <section className="bg-[#37474F66] text-white p-6 sm:p-10 rounded-3xl shadow-md w-full max-w-5xl">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-center border-b pb-2 mb-6">
          Brand Partners & Retailers
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image */}
          <img
            src={partnersImage}
            alt="Brand Partners"
            className="w-40 sm:w-56 md:w-72 object-contain"
          />

          {/* Text */}
          <div className="w-full flex flex-col items-center md:items-start md:w-2/3 space-y-4">
            <h4 className="text-base sm:text-lg text-center md:text-left font-semibold">
              D2C Brands, Home Grown Labels & Fashion Retailers
            </h4>
            <p className="text-sm sm:text-base text-center md:text-left">
              Ready to revolutionize how you reach customers? Let’s discuss how
              Slayyers can amplify your brand’s presence in the Gen Z &
              Millennial market.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Column 1 */}
              <div>
                <p className="font-semibold ">Partnership Opportunities:</p>
                <ul className="list-disc ml-5 text-sm mt-1 ">
                  <li>D2C Home Grown Brands</li>
                  <li>Local Fashion Retailers</li>
                  <li>MBO/EBO Stores</li>
                  <li>Fashion & Lifestyle Brands</li>
                  <li>Emerging Designers</li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <p className="font-semibold ">What We Discuss:</p>
                <ul className="list-disc ml-5 text-sm mt-1">
                  <li>Partnership Terms and Benefits</li>
                  <li>Revenue Sharing Models</li>
                  <li>Marketing Collaboration</li>
                  <li>Technical Integration</li>
                  <li>Launch Strategy</li>
                </ul>
              </div>
            </div>
            <button
              onClick={() => navigate("/join-as-brand")}
              className="mt-4 max-md:hidden bg-white text-[#007AFF] px-5 py-2 rounded-md font-semibold w-fit"
            >
              Partner With Us
            </button>
          </div>
          <button
            onClick={() => navigate("/join-as-brand")}
            className="mt-4  bg-white md:hidden text-[#007AFF] px-5 py-2 rounded-md font-semibold w-fit"
          >
            Partner With Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default BrandPartners;
