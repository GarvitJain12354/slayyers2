import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {FaHome, FaPenFancy, FaPhoneAlt, FaUserCircle} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("clicked");
  };

  const handleClick = () => {
    navigate("/");
    console.log("clicked");
  };
  const navItems = [
    { label: "Home", icon: <FaHome />, path: "/" },
    { label: "Creator", icon: <FaUserCircle />, path: "/creator" },
    { label: "Brands", icon: <FaPenFancy />, path: "/brands" },
    { label: "Contact", icon: <FaPhoneAlt />, path: "/contact" },
  ];

  return (
    <div className="w-full flex bg-black/90 md:bg-transparent  items-center z-50 justify-between fixed md:absolute top-0 left-0 px-4 md:px-10 mb-0 pb-0">
      {/* <img  src="/logo.png" className="object-contain h-10 md:h-auto" alt="" /> */}
      <img
        src="/logo.png"
        alt="Logo"
        className="object-contain h-14 md:h-auto z-10 py-4 cursor-pointer"
        onClick={handleClick}
      />

      <div className="hidden md:flex w-[454px] h-[116px] relative z-50 ">
        {/* SVG border  */}
        <svg
          className="absolute inset-0 w-full h-full z-20 pointer-events-none"
          viewBox="0 0 454 116"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="topbarGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="9.09%" stopColor="rgba(140,69,255,0)" />
              <stop offset="100%" stopColor="#2D2282" />
            </linearGradient>

            <filter
              id="glowFilter"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="4"
                result="blurred"
              />
              <feComposite
                in="blurred"
                in2="SourceGraphic"
                operator="in"
                result="blurredMask"
              />
              <feMerge>
                <feMergeNode in="blurredMask" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter
              id="dropShadow"
              x="-50%"
              y="-20%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="4"
                stdDeviation="6"
                floodColor="#2D2282"
                floodOpacity="0.12"
              />
            </filter>
          </defs>

          <path
            d="M1.5 1.5 H452.5 V66 A48.5 48.5 0 0 1 404 114.5 H50 A48.5 48.5 0 0 1 1.5 66 Z"
            stroke="url(#topbarGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.18"
            filter="url(#glowFilter)"
          />
          <path
            d="M1.5 1.5 H452.5 V66 A48.5 48.5 0 0 1 404 114.5 H50 A48.5 48.5 0 0 1 1.5 66 Z"
            stroke="rgba(45,34,130,0.07)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            filter="url(#dropShadow)"
          />

          <path
            d="M1.5 1.5 H452.5 V66 A48.5 48.5 0 0 1 404 114.5 H50 A48.5 48.5 0 0 1 1.5 66 Z"
            stroke="url(#topbarGrad)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div
          className="absolute inset-0 flex items-center justify-center pt-2 gap-12 rounded-b-[47px] z-10"
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
          }}
        >
          <NavLink
            to="/creator"
            className={({ isActive }) =>
              `text-[16px] font-medium leading-6 transition-colors duration-300 ease-out
         ${
           isActive
             ? "text-white opacity-100"
             : "text-white opacity-50 hover:opacity-100"
         }`
            }
          >
            For Creator
          </NavLink>

          <NavLink
            to="/brands"
            className={({ isActive }) =>
              `text-[16px] font-medium leading-6 transition-colors duration-300 ease-out
         ${
           isActive
             ? "text-white opacity-100"
             : "text-white opacity-50 hover:opacity-100"
         }`
            }
          >
            For Brands
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-[16px] font-medium leading-6 transition-colors duration-300 ease-out
         ${
           isActive
             ? "text-white opacity-100"
             : "text-white opacity-50 hover:opacity-100"
         }`
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-black/80 flex justify-around py-3 md:hidden rounded-t-2xl border-t-2 border-black z-50">
        {navItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.label}
            className={`flex flex-col items-center text-white text-sm ${
              location.pathname === item.path ? "text-[#90A955]" : ""
            }`}
          >
            <div className="text-xl">{item.icon}</div>
            <span className="mt-1">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Mobile Hamburger Icon - hidden on desktop */}
      {/* <div className="md:hidden z-50">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div> */}

      {/* Mobile Menu Overlay - completely hidden on desktop */}
      {/* <div
        className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-r from-zinc-800 via-zinc-900 to-gray-800 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col items-start justify-start pt-10 h-full pl-10 space-y-10">
          <NavLink
            to="/creator"
            className="text-white text-xl opacity-45 hover:opacity-100 transition-opacity"
            onClick={toggleMenu}
          >
            For Creator
          </NavLink>
          <NavLink
            to="/brands"
            className="text-white text-xl opacity-45 hover:opacity-100 transition-opacity"
            onClick={toggleMenu}
          >
            For Brands
          </NavLink>
          <NavLink
            to="/contact"
            className="text-white text-xl opacity-45 hover:opacity-100 transition-opacity"
            onClick={toggleMenu}
          >
            Contact Us
          </NavLink>
        </div> */}
      {/* </div> */}

      {/* Empty div for layout balance */}
      <div className="hidden md:block md:mr-32"></div>
    </div>
  );
};

export default Navbar;
