"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css"; // Import your styles

import banner1 from "@/assets/images/1-min.webp";
import banner2 from "@/assets/images/2-min.webp";
import banner3 from "@/assets/images/3-min.webp";
import banner4 from "@/assets/images/4-min.webp";
import banner5 from "@/assets/images/5-min.webp";
import banner6 from "@/assets/images/6-min.webp";
import banner7 from "@/assets/images/7-min.webp";
import banner8 from "@/assets/images/8-min.webp";
import banner9 from "@/assets/images/9-min.webp";
import banner10 from "@/assets/images/10-min.webp";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Link from "next/link";

const slidesData = [
  {
    url: "/about",
    description: "Banner 1",
    backgroundImage: banner1.src,
  },
  {
    url: "/speciality/cancer-treatment",
    description: "",
    backgroundImage: banner10.src,
  },
  {
    url: "/speciality/piles-surgery",
    description: "",
    backgroundImage: banner3.src,
  },
  {
    url: "/speciality/hernia-surgery",
    description: "",
    backgroundImage: banner2.src,
  },
  {
    url: "/speciality/stone-surgery",
    description: "",
    backgroundImage: banner4.src,
  },
  {
    url: "/bringing-people-together",
    description: "",
    backgroundImage: banner5.src,
  },
  { url: "/in-news", description: "", backgroundImage: banner6.src },
  { url: "/book-appointment", description: "", backgroundImage: banner7.src },
  {
    url: "/where-passion-meets-recognition",
    description: "",
    backgroundImage: banner8.src,
  },
  { url: "/gallery", description: "", backgroundImage: banner9.src },
];

const Slider: React.FC = () => {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    slideRefs.current.forEach((slide, index) => {
      if (index === swiper.activeIndex && slide) {
        slide.classList.remove("banner-animate");
        void slide.offsetWidth; // Trigger reflow to restart animation
        slide.classList.add("banner-animate");
      }
    });
  };
  return (
    <>
      <Swiper
        autoHeight
        spaceBetween={20}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={handleSlideChange}
        style={{ height: "auto", width: "100%" }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link href={slide.url}>
              <div
                ref={(el: any) => (slideRefs.current[index] = el)}
                className="relative w-full h-auto flex items-center justify-left banner-animate"
              >
                <img src={slide.backgroundImage} alt={slide.backgroundImage} />
                {/* Overlay parts */}
                <div className="overlay-top-part overlay-part"></div>
                <div className="overlay-bottom-part overlay-part"></div>
                {/* <div className="overlay-left-part overlay-part"></div> */}
                {/* <div className="overlay-right-part overlay-part"></div> */}
              </div>
            </Link>
          </SwiperSlide>
        ))}

        {/* Autoplay progress indicator */}
        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div> */}
      </Swiper>
    </>
  );
};

export default Slider;
