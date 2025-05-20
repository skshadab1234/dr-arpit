"use client";
import React, { useState } from "react";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

const HomeFAQ = () => {
  const faqs = [
    {
      question: "How often should I see a doctor for a check-up?",
      answer:
        "Your age, general health, and any particular health issues will decide how many times you need to get checked up. The easiest way to create a customised a schedule is to speak with your physician. While young children and older people may require more regular appointments, adults are generally advised to have checkups once a year.",
    },
    {
      question: "How do I make an appointment?",
      answer:
        "To book an appointment simply call us on the provided number on the website. \nThe appointment timings are 11 am to 5 pm.",
    },
    {
      question: "How do I consult an Oncologist online?",
      answer: `1. Telemedicine Platforms: Use platforms like Doctor Consult or Practo to book virtual appointments.\n
      2. Hospital Websites: Many hospitals offer online consultations through their websites.\n
      3. Direct Contact: Reach out to a specific oncologist's clinic and inquire about teleconsultations.\n
      Remember, while online consultations are convenient, they may not be suitable for all medical conditions. Always consult with a healthcare provider to determine the best course of action.`,
    },
    {
      question: "Do you offer same-day or next-day appointments?",
      answer:
        "Yes, we offer same-day or next-day appointments for urgent cases. Please call our hospital to schedule an appointment.",
    },
    {
      question: "What types of treatments or procedures do you offer?",
      answer: `1. General Check-ups: Regular health assessments.\n
      2. Specialized Consultations: Expert advice for specific health concerns.\n
      3. Diagnostic Tests: Accurate diagnosis through lab tests and imaging.\n
      4. Minor Procedures: In-office procedures for minor ailments.\n
      5. Referrals: Recommendations for specialized care when needed.`,
    },
    {
      question: "What are your OPD timings?",
      answer:
        "The OPD runs all day. \nBut, patients who have taken appointments will be seen according to their timings, while the rest will have to wait. \nIt is preferable to take an appointment first to avoid any queues or delays.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full pt-16 px-7 md:px-12 lg:px-24 bg-white ">
      <h2
        style={{ letterSpacing: "3px" }}
        className="text-[#232c77] font-bold uppercase mainPrimary text-4xl lg:text-5xl text-center pb-7"
      >
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 pb-4">
        {faqs.map((faq: any, index: any) => (
          <div
            key={index}
            className={`${
              index !== faqs.length - 1 ? "border-b border-gray-200" : ""
            } pb-1 transition duration-300 ease-in-out`}
          >
            <button
              className="flex justify-between items-center w-full text-left text-gray-800 font-semibold text-lg focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>
                <b className="text-[#232c77]"> Q.</b> {faq.question}
              </span>
              <svg
                className={`w-6 h-6 transition-transform duration-300 transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`text-gray-600 mt-3 overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className=" flex gap-2">
                <TbArrowBigRightLinesFilled className="text-[#232c77] mt-1 text-2xl w-10" />
                <span className="text-gray-600 leading-relaxed">
                  {" "}
                  {faq.answer}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFAQ;
