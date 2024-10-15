"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Menu from "./Menu";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";
import { Phone } from "lucide-react";

// Define types for SubMenuItem

interface SubMenuItem {
  id: number;
  name: string;
  slug: string;
  url: string;
}

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      <div className="flex items-center gap-2 font-bold">
        <Phone size={20} color="#00008b" />
        <a href="tel:022-23088552">022-23088552</a>
      </div>
      <div className="h-6 w-0.5 bg-black"></div>
      <div className="flex items-center font-bold gap-2">
        <Phone size={20} color="#00008b" />
        <a href="tel:+917400482134">74004 82134</a>
      </div>
    </div>
  );
};

const NewHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [subMenuData, setSubMenuData] = useState<SubMenuItem[] | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);

  // Handle closing the search div when clicking outside
  const handleCloseDiv = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setShowSearch(false);
    }
  };

  // Add event listener for clicks outside the search box
  useEffect(() => {
    document.addEventListener("mousedown", handleCloseDiv);
    return () => {
      document.removeEventListener("mousedown", handleCloseDiv);
    };
  }, []);

  // Handle header style changes on scroll
  const [headerClass, setHeaderClass] = useState(
    "sticky top-0 z-50 bg-gray-100 w-full"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeaderClass("fixed top-0 z-50 bg-gray-100 shadow-md w-full px-2");
      } else {
        setHeaderClass("sticky top-0 z-50 bg-gray-100 w-full");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Control body overflow when the mobile menu is toggled
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on component unmount or mobile menu close
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenu]);

  return (
    <header
      className={`${headerClass} w-full px-5 py-10 xl:px-8 h-[8svh] block lg:flex items-center justify-between transition-transform duration-300`}
    >
      <Link href={"/"} className="hidden lg:block p-5">
        <span className="mainPrimary uppercase text-3xl md:text-2xl xl:text-3xl font-bold text-transparent bg-clip-text bg-[#232c77] ">
          Dr. Arpit Bansal
        </span>
      </Link>

      <Menu
        showCatMenu={showCatMenu}
        setShowCatMenu={setShowCatMenu}
        showContactMenu={showContactMenu}
        setShowContactMenu={setShowContactMenu}
        subMenuData={subMenuData || []} // Ensure it's always an array
        contactData={[]} // Provide default empty array if not used
      />

      {mobileMenu && (
        <MenuMobile
          subMenuData={subMenuData || []}
          showCatMenu={showCatMenu}
          showContactMenu={showContactMenu}
          setShowCatMenu={setShowCatMenu}
          setShowContactMenu={setShowContactMenu}
          setMobileMenu={setMobileMenu}
        />
      )}

      <div className="hidden lg:block">
        <Link href="/book-appointment">
          <button className="px-6 py-2 bg-[#232c77] text-white font-semibold rounded-full shadow-md transition duration-300">
            Contact Us
          </button>
        </Link>
      </div>

      <div className="flex items-center gap-2 justify-between w-full md:w-auto lg:hidden text-black -mt-5 md:-mt-6">
        <div className="hidden lg:flex gap-3 rounded-full justify-center md:justify-between items-center cursor-pointer relative">
          <SocialIcons />
        </div>
        <Link href={"/"} className="block">
          <span className="mainPrimary uppercase text-3xl md:text-3xl xl:text-4xl font-bold text-transparent bg-clip-text bg-[#232c77] ">
            Dr. Arpit Bansal
          </span>
        </Link>

        <div className="flex gap-2 items-center">
          <div className="w-8 lg:w-12 h-8 md:h-12 rounded-full flex lg:hidden justify-center items-center cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[20px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[30px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
