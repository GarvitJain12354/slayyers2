


// import React from "react";
// import Navbar from "../Navbar";
// import ContactUsForm from "./ContactUsForm";
// import { Navigate, useNavigate } from "react-router-dom";

// const ContactUs = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <Navbar />
//       <div className="w-full min-h-screen flex flex-col lg:flex-row relative overflow-hidden">
//         {/* Content Section */}
//         <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 justify-center lg:justify-start gap-4 sm:gap-6 pt-[15vh] lg:pt-[20vh] pb-[25vh] lg:pb-0">
//           <img 
//             src="/dms.png" 
//             alt="Contact Us" 
//             className="h-16 sm:h-20 md:h-24 object-contain"
//           />
          
//           <h1 className="text-2xl xs:text-3xl pop sm:text-4xl md:text-5xl w-full lg:w-[70%] text-center font-extrabold leading-tight">
//             Whether you're a shopper, brand, creator, investor, or just curious
//           </h1>

//           <p className="text-base pop sm:text-xl md:text-2xl w-full md:w-[80%] lg:w-[30%] text-center font-extrabold mt-2 sm:mt-4 text-[#A1A1AA]">
//             We love hearing from EVERYONE! Don't be shy, hit us up!
//           </p>
          
//           <button onClick={() => navigate("/contactform")} className="pop relative z-20 bg-white flex items-center justify-center rounded-md px-4 sm:px-6 py-2 sm:py-3 text-[#007AFF] font-extrabold gap-2 mt-4 sm:mt-6">
//             <img src="/send.png" alt="" className="h-4 sm:h-5" />
//             Contact Us !
//           </button>
//         </div>

//         {/* Background Images */}
//         <img
//           src="/contactHome.png"
//           className="absolute bottom-0 left-0 w-full max-w-2xl lg:max-w-none lg:w-auto object-contain lg:object-cover z-10"
//           alt="Contact illustration"
//         />
        
//         <img 
//           src="/bgCircle.png" 
//           className="absolute top-0 left-0 w-40 sm:w-52 md:w-64 lg:w-80" 
//           alt="Background circle" 
//         />

        

//         {/* Footer Text */}
//         <h1 className="mont absolute pop bottom-4 text-xs sm:text-sm md:text-base lg:text-lg text-center font-semibold text-white left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[70%] px-4 z-20">
//           At Slayyers, we believe in building connections that go beyond just
//           business. Whether you're excited about our 60-minute fashion delivery,
//           want to partner with us, or simply want to be part of India's fashion
//           revolution, we're here to listen and collaborate.
//         </h1>
//       </div>
//     </>
//   );
// };

// export default ContactUs;


import React from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col relative overflow-hidden bg-[#0A0A0A]">
        {/* Background Elements */}
        <img 
          src="/bgCircle.png" 
          className="absolute top-0 left-0 w-40 sm:w-52 md:w-64 lg:w-80 opacity-70" 
          alt="Background circle" 
        />
        
        {/* Main Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col lg:flex-row items-center justify-center relative z-10">
          {/* Text Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left py-20 lg:py-0">
            <img 
              src="/dms.png" 
              alt="Contact Us" 
              className="h-16 sm:h-20 md:h-24 object-contain mb-6"
            />
            
            <h1 className="text-2xl pop sm:text-3xl md:text-4xl font-extrabold leading-tight text-white mb-4 max-w-lg">
              Whether you're a shopper, brand, creator, investor, or just curious
            </h1>

            <p className="text-lg sm:text-xl pop md:text-2xl font-extrabold text-[#A1A1AA] mb-8 max-w-md">
              We love hearing from EVERYONE! Don't be shy, hit us up!
            </p>
            
            <button 
              onClick={() => navigate("/contactform")} 
              className="pop bg-white flex items-center justify-center rounded-md px-6 py-3 text-[#007AFF] font-extrabold gap-2 hover:bg-opacity-90 transition-all duration-200"
            >
              <img src="/send.png" alt="" className="h-5" />
              Contact Us !
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative">
            <img
              src="/contactHome.png"
              className="w-full max-w-xl lg:max-w-2xl xl:max-w-3xl object-contain"
              alt="Contact illustration"
            />
          </div>
        </div>

        {/* Footer Text - Only shows on larger screens */}
        <div className="w-full hidden pop lg:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-20 pb-8 z-20">
          <div className="container mx-auto px-6">
            <p className="text-center text-sm md:text-base lg:text-lg font-medium text-white opacity-90 max-w-4xl mx-auto">
              At Slayyers, we believe in building connections that go beyond just
              business. Whether you're excited about our 60-minute fashion delivery,
              want to partner with us, or simply want to be part of India's fashion
              revolution, we're here to listen and collaborate.
            </p>
          </div>
        </div>

        {/* Mobile Footer Text - Shows only on small screens */}
        <div className="lg:hidden pop w-full px-6 py-8 bg-[#0A0A0A] z-20">
          <p className="text-center text-xs sm:text-sm font-medium text-white opacity-90">
            At Slayyers, we believe in building connections that go beyond just
            business. Whether you're excited about our 60-minute fashion delivery,
            want to partner with us, or simply want to be part of India's fashion
            revolution, we're here to listen and collaborate.
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
