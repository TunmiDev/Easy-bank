import React from "react";
import bgIntrodesktop from "./../assets/bg-intro-desktop.svg";
import bgIntromobile from "./../assets/bg-intro-mobile.svg";
import mockUps from "./../assets/image-mockups.png";

function Hero() {
  return (
    <header className="relative bg-gray-100 py-12 lg:py-20 overflow-hidden flex flex-col lg:flex-row-reverse justify-center lg:justify-between items-center">
      {/* Image Section */}
      <div className="relative w-full lg:w-[70%] h-auto flex justify-end items-end">
        {/* Background for Desktop */}
        <img
          src={bgIntrodesktop}
          alt="background"
          className="absolute  lg:flex lg:w-full lg:h-auto lg:top-[-200px] lg:right-[-220px] z-0"
        />
        {/* Background for Mobile */}
        <im
          src={bgIntromobile}
          alt="background"
          className="absolute lg:hidden top-0 left-0 w-full z-0"
        />
        {/* Mockup Image */}
        <img
          src={mockUps}
          alt="mockup"
          className="relative z-10  xl:w-[90%] lg:top-[-230px] lg:right-[-100px]"
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
