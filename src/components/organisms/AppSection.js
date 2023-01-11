import React from "react";
import {
  ImageGaris,
  IconArrowRight,
} from "../../assests";
import { Button2 } from "../atoms";
import { Apps } from "../moluculs";

const AppSection = () => {
  return (
    <div className=" bg-primary relative h-[850px] sm:h-[750px] md:h-[700px] xl:h-[460px]">
      <img
        src={ImageGaris}
        alt="imageGaris"
        className="rotate-[180deg] h-full w-full opacity-40 object-cover"
      />
      <div className="pt-16 absolute top-0 px-6 flex flex-col justify-center xl:flex-row xl:items-center">
        <Apps/>
        <div className="xl:w-[60%]">
          <h1 className="text-[36px] text-center font-[700] leading-[44px] text-white xl:text-[64px] xl:leading-[78px]">
          Work with Your Favorite Apps Using whitepace
          </h1>
          <p className="text-[18px] leading-[38px] font-normal text-center text-white my-8">
          Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
          </p>
          <div className="flex justify-center">
            <Button2 name="Try TasKey Free" icon={IconArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
