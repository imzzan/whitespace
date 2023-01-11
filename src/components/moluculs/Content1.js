import React from "react";
import { Button2 } from "../atoms";
import { IconArrowRight, Image2 } from "../../assests";

const Content1 = () => {
  return (
    <div className="mt-10 flex flex-col xl:flex-row xl:items-center">
      <div className="xl:w-[50%]">
        <h1 className="text-[36px] text-center xl:text-start font-[700] leading-[44px] text-[#212529] xl:text-[48px] xl:leading-[60px]">
        Project Management
        </h1>
        <p className="text-[18px] leading-[38px] font-normal text-center xl:text-start my-5 text-[#212529]">
          Images, videos, PDFs and audio files are supported. Create math
          expressions and diagrams directly from the app. Take photos with the
          mobile app and save them to a note.
        </p>
        <div className="flex justify-center xl:justify-start">
          <Button2 name="Get Started" icon={IconArrowRight} />
        </div>
      </div>
      <img src={Image2} alt="icon" className="mt-10 border-2 border-primary rounded-[20px] sm:w-[400px] mx-auto xl:w-[600px] xl:h-[400px] xl:mr-0"/>
    </div>
  );
};

export default Content1;
