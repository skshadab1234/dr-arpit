"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import inNewsDatas from "@/data/inNewsData";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

// Assuming StaticImageData type is used for images
interface StaticImageData {
  src: string;
  width: number;
  height: number;
  placeholder?: string;
}

interface PortfolioData {
  id: number;
  image: StaticImageData;
  heading: string;
  purl?: string;
}

export default function Paper() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(
    null
  );

  const openModal = (image: StaticImageData) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

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
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        style={{ position: "unset" }}
        modules={[Pagination]}
        className="mySwiper w-[93%] right-0 ml-auto m-0 overflow-hidden"
      >
        {inNewsDatas.map((item: PortfolioData) => (
          <SwiperSlide key={item.id}>
            <div
              className="relative cursor-pointer"
              onClick={() => openModal(item.image)}
            >
              <Image
                width={400}
                height={400}
                src={item.image.src}
                alt={item.heading}
                className="rounded-lg border-2 border-white border-solid"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal for image preview */}
      {isOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-white p-2 rounded-full"
            >
              <IoClose className="text-gray-900" />
            </button>
            <Image
              src={selectedImage.src}
              alt="Selected Image"
              width={350}
              height={350}
              className="rounded-lg px-3 w-[90%]"
            />
          </div>
        </div>
      )}
    </>
  );
}
