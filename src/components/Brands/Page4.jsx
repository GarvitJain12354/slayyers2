import React from "react";
import WhyCard from "./WhyCard";

const Page4 = () => {
  const data = [
    {
      img: "/Light.png",
      title: "Lightning-Fast 60-Minute Delivery",
      desc: "Super-fast delivery powered by Slayyers's strong operations capabilities Impact:  Caters to the need for immediate gratification among target consumers. Turn browsers into  buyers with instant delivery from nearby stores.",
    },
    {
      img: "/Real.png",
      title: "Real-Time Inventory Management",
      desc: "On-shelf inventory with real-time updates Impact: Customers see what's actually in  stock locally. No more disappointed customers or oversold items.",
    },
    {
      img: "/Video.png",
      title: "Video-First Product Showcase",
      desc: "Seller tools for real-time inventory, analytics, and shoppable videos Impact: Move  beyond static images. Let customers see your products in action through influencer content and  video showcases.",
    },
    {
      img: "/Genz.png",
      title: "Targeted Gen Z & Millennial Audience",
      desc: "Direct access to 18-34 year old fashion-conscious buyers Impact: Reach customers  who are ready to spend on fashion, not just browsers.",
    },
    {
      img: "/Buy.png",
      title: "Try-Before-You-Buy Option",
      desc: "Customers can try items at doorstep before payment Impact: Dramatically reduces  return rates and increases customer satisfaction. Address fit and preference issues seamlessly.",
    },
    {
      img: "/Hyper.png",
      title: "Hyperlocal Market Presence",
      desc: " Connect with customers in your immediate area first Impact: Build strong local  customer base before expanding. Perfect for regional brands.",
    },
  ];
  return (
    <>
      <div className="w-full px-10 mt-8 md:mt-20">
        <div className="w-full min-h-screen rounded-xl flex items-center justify-center flex-col bg-[#efefef]">
          <div className="bg-black rounded-b-3xl px-4 py-2 pb-4 mb-4">
            <h1
              className="font-[mon] font-extrabold text-3xl sm:text-4xl lg:text-[50px] text-center leading-[54px] tracking-[0.35px] align-middle
                 bg-[linear-gradient(90deg,_#00FFE1_0%,_#CCF5FF_46.15%,_#4C85FF_100%)] bg-clip-text text-transparent"
            >
              Why Fashion Brands Choose Slayyers
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4">
            {data?.map((i) => (
              <WhyCard data={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;
