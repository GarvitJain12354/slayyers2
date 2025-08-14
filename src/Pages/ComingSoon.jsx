import { useState, useEffect } from "react";
import Footer from "../components/Page1/Footer";
import Navbar from "../components/Navbar";
import BackgroundOvals from "../components/ui/Backgroundovals";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-01T00:00:00"); // Launch date
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Main Section */}
      <div className="relative flex-1 flex flex-col justify-center items-center min-h-screen px-4 text-center">
        {/* Gradient Circle */}
        <BackgroundOvals/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="w-[600px] h-[600px] rounded-full blur-2xl opacity-70"
            style={{
              background: "radial-gradient(circle, #6DDCFF 0%, #7F60F9 100%)",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4">Slayyers</h1>
          <p className="text-lg sm:text-2xl mb-8 max-w-xl">Coming Soon!...</p>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ComingSoon;
