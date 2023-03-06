import React from "react";
import introImageDesktop from "../images/image-intro-desktop.jpg";
import introImageMobile from "../images/image-intro-mobile.jpg";

const Hero = () => {
  return (
    <div className="font-karla text-center border-4 border-black">
      {/* Intro */}
      <div className="bg-[#2d2640] text-[#fafafa] py-32 flex flex-col justify-center items-center">
        <div className="text-5xl px-5 mb-8">Humanizing your insurance.</div>
        <div className="text-2xl px-7 mb-12">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </div>
        <div className="transition duration-300 w-48 cursor-pointer hover:text-white text-[#fafafa] hover:bg-white hover:text-[#2d2640] py-3 px-10 border-2 border-white]">
          VIEW PLANS
        </div>
      </div>

      {/* Image container */}
      <div>
        <img className="block md:hidden w-full" src={introImageMobile} />
        <img className="hidden md:block" src={introImageDesktop} />
      </div>
    </div>
  );
};

export default Hero;
