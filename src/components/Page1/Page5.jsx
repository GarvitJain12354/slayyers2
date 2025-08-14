import React from "react";
import reactangle from "../../../public/reactangle.png";

const Page5 = () => {
  return (
    <div className="md:min-h-screen w-full pop flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-16 gap-6 sm:gap-8 lg:gap-10 relative overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 sm:gap-6 mt-10 sm:mt-16 md:mt-24 z-10 w-full max-w-8xl px-4">
        <h1 className="text-2xl xs:text-3xl popbold font-extrabold tracking-[0] align-middle uppercase sm:text-4xl md:text-5xl lg:text-[50px]  text-center leading-tight">
          We're Not Building Another Shopping App
        </h1>
        <h3
          className="text-xl popbold xs:text-2xl sm:text-3xl md:text-5xl text-center md:mx-18 bg-[linear-gradient(90deg,_#7300FF_0%,_#00D9FF_100%)] bg-clip-text text-transparent
 font-extrabold leading-snug"
        >
          We're building the next wave of fashion{" "}
          <br className="hidden sm:block" />
          culture, delivered fast.
        </h3>
      </div>

      {/* Mission Section with background image */}
      <div className=" relative w-full max-w-6xl  px-1 mt-10 sm:mt-16 md:mt-4 z-10">
        {/* Background Image inside the section */}
        {/* <img
          src="/bg-shape.png"
          alt="Decorative background"
          className="absolute top-1/2 left-1/2 w-full h-full object-contain -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none z-0"
        /> */}

        {/* Content Over the Image */}
        <div className="relative bg-[url('/bg-shape.png')]  bg-no-repeat bg-cover bg-center md:min-h-154 w-full flex flex-col items-center justify-center gap-12 sm:gap-14 md:gap-16 z-10 py-10 sm:py-20">
          {/* Our Mission */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 w-full text-center">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold bg-[linear-gradient(90deg,_#FFFFFF_0%,_#999999_100%)] bg-clip-text text-transparent
">
              Our Mission
            </h1>
            <h3 className="text-sm xs:text-base pops font-semibold sm:text-lg md:text-2xl max-w-6xl">
              Build India's go-to social fashion platform — by India, for India.
              Empowering local and
              <br className="hidden sm:block" />
              emerging fashion brands to thrive in India's Quick Commerce revolution.
            </h3>
          </div>

          {/* Brand Promise */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 w-full text-center">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold bg-[linear-gradient(90deg,_#FFFFFF_0%,_#999999_100%)] bg-clip-text text-transparent">
              Brand Promise
            </h1>
            <h3 className="text-sm xs:text-base pops sm:text-lg md:text-2xl max-w-5xl">
              Where Fashion Meets Speed.
              <br className="hidden sm:block" />
              The AI-powered, influencer-led, video-first fashion revolution
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
