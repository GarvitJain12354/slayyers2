

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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



  return (
    <div className="w-full flex items-center justify-between absolute top-0 left-0 px-4 md:px-10 py-4">
      {/* <img  src="/logo.png" className="object-contain h-10 md:h-auto" alt="" /> */}
      <img
      src="/logo.png"
      alt="Logo"
      className="object-contain h-10 md:h-auto z-10 cursor-pointer"
      onClick={handleClick}
    />
      
     
      <div className="hidden md:block gradient-border">
        <div className="inner-box hidden md:flex   p-4  items-center justify-center gap-4 bg-black rounded-2xl z-50">
          <NavLink
            to="/creator"
            className="text-white hidden md:block  text-base opacity-45 hover:opacity-100 transition-opacity"
          >
            For Creator
          </NavLink>
          <NavLink
            to="/brands"
            className="text-white hidden md:block  text-base opacity-45 hover:opacity-100 transition-opacity"
          >
            For Brands
          </NavLink>
          <NavLink 
            to="/contact" 
            className="text-white hidden md:block  text-base opacity-45 hover:opacity-100 transition-opacity"
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      {/* Mobile Hamburger Icon - hidden on desktop */}
      <div className="md:hidden z-50">
        <button 
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
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
      </div>

      {/* Mobile Menu Overlay - completely hidden on desktop */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-r from-zinc-800 via-zinc-900 to-gray-800 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col items-start justify-start pt-10 h-full pl-10 space-y-8">
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
        </div>
      </div>

      {/* Empty div for layout balance */}
      <div className="hidden md:block"></div>
    </div>
  );
};

export default Navbar;
