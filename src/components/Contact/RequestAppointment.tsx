"use client";
import { Modal } from "antd";
import React, { useState } from "react";
import ContactForm from "./ContactForm";
import Link from "next/link";

const RequestAppointment: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const SkeletonLoader = () => {
    return (
      <div className="space-y-4 p-7">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-4 bg-gray-300 rounded-md animate-pulse"
          ></div>
        ))}
      </div>
    );
  };
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="appointment bg-[#232c77] py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left section with heading and description */}
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h3 className="text-3xl font-semibold text-white text-center md:text-left">
              Request an Appointment
            </h3>
            <p className="text-white mt-4 text-center md:text-left">
              Don't Wait, Consult with Dr. Arpit Bansal Today!
            </p>
          </div>

          {/* Right section with button */}
          <div className="md:w-1/3 m-auto text-center md:text-right">
            <Link target="_blank" href="https://wa.me/+918141402111?text=Hello">
              <button
                // onClick={showLoading}
                type="button"
                className="px-6 py-3 text-black bg-white font-semibold rounded-lg shadow-md hover:bg-[#f5f5f5] transition duration-300 text-lg"
              >
                Request Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Modal
        title={
          <span className="relative top-3 left-5 mx-3 my-3 text-[#232c77] text-xl font-bold uppercase">
            Book Appointment
          </span>
        }
        centered
        footer={false}
        open={open}
        onCancel={() => setOpen(false)}
      >
        {loading ? <SkeletonLoader /> : <ContactForm />}
      </Modal>
    </div>
  );
};

export default RequestAppointment;
