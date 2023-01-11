import React from "react";
import { IconQuote, Person1 } from "../../assests";

const CardTesti = ({profile, title, desc, comment}) => {
  return (
    <div className="mt-8 border border-primary rounded-[20px] hover:bg-primary text-[#212529] hover:text-white px-3 py-5 sm:w-[400px] mx-auto">
      <div className="mb-5">
        <img src={IconQuote} alt="iconQuote" className="w-[56px] h-[40px] mb-5" />
        <p className="text-[16px] leading-[20px] font-normal">
            {comment}
        </p>
      </div>
      <hr />
      <div className="mt-5">
        <img src={profile} alt="icon" className="w-[65px] mb-4"/>
        <h1 className=" font-[700] text-[18px] leading-[21px] mb-3">{title}</h1>
        <p className="font-[400] text-[18px] leading-[30px]">{desc}</p>
      </div>
    </div>
  );
};

export default CardTesti;
