import React from "react";
import { CardPrice } from "../moluculs";
import Slider from "react-slick";

const Priceing = () => {
  const items = [
    {
      title: "Free",
      price: "$0",
      desc: "Capture ideas and find them quickly",
      fasilitas: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
    {
      title: "Personal",
      price: "$11.99",
      desc: "Keep home and family on track",
      fasilitas: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
    {
      title: "Organization",
      price: "$49.99",
      desc: "Capture ideas and find them quickly",
      fasilitas: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 1.5,
    speed: 500,
  };

  return (
    <div className="px-6 mt-20">
      <h1 className="text-[36px] text-center font-[700] leading-[44px] text-[#212529] xl:text-[48px] xl:leading-[78px]">
        Choose Your Plan
      </h1>
      <p className="text-[18px] leading-[38px] font-normal text-center my-8 text-white text-[#212529]">
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </p>
      {/* width 320-760 */}
      <div className="lg:hidden block">
        <Slider
          {...settings}
          className=" overflow-x-hidden overflow-y-auto hover:scale-105 transition-all"
        >
          {items.map((item, i) => {
            return (
              <CardPrice
                title={item.title}
                price={item.price}
                desc={item.desc}
                fasilitas={item.fasilitas}
              />
            );
          })}
        </Slider>
      </div>
      {/* width 760-120 */}
      <div className="hidden lg:block xl:hidden">
        <Slider
          {...settings2}
          className=" overflow-x-hidden overflow-y-auto hover:scale-105 transition-all"
        >
          {items.map((item, i) => {
            return (
              <CardPrice
                title={item.title}
                price={item.price}
                desc={item.desc}
                fasilitas={item.fasilitas}
              />
            );
          })}
        </Slider>
      </div>
      {/* 1200-full */}
      <div className="xl:flex gap-10 hidden">
        {items.map((item, i) => {
          return (
            <CardPrice
              title={item.title}
              price={item.price}
              desc={item.desc}
              fasilitas={item.fasilitas}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Priceing;
