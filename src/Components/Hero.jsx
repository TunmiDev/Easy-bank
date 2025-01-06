import React from "react";
import background from "../assets/bg-intro-desktop.svg";
import phones from "../assets/image-mockups.png";
const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row justify justify-between items-center px-6 lg:px-16 py-12 bg-gray-100">
      {/* Text content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          Next generation <br />
          digital banking
        </h1>
        <p className="text-gray-400 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          distinctio magni dolorum quibusdam aperiam ex corrupti veritatis
          libero dicta sed voluptatibus sunt obcaecati ipsam minus, fuga optio
          voluptate adipisci? Dignissimos.
        </p>
        {/*Button */}
        <button className="hidden md:flex bg-gradient-to-r from-primary to-secondary rounded-full text-white px-8 py-3 font-sans font-semibold hover:cursor-pointer">
          Request Invite
        </button>
      </div>

      {/*Image Content */}
      <div className=" relative flex items-center justify-center mt-12 lg:mt-0 lg:w-1/2 ">
        <img src={background} alt="easybank background" className="" />
        {/* <img src={phones} alt="phones" className="absolute" /> */}
      </div>
    </div>
  );
};

export default Home;
