import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div>
      <div className="shadow-lg bg-white  duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-2xl sm:text-3xl font-bold">
              <img src={logo} alt="Aurora's World" className="w-10" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <ul className="hidden sm:flex gap-4">
              <li className="inline-block py-4 px-4">Home</li>
              <li className="inline-block py-4 px-4">About</li>
              <li className="inline-block py-4 px-4">Contact</li>
              <li className="inline-block py-4 px-4">Blog</li>
              <li className="inline-block py-4 px-4">Careers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
