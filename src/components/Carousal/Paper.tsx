"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import inNewsDatas from "@/data/inNewsData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import { Image } from "antd";

// Assuming StaticImageData type is used for images
interface StaticImageData {
  src: string;
  width: number;
  height: number;
  placeholder?: string;
}

interface PortfolioData {
  id: number;
  image: StaticImageData; // Use the StaticImageData type for images
  heading: string;
  purl?: string; // Optional URL
}

export default function Paper() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 3, // Show 2 slides on mobile
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3, // Show 3 slides on tablet
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4, // Show 4 slides on desktop
          },
        }}
        style={{ position: "unset" }}
        modules={[Pagination]}
        className=" mySwiper w-[93%] right-0 ml-auto m-0  overflow-hidden"
      >
        {inNewsDatas.map((item: PortfolioData) => (
          <SwiperSlide>
            <Image.PreviewGroup>
              <Image
                src={item.image.src} // Access the src from the image object
                alt={item.heading}
                className="rounded-lg"
                // layout="responsive"
                // width={item.image.width}
                // height={item.image.height}
              />
            </Image.PreviewGroup>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
