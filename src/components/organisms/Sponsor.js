import React from "react";
import { IconApple, IconMicrosoft, IconSlack, IconGoogle } from "../../assests";

const Sponsor = () => {
  return (
    <div className="px-6 py-10 mb-10">
      <h1 className="text-[36px] mt-4 text-center font-[700] leading-[44px] text-[#212529] xl:text-[50px] xl:leading-[60px]">
        Our sponsors
      </h1>
      <div className="flex flex-col justify-center mt-10 gap-8 xl:flex-row">
        <img src={IconApple} alt="iconAplle" className="w-[55.47px] h-[68px] mx-auto"/>
        <img src={IconMicrosoft} alt="iconMicrosoft" className="w-[213px] h-[46px] mx-auto"/>
        <img src={IconSlack} alt="iconSlack" className="w-[192px] h-[49px] mx-auto"/>
        <img src={IconGoogle} alt="iconGoogle" className="w-[140px] h-[46px] mx-auto"/>
      </div>
    </div>
  );
};

export default Sponsor;
