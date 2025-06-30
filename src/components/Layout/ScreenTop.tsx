"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa6";
import { ArrowUp } from "lucide-react";

const ScreenTop = () => {
  const path = usePathname();

  const [showScreenTop, setShowScreenTop] = useState(false);

  useEffect(() => {
    const screenTopShowHandler = () => {
      if (window.scrollY > 700) {
        setShowScreenTop(true);
      } else {
        setShowScreenTop(false);
      }
    };

    window.addEventListener("scroll", screenTopShowHandler);
    return () => window.removeEventListener("scroll", screenTopShowHandler);
  }, []);

  const scrollTopHandler = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollTopHandler();
  }, [path]);
  return (
    <>
      {showScreenTop && (
        <div
          onClick={scrollTopHandler}
          className=" flex justify-center transition-all duration-300 bg-gradient-to-r bg-[#232c77] hover:bg-gray-700 items-center fixed bg-primary-sky-blue w-[44px] h-[44px] cursor-pointer rounded-full left-7 bottom-7 z-30 hover:bg-gradient-to-l :scale-110"
        >
          <ArrowUp
            size={22}
            color="#fff"
            className="hover:scale-110 transition-all duration-300 "
          />
        </div>
      )}
    </>
  );
};

export default ScreenTop;
