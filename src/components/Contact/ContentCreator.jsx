import React from "react";
import creatorImage from "/contact3.png"; // image: contact3

const ContentCreators = () => {
  return (
    <div className="w-full h-screen flex items-center px-[10vh] pop">
      <section className="bg-[#37474F66] text-white p-6 rounded-3xl mb-6 shadow-md flex flex-col items-center justify-center">
        <h3 className="text-4xl font-bold uppercase text-center border-b w-fit mb-4">
          Content Creators & Influencers
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-2/3">
            <h4 className="text-lg font-semibold mb-2">
              Fashion, Beauty & Lifestyle Creators
            </h4>
            <p className="text-sm mb-4">
              Monetize your content and grow your earnings with India’s most
              creator-friendly fashion platform. Let’s explore how your
              influence can generate real revenue.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="font-semibold">Creator Categories:</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>Fashion Influencers</li>
                  <li>Beauty Content Creators</li>
                  <li>Lifestyle Bloggers</li>
                  <li>Street Style Photographers</li>
                  <li>Regional Content Creators</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">What We Offer:</p>
                <ul className="list-disc ml-6 text-sm">
                  <li>Creator Partnership Programs</li>
                  <li>Revenue Sharing Opportunities</li>
                  <li>Brand Collaboration Facilitation</li>
                  <li>Content Creation Support</li>
                  <li>Performance Analytics</li>
                </ul>
              </div>
            </div>
            <button className="mt-4 bg-white text-[#007AFF] px-4 py-2 rounded-md font-semibold">
              Join as Creator
            </button>
          </div>
          <img
            src={creatorImage}
            alt="Content Creators"
            className="w-56 md:w-72"
          />
        </div>
      </section>
    </div>
  );
};

export default ContentCreators;
