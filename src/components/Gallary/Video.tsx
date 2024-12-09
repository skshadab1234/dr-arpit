"use client";
import React, { useState } from "react";
import { IoPlayCircleSharp } from "react-icons/io5";
import { videoData } from "@/data/headerData";
import { Modal } from "antd";

const Video = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string | null>(null);

  const openModal = (videoUrl: string) => {
    setCurrentVideoUrl(null); // Clear the current video first
    setTimeout(() => {
      setCurrentVideoUrl(videoUrl); // Set the new video URL
      setIsModalOpen(true); // Open the modal after setting URL
    }, 100); // Adding a slight delay to ensure state gets updated
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideoUrl(null); // Reset the video URL when modal is closed
  };
  return (
    <>
      {videoData?.map((item: any) => (
        <div className="space-y-2 lg:w-1/4 md:w-1/3 w-1/2" key={item.id}>
          <div
            style={{
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            }}
            className="px-0 border-2 border-solid border-[#fff] mb-5 rounded-[10px]"
          >
            <div className="relative">
              <img
                className="m-auto rounded-lg"
                width={"100%"}
                height={"300px"}
                src={item.img.src}
                alt={item.img.src}
              />
              <h4 className="text-white text-xl font-semibold text-center py-2 absolute top-0 w-full h-full flex items-center justify-center rounded-lg bg-[#00000066]">
                <IoPlayCircleSharp
                  onClick={() => openModal(item.video)} // Ensure correct video URL is passed
                  className="text-7xl cursor-pointer"
                />
              </h4>
            </div>
          </div>
        </div>
      ))}

      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        title={<p className="py-3 px-2">Dr Arpit Bansal</p>}
        className="modal"
        centered
        width={700}
        footer={null}
        key={currentVideoUrl}
      >
        {currentVideoUrl ? (
          <video className="m-auto" width="50%" height="400" controls autoPlay>
            <source src={currentVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>No video available</p>
        )}
      </Modal>
    </>
  );
};

export default Video;
