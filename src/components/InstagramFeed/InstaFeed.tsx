"use client";
import React, { useEffect, useRef, useState } from "react";
import { ElfsightWidget } from "react-elfsight-widget";
import "animate.css"; // Import animate.css for animations
import CustomInsta from "@/components/InstagramFeed/CustomInsta";
import InstagramHeader from "./InstagramHeader";

const InstaFeed: React.FC = () => {
  const bg = "./white bg.png";
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Optionally stop observing after the animation has triggered
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold to control when the animation triggers
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
    <div
      ref={sectionRef}
      className={`p-5 md:p-10 lg:p-16 bg-white ${
        isInView ? "animate__animated animate__fadeInRight" : ""
      }`}
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <InstagramHeader />
      <CustomInsta />
      {/* <ElfsightWidget widgetId="659e10e2-d627-4947-b437-5220ac7d18dd" /> */}
    </div>
  );
};

export default InstaFeed;
