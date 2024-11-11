"use client";
import React, { useState } from "react";
import LDCDatas from "@/data/LDCData";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

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

const LDC = () => {
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
      <p className="text-center mb-5 text-2xl">
        Talk on Cervical Cancer, Longevity and Hydration, August 2024
      </p>
      <div className="dad columns-1 gap-5 sm:columns-2  md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        {LDCDatas.map((item: PortfolioData) => (
          <div
            key={item.id}
            className="mb-3 cursor-pointer"
            onClick={() => openModal(item.image)}
          >
            <Image
              style={{
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                border: "2px solid #fff",
                borderRadius: "10px",
              }}
              width={400}
              height={400}
              src={item.image.src}
              alt={item.heading}
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
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
              <IoClose className=" text-gray-900" />
            </button>
            <Image
              src={selectedImage.src}
              alt="Selected Image"
              width={selectedImage.width}
              height={selectedImage.height}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LDC;
