import React from "react";
import { Image4, IconArrowRight } from "../../assests";
import { Button2 } from "../atoms";

const Coztomise2 = () => {
  return (
    <div className="mt-10 flex flex-col px-6 py-6 xl:flex-row xl:items-center">
      <img
        src={Image4}
        alt="icon"
        className="mt-10 border-2 border-primary rounded-[20px] sm:w-[400px] mx-auto xl:w-[600px] xl:h-[400px]"
      />
      <div className="xl:w-[50%]">
        <h1 className="text-[36px] text-center font-[700] leading-[44px] mt-8 text-[#212529] xl:text-[48px] xl:leading-[60px]">
          Customise it to your needs
        </h1>
        <p className="text-[18px] leading-[38px] font-normal text-center my-4 text-[#212529]">
          Customise the app with plugins, custom themes and multiple text
          editors (Rich Text or Markdown). Or create your own scripts and
          plugins using the Extension API.
        </p>
        <div className="flex justify-center">
          <Button2 name="Let’s Go" icon={IconArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default Coztomise2;
