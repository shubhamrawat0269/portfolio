import React from "react";

const PrimaryInfo = ({ heading, subHeading, para }) => {
  return (
    <div>
      <h3 className="text-base text-[#adc6ff]">{heading}</h3>
      <h2 className="text-5xl text-[#365398]">{subHeading}</h2>
      <p className="text-base mt-8 text-[#bcbaba]">{para}</p>
    </div>
  );
};

export default PrimaryInfo;
