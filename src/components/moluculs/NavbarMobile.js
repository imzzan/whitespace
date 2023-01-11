import React, { useState } from "react";
import { Logo, iconButton, IconArrowRight, IconX } from "../../assests";
import { Button, Button2 } from "../atoms";

const NavbarMobile = ({ items }) => {
  const [state, setState] = useState(false);

  const handleOnclick = () => {
    setState(!state);
  };

  return (
    <>
      <div className="flex xl:hidden items-center bg-primary justify-between px-5 h-[56px] md:h-[70px]">
        <img src={Logo} alt="logo" className="w-[132px] h-[24px]" />
        <div className="flex items-center gap-5">
          <div className="hidden : md:block">
            <Button name="Login" bgColor="bg-cream" />
          </div>
          <div className="hidden : md:block"><Button2 name="Try Whitepace free" icon={IconArrowRight} /></div>
          
          <img
            src={state ?IconX :iconButton  }
            alt="humbuger"
            className="w-[24px] cursor-pointer"
            onClick={handleOnclick}
          />
        </div>
      </div>

      {state ? (
        <ul className="xl:hidden bg-primary w-screen h-screen absolute z-10 pt-5">
          {items.map((item, i) => {
            return (
              <div className="flex items-center py-5 justify-left pl-5 border-b border-white gap-2 cursor-pointer">
                <p className="text-white text-[18px] leading-[23px] font-[500]">
                  {item.name}
                </p>{" "}
                <img src={item.icon} alt="icon" className="w-[10px]" />{" "}
              </div>
            );
          })}
          <li className="ml-5 mt-5 md:hidden">
            <Button name="Login" bgColor="bg-cream" />
          </li>
          <li className="ml-5 mt-5 md:hidden">
            <Button2 name="Try Whitepace free" icon={IconArrowRight} />
          </li>
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavbarMobile;
