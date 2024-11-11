"use client";
import React, { useState } from "react";
import KanpurDatas from "@/data/KanpurData";
import Image from "next/image";
import { IoClose, IoEye } from "react-icons/io5";

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

const Kanpur = () => {
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

  const ImageItem = ({ item }: { item: PortfolioData }) => (
    <div
      key={item.id}
      className="relative mb-3 cursor-pointer group"
      onClick={() => openModal(item.image)}
    >
      <Image
        src={item.image.src}
        alt={item.heading}
        width={400}
        height={400}
        style={{
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px, rgba(14, 30, 37, 0.32) 0px 2px 16px",
          border: "2px solid #fff",
          borderRadius: "10px",
        }}
        className="rounded-lg mb-5"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex gap-2 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <IoEye className="text-white text-lg" />
        <span className="text-white text-base">Preview</span>
      </div>
    </div>
  );

  return (
    <>
      <p className="text-center mb-5 text-2xl">
        Talk on Hydration and Longevity, August 2024
      </p>
      <div className="dad columns-1 gap-5 sm:columns-2 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
        {KanpurDatas.map((item) => (
          <ImageItem key={item.id} item={item} />
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
              width={400}
              height={400}
              className="rounded-lg px-3 w-[90%]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Kanpur;
