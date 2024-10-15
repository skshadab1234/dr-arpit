"use client";
import React, { useEffect, useState } from 'react';

interface Treatment {
  ID: number;
  title: string;
  image: string;
  slug: string;
}

const TreatmentLatest = () => {
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://drarpitbck.demo-web.live/wp-json/custom/v1/getAllTreatments?per_page=1000')
      .then(response => response.json())
      .then(data => {
        setTreatments(data.treatments);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching treatments:', error);
        setLoading(false);
      });
  }, []);

  const decodeHtmlEntities = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  };

  return (
    <aside className="widget bg-white p-4 rounded-md shadow-md">
      <h3 className="widget-title text-lg font-semibold mb-4">Our Treatments</h3>
      <div className="tab-content">
        {loading ? (
          <div className="space-y-5 animate-pulse">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="latest-content space-y-5">
            {treatments.map((treatment) => (
              <div key={treatment.ID} className="flex gap-4 items-start">
                <a href={`/treatments/${treatment.slug}`}>
                  <img
                    className="w-16 h-16 rounded-lg object-cover"
                    src={treatment.image}
                    alt={treatment.title}
                  />
                </a>
                <div className="flex-1">
                  <h5 className="text-md font-bold">
                    <a href={`/treatments/${treatment.slug}`} className="hover:text-blue-600">
                      {decodeHtmlEntities(treatment.title)}
                    </a>
                  </h5>
                  <span className="text-sm text-gray-500 mt-1 block">
                    <i className="pi pi-calendar mr-1"></i> Date Placeholder
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default TreatmentLatest;
