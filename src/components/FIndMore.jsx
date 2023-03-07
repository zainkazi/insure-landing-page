import React from "react";
import patternMobile from "../images/bg-pattern-how-we-work-mobile.svg";
import patternDesktop from "../images/bg-pattern-how-we-work-desktop.svg";

const FindMore = () => {
  return (
    <div className="relative bg-[#2d2640] text-center md:text-left text-[#fafafa] mx-16 md:mx-40 flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center py-20 space-y-16 md:space-y-0 md:space-x-0 px-10 md:px-24">
      <img
        className="block md:hidden w-60 opacity-70 absolute right-0 top-0"
        src={patternMobile}
        alt="pattern"
      />

      <img
        className="hidden md:block opacity-70 absolute right-0 top-0"
        src={patternDesktop}
        alt="pattern"
      />
      <h1 className="font-dm text-5xl md:text-[70px]">
        Find out more <br /> about how we work
      </h1>
      <div className="z-[10] transition duration-300 md:w-auto font-semibold cursor-pointer opacity-70 hover:text-[#2d2640] text-[#fafafa] hover:bg-white hover:opacity-100 py-3 px-10 border-2 border-white] hover:text-[#2b272e]">
        HOW WE WORK
      </div>
    </div>
  );
};

export default FindMore;
