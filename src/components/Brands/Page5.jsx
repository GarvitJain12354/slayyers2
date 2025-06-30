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
    <div className="w-full flex flex-col min-h-screen items-center justify-center">
      <img src="/Streamlined.png" className="object-contain mt-20" alt="" />
      <div className="w-[80%] flex flex-col items-center justify-center ">
        {data?.map((i) => (
          <div className="w-full pop flex items-center justify-between gap-4">
            <h1 className="text-8xl font-extrabold">{i.number}</h1>
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">{i.title}</h1>
              <p className="text-xl font-extralight mont w-[90%]">{i.desc}</p>
            </div>
            <img src={i.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page5;
