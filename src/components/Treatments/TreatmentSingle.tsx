"use client";
import React, { useEffect, useState } from "react";
import TreatmentLatest from "./TreatmentLatest";

const TreatmentSingle = ({ params }: any) => {
  const [treatment, setTreatment] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://drarpitbck.demo-web.live/wp-json/custom/v1/getTreatmentBySlug/${params}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTreatment(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching treatment:", error);
        setLoading(false);
      });
  }, [params]);

  const decodeHtmlEntities = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  };

  return (
    <div className="container py-16 mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="content-area col-span-2">
        {loading ? (
          <div className="animate-pulse">
            <div className="bg-gray-300 h-48 w-full mb-4 rounded-md"></div>
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
          </div>
        ) : (
          <div className="type-post mb-6 bg-white shadow-md p-4 rounded-md">
            <div className="entry-cover relative">
              <img
                className="w-full rounded-md"
                alt={treatment.title}
                src={treatment.image}
              />
              <div className="post-date-bg absolute top-2 left-2 bg-blue-600 text-white rounded-md p-2">
                <div className="post-date text-center">
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            <div className="latest-news-content mt-4">
              <div className="entry-header">
                <h3 className="entry-title text-xl font-bold">
                  {decodeHtmlEntities(treatment.title)}
                </h3>
              </div>
              <div className="entry-content mt-2">
                <div
                  className="text-gray-600 mb-2"
                  dangerouslySetInnerHTML={{ __html: treatment.description }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="widget-area">
        <TreatmentLatest />
      </div>
    </div>
  );
};

export default TreatmentSingle;
