import React from "react";

const DifferentFeature = ({ image, title, desc }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 md:justify-start md:items-start">
      <div>
        <img className="w-32 md:w-24" src={image} alt="feature" />
      </div>
      <h2 className="font-bold px-10 md:px-0 text-3xl text-[#2b272f] font-dm">
        {title}
      </h2>
      <p className="text-2xl px-10 md:px-0 md:text-lg text-[#837d87]">{desc}</p>
    </div>
  );
};

export default DifferentFeature;
