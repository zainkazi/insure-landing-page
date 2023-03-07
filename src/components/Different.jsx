import React from "react";
import iconSnappy from "../images/icon-snappy-process.svg";
import iconAffordable from "../images/icon-affordable-prices.svg";
import iconPeople from "../images/icon-people-first.svg";
import DifferentFeature from "./DifferentFeature";

const Different = () => {
  return (
    <div className="font-karla pt-20 pb-40 md:pt-[15%] md:px-48 text-center md:text-left">
      <hr className="border-[2px] bg-black mx-40 md:mx-0 md:w-52 text-center mt-12 mb-8 self-center" />
      <h1 className="font-dm text-[65px] mb-16">We're different</h1>
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:space-x-10 space-y-16 md:space-y-0">
        <DifferentFeature
          image={iconSnappy}
          title="Snappy Process"
          desc="Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."
        />
        <DifferentFeature
          image={iconAffordable}
          title="Affordable Prices"
          desc="We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
        />
        <DifferentFeature
          image={iconPeople}
          title="People First"
          desc="Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."
        />
      </div>
    </div>
  );
};

export default Different;
