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
    <div className="w-full flex flex-col min-h-screen items-center justify-center max-md:pb-10">
      <img src="/Streamlined.png" className="object-contain mt-20 max-md:w-[80%]" alt="" />
      <div className="w-full max-w-6xl flex flex-col items-center justify-center gap-10 mt-10 max-md:px-10 max-md:gap-12"  >
        {data?.map((i) => (
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 max-md:gap-2">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold ">
              {i.number}
            </h1>
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-semibold"> {i.title}</h1>
              <p className="text-sm sm:text-base lg:text-lg font-light mont mt-2">
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
