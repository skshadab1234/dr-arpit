"use client";
import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import { CgMail } from "react-icons/cg";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { MdCall } from "react-icons/md";

const FloatingButton = () => {
  const path = usePathname();
  if (
    path === "/auth/login" ||
    path.startsWith("/my-course") ||
    path === "/auth/register"
  ) {
    return null;
  }
  return (
    <div className="group z-50 drop-shadow-xl fixed bottom-3 right-3 p-2  flex items-end justify-end w-24 h-24 ">
      <div className="text-white shadow-xl flex items-center cursor-pointer justify-center p-3 rounded-full bg-[#232c77] z-50 absolute  ">
        <MessageCircle color="white" size={25} />
      </div>
      <a
        target="_blank"
        href={"https://wa.me/+918141402111?text=Hello"}
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="absolute rounded-full transition-all cursor-pointer duration-[0.2s] ease-out bg-white shadow-xl scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 flex p-2.5 hover:p-3 bg-dark scale-100 hover:bg-[#171f58] text-[#171f58] hover:text-white"
      >
        <FaWhatsapp className="text-2xl" aria-hidden="true" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
      <a
        target="_blank"
        href={"tel:8141402111"}
        rel="noopener noreferrer"
        aria-label="Call Dr. Arpit Bansal"
        className="absolute rounded-full transition-all cursor-pointer duration-[0.2s] bg-white shadow-xl ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2.5 hover:p-3 bg-dark hover:bg-[#171f58]  text-[#171f58] hover:text-white"
      >
        <MdCall className="text-2xl" aria-hidden="true" />
        <span className="sr-only">Call Dr. Arpit Bansal</span>
      </a>
      <a
        target="_blank"
        href={"mailto:drarpitbansal@gmail.com"}
        rel="noopener noreferrer"
        aria-label="Email Dr. Arpit Bansal"
        className="absolute rounded-full transition-all cursor-pointer duration-[0.2s] bg-white shadow-xl ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14 flex  p-2.5 hover:p-3 bg-dark hover:bg-[#171f58] text-[#171f58] hover:text-white"
      >
        <CgMail className="text-2xl" aria-hidden="true" />
        <span className="sr-only">Email Dr. Arpit Bansal</span>
      </a>
    </div>
  );
};

export default FloatingButton;
