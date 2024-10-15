"use client";
import React, { useEffect, useRef, useState } from "react";
import { ElfsightWidget } from "react-elfsight-widget";
import "animate.css"; // Import animate.css for animations

const GoogleAll = () => {
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

  useEffect(() => {
    const hideAnchorTags = () => {
      const anchorTags = document.querySelectorAll("a");

      // Iterate through each anchor tag
      anchorTags.forEach((anchor) => {
        // Check if the anchor tag's text content exists and matches the target text
        if (
          anchor.textContent &&
          anchor.textContent.trim() === "Free Google Reviews widget"
        ) {
          // Apply the display: none; style
          anchor.style.display = "none";
        }
      });
    };

    // Set a timeout to delay execution by 5 seconds (5000 milliseconds)
    const timeoutId = setTimeout(hideAnchorTags, 5000);

    // Clean up the timeout if the component unmounts before the timeout executes
    return () => clearTimeout(timeoutId);
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
      <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-center pb-5 lg:pb-7 text-[#232c77] uppercase mainPrimary">
        What our Patients say
      </h5>
      <ElfsightWidget widgetId={"47a8bf7a-c509-4776-b7b1-d63cfc84888c"} />
    </div>
  );
};

export default GoogleAll;
