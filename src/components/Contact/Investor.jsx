import React from "react";
import investorImage from "/contact4.png"; // image: contact4

const InvestorsSection = () => {
  return (
    <div className="w-full h-screen flex items-center px-[10vh] pop">
      <section className="bg-[#37474F66] text-white p-6 rounded-3xl mb-6 shadow-md flex flex-col items-center justify-center">
        <h3 className="text-4xl font-bold uppercase text-center border-b w-fit mb-4">
          Investors & Stakeholders
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img
            src={investorImage}
            alt="Investors Discussion"
            className="w-56 md:w-72"
          />
          <div className="md:w-2/3">
            <h4 className="text-lg font-semibold mb-2">
              Be An Early Believer In India&apos;s Next Commerce Disruptor
            </h4>
            <p className="text-sm mb-4">
              Interested in investing in the future of fashion commerce? Let’s
              discuss how Slayyers is positioned to capture the Gen Z &
              Millennial fashion market.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="font-semibold">Investment Opportunities:</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>Seed Funding Rounds</li>
                  <li>Strategic Partnerships</li>
                  <li>Advisory Board Positions</li>
                  <li>Expansion Funding</li>
                  <li>Technology Partnerships</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">What We Share:</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>Market Opportunity Analysis</li>
                  <li>Business Model Deep-Dive</li>
                  <li>Financial Projections</li>
                  <li>Growth Strategy</li>
                  <li>Competitive Advantages</li>
                </ul>
              </div>
            </div>
            <button className="mt-4 bg-white text-[#007AFF] px-4 py-2 rounded-md font-semibold">
              Investment Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvestorsSection;
