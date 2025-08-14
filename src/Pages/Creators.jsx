import React from "react";
import Page1 from "../components/Creators/Page1";
import Page2 from "../components/Creators/Page2";
import Page3 from "../components/Creators/Page3";
import FashionContentSection from "../components/Creators/FashionContent";
import WhyCreatorsChoose from "../components/Creators/WhyChoose";
import ContentThatConverts from "../components/Creators/ContentThatConverts";
import CreatorSteps from "../components/Creators/CreatorSteps";
import FAQSection from "../components/Creators/Faq";
import Footer from "../components/Page1/Footer";

const Creators = () => {
  const creatorData = [
    {
      title: "Creator Categories",
      categories: [
        "Fashion Influencers - Style bloggers and fashion enthusiasts Beauty",
        "Content Creators - Makeup artists and beauty reviewers Lifestyle",
        "Influencers - Lifestyle and wellness content creators Street Style",
        "Photographers - Urban fashion documentarians Micro & Macro",
        "Influencers - From 1K to 1M+ followers Regional Content Creators - Local language and culture experts",
      ],
      btn: "Register Now",
      bg: "lg",
      img: "/creator1.png",
    },
    {
      title: "Commission-Based Earnings",
      categories: [
        "Earn commission on every sale generated through your content",
        "Transparent revenue sharing model",
        "Real-time earnings tracking",
        "Monthly payout system",
      ],
      btn: "Create Now",
      bg: "lgr",
      img: "/creator2.png",
    },
    {
      title: "Sponsored Content Opportunities",
      categories: [
        "Brand collaboration videos",
        "Product launch campaigns",
        "Seasonal collection showcases",
        "Exclusive brand ambassadorships",
      ],
      btn: "Contact Now",
      bg: "lg",
      img: "/creator3.png",
    },

    {
      title: "Performance Bonuses",
      categories: [
        "Brand collaboration videos",
        "Product launch campaigns",
        "Seasonal collection showcases",
        "Exclusive brand ambassadorships",
        "Monthly top performer rewards",
        "Viral content bonuses",
        "Consistent engagement rewards",
        "Long-term partnership incentives",
      ],
      btn: "Create Now",
      bg: "lgr",
      img: "/creator4.png",
    },
  ];

  return (
    <>
      <Page1 />
      <Page2 />
      {creatorData?.map((i) => (
        <Page3 data={i} />
      ))}
      <FashionContentSection />
      <WhyCreatorsChoose />
      <ContentThatConverts />
      <CreatorSteps />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Creators;
