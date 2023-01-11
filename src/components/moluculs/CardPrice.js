import React from "react";
import { IconCheck } from "../../assests";
import { Button } from "../atoms";

const CardPrice = ({ title, desc, price, fasilitas }) => {
  return (
    <div className="px-2 py-4 h-[510px] sm:h-[460px] sm:w-[400px] lg:h-[511px] xl:h-[490px] mx-auto border border-primary rounded-[20px] hover:bg-primary text-[#212529] hover:text-white">
      <h1 className="font-[600] text-[24px] leading-[36px] mb-4">{title}</h1>
      <p className="font-[700] text-[36px] leading-[44px] mb-4">{price}</p>
      <p className="font-[500] text-[18px] leading-[23px] mb-4">{desc}</p>
      <ul className="flex flex-col gap-3">
        {fasilitas.map((item) => {
          return (
            <li className="flex gap-2 text-[16px] leading-[20px] font-normal items-center">
              <img src={IconCheck} alt="item" className="w-[18px]"/> {item}
            </li>
          );
        })}
        <li className="sm:mt-2"><Button name='Get Started' bgColor='bg-secondary'/></li>
      </ul>
    </div>
  );
};

export default CardPrice;
