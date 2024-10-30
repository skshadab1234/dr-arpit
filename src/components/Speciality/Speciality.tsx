"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

// Define a more specific type for the treatment data
interface Treatment {
  meta_title: string;
  meta_description: string;
  meta_keyword: string;
  image: string;
  title: string;
  description: string;
}

interface SpecialityProps {
  title: string;
}

const Speciality: React.FC<SpecialityProps> = ({
  title,
  // TreatmentData,
}: any) => {
  const [treatment, setTreatment] = useState<Treatment | null>(null);
  const [loading, setLoading] = useState(true);
  const bg = "/white-bg.png"; // Updated path to be more consistent

  useEffect(() => {
    const fetchTreatment = async () => {
      try {
        const response = await fetch(
          `${process.env.BACKEND}/getTreatmentBySlug/${title}`
        );
        const data = await response.json();
        setTreatment(data);
        // TreatmentData(data);
      } catch (error) {
        console.error("Error fetching treatment:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTreatment();
  }, [title]);

  const decodeHtmlEntities = (text: string): string => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  };

  if (loading) {
    return (
      <div className="flex flex-col lg:flex-row items-center w-full gap-3 lg:gap-10 py-5 md:py-8 lg:py-14 animate-pulse">
        <div className="w-full lg:w-[50%] px-6 md:px-16">
          <div className="w-full h-64 bg-gray-300"></div>
        </div>
        <div className="w-full lg:w-[50%] flex flex-col justify-center p-5 lg:pr-16 space-y-3 lg:space-y-5">
          <div className="w-2/3 h-8 bg-gray-300"></div>
          <div className="w-full h-24 bg-gray-200"></div>
        </div>
      </div>
    );
  }

  if (!treatment) {
    return <div>No treatment data available</div>;
  }

  return (
    <>
      <head>
        <title>{treatment.meta_title || "Default Page Title"}</title>
        <meta
          name="description"
          content={
            treatment.meta_description || "Default description for the page."
          }
        />
        <meta
          name="keywords"
          content={treatment.meta_keyword || "default, keywords, here"}
        />
      </head>

      <div
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex flex-col lg:flex-row items-start w-full gap-3 lg:gap-10 py-5 md:py-8 lg:py-14 bg-white"
      >
        <div className="w-full lg:w-[50%] px-6 md:px-16 animate-fade-in-left">
          <img
            src={treatment.image}
            alt={decodeHtmlEntities(treatment.title)}
            className="w-full object-cover border-2 border-solid border-[#fff] rounded-md"
            style={{
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            }}
          />
        </div>
        <div className="w-full lg:w-[50%] pt-5 lg:pt-0 flex flex-col justify-center px-5 space-y-3 lg:space-y-5 lg:-ml-20 animate-fade-in-right">
          <h5
            style={{ letterSpacing: "3px" }}
            className="text-[#232c77] font-bold uppercase mainPrimary text-4xl lg:text-5xl"
          >
            {decodeHtmlEntities(treatment.title)}
          </h5>
          <div dangerouslySetInnerHTML={{ __html: treatment.description }} />
        </div>
      </div>
    </>
  );
};

export default Speciality;
