import React from "react";
import { Person1, Person2, Person3 } from "../../assests";
import { CardTesti } from "../moluculs";
import Slider from "react-slick";

const Testomoni = () => {
  const items = [
    {
      comment:
        "Taskkey is designed as a collaboration tool for businesses that is a full project management solution.",
      profile: Person1,
      title: "Oberon Shaw, MCH",
      desc: "Head of Talent Acquisition, North America",
    },
    {
      comment:
        "Taskkey is designed as a collaboration tool for businesses that is a full project management solution.",
      profile: Person2,
      title: "Oberon Shaw, MCH",
      desc: "Head of Talent Acquisition, North America",
    },
    {
      comment:
        "Taskkey is designed as a collaboration tool for businesses that is a full project management solution.",
      profile: Person3,
      title: "Oberon Shaw, MCH",
      desc: "Head of Talent Acquisition, North America",
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
    speed: 500
  };

  return (
    <div className="px-6 my-16">
      <h1 className="text-[36px] text-center font-[700] leading-[44px] text-[#212529] mb-5 xl:text-[48px] xl:leading-[78px]">
        What Our Clients Says
      </h1>
      <div className=" block lg:hidden">
        <Slider
          {...settings}
          className=" overflow-x-hidden overflow-y-auto hover:scale-105 transition-all"
        >
          {items.map((item, i) => {
            return (
              <CardTesti
                comment={item.comment}
                profile={item.profile}
                desc={item.desc}
                title={item.title}
              />
            );
          })}
        </Slider>
      </div>
      <div className=" lg:block hidden xl:hidden">
        <Slider
          {...settings2}
          className=" overflow-x-hidden overflow-y-auto hover:scale-105 transition-all"
        >
          {items.map((item, i) => {
            return (
              <CardTesti
                comment={item.comment}
                profile={item.profile}
                desc={item.desc}
                title={item.title}
              />
            );
          })}
        </Slider>
      </div>
      <div className="xl:flex gap-10 hidden">
      {items.map((item, i) => {
            return (
              <CardTesti
                comment={item.comment}
                profile={item.profile}
                desc={item.desc}
                title={item.title}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Testomoni;
