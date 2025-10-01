"use client";
import React from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer"; // Import the useInView hook
import Image from "next/image";

// Define the types for the treatment data
interface Treatment {
  id: number;
  image: any;
  title: string;
  slug: string;
}

const SpecialityComp = ({ allTreatments }: { allTreatments: Treatment[] }) => {

  return (
    <>
      <div
        // style={{
        //   backgroundImage: `url('${bg}')`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
        id="service"
        className={`block py-10 expertise-logo bg-[#232c77] `}
      >
        <div className="block px-5 lg:px-20">
          <h5
            style={{ letterSpacing: "3px" }}
            className="text-[#fff] text-center pb-5 font-bold uppercase mainPrimary text-4xl lg:text-6xl"
          >
            His Speciality
          </h5>
        </div>

        <div className="flex flex-wrap justify-center w-full px-2 md:px-11 lg:px-14 xl:px-5">
          {allTreatments.length > 0 ? (
            allTreatments.map((item, index) => (
              <div
                key={item.id} // Add key to the parent element
                className={`xl:w-1/4 lg:w-1/3 sm:w-1/2 w-full p-3 `}
              >
                <Link href={`/speciality/${item.slug}`}>
                  <div
                    style={{
                      boxShadow:
                        //     "rgba(255, 255, 255, 0.25) 0px 54px 55px,rgba(255, 255, 255, 0.12) 0px -12px 30px,rgba(255, 255, 255, 0.12) 0px 4px 6px,rgba(255, 255, 255, 0.17) 0px 12px 13px,rgba(255, 255, 255, 0.09) 0px -3px 5px",
                        "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    }}
                    className=" overflow-hidden group shadow-2xl relative rounded-lg border-2 border-[#fff]  border-solid"
                  >
                    <div className="w-full h-full relative">
                      <Image
                        width={200} // Set an initial width (can be any value) to be responsive
                        height={200} // Set an initial height
                        className="w-full h-full hover:scale-150 group-hover:bg-[#232c77] duration-100 object-cover m-auto"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>

                    {/* White Overlay */}
                    <div className="absolute inset-0  opacity-30 bg-black  group-hover:bg-[#232c77] group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <h3
                    className="hover:text-[#ded7d7] group-hover:font-bold  md:text-2xl text-[#fff] z-50 
                  text-center uppercase text-base m-0 w-full flex items-end px-3
                  
                      group-hover:items- justify-center pb-4 pt-4  
                      group-hover:text-[#232c77] font-bold"
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
                </Link>
              </div>
            ))
          ) : (
            <p></p> // Show a message if no treatments are available
          )}
        </div>
      </div>
    </>
  );
};

export default SpecialityComp;
