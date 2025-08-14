import React from "react";
import creatorImage from "/contact3.png";
import { useNavigate } from "react-router-dom";

const ContentCreators = () => {
  const navigate = useNavigate();
  const handleMail = () => {
    window.location.href = "mailto:connect@slayyers.com";
  };
  return (
    <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-20 py-10 pop">
      <section className="bg-[#37474F66] text-white p-5 sm:p-8 rounded-3xl shadow-md w-full max-w-5xl">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-center border-b border-white/20 pb-2 mb-6">
          Content Creators & Influencers
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="w-full md:w-2/3 space-y-4">
            <h4 className="text-lg sm:text-xl font-semibold text-center md:text-left">
              Fashion, Beauty & Lifestyle Creators
            </h4>

            <p className="text-sm sm:text-base text-center md:text-left">
              Monetize your content and grow your earnings with India’s most
              creator-friendly fashion platform. Let’s explore how your
              influence can generate real revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              {/* List 1 */}
              <div className="flex-1">
                <p className="font-semibold text-center md:text-left mb-1">
                  Creator Categories:
                </p>
                <ul className="list-disc ml-6 text-sm space-y-1">
                  <li>Fashion Influencers</li>
                  <li>Beauty Content Creators</li>
                  <li>Lifestyle Bloggers</li>
                  <li>Street Style Photographers</li>
                  <li>Regional Content Creators</li>
                </ul>
              </div>

              {/* List 2 */}
              <div className="flex-1">
                <p className="font-semibold text-center md:text-left mb-1">
                  What We Offer:
                </p>
                <ul className="list-disc ml-6 text-sm space-y-1">
                  <li>Creator Partnership Programs</li>
                  <li>Revenue Sharing Opportunities</li>
                  <li>Brand Collaboration Facilitation</li>
                  <li>Content Creation Support</li>
                  <li>Performance Analytics</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=connect@slayyers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-white text-[#007AFF] px-5 py-2 rounded-md font-semibold text-sm hover:bg-opacity-90 transition inline-block text-center"
              >
                Join as Creator
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={creatorImage}
              alt="Content Creators"
              className="w-40 sm:w-56 md:w-72 object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentCreators;
