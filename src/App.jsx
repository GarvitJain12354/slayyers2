import React from "react";
import Page1 from "./components/Creators/Page1";
import Page2 from "./components/Creators/Page2";
import Page3 from "./components/Creators/Page3";
import FashionContentSection from "./components/Creators/FashionContent";
import WhyCreatorsChoose from "./components/Creators/WhyChoose";
import ContentThatConverts from "./components/Creators/ContentThatConverts";
import CreatorSteps from "./components/Creators/CreatorSteps";
import FAQSection from "./components/Creators/Faq";
import Footer from "./components/Page1/Footer.jsx";
import ContactUs from "./components/Contact/ContactUs.jsx";
import BrandPartners from "./components/Contact/BrandPartner.jsx";
import ContentCreators from "./components/Contact/ContentCreator.jsx";
import FashionShoppers from "./components/Contact/FashionShop.jsx";
import InvestorsSection from "./components/Contact/Investor.jsx";
import FounderMessage from "./components/Contact/Founder.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Creators from "./Pages/Creators.jsx";
import Contact from "./Pages/Contact.jsx";
import Brands from "./Pages/Brands.jsx";
import ContactForm from "./components/Contact/ContactForm.jsx";
import BrandForm from "./components/Brands/BrandForm.jsx";
// import Page1 from "./components/Brands/Page1";
// import Page2 from "./components/Brands/Page2";
// import Page3 from "./components/Page1/Page3";
// import Page4 from "./components/Brands/Page4";
// import Page5 from "./components/Brands/Page5";
// import Page6 from "./components/Brands/Page6";
// import Page7 from "./components/Brands/Page7";
// import Page8 from "./components/Brands/Page8";
// import Page1 from "./components/Page1/Page1";
// import Page2 from "./components/Page1/Page2";
// import Page3 from "./components/Page1/Page3";
// import Page4 from "./components/Page1/Page4";
// import Page5 from "./components/Page1/Page5";
// import Footer from "./components/Page1/Footer.jsx";

const App = () => {
  return (
    <>
      <div className="w-full z-10 relative overflow-hidden">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/creator" element={<Creators />} />
          <Route path="/contact" element={<Contact />} />
         <Route path="/contactform" element={<ContactForm />} />
          <Route path="/brandform" element={<BrandForm />} />
          <Route path="/brands" element={<Brands />} />
        </Routes>
      </div>
      {/* <Page1 />
      <Page2 />
      {creatorData?.map((i) => (
        <Page3 data={i} />
      ))}
      <FashionContentSection />
      <WhyCreatorsChoose />
      <ContentThatConverts />
      <CreatorSteps />
      <FAQSection />
      <Footer /> */}
      {/* <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8/> */}
    </>
  );
};

export default App;
