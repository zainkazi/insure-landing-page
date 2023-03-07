import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import hamburgerMenu from "../images/icon-hamburger.svg";
import iconClose from "../images/icon-close.svg";
import patternNavMobile from "../images/bg-pattern-mobile-nav.svg";

const Header = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [displayHamburger, setDisplayHamburger] = useState("block");
  const [translateMenu, setTranslateMenu] = useState("translate-x-full");
  const [fixedPosition, setFixedPosition] = useState("");
  const [displayClose, setDisplayClose] = useState("hidden");

  useEffect(() => {
    if (hamburgerClicked) {
      setDisplayHamburger("hidden");
      setDisplayClose("block");
      setTranslateMenu("-translate-x-0");
      setFixedPosition("fixed left-0 right-0 z-[100]");
    } else {
      setDisplayHamburger("block");
      setDisplayClose("hidden");
      setTranslateMenu("translate-x-full");
      setFixedPosition("");
    }
  }, [hamburgerClicked]);

  const toggleHamburger = () => {
    setHamburgerClicked(!hamburgerClicked);
  };

  return (
    <div
      className={`font-karla bg-[#fafafa] text-[#837d87] text-xl md:text-base flex justify-between items-center px-8 md:px-40 py-6 md:py-4`}
    >
      <div>
        <img className="w-32 md:w-36" src={logo} alt="logo" />
      </div>
      <div className="block md:hidden">
        <img
          onClick={toggleHamburger}
          className={`${displayHamburger} w-9`}
          src={hamburgerMenu}
          alt="menu"
        />
        <img
          onClick={toggleHamburger}
          className={`${displayClose} w-9`}
          src={iconClose}
          alt="menu"
        />
      </div>

      {/* Navbar Mobile */}
      <div
        className={`transition-all duration-500 ease-in-out ${translateMenu} fixed z-40 overflow-y-auto text-lg bg-[#2b272f] text-[#fafafa] top-20 left-0 right-0 bottom-0 flex flex-col justify-start items-center space-y-12`}
      >
        <img
          className="absolute bottom-0 right-0 w-full opacity-20 z-[0]"
          src={patternNavMobile}
          alt="pattern"
        />
        <div className="">HOW WE WORK</div>
        <div className="">BLOG</div>
        <div className="">ACCOUNT</div>
        <div className="transition duration-300 font-semibold cursor-pointer hover:text-white hover:bg-[#2b272f] py-4 px-20 border-[3px] border-[#fafafa]">
          VIEW PLANS
        </div>
      </div>

      {/* Navbar Desktop */}
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
