"use client";
import React from "react";
import Tabs from "@/components/Gallary/Tabs";

const Bringing = () => {
  const bg = "./white bg.png";
  return (
    <div
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`container mx-auto px-4 py-16`}>
        <h5
          style={{ letterSpacing: "3px" }}
          className="text-[#232c77] text-center pb-8 font-bold uppercase mainPrimary text-4xl lg:text-6xl"
        >
          {/* Events */}
          Bringing People Together
        </h5>
        <Tabs />
      </div>
    </div>
  );
};

export default Bringing;
