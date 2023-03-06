import React from "react";
import logo from "../images/logo.svg";
import hamburgerMenu from "../images/icon-hamburger.svg";

const Header = () => {
  return (
    <div className="font-karla text-[#837d87] text-xl flex justify-between items-center px-8 md:px-40 py-10">
      <div>
        <img className="w-44 md:w-52" src={logo} />
      </div>
      <div className="block md:hidden">
        <img className="w-16" src={hamburgerMenu} />
      </div>
      <div className="hidden md:flex justify-center items-center space-x-10">
        <div className="transition duration-300 cursor-pointer hover:text-[#2b272f] py-3">
          HOW WE WORK
        </div>
        <div className="transition duration-300 cursor-pointer hover:text-[#2b272f] py-3">
          BLOG
        </div>
        <div className="transition duration-300 cursor-pointer hover:text-[#2b272f] py-3">
          ACCOUNT
        </div>
        <div className="transition duration-300 cursor-pointer hover:text-white hover:bg-[#2b272f] py-3 px-10 border-4 border-black">
          VIEW PLANS
        </div>
      </div>
    </div>
  );
};

export default Header;
