import React from "react";
import { Button2 } from "../atoms";
import { IconArrowRight, Image3 } from "../../assests";

const Coztomise1 = () => {
  return (
    <div className="mt-10 flex flex-col bg-primary px-6 py-16 xl:flex-row xl:items-center">
      <div className="xl:w-[50%]">
        <h1 className="text-[36px] text-center font-[700] leading-[44px] text-white xl:text-[64px] xl:leading-[78px]">
          Use as Extension
        </h1>
        <p className="text-[18px] leading-[38px] font-normal text-center my-8 text-white">
          Customise the app with plugins, custom themes and multiple text
          editors (Rich Text or Markdown). Or create your own scripts and
          plugins using the Extension API.
        </p>
        <div className="flex justify-center">
          <Button2 name="Let’s Go" icon={IconArrowRight} />
        </div>
      </div>
      <img
        src={Image3}
        alt="icon"
        className="mt-10 border-2 border-white rounded-[20px] sm:w-[400px] mx-auto xl:w-[600px] xl:h-[400px]"
      />
    </div>
  );
};

export default Coztomise1;
