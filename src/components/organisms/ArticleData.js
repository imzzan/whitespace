import React from "react";
import { Button2 } from "../atoms";
import { IconArrowRight, Image11 } from "../../assests";

const ArticleData = () => {
  return (
    <div className="mt-10 flex flex-col-reverse px-6 xl:flex-row xl:items-center">
      <div className="xl:w-[50%]">
        <h1 className="text-[36px] text-center font-[700] leading-[44px] text-[#212529] xl:text-[50px] xl:leading-[60px]">
          100% your data
        </h1>
        <p className="text-[18px] leading-[38px] font-normal text-center my-4 text-[#212529]">
          The app is open source and your notes are saved to an open format, so
          you'll always have access to them. Uses End-To-End Encryption (E2EE)
          to secure your notes and ensure no-one but yourself can access them.
        </p>
        <div className="flex justify-center">
          <Button2 name="Read More" icon={IconArrowRight} />
        </div>
      </div>
      <img src={Image11} alt="icon" className="mt-10 rounded-[20px] sm:w-[400px] mx-auto xl:w-[600px] xl:h-[380px]" />
    </div>
  );
};

export default ArticleData;
