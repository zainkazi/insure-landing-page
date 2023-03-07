import React from "react";
import introImageDesktop from "../images/image-intro-desktop.jpg";
import introImageMobile from "../images/image-intro-mobile.jpg";
import patternLeftMobile from "../images/bg-pattern-intro-left-mobile.svg";
import patternRightMobile from "../images/bg-pattern-intro-right-mobile.svg";
import patternLeftDesktop from "../images/bg-pattern-intro-left-desktop.svg";
import patternRightDesktop from "../images/bg-pattern-intro-right-desktop.svg";

const Hero = () => {
  return (
    <div className="font-karla flex flex-col-reverse md:block text-center md:text-left md:relative">
      {/* Intro */}
      <div className="bg-[#2d2640] text-[#fafafa] py-32 md:py-24 relative">
        {/* Pattern Left */}
        <img
          className="block md:hidden w-60 opacity-70 absolute top-0 left-0"
          src={patternLeftMobile}
          alt="pattern"
        />
        <img
          className="hidden md:block z-[0] opacity-70 absolute left-0 -bottom-80"
          src={patternLeftDesktop}
          alt="pattern"
        />

        {/* Pattern Right */}
        <img
          className="block md:hidden w-32 opacity-70 absolute right-0 -bottom-32"
          src={patternRightMobile}
          alt="pattern"
        />
        <img
          className="hidden md:block opacity-70 absolute top-0 right-0 z-10"
          src={patternRightDesktop}
          alt="pattern"
        />

        <div className="flex flex-col justify-center items-center md:justify-start md:items-start md:w-[50%] md:pl-40">
          <hr className="border-[1px] w-[30%] mb-16" />
          <div className="font-dm text-5xl md:text-[70px] px-5 md:px-0 mb-8">
            Humanizing <br /> your insurance.
          </div>
          <div className="text-2xl md:text-lg opacity-70 px-7 md:px-0 mb-12">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </div>
          <div className="transition z-[1] font-semibold duration-300 w-48 md:w-auto cursor-pointer opacity-70 hover:text-[#2d2640] text-[#fafafa] hover:bg-white hover:text-[#2b272e] hover:opacity-100 py-3 px-10 border-2 border-white]">
            VIEW PLANS
          </div>
        </div>
      </div>

      {/* Image container */}
      <div>
        <img
          className="block md:hidden w-full"
          src={introImageMobile}
          alt="intro"
        />
        <img
          className="hidden md:block md:absolute w-[35%] top-20 right-[12%]"
          src={introImageDesktop}
          alt="intro"
        />
      </div>
    </div>
  );
};

export default Hero;
