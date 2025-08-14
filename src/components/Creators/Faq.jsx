// import React, { useState } from "react";

// const faqs = [
//   {
//     question: "When will Slayyers launch?",
//     answer:
//       "We're launching in Lucknow first, with beta testing starting Q2 2025. Sign up for early access to be notified first!",
//   },
//   {
//     question: "What areas will you cover?",
//     answer:
//       "We're starting with Lucknow and expanding to other Tier 1-3 cities based on demand and operations readiness.",
//   },
//   {
//     question: "How does the 60-minute delivery work?",
//     answer:
//       "We partner with local fashion retailers and brands to maintain hyperlocal inventory, enabling super-fast delivery from nearby stores.",
//   },

//   // For Brands
//   {
//     question: "What types of brands can partner with Slayyers?",
//     answer:
//       "We welcome D2C brands, local fashion retailers, MBO/EBO stores, and fashion & lifestyle brands across clothing, footwear, and accessories.",
//   },
//   {
//     question: "What are the partnership terms?",
//     answer:
//       "We offer flexible partnership models. Contact us at partnerships@slayyers.com to discuss terms specific to your brand.",
//   },

//   // For Creators
//   {
//     question: "What's the minimum follower count required?",
//     answer:
//       "We evaluate creators based on engagement quality, not just follower count. Generally, 1000+ engaged followers in fashion/beauty/lifestyle niches.",
//   },
//   {
//     question: "How do payouts work?",
//     answer:
//       "We offer monthly payouts with transparent tracking. Commission rates vary by category and partnership level.",
//   },
// ];


// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="bg-black text-white px-6 lg:px-20 py-16 pop">
//       <h2 className="text-4xl leading-relaxed font-extrabold text-center">
//         Freaquently Asked
//         <br />
//         Question
//       </h2>
//       <p className="text-center text-white/70 mt-2 mb-10 text-lg">
//         Wanna Ask Something?
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="border-b border-b-white  p-4 cursor-pointer hover:bg-white/5 transition"
//             onClick={() => toggleFAQ(index)}
//           >
//             <div className="flex justify-between items-center">
//               <p className="font-medium text-gray-400">{faq.question}</p>
//               <span className="text-lg">{openIndex === index ? "−" : "+"}</span>
//             </div>
//             {openIndex === index && (
//               <p className="mt-3 text-sm text-white/80">{faq.answer}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQSection;


import React, { useState } from "react";

const faqs = [
  {
    question: "When will Slayyers launch?",
    answer:
      "We're launching in Lucknow first, with beta testing starting Q2 2025. Sign up for early access to be notified first!",
  },
  {
    question: "What areas will you cover?",
    answer:
      "We're starting with Lucknow and expanding to other Tier 1-3 cities based on demand and operations readiness.",
  },
  {
    question: "How does the 60-minute delivery work?",
    answer:
      "We partner with local fashion retailers and brands to maintain hyperlocal inventory, enabling super-fast delivery from nearby stores.",
  },
  {
    question: "What types of brands can partner with Slayyers?",
    answer:
      "We welcome D2C brands, local fashion retailers, MBO/EBO stores, and fashion & lifestyle brands across clothing, footwear, and accessories.",
  },
  {
    question: "What are the partnership terms?",
    answer:
      "We offer flexible partnership models. Contact us at partnerships@slayyers.com to discuss terms specific to your brand.",
  },
  {
    question: "What's the minimum follower count required?",
    answer:
      "We evaluate creators based on engagement quality, not just follower count. Generally, 1000+ engaged followers in fashion/beauty/lifestyle niches.",
  },
  {
    question: "How do payouts work?",
    answer:
      "We offer monthly payouts with transparent tracking. Commission rates vary by category and partnership level.",
  },
];

const FAQSection = () => {
  const [openStates, setOpenStates] = useState(Array(faqs.length).fill(false));

  const toggleFAQ = (index) => {
    setOpenStates((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="bg-black text-white px-6 lg:px-20 mt-5 md:mt-0 py-2 md:py-16 pop">
      <h2 className="text-2xl md:text-4xl leading-relaxed font-extrabold text-center">
        Frequently Asked
        <br />
        Questions
      </h2>
      <p className="text-center text-white/70 mt-2 mb:4 md:mb-10 text-lg">
        Wanna Ask Something?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-b-white p-4 cursor-pointer hover:bg-white/5 transition"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium text-gray-400">{faq.question}</p>
              <span className="text-lg">
                {openStates[index] ? "−" : "+"}
              </span>
            </div>
            {openStates[index] && (
              <p className="mt-3 text-sm text-white/80">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
