"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer"; // Import the useInView hook

// Define the types for the treatment data
interface Treatment {
  id: number;
  image: string;
  title: string;
  description: string;
  slug: string;
}

const Sample: React.FC = () => {
  const [treatments, setTreatments] = useState<Treatment[]>([]); // Initialize as an array of Treatment objects
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Fire when 10% of the section is visible
  });

  // Fetch the data from the API
  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const response = await fetch(
          "https://drarpitbck.demo-web.live/wp-json/custom/v1/getAllTreatments?per_page=1000"
        );
        const data = await response.json();

        // Make sure to extract the treatments array from the data
        if (data?.treatments && Array.isArray(data.treatments)) {
          setTreatments(data.treatments);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching treatments:", error);
      }
    };

    fetchTreatments();
  }, []);
  const bg = "./white bg.png";
  return (
    <>
      <div
        id="service"
        className={`block py-10 expertise-logo bg-[#232c77] ${
          sectionInView ? "animate__animated animate__fadeInUp" : ""
        }`} // Add animation class when section is in view
        ref={sectionRef} // Attach ref to the section
      >
        <div className="block px-5 lg:px-20">
          <h5
            style={{ letterSpacing: "3px" }}
            className="text-[#ffffff] text-center pb-5 font-bold uppercase mainPrimary text-4xl lg:text-6xl"
          >
            His Speciality
          </h5>
        </div>

        <div className="flex flex-wrap justify-center w-full ">
          {treatments.length > 0 ? (
            treatments.map((item, index) => (
              <div
                key={item.id} // Add key to the parent element
                className={`xl:w-1/4 lg:w-1/3 sm:w-1/2 w-full ${
                  sectionInView
                    ? index % 2 === 0
                      ? "animate__animated animate__fadeInLeft"
                      : "animate__animated animate__fadeInRight"
                    : ""
                }`} // Alternate animations for left and right
              >
                <Link href={`/speciality/${item.slug}`}>
                  <div
                    // style={{
                    //   boxShadow:
                    //     "rgba(255, 255, 255, 0.25) 0px 54px 55px,rgba(255, 255, 255, 0.12) 0px -12px 30px,rgba(255, 255, 255, 0.12) 0px 4px 6px,rgba(255, 255, 255, 0.17) 0px 12px 13px,rgba(255, 255, 255, 0.09) 0px -3px 5px",
                    // }}
                    className="gdfg overflow-hidden group shadow-2xl relative "
                  >
                    <img
                      className="hover:scale-150 scale-125  group-hover:bg-white relative duration-100 object-cover  m-auto"
                      src={item.image}
                      alt={item.title}
                    />
                    {/* White Overlay */}
                    <div className="absolute inset-0  opacity-30 bg-black  group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="group-hover:absolute bottom-0 duration-1000">
                      <h3
                        className="group-hover:font-bold md:text-3xl text-white z-50 -mt-10  absolute bottom-0 group-hover:relative
                      text-left uppercase text-base m-0 w-full  items-end px-3
                   
                      group-hover:items- justify-start pb-0 pt-4  shadow-lg 
                      font-bold"
                        // style={{
                        //   clipPath:
                        //     "polygon(114% -6%, 0 100%, 100% 100%, 100% 100%)",
                        // }}
                      >
                        {/* {item.title.split(" ").map((word, index) => (
                        <React.Fragment key={index}>
                          {word}
                          {index === 0 && <br />}
                        </React.Fragment>
                      ))} */}
                        {item.title}
                      </h3>
                      <div className="text-white px-4 py-2 font-bold hidden group-hover:block">
                        View More
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No treatments available.</p> // Show a message if no treatments are available
          )}
        </div>
      </div>
    </>
  );
};

export default Sample;
