import React from "react";
import ContactUs from "../components/Contact/ContactUs";
import FashionShoppers from "../components/Contact/FashionShop";
import BrandPartners from "../components/Contact/BrandPartner";
import ContentCreators from "../components/Contact/ContentCreator";
import InvestorsSection from "../components/Contact/Investor";
import FounderMessage from "../components/Contact/Founder";
import FAQSection from "../components/Creators/Faq";
import Footer from "../components/Page1/Footer";
import ContactUsForm from "../components/Contact/ContactUsForm";
import DirectContactInfo from "../components/Contact/DirectContactInfo";

const Contact = () => {
  return (
    <>
      <ContactUs />
      <FashionShoppers />
      <BrandPartners />
      <ContentCreators />
      <InvestorsSection />
      <ContactUsForm/>
      <DirectContactInfo/>
      <FounderMessage />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Contact;
