import React from "react";
import { Button2 } from "../atoms";
import { IconArrowRight, ImageGaris, Image1 } from "../../assests";

const HeroSection = () => {
  return (
    <div className=" bg-primary relative h-[800px] sm:h-[850px] md:h-[800px] top-14 xl:h-[600px]">
      <img
        src={ImageGaris}
        alt="imageGaris"
        className="rotate-[180deg] h-full w-full opacity-40 object-cover"
      />
      <div className=" pt-16 absolute top-0 px-6 flex flex-col justify-center flex flex-col xl:flex-row xl:items-center ">
        <div className="xl:w-[50%]">
          <h1 className="text-[36px] text-center xl:text-start font-[700] leading-[44px] text-white xl:text-[64px] xl:leading-[78px]">
            Get More Done with Whitepace
          </h1>
          <p className="text-[18px] leading-[38px] font-normal text-center xl:text-start text-white my-8">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <div className="flex justify-center xl:justify-start">
            <Button2 name="Try TasKey Free" icon={IconArrowRight} />
          </div>
        </div>
        <img
          src={Image1}
          alt="image1"
          className="mt-10 border-2 border-white rounded-[20px] sm:w-[400px] xl:w-[600px] xl:h-[400px] mx-auto xl:mr-0"
        />
      </div>
    </div>
  );
};

export default HeroSection;
