import React from "react";
import { motion } from "framer-motion";

const images = ["/hyper1.png", "/hyper2.png", "/hyper3.png", "/hyper4.png"];
const Page6 = () => {
  return (
    <div className="w-full gradient mont flex flex-col gap-4 items-center pt-10 pb-0 md:py-10 max-md:min-h-screen">
      <h1 className="mont text-2xl sm:text-4xl lg:text-5xl font-extrabold text-center leading-snug mb-8">
        Hyperlocal Warehousing & <br /> Efficient Logistics
      </h1>
      <div className="flex items-center justify-between w-[80%]">
        <div className="flex flex-col">
          <h1 className="text-xl m-auto sm:text-3xl lg:text-4xl font-semibold uppercase">
            Services Offered
          </h1>
          <div className="flex flex-col items-start ml-4 mt-4 sm:ml-7 sm:mt-4">
            <h2 className="text-lg sm:text-xl font-bold">
              Hyperlocal Warehousing:
            </h2>
            <h3 className="text-sm sm:text-base">
              Store inventory closer to customers
            </h3>

            <h2 className="text-lg sm:text-xl font-bold mt-4">
              Efficient Logistics Network:
            </h2>
            <h3 className="text-sm sm:text-base">
              Optimized delivery routes for 60-minute promise
            </h3>

            <h2 className="text-lg sm:text-xl font-bold mt-4">
              Quality Control:
            </h2>
            <h3 className="text-sm sm:text-base">
              Ensure products meet brand standards
            </h3>

            <h2 className="text-lg sm:text-xl font-bold mt-4">
              Packaging Solutions:
            </h2>
            <h3 className="text-sm sm:text-base">
              Brand-consistent packaging options
            </h3>

            <h2 className="font-extrabold uppercase text-lg sm:text-xl mt-10 sm:mt-[10vh]">
              Coverage
            </h2>
            <h3 className="capitalize text-sm sm:text-base">
              Starting with Lucknow <br />
              Expanding to Tier 1-3 cities <br />
              Hyperlocal focus for maximum efficiency
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-8 max-md:hidden">
          {images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt=""
              className="rounded-lg"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page6;
