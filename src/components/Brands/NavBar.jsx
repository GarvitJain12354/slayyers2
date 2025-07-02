import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink
            to="/creator"
            className="font-[#FFFFFF] text-base opacity-45"
          >
            For Creator
          </NavLink>
          <NavLink
            to="/contact"
            className="font-[#FFFFFF] text-base opacity-45"
          >
            For Brands
          </NavLink>
          <NavLink to="/brands" className="font-[#FFFFFF] text-base opacity-45">
            Contact Us
          </NavLink>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
