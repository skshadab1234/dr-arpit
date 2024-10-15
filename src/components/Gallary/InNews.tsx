"use client";
import inNewsDatas from "@/data/inNewsData";
import { useState, useEffect } from "react";
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

const InNews = () => {
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
          In News
        </h5>

        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          {inNewsDatas.map((item: PortfolioData) => (
            <div key={item.id} className="mb-5">
              {" "}
              {/* Add a wrapper div with a unique key */}
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

export default InNews;
