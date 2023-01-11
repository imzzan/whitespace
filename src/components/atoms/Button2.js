import React from "react";

const Button2 = ({name, icon}) => {
  return (
    <button className="bg-secondary py-2 lg:py-4 px-6 lg:px-10 rounded-[8px] flex items-center gap-2">
      {" "}
      <span className="text-[16px] lg:text-[18px] font-[500] leading-[23px] text-white">{name}</span>{" "}
      <img src={icon} alt="icon" className="w-[12px] lg:w-[20px]" />
    </button>
  );
};

export default Button2;
