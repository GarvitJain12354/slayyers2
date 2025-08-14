

import React from "react";
import investorImage from "/contact4.png";

const InvestorsSection = () => {
  return (
    <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-20 py-10 pop">
      <section className="bg-[#37474F66] text-white p-5 sm:p-8 rounded-3xl shadow-md w-full max-w-5xl">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-center border-b border-white/20 pb-2 mb-6">
          Investors & Stakeholders
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={investorImage}
              alt="Investors Discussion"
              className="w-40 sm:w-56 md:w-72 object-contain"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3 space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-center md:text-left">
              Be An Early Believer In India&apos;s Next Commerce Disruptor
            </h4>

            <p className="text-sm sm:text-base text-center md:text-left">
              Interested in investing in the future of fashion commerce? Let’s
              discuss how Slayyers is positioned to capture the Gen Z &
              Millennial fashion market.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Left List */}
              <div className="flex-1">
                <p className="font-semibold text-center md:text-left mb-1">
                  Investment Opportunities:
                </p>
                <ul className="list-disc ml-6 text-sm space-y-1">
                  <li>Seed Funding Rounds</li>
                  <li>Strategic Partnerships</li>
                  <li>Advisory Board Positions</li>
                  <li>Expansion Funding</li>
                  <li>Technology Partnerships</li>
                </ul>
              </div>

              {/* Right List */}
              <div className="flex-1">
                <p className="font-semibold text-center md:text-left mb-1">
                  What We Share:
                </p>
                <ul className="list-disc ml-6 text-sm space-y-1">
                  <li>Market Opportunity Analysis</li>
                  <li>Business Model Deep-Dive</li>
                  <li>Financial Projections</li>
                  <li>Growth Strategy</li>
                  <li>Competitive Advantages</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=co-founder@slayyers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-white text-[#007AFF] px-5 py-2 rounded-md font-semibold text-sm hover:bg-opacity-90 transition inline-block text-center"
              >
                Investment Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorsSection;
