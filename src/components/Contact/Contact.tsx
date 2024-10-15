"use client";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <section
        className={`relative z-10 overflow-hidden  dark:bg-dark px-5 py-16`}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4 lg:justify-center ">
            <div className="w-full md:px-4 mb-8 lg:mb-3 lg:w-1/2">
              <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-center pb-5 lg:pb-7 text-[#232c77] uppercase mainPrimary">
                Contact Us
              </h5>
              <div className="md:w-full flex justify-center items-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14412.230957483418!2d81.8466334!3d25.4363331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3985353001028a4d%3A0x42a30fe2226fa5e5!2sDr%20Arpit%20Bansal%20%7C%20Laproscopy%20Doctor%2Fhernia%20Doctor%2Flaser%20Piles%20Doctor%2FVaricose%20Vein%20Doctor%20In%20Prayagraj!5e0!3m2!1sen!2sin!4v1725442881878!5m2!1sen!2sin"
                  width="600"
                  height="500"
                  className="rounded-lg border-4 border-solid;"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="w-full md:px-4 mb-3 lg:w-1/2">
              <div className="relative px-3  dark:bg-dark-2 sm:px-12 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg ">
                <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-center pb-5 lg:pb-7 text-[#232c77] uppercase mainPrimary">
                  Book Appointment
                </h5>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
