import React from "react";

const PrimaryInfo = ({ heading, subHeading, para }) => {
  return (
    <div className="text-center py-10">
      <h3 className="text-base">{heading}</h3>
      <h2 className="text-5xl">{subHeading}</h2>
      <p className="text-base mt-8">{para}</p>
    </div>
  );
};

export default PrimaryInfo;
