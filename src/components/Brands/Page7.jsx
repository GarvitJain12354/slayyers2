import React from "react";

const Page7 = () => {
  return (
    <div className="w-full max-h-screen flex flex-col items-center mt-5 mb-10">
      <h1 className="mont text-3xl mb-6 md:mb-0  md:text-5xl font-semibold text-center">
        Transforming Fashion Businesses <br /> Across India
      </h1>
      <div className="w-full flex flex-col items-center py-8 bg-black min-h-screen">

      {/* Top Box: The apex of the "triangle" */}
      <div
        className="
          w-full max-w-[530px] h-auto md:h-[178px] 
          flex flex-col items-center justify-center text-center 
          p-4 rounded-2xl 
          border border-solid border-[#06E6FF]/[0.3] 
          relative
          bg-[linear-gradient(180deg,#06E6FF_0%,rgba(0,0,203,0)_100%)]
          shadow-lg 
        "
      >
        <h2 className="text-white text-xl md:text-2xl font-bold mb-2">LOCAL D2C SUCCESS</h2>
        <p className="text-white text-base md:text-lg opacity-80">"FROM 10 ORDERS/DAY TO 100+ ORDERS/DAY"</p>
      </div>

    
      <div className="my-8 text-white opacity-50 text-3xl font-bold">
        &darr;
      </div>

      <div
        className="
          w-full max-w-screen-xl 
          flex flex-col md:flex-row 
          justify-between items-stretch 
          gap-4 md:gap-[96px] 
          px-4 
        "
      >
        {/* Bottom Left Box */}
        <div
          className="
            w-full md:w-[calc(50%-7.5px)] h-auto 
            flex flex-col items-center justify-center text-center
            p-4 rounded-2xl
            border border-solid border-[#06E6FF]/[0.3]
            overflow-hidden
            relative
            bg-[linear-gradient(180deg,#06E6FF_0%,rgba(0,0,203,0)_100%)]
            shadow-lg
          "
        >
          <h2 className="text-white text-xl md:text-2xl font-bold mb-2">REGIONAL BRAND GROWTH</h2>
          <p className="text-white text-base md:text-lg opacity-80">EXPANDED FROM 1 CITY TO 5 CITIES IN 3 MONTHS</p>
        </div>

        {/* Bottom Right Box */}
        <div
          className="
            w-full md:w-[calc(50%-7.5px)] h-auto // Responsive width, half of max width minus half gap on md+
            flex flex-col items-center justify-center text-center
            p-4 rounded-2xl
            border border-solid border-[#06E6FF]/[0.3]
            overflow-hidden
            relative
            bg-[linear-gradient(180deg,#06E6FF_0%,rgba(0,0,203,0)_100%)]
            shadow-lg
          "
        >
          <h2 className="text-white text-xl md:text-2xl font-bold mb-2">INVENTORY EFFICIENCY</h2>
          <p className="text-white text-base md:text-lg opacity-80">REDUCED INVENTORY HOLDING BY 40% WITH REAL-TIME INSIGHTS</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page7;
