import React from 'react';
import { ImageApp, IconGmail, IconGDrive,IconOutLook, IconGCalender, IconLogo } from '../../assests';

const Apps = () => {
  return (
    <div className=" relative mb-8 h-[250px] sm:w-[400px] sm:mx-auto">
    <div className="p-2 bg-white w-[36px] lg:w-[44px] xl:w-[57px] rounded-full absolute top-0 left-[42%] animation-1">
      <img src={IconGmail} alt="imageGmail" />
    </div>
    <div className="p-2 bg-white w-[36px] lg:w-[44px] xl:w-[57px] rounded-full absolute top-[58%] right-0 animation-2">
      <img src={IconGDrive} alt="imageGmail" />
    </div>
    <div className="p-2 bg-white w-[36px] lg:w-[44px] xl:w-[57px] rounded-full absolute top-[58%] left-0 animation-3">
      <img src={IconOutLook} alt="imageGmail" />
    </div>
    <div className="p-2 bg-white w-[36px] lg:w-[44px] xl:w-[57px] rounded-full absolute bottom-2 left-[42%] animation-4">
      <img src={IconGCalender} alt="imageGmail" />
    </div>
    <div className="px-2 py-3 bg-white w-[50px] lg:w-[44px] xl:w-[57px] rounded-full absolute top-[48%] left-[42%]">
      <img src={IconLogo} alt="imageGmail" className=""/>
    </div>
  </div>
  )
}

export default Apps