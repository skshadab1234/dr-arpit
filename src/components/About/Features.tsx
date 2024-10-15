import React from "react";
import Paper from "@/components/Carousal/Paper";

const Features = () => {
  return (
    <section
      className="h-[60
     bg-[#232c77] flex items-center"
    >
      <div className="relative -left-14 sm:-left-24 lg:-left-36 xl:-left-44 -top-5 md:-top-7 lg:-top-9 xl:-top-11">
        <h2 className="transform absolute -rotate-90 text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-white">
          Features
        </h2>
      </div>
      <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
        className="w-[90%] md:w-[95%] lg:w-[94%] xl:w-[92%] m-0 ml-auto py-3 lg:py-20 xl:py-24 relative"
      >
        <Paper />
      </div>
    </section>
  );
};

export default Features;
