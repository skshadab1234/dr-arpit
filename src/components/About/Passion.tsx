"use client";
import React, { useEffect, useRef, useState } from "react";
import about from "@/assets/images/innews/2.png";

const Passion = () => {
  const bg = "./white bg.png";
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 } // 10% of the section should be visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="about bg-white pb-16"
      id="about"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-start lg:flex-row-reverse">
          <div
            className={`relative flex justify-center items-center w-full lg:w-1/2 duration-300  ${
              isInView ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <div className="relative ">
              <img
                src={about.src}
                alt="Profile"
                className="w-full bg-transparent rounded-lg lg:px-5 relative z-20"
              />
            </div>
          </div>

          <div
            className={`lg:pl-8 mt-2 p-6 duration-300 w-full lg:w-1/2 2xl:w-5/12  bg-[#232c77] border-solid border-2 border-white ${
              isInView ? "animate-fade-in-right" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 relative">
              <span className="text-[#fff] text-center font-bold uppercase mainPrimary">
                MY PASSION
              </span>
              <div className="absolute top-0 right-0 w-10 h-7 bg-[#171f56] opacity-20 rotate-45"></div>
            </h2>

            <p className="text-base text-white my-4 text-left">
              As an accomplished wildlife photographer, I've had the thrill of
              capturing over 1,146 bird species in their natural habitats across
              India! Guess what? I've even secured the 6th rank in the country
              on eBird.org for birding—how cool is that?
            </p>
            <p className="text-base text-white my-4 text-left">
              But wait, there's more! Each year, I team up with WWF to create an
              annual bird calendar featuring some of my favorite feathered
              friends. It's my way of sharing the beauty of our avian companions
              and contributing to conservation efforts. 🌍
            </p>
            <p className="text-base text-white my-4 text-left">
              Beyond birding, I also connect with nature and find inner peace
              through underwater and Blue Mind meditation sessions, designed to
              deepen my appreciation for the ocean's beauty and tranquilit
            </p>
            {/* <div className="flex gap-4">
              <a
                href="/about"
                className="flex items-center bg-[#232c77] text-white py-2 px-4 rounded-lg hover:bg-[#171f56] transition"
              >
                <i className="ri-send-plane-line mr-2"></i> Know more
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Passion;
