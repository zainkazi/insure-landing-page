import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import hamburgerMenu from "../images/icon-hamburger.svg";
import iconClose from "../images/icon-close.svg";
import patternNavMobile from "../images/bg-pattern-mobile-nav.svg";

const Header = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [displayHamburger, setDisplayHamburger] = useState("block");
  const [displayClose, setDisplayClose] = useState("hidden");

  useEffect(() => {
    if (hamburgerClicked) {
      setDisplayHamburger("hidden");
      setDisplayClose("block");
    } else {
      setDisplayHamburger("block");
      setDisplayClose("hidden");
    }
  }, [hamburgerClicked]);

  const toggleHamburger = () => {
    setHamburgerClicked(!hamburgerClicked);
  };

  return (
    <div className="font-karla text-[#837d87] text-xl md:text-base flex justify-between items-center px-8 md:px-40 py-10 md:py-4">
      <div>
        <img className="w-44 md:w-36" src={logo} />
      </div>
      <div className="block md:hidden">
        <img
          onClick={toggleHamburger}
          className={`${displayHamburger} w-16`}
          src={hamburgerMenu}
          alt="menu"
        />
        <img
          onClick={toggleHamburger}
          className={`${displayClose} w-16`}
          src={iconClose}
          alt="menu"
        />
      </div>

      {/* Navbar Mobile */}
      <div
        className={`${displayClose} fixed z-40 overflow-y-auto text-3xl bg-[#2b272f] text-[#fafafa] top-36 left-0 right-0 bottom-0 flex flex-col justify-start items-center space-y-16 pt-24`}
      >
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
