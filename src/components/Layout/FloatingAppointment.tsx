"use client";

import { Modal } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import ContactForm from "../Contact/ContactForm";
import { IoIosArrowForward, IoMdCloseCircleOutline } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";

// Social links array
const socialLinks = [
  { href: "https://www.instagram.com/drarpitbansal.surgeon/", icon: FaInstagram, label: "Instagram" },
  { href: "https://www.youtube.com/@DRARPITBANSAL", icon: FaYoutube, label: "YouTube" },
  { href: "https://www.linkedin.com/in/dr-arpit-bansal-0b39891b/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/drarpit/", icon: FaFacebook, label: "Facebook" },
];

// Social link component
const SocialLink = ({ href, Icon, label }: { href: string; Icon: any; label: string }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center text-white hover:text-gray-300 transition-colors"
    >
      <Icon className="text-2xl" />
    </a>
  </li>
);

const FloatingAppointment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible ? (
        <>
          {/* Appointment Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex gap-2 items-center fixed -right-[100px] md:-right-[70px] z-50 -rotate-90 px-6 py-2 rounded-t-xl bottom-[63%] bg-[#232c77] text-white font-medium hover:bg-[#1c2260] transition-colors"
            aria-label="Book Appointment"
          >
            Book Appointment
            <IoMdCloseCircleOutline
              onClick={(e) => {
                e.stopPropagation();
                setVisible(false);
              }}
              className="md:hidden text-lg ml-2 cursor-pointer"
              aria-label="Hide appointment button"
            />
          </button>

          {/* Social Links */}
          <div className="fixed -right-[60px] z-50 -rotate-90 px-4 py-2 rounded-t-xl bottom-[30%] bg-[#232c77]">
            <ul className="flex items-center gap-3">
              {socialLinks.map(({ href, icon: Icon, label }, idx) => (
                <SocialLink key={idx} href={href} Icon={Icon} label={label} />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <button
          onClick={() => setVisible(true)}
          className="fixed -right-[10px] z-50 -rotate-90 px-4 py-2 rounded-t-xl bottom-[70%] bg-[#232c77] text-white"
          aria-label="Show appointment button"
        >
          <MdMenuOpen className="text-xl rotate-90" />
        </button>
      )}

      {/* Modal */}
      <Modal
        title={<div className="text-[#232c77] text-xl font-bold uppercase p-4 ">Book Appointment</div>}
        centered
        footer={null}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
      >
        <ContactForm />
      </Modal>
    </>
  );
};

export default FloatingAppointment;
