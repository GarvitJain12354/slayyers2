import React from "react";
import cret1 from "/cret1.png";
import cret2 from "/cret2.png";
import cret3 from "/cret3.png";
import cret4 from "/cret4.png";
import cret5 from "/cret5.png";
import cret6 from "/cret6.png";

const WhyCreatorsChoose = () => {
  const features = [
    {
      img: cret1,
      title: "Instant Gratification for Your Audience",
    },
    {
      img: cret2,
      title: "Highly Engaged Fashion Audience",
    },
    {
      img: cret3,
      title: "Direct Brand Partnerships",
    },
    {
      img: cret4,
      title: "Transparent Analytics",
    },
    {
      img: cret5,
      title: "Try-Before-Buy Advantage",
    },
    {
      img: cret6,
      title: "Local Brand Discovery",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-8 lg:p-16 text-center max-w-7xl mx-auto text-black pop">
      <h2 className="text-3xl lg:text-5xl font-semibold mb-4">
        Why Creators Choose <span className="text-black">Slayyers</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base lg:text-lg">
        Be part of India's fashion revolution. Create content that not only
        inspires but also generates real revenue. Your influence has value –
        let’s unlock it together!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-3">
            <img
              src={feature.img}
              alt={`feature-${idx}`}
              className="w-32 object-contain h-32w-32 "
            />
            <p className="text-md lg:text-lg font-extrabold">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyCreatorsChoose;
