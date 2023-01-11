import React from "react";
import { Logo, IconArrowRight } from "../../assests";
import { Button, Button2 } from "../atoms";

const NavbarDesctop = ({ items }) => {
  return (
    <div className="bg-primary justify-between items-center px-6 h-[94px] hidden xl:flex">
      <img src={Logo} alt="logo" className="w-[192px] h-[34px]"/>
      <div className="flex gap-8">
        {items.map((item, i) => {
          return (
            <>
              <div className="flex items-center gap-2 cursor-pointer hover:scale-110 transition hover:border-b-2 border-white">
                <p className="text-white text-[18px] leading-[23px] font-[500]">{item.name}</p>{" "}
              </div>
            </>
          );
        })}
        <Button name='Login' bgColor='bg-cream'/>
        <Button2 name='Try Whitepace free' icon={IconArrowRight}/>
      </div>
    </div>
  );
};

export default NavbarDesctop;
