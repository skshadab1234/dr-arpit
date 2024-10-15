"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logosDatas from "@/data/logoData";
import "./LogoCarousel.css";

const LogoCarousel = () => {
  const bg = "./white bg.png";
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5, // 5 logos on desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // 3 logos on tablet
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2, // 2 logos on mobile
        },
      },
    ],
  };

  return (
    <div
      className={`p-5 md:p-10 lg:p-16 bg-white `}
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h5
        style={{ letterSpacing: "3px" }}
        className="text-[#232c77] text-center pb-5 font-bold uppercase mainPrimary text-4xl lg:text-6xl"
      >
        BRAND COLLABORATIONS
      </h5>

      <div className="logo-carousel overflow-hidden w-full gap-4">
        <Slider {...settings}>
          {logosDatas.map((item) => (
            <div
              style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
              key={item.id}
              className="single-client shadow-lg rounded-lg bg-[#fff] my-3"
            >
              <img className="p-0" src={item.image.src} alt={item.heading} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoCarousel;
