import React from "react";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between absolute top-0 left-0 px-10">
      <img src="/logo.png" className="object-contain" alt="" />
      <div className="gradient-border">
        <div className="inner-box p-4 flex items-center justify-center gap-4 bg-black rounded-2xl">
          {/* <NavLink to={"/"}>For Creator</NavLink>
          <NavLink to={"/"}>For Brands</NavLink>
          <NavLink to={"/"}>Contact Us</NavLink> */}
          <a href="/" className="font-[#FFFFFF] text-base opacity-45">
            For Creator
          </a>
          <a href="/" className="font-[#FFFFFF] text-base opacity-45">
            For Brands
          </a>
          <a href="/" className="font-[#FFFFFF] text-base opacity-45">
            Contact Us
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
