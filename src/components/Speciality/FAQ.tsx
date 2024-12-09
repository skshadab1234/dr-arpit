import { Annoyed } from "lucide-react";
import { useState } from "react";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

const FAQ = ({ faqs }: any) => {
  //   const faqs = [
  //     {
  //       question: "What is your return policy?",
  //       answer:
  //         "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange.",
  //     },
  //     {
  //       question: "How long does shipping take?",
  //       answer:
  //         "Shipping times vary depending on your location. Domestic orders usually take 3-5 business days, while international orders can take up to 2 weeks.",
  //     },
  //     {
  //       question: "Do you offer international shipping?",
  //       answer:
  //         "Yes, we offer international shipping to many countries. Shipping costs will vary depending on your location.",
  //     },
  //     {
  //       question: "How can I track my order?",
  //       answer:
  //         "Once your order has shipped, we will send you an email with a tracking number that you can use to track your package.",
  //     },
  //   ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-6 px-7 md:px-12 lg:px-24 bg-white ">
      <h2
        style={{ letterSpacing: "3px" }}
        className="text-[#232c77] font-bold uppercase mainPrimary text-4xl lg:text-5xl text-center pb-7"
      >
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq: any, index: any) => (
          <div
            key={index}
            className={`${
              index !== faqs.length - 1 ? "border-b border-gray-200" : ""
            } pb-4 transition duration-300 ease-in-out`}
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

export default FAQ;
