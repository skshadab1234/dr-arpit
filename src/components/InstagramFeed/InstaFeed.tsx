"use client";
import React, { useEffect, useRef, useState } from "react";
import { ElfsightWidget } from "react-elfsight-widget";
import "animate.css"; // Import animate.css for animations

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

  useEffect(() => {
    const hideAnchorTags = () => {
      // Query all anchor tags in the DOM
      const anchorTags = document.querySelectorAll<HTMLAnchorElement>("a");

      // Iterate through each anchor tag
      anchorTags.forEach((anchor) => {
        // Check if textContent is not null and contains specific keywords
        if (
          anchor.href.includes("elfsight.com") ||
          (anchor.textContent &&
            anchor.textContent.includes("Widget is deactivated"))
        ) {
          // Hide the anchor tag by setting display: none;
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
      <ElfsightWidget widgetId="7a8c4182-6046-49df-9bad-2aa6bc47fbe3" />
    </div>
  );
};

export default InstaFeed;
