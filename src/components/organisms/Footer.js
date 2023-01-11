import React from "react";
import {
  IconAndroid,
  IconApple2,
  IconArrowRight,
  IconFacebook,
  IconGlobe,
  IconLinkIn,
  IconTwitter,
  IconWindows,
  Logo,
} from "../../assests";
import { Button2 } from "../atoms";

const Footer = () => {
  return (
    <div className="bg-primary px-6 pt-10 text-white">
      <div className="flex flex-col">
        <h1 className="text-[36px] font-[700] leading-[52px] mb-3 xl:text-[64px] xl:leading-[78px] xl:text-center">
          Try Whitepace today
        </h1>
        <p className="text-[18px] font-normal leading-[30px] mb-3 xl:text-center">
          Get started for free. Add your whole team as your needs grow.
        </p>
        <div>
          
        </div>
        <div className="flex justify-start xl:justify-center">
          <Button2 name="Try Taskey free" icon={IconArrowRight} />
        </div>
        
        <p className="text-[18px] font-normal leading-[30px] my-5 xl:text-center">
          On a big team? Contact sales
        </p>
        <div className="flex gap-8 xl:justify-center">
          <img src={IconApple2} alt="iconAplle2" className="w-[35px]" />
          <img src={IconWindows} alt="iconWindows" className="w-[35px]" />
          <img src={IconAndroid} alt="iconAndroid" className="w-[35px]" />
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-10 pb-16 xl:flex-row xl:items-start xl:justify-around xl:mt-16">
        <div className="flex flex-col justify-center xl:w-[25%]">
          <img src={Logo} alt="logo" className="sm:w-[191px]"/>
          <p className="text-[18px] font-normal leading-[30px] my-5">
            whitepace was created for the new ways we live and work. We make
            beautyfully designed around the world
          </p>
        </div>
        <div className="flex flex-col justify-center text-center sm:text-start gap-2">
          <p className="font-[700] text-[18px] leading-[22px]">Product</p>
          <p className="text-[18px] font-normal leading-[30px]">Overview</p>
          <p className="text-[18px] font-normal leading-[30px]">Pricing</p>
          <p className="text-[18px] font-normal leading-[30px]">
            Customer stories
          </p>
        </div>
        <div className="flex flex-col justify-center text-center gap-2 sm:text-start">
          <p className="font-[700] text-[18px] leading-[22px]">Resources</p>
          <p className="text-[18px] font-normal leading-[30px]">Blog</p>
          <p className="text-[18px] font-normal leading-[30px]">
            Guides & tutorials
          </p>
          <p className="text-[18px] font-normal leading-[30px]">Help center</p>
        </div>
        <div className="flex flex-col justify-center text-center gap-2 sm:text-start">
          <p className="font-[700] text-[18px] leading-[22px]">Company</p>
          <p className="text-[18px] font-normal leading-[30px]">About us</p>
          <p className="text-[18px] font-normal leading-[30px]">Careers</p>
          <p className="text-[18px] font-normal leading-[30px]">Media kit</p>
        </div>
        <div className="flex flex-col justify-center text-center gap-2 sm:text-start xl:w-[25%]">
          <p className="font-[700] text-[28px] leading-[36px]">Try It Today</p>
          <p className="text-[18px] font-normal leading-[30px]">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <div className="mx-auto sm:ml-0">
            <Button2 name="Start Today" icon={IconArrowRight} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-center sm:text-start">
        <div className="flex flex-col gap-3 lg:flex-row justify-between lg:border-b border-white lg:pb-2">
          <p className="flex items-center gap-2 justify-center sm:justify-start">
            <img src={IconGlobe} alt="iconGlobe" /> English
          </p>
          <p>Terms & privacy</p>
          <p>Security</p>
          <p>Status</p>
          <p>©2021 Whitepace LLC.</p>
        </div>
        <div className="flex justify-center sm:justify-start gap-5 pb-5">
          <img src={IconFacebook} alt="iconfacebook" />
          <img src={IconTwitter} alt="iconTwitter" />
          <img src={IconLinkIn} alt="IconLinkIn" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
