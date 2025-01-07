import React from "react";
import bgIntrodesktop from "./../assets/bg-intro-desktop.svg";
import bgIntromobile from "./../assets/bg-intro-mobile.svg";
import mockUps from "./../assets/image-mockups.png";

function Hero() {
  return (
    <header className="h-auto lg:h-[calc(100svh-64px)] lg:px-[10%] md:px-[5%] flex flex-col-reverse gap-24 sm:gap-0 sm:flex-row justify-between items-center sm:overflow-hidden pb-4 sm:pb-0 bg-gray-100">
      <div className="min-w-[40vw] px-8 sm:px-0 flex flex-col gap-4 items-center sm:items-start sm:gap-6 ">
        <h1 className="text-4xl  font-[300]  sm:text-start lg:text-5xl xl:text-6xl  ">
          Next generation digital banking
        </h1>
        <p className=" text-sm text-center sm:text-start sm:text-base lg:text-lg xl:text-xl xl:pr-24 text-neutral-grayish-blue ">
          Take your financial life online. Your EasyBank account will be a
          one-step-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        {/*Button */}
        <button className="hidden md:flex bg-gradient-to-r from-primary to-secondary rounded-full text-white px-8 py-3 font-sans font-semibold hover:cursor-pointer">
          Request Invite
        </button>
      </div>
      <div className="relative w-full h-[40vh] md:min-w-[80vw] md:h-[55vh] md:self-start justify-start ">
        <img
          src={bgIntrodesktop}
          alt="background"
          className="absolute hidden md:block md:top-[-15%] lg:top-[-30%] xl:top-[-35%] 2xl:top-[-35%] "
        />
        <img
          src={bgIntromobile}
          alt="background"
          className="absolute md:hidden top-0 w-full"
        />
        <img
          src={mockUps}
          alt="mockup"
          className="absolute z-3 top-[-30%] md:w-[68%] md:top-[-5%] md:left-[13%] lg:w-[65%] lg:top-[-20%] xl:w-[60%] xl:top-[-20%] 2xl:w-[60%] 2xl:top-[-35%] "
        />
      </div>
    </header>
  );
}

export default Hero;
