import React from "react";
import gallery1 from "@/assets/images/gallery/270.png";
const AboutArpit = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-start lg:my-5">
          <div
            className={`relative flex justify-center  items-center w-full lg:w-1/3 xl:w-5/12 my-5 duration-300}`}
          >
            <div className="relative p-3 lg:p-0">
              <img
                style={{
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                }}
                src={gallery1.src}
                alt="Profile"
                // className="w-full h-full -mt-12  relative z-20"
                className="w-[500px] border-2 border-solid border-[#fff] rounded-md px-20 scale-x-[-1]"
              />
              {/* <div className="absolute w-80 md:w-96 h-[380px] md:h-[450px] bg-gray-300 -top-8 -right-8 rounded-lg border-b-4 border-[#171f56]"></div>
              <div className="absolute w-16 h-16 bg-[#171f56] -top-4 -right-4 rounded-lg"></div> */}
            </div>
          </div>

          <div
            className={`px-3 m-auto duration-300 w-full lg:w-1/2 xl:w-7/12}`}
          >
            <h2 className="text-3xl font-bold text-left mb-2 relative">
              <span
                style={{ letterSpacing: "3px" }}
                className="text-[#232c77] font-bold uppercase mainPrimary text-4xl lg:text-6xl"
              >
                Dr. Arpit Bansal
              </span>
              <div className="absolute top-0 right-0 w-10 h-7 bg-[#171f56] opacity-20 rotate-45"></div>
            </h2>
            <span className="text-xl mt-0 lg:mt-2 mb-2 font-semibold">
              MBBS | MS | FACS | FMAS | FCS | FIBC
            </span>
            <p className="text-lg text-[#000] my-4 mb-10 text-justify font-normal">
              I am Arpit Bansal, a doctor, specialized in advanced laparoscopic,
              cancer, and laser surgery. With a Fellowship from the UK, i am
              future-ready for robotic surgeries. I have trained under some of
              the finest surgeons in India.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArpit;
