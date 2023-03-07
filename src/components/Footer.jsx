import React from "react";
import logo from "../images/logo.svg";
import iconFacebook from "../images/icon-facebook.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconPinterest from "../images/icon-pinterest.svg";
import iconInstagram from "../images/icon-instagram.svg";
import patternMobile from "../images/bg-pattern-footer-mobile.svg";
import patternDesktop from "../images/bg-pattern-footer-desktop.svg";

const Footer = () => {
  return (
    <div className="px-20 md:px-52 bg-[#fafafa] mt-20 -mb-10 pb-10 text-center md:text-left relative">
      <img
        className="block md:hidden absolute top-0 left-0"
        src={patternMobile}
        alt="pattern"
      />
      <img
        className="hidden md:block absolute top-0 left-0"
        src={patternDesktop}
        alt="pattern"
      />
      {/* Section 1 */}
      <div className="pt-20 pb-10 flex flex-col md:flex-row justify-center md:justify-between items-center space-y-8 md:space-y-0 border-b-2 border-gray-300">
        {/* Logo */}
        <div>
          <img className="w-40" src={logo} alt="pattern" />
        </div>

        {/* Social Media */}
        <div className="flex space-x-5">
          <img
            className="w-8 cursor-pointer"
            src={iconFacebook}
            alt="facebook-icon"
          />
          <img
            className="w-8 cursor-pointer"
            src={iconTwitter}
            alt="twitter-icon"
          />
          <img
            className="w-8 cursor-pointer"
            src={iconPinterest}
            alt="pinterest-icon"
          />
          <img
            className="w-8 cursor-pointer"
            src={iconInstagram}
            alt="instagram-icon"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="my-10 relative z-[1] font-semibold text-xl md:text-base flex flex-col md:flex-row justify-center md:justify-between md:space-y-0 items-center md:items-start space-y-12">
        <div className="flex flex-col space-y-8">
          {/* Title */}
          <div className="text-[#837d87] cursor-pointer">OUR COMPANY</div>

          {/* Links */}
          <div className="space-y-3 text-[#2d2640]">
            <div className="hover:underline cursor-pointer">HOW WE WORK</div>
            <div className="hover:underline cursor-pointer">WHY INSURE?</div>
            <div className="hover:underline cursor-pointer">VIEW PLANS</div>
            <div className="hover:underline cursor-pointer">REVIEWS</div>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          {/* Title */}
          <div className="text-[#837d87] cursor-pointer">HELP ME</div>

          {/* Links */}
          <div className="space-y-3 text-[#2d2640]">
            <div className="hover:underline cursor-pointer">FAQ</div>
            <div className="hover:underline cursor-pointer">TERMS OF USE</div>
            <div className="hover:underline cursor-pointer">PRIVACY POLICY</div>
            <div className="hover:underline cursor-pointer">COOKIES</div>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          {/* Title */}
          <div className="text-[#837d87] cursor-pointer">CONTACT</div>

          {/* Links */}
          <div className="space-y-3 text-[#2d2640]">
            <div className="hover:underline cursor-pointer">SALES</div>
            <div className="hover:underline cursor-pointer">SUPPORT</div>
            <div className="hover:underline cursor-pointer">LIVE CHAT</div>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          {/* Title */}
          <div className="text-[#837d87] cursor-pointer">OTHERS</div>

          {/* Links */}
          <div className="space-y-3 text-[#2d2640]">
            <div className="hover:underline cursor-pointer">CAREES</div>
            <div className="hover:underline cursor-pointer">PRESS</div>
            <div className="hover:underline cursor-pointer">LICENSES</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
