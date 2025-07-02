import React, { useState } from "react";

const faqs = [
  {
    question: "When will Slayyers launch?",
    answer: "Slayyers is launching very soon. Stay tuned!",
  },
  {
    question: "What types of brands can partner with Slayyers?",
    answer: "Any fashion, beauty, or lifestyle brand can partner with us.",
  },
  {
    question: "What areas will you cover?",
    answer:
      "We will initially cover metro cities and gradually expand pan-India.",
  },
  {
    question: "What are the partnership terms?",
    answer: "Partnership terms are flexible and based on mutual goals.",
  },
  {
    question: "How does the 60-minute delivery work?",
    answer:
      "Selected products will be eligible for 60-minute delivery in supported cities.",
  },
  {
    question: "What's the minimum follower count required?",
    answer:
      "There is no hard limit – content quality is more important than follower count.",
  },
  {
    question: "How do payouts work?",
    answer:
      "Payouts are processed monthly via your preferred method after content approval.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white px-6 lg:px-20 py-16 pop">
      <h2 className="text-4xl leading-relaxed font-extrabold text-center">
        Freaquently Asked
        <br />
        Question
      </h2>
      <p className="text-center text-white/70 mt-2 mb-10 text-lg">
        Wanna Ask Something?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-b-white  p-4 cursor-pointer hover:bg-white/5 transition"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium text-gray-400">{faq.question}</p>
              <span className="text-lg">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <p className="mt-3 text-sm text-white/80">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
