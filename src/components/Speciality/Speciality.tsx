"use client";
import React, { useEffect, useState } from "react";
import FAQ from "./FAQ";
import Reviews from "./Reviews";
import AboutArpit from "./AboutArpit";
import Image from "next/image";

// Define a more specific type for the treatment data
interface Treatment {
  meta_title: string;
  meta_description: string;
  meta_keyword: string;
  image: string;
  title: string;
  description: string;
  treatment_data: any;
  treatment_faqs: any;
  treatment_reviews: any;
}

interface SpecialityProps {
  title: string;
  treatment: Treatment;
}

const Speciality: React.FC<SpecialityProps> = ({ title, treatment }: any) => {
  const bg = "/white-bg.png"; // Updated path to be more consistent

  const decodeHtmlEntities = (text: string): string => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  };


  if (!treatment) {
    return <div>No treatment data available</div>;
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" py-5 md:py-8 lg:py-14 bg-white"
      >
        {treatment.treatment_data.map((item: any, index: number) => (
          <div
            key={index}
            className={`flex flex-col items-start w-full gap-3 lg:gap-10 py-5 lg:py-10 ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
          >
            <div className="w-full lg:w-[47%] px-6 md:px-16 animate-fade-in-left">
              {/* <img
                src={item.image}
                alt={decodeHtmlEntities(item.title)}
                className="w-full object-cover border-2 border-solid border-[#fff] rounded-md"
                style={{
                  boxShadow:
                    "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
                }}
              /> */}
              <Image
                width={600} // Set an initial width (can be any value) to be responsive
                height={600} // Set an initial height
                className="w-full object-cover border-2 border-solid border-[#fff] rounded-md"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="w-full lg:w-[47%] pt-5 lg:pt-0 flex flex-col justify-center px-5 space-y-3 lg:space-y-5 lg:-ml-20 animate-fade-in-right">
              <h5
                style={{ letterSpacing: "3px" }}
                className="text-[#232c77] font-bold uppercase mainPrimary text-4xl lg:text-5xl"
              >
                {item.title}
              </h5>
              
              <div
                className="text-justify"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
      </div>
      {treatment.treatment_reviews.length !== 0 ? (
        <Reviews reviewsData={treatment.treatment_reviews} />
      ) : (
        ""
      )}
      <AboutArpit />
      {treatment.treatment_faqs.length !== 0 ? (
        <FAQ faqs={treatment.treatment_faqs} />
      ) : (
        ""
      )}
    </>
  );
};

export default Speciality;
