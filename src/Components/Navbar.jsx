import React from "react";
import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-12 py-3 bg-white shadow-lg font-sans">
        {/*Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="easybank logo" />
        </div>

        {/*Navigation Links */}
        <ul className=" hidden flex-1 md:flex gap-4 text-gray-500 justify-center  font-light">
          <li className="hover:text-gray-900 cursor-pointer">Home</li>
          <li className="hover:text-gray-900 cursor-pointer">About</li>
          <li className="hover:text-gray-900 cursor-pointer">Contact</li>
          <li className="hover:text-gray-900 cursor-pointer">Blog</li>
          <li className="hover:text-gray-900 cursor-pointer">Careers</li>
        </ul>
        {/*Button */}
        <button className="hidden md:flex bg-gradient-to-r from-primary to-secondary rounded-full text-white px-8 py-3 font-sans font-semibold hover:cursor-pointer">
          Request Invite
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
