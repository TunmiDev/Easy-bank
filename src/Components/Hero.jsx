import React from "react";
import bgIntrodesktop from "./../assets/bg-intro-desktop.svg";
import bgIntromobile from "./../assets/bg-intro-mobile.svg";
import mockUps from "./../assets/image-mockups.png";

function Hero() {
  return (
    <header className="relative bg-gray-50  lg:py-20 overflow-hidden flex flex-col lg:flex-row-reverse justify-center lg:justify-between items-center">
      {/* Image Section */}
      <div className="relative w-full lg:w-[70%] h-auto flex justify-center lg:justify-end items-end">
        {/* Background for Desktop */}
        <img
          src={bgIntrodesktop}
          alt="background"
          className="absolute hidden lg:block lg:w-full h-auto lg:top-[-200px] lg:right-[-220px] z-0"
        />
        {/* Background for Mobile */}
        <img
          src={bgIntromobile}
          alt="background"
          className="absolute block lg:hidden w-full h-auto top-0 left-0  z-0"
        />
        {/* Mockup Image */}
        <img
          src={mockUps}
          alt="mockup"
          className="relative z-10 w-[70%] sm:w-[80%] md:w-[60%] lg:w-[90%] lg:top-[-200px] lg:right-[-100px]"
        />
      </div>

      {/* Text Section */}
      <div className="relative lg:w-[50%] text-center lg:text-left  lg:px-16 flex flex-col items-center lg:items-start mb-auto">
        <h1 className="text-4xl  font-[300]  sm:text-start lg:text-5xl xl:text-6xl  pt-10">
          Next generation digital banking
        </h1>
        <p className="mt-8 text-sm lg:text-base xl:text-lg text-gray-500 leading-8 lg:leading-7 max-w-[400px]">
          Take your financial life online. Your EasyBank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        {/* Button */}
        <button className="mt-8 bg-gradient-to-r from-primary to-secondary rounded-full text-white px-8 py-3 text-sm lg:text-base font-medium hover:opacity-90 focus:outline-none">
          Request Invite
        </button>
      </div>
    </header>
  );
}

export default Hero;
