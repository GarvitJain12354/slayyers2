import React from "react";

const Page5 = () => {
  const data = [
    {
      number: "1",
      img: "/1.png",
      title: "No Minimum Order Requirements",
      desc: "Fulfill orders of any size, even for individual customers. Remove  barriers to selling through our platform.",
    },
    {
      number: "2",
      img: "/2.png",
      title: "Flexible Pricing & Promotions",
      desc: "Features:Set your own pricing strategiesCreate store-specific offers and discountsParticipate in platform-wide promotional campaignsSeasonal and flash sale opportunities",
    },
    {
      number: "3",
      img: "/3.png",
      title: "Easy Returns & Exchanges",
      desc: "Process: Customers can return/exchange at time of deliveryReduced logistics hassle for partnersHigher customer satisfaction ratesLower return processing costs",
    },
    {
      number: "4",
      img: "/4.png",
      title: "Authenticity Guarantee",
      desc: "Trust Factor:Items delivered from authorized brand showrooms/outletsCustomers receive genuine quality productsBuild trust through verified authentic sourcing  Protect brand reputation",
    },
  ];
  return (
    <div className="w-full flex flex-col min-h-screen items-center justify-center max-md:pb-10 mb-10">
      <h1
        className="mt-14 font-[mon] font-extrabold md:leading-[48px] tracking-[0.35px] text-center align-middle uppercase text-2xl sm:text-3xl lg:text-[50px] bg-gradient-to-r from-[#00eeff] via-[#c4c5e5] to-[#0073ff] bg-clip-text text-transparent
"
      >
        Perfect for Fashion Brands Across <br className="hidden sm:block" />{" "}
        Categories
      </h1>
      <div className="w-full max-w-6xl flex flex-col items-center justify-center gap-10 mt-10 max-md:px-10 max-md:gap-12"  >
        {data?.map((i) => (
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 max-md:gap-2">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold ">
              {i.number}
            </h1>
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-3xl font-semibold"> {i.title}</h1>
              <p className=" font-normal md:leading-[48px] tracking-[0.35px] align-middle text-sm sm:text-base lg:text-3xl mont mt-2">
                {" "}
                {i.desc}
              </p>
            </div>
            <img src={i.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page5;
