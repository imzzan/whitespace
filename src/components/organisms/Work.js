import React from "react";
import { Button2 } from "../atoms";
import { IconArrowRight } from "../../assests";

const Work = () => {
  return (
    <div className="mt-10 flex flex-col bg-primary px-6 py-16">
      <h1 className="text-[36px] font-[700] leading-[44px] text-white xl:text-[64px] xl:leading-[78px] xl:text-center">
        Your work, everywhere you are
      </h1>
      <p className="text-[18px] leading-[38px] font-normal my-8 text-white xl:text-center">
        Access your notes from your computer, phone or tablet by synchronising
        with various services, including whitepace, Dropbox and OneDrive. The
        app is available on Windows, macOS, Linux, Android and iOS. A terminal
        app is also available!
      </p>
      <div className="flex justify-left xl:justify-center">
        <Button2 name="Try Taskey" icon={IconArrowRight} />
      </div>
    </div>
  );
};

export default Work;
