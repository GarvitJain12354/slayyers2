import React from "react";

const DirectContactInfo = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 lg:p-16 text-black pop max-w-7xl mx-auto mt-12">
      <h2 className="text-3xl lg:text-5xl font-semibold text-center mb-12">
        Reach Out Directly
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
        {/* Email Contacts */}
        <div>
          <h3 className="text-xl font-bold mb-4">📧 Email Contacts</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold">General Inquiries:</span> connect@slayyers.com</li>
            <li><span className="font-semibold">Co-Founder:</span> co-founder@slayyers.com</li>
            <li><span className="font-semibold">Brands:</span> brand@slayyers.com</li>
            <li><span className="font-semibold">Helps:</span> helpdesk@slayyers.com</li>
            <li><span className="font-semibold">Feedback:</span> feedback@slayyers.com</li>
            <li><span className="font-semibold">Administration:</span> admin@slayyers.com</li>
            {/* <li><span className="font-semibold">Press:</span> press@slayyers.com</li> */}
          </ul>
        </div>

        {/* Location Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">📍 Location</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold">Headquarters:</span> Lucknow, Uttar Pradesh, India</li>
            <li><span className="font-semibold">Status:</span> Launching Soon in Lucknow</li>
            <li><span className="font-semibold">Expansion:</span> Tier 1-3 cities across India</li>
          </ul>
        </div>

        {/* Platform Status */}
        <div>
          <h3 className="text-xl font-bold mb-4">🚀 Platform Status</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold">Current Phase:</span> Pre-launch development</li>
            <li><span className="font-semibold">Beta Testing:</span> Q2 2025</li>
            <li><span className="font-semibold">Public Launch:</span> Q3 2025</li>
            <li><span className="font-semibold">First City:</span> Lucknow</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DirectContactInfo;
