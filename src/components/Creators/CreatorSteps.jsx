import React from "react";
import sendIcon from "/send.png"; // Make sure the image path is correct
import { useNavigate } from "react-router-dom";

const CreatorSteps = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-white py-1 md:py-16 px-6 lg:px-20 text-center space-y-6 pop">
      <h2 className="text-3xl lg:text-4xl font-extrabold">
        Join the Creator Program in 3 Easy Steps
      </h2>

      <div className="space-y-3 text-lg">
        <div>
          <p className="font-bold">Step 1: Apply & Get Approved</p>
          <p className="text-white/80">
            Submit creator application | Portfolio review process | Audience
            analysis | Approval notification
          </p>
        </div>

        <div>
          <p className="font-bold">Step 2: Training & Setup Step</p>
          <p className="text-white/80">
            Platform training session | Content creation guidelines | Product
            access setup | Analytics dashboard walkthrough
          </p>
        </div>

        <div>
          <p className="font-bold">3: Create & Earn</p>
          <p className="text-white/80">
            Start creating shoppable content | Collaborate with brands | Track
            performance | Receive monthly payouts
          </p>
        </div>
      </div>

      <div className="pt-6 w-full flex items-center justify-center">
        <button
         onClick={() => navigate('/coming-soon')}
         className="pop relative z-20 bg-white flex items-center justify-center rounded-md px-4 py-2 text-[#007AFF] font-extrabold gap-2">
          <img src={sendIcon} alt="send icon" className="w-5 h-5" />
          Apply as Creator
        </button>
      </div>
    </div>
  );
};

export default CreatorSteps;
