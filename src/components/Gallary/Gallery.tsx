"use client";
import portfolioDatas from "@/data/portfolioData";
import { useState, useEffect } from "react";
import { Image, Modal } from "antd";
import { IoPlayCircleSharp } from "react-icons/io5";
import { videoData } from "@/data/headerData";

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

const Gallery = () => {
  const bg = "./white bg.png";
  const [activeTab, setActiveTab] = useState("Home");
  const [tabColors, setTabColors] = useState({
    Home: "#ed7936",
    News: "",
    Contact: "",
    About: "",
  });

  useEffect(() => {
    setActiveTab("Home");
  }, []);

  const openPage = (pageName: string, color: string) => {
    setActiveTab(pageName);
    setTabColors({
      Home: "",
      News: "",
      Contact: "",
      About: "",
      [pageName]: color,
    });
  };
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
    <div
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`container mx-auto px-4 py-16`}>
        <h5
          style={{ letterSpacing: "3px" }}
          className="text-[#232c77] text-center pb-8 font-bold uppercase mainPrimary text-4xl lg:text-6xl"
        >
          Dr. Arpit Bansal
        </h5>
        <div className=" grid-cols-1 gap-5 flex justify-center lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
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
                    alt=""
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
        </div>

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
            <video
              className="m-auto"
              width="50%"
              height="400"
              controls
              autoPlay
            >
              <source src={currentVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>No video available</p>
          )}
        </Modal>

        <div className="dad columns-1 gap-5 sm:columns-2  md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          {portfolioDatas.map((item: PortfolioData) => (
            <div key={item.id} className="mb-3">
              {" "}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
