import React from "react";
import ContactUs from "../components/Contact/ContactUs";
import FashionShoppers from "../components/Contact/FashionShop";
import BrandPartners from "../components/Contact/BrandPartner";
import ContentCreators from "../components/Contact/ContentCreator";
import InvestorsSection from "../components/Contact/Investor";
import FounderMessage from "../components/Contact/Founder";
import FAQSection from "../components/Creators/Faq";
import Footer from "../components/Page1/Footer";

const Contact = () => {
  return (
    <>
      <ContactUs />
      <FashionShoppers />
      <BrandPartners />
      <ContentCreators />
      <InvestorsSection />
      <FounderMessage />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Contact;
