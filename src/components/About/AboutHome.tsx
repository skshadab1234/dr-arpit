"use client";
import React, { useEffect, useRef, useState } from "react";
import gallery1 from "@/assets/images/gallery/270.png";

const AboutHome = () => {
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
      className="about bg-white pt-20 pb-10"
      id="about"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-start lg:flex-row-reverse lg:mb-5">
          <div
            className={`relative flex justify-center items-center w-full lg:w-1/2 xl:w-5/12 mb-10 duration-300 ${
              isInView ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <div className="relative ">
              <img
                src={gallery1.src}
                alt="cancer specialist"
                // className="w-full h-full -mt-12  relative z-20"
                className="w-96 h-96 md:w-[500px] md:h-[500px] object-cover object-top -mt-12 lg:-mt-0 xl:-mt-12 relative z-20 "
              />
              {/* <div className="absolute w-80 md:w-96 h-[380px] md:h-[450px] bg-gray-300 -top-8 -right-8 rounded-lg border-b-4 border-[#171f56]"></div>
              <div className="absolute w-16 h-16 bg-[#171f56] -top-4 -right-4 rounded-lg"></div> */}
            </div>
          </div>

          <div
            className={`lg:pl-8 px-3 duration-300 lg:-mt-2 w-full lg:w-1/2 xl:w-7/12 ${
              isInView ? "animate-fade-in-right" : "opacity-0"
            }`}
          >
            <h1 className="text-[#232c77] font-semibold mb-1 ml-2 uppercase text-lg">
              Cancer Specialist
            </h1>
            <h2 className="text-3xl font-bold text-left mb-2 relative">
              <span
                style={{ letterSpacing: "3px" }}
                className="text-[#232c77] font-bold uppercase mainPrimary text-4xl lg:text-6xl"
              >
                About Me
              </span>
              <div className="absolute top-0 right-0 w-10 h-7 bg-[#171f56] opacity-20 rotate-45"></div>
            </h2>
            {/* <span className="text-xl mt-0 lg:mt-2 mb-2">
              MBBS, MS - General Surgery
            </span> */}
            <p className="text-lg text-[#000] my-4 text-justify font-normal">
              I am Arpit Bansal, a doctor, specialized in advanced laparoscopic,
              cancer specialist, and laser surgery. With a Fellowship from the
              UK, i am future-ready for robotic surgeries. I have trained under
              some of the finest surgeons in India. Combined with my role as the
              Director of a 200-bed Multispecialty NABH Hospital in Prayagraj, i
              am uniquely positioned to deliver health that is based on cutting
              edge technology, and treating the problem at it's root, which is
              your lifestyle.
            </p>
            <p className="text-lg text-[#000] my-4 text-justify font-normal">
              As an experienced medical professional, I am passionate about
              leveraging social media, particularly through Instagram and
              YouTube, to spread vital health knowledge.
            </p>
            <p className="text-lg text-[#000] my-4 text-justify font-normal">
              I am on a quest to promote prevention, to treat disease at it's
              source, and to age healthily. No illness, happens in one day.
              Everyday is a chance to be your best self. The last 10 years of
              your life, is what i encourage you to work towards, today. Towards
              this goal, i am committed to lead by example.
            </p>
            <div className="flex gap-4 pb-7 xl:pb-0">
              <a
                href="/about"
                className="flex items-center text-lg bg-[#232c77] text-white py-2 px-4 rounded-lg hover:bg-[#171f56] transition"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
