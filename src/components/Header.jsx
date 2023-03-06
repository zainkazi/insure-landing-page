import React from "react";
import logo from "../images/logo.svg";
import hamburgerMenu from "../images/icon-hamburger.svg";
import patternNavMobile from "../images/bg-pattern-mobile-nav.svg";

const Header = () => {
  return (
    <div className="z-50 relative font-karla text-[#837d87] text-xl  md:text-base flex justify-between items-center px-8 md:px-40 py-10 md:py-4">
      <div>
        <img className="w-44 md:w-36" src={logo} />
      </div>
      <div className="block md:hidden">
        <img className="w-16" src={hamburgerMenu} />
      </div>
      <div className="hidden md:flex justify-center items-center space-x-8">
        <div className="transition duration-300 cursor-pointer hover:text-[#2b272f] py-3">
          HOW WE WORK
        </div>
        <div className="transition duration-300 cursor-pointer hover:text-[#2b272f] py-3">
          BLOG
        </div>
        <div className="transition duration-300 cursor-pointer hover:text-[#2b272f] py-3">
          ACCOUNT
        </div>
        <div className="transition duration-300 font-semibold cursor-pointer hover:text-white hover:bg-[#2b272f] py-2 px-10 border-[3px] border-black">
          VIEW PLANS
        </div>
      </div>
    </div>
  );
};

export default Header;
