"use client";
import React, { useEffect, useRef, useState } from "react";
import { ElfsightWidget } from "react-elfsight-widget";
import "animate.css"; // Import animate.css for animations

const GoogleFeed = () => {
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
      className={`p-5 md:p-10 lg:p-16 bg-[#232c77] ${
        isInView ? "animate__animated animate__fadeInLeft" : ""
      }`}
    >
      <h5
        style={{ letterSpacing: "3px" }}
        className="text-[#fff] text-center pb-8 font-bold uppercase mainPrimary text-4xl lg:text-6xl"
      >
        What our Patients say
      </h5>
      <ElfsightWidget widgetId={"976de849-636c-4b38-bbf5-cd63e9b483d4"} />
    </div>
  );
};

export default GoogleFeed;
