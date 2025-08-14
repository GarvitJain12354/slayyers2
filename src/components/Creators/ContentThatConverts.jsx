import React from "react";
import convert1 from "/convert1.png";
import convert2 from "/convert2.png";
import convert3 from "/convert3.png";
import convert4 from "/convert4.png";

const sections = [
  {
    title: "FASHION STYLING VIDEOS",
    points: [
      "Daily Outfit Inspiration",
      "Seasonal Wardrobe Guides",
      "Styling Tips And Tricks",
      "Fashion Trend Analysis",
    ],
    img: convert1,
  },
  {
    title: "BEAUTY & FASHION CROSSOVER",
    points: [
      "Makeup Looks With Outfit Coordination",
      "Beauty Product Reviews With Styling",
      "Get-Ready-With-Me Content",
      "Event Styling Guides",
    ],
    img: convert2,
  },
  {
    title: "LIFESTYLE INTEGRATION",
    points: [
      "Fashion for Different Occasions",
      "Travel Style Guides",
      "Workplace Fashion",
      "Weekend Casual Looks",
    ],
    img: convert3,
  },
  {
    title: "SHOPPING HAULS & REVIEWS",
    points: [
      "Latest Fashion Finds",
      "Brand Comparison Videos",
      "Styling Multiple Pieces",
      "Value-for-Money Assessments",
    ],
    img: convert4,
  },
];

const ContentThatConverts = () => {
  return (
    <div className="bg-black text-white px-6 lg:px-20 py-16 space-y-20 pop">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-center">
        CONTENT THAT CONVERTS
      </h2>

      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row ${
            index % 2 === 0 ? "lg:flex-row-reverse" : ""
          } items-center justify-center gap-10`}
        >
          <img
            src={section.img}
            alt={`convert-${index}`}
            className="w-[250px]"
          />
          <div>
            <h3 className=" text-center md:text-left pops font-semibold text-2xl mb-3">{section.title}</h3>
            <ul className="list-disc ml-5 space-y-2 text-xl text-white/90">
              {section.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentThatConverts;
