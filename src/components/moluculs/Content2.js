import React from 'react';
import { Person1, Person2, Person3, Person4, Person5, Person6, Person7, IconLogo, IconArrowRight } from '../../assests';
import { Button2 } from '../atoms';

const Content2 = () => {
  return (
    <div className='flex flex-col-reverse mt-14 xl:mt-20 xl:flex-row xl:items-center'>
        <div className=' relative h-[300px] xl:h-[380px] sm:w-[400px] lg:w-[500px] xl:w-[40%] sm:mx-auto mt-6'>
            <img src={Person1} alt="person" className='w-[27px] absolute left-10 top-8 work-1 lg:w-[44px] xl:w-[57px]'/>
            <img src={Person2} alt="person" className='w-[27px] absolute left-40 top-16 work-2 lg:w-[44px] xl:w-[57px]' />
            <img src={Person3} alt="person" className='w-[27px] absolute right-8 top-4 work-3 lg:w-[44px] xl:w-[57px]'/>
            <img src={Person4} alt="person" className='w-[27px] absolute left-20 top-[100px] work-4 lg:w-[44px] xl:w-[57px]'/>
            <img src={Person5} alt="person" className='w-[27px] absolute left-10 bottom-8 work-5 lg:w-[44px] xl:w-[57px]'/>
            <img src={Person6} alt="person" className='w-[27px] absolute left-40 bottom-16 work-6 lg:w-[44px] xl:w-[57px]' />
            <img src={Person7} alt="person" className='w-[27px] absolute right-8 bottom-1/2 work-7 lg:w-[44px] xl:w-[57px]'/>
            <img src={Person4} alt="person" className='w-[27px] absolute left-20 bottom-[100px] work-8 lg:w-[44px] xl:w-[57px]'/>
            <img src={IconLogo} alt="logo" className='w-[27px] absolute left-1/2 top-1/2 lg:w-[44px] xl:w-[57px]'/>
        </div>
        <div className='xl:w-[50%]'>
        <h1 className="text-[36px] text-center font-[700] leading-[44px] xl:text-[48px] xl:leading-[60px] xl:text-start">
          Get More Done with Whitepace
        </h1>
        <p className="text-[18px] leading-[38px] font-normal text-center my-4 xl:text-start">
          Images, videos, PDFs and audio files are supported. Create math
          expressions and diagrams directly from the app. Take photos with the
          mobile app and save them to a note.
        </p>
        <div className="flex justify-center xl:justify-start">
          <Button2 name="Try it Now" icon={IconArrowRight} />
        </div>
      </div>
    </div>
  )
}

export default Content2