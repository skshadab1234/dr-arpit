"use client";
import portfolioData from "@/data/portfolioData";
import { Modal } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoPlayCircleSharp } from "react-icons/io5";

interface testimonialData {
  id: number;
  meta: { image: string; url: string };
}

const TestimonialComp = () => {
  const bg = "./white bg.png";
  const [testimonialData, setTestimonialData] = useState<testimonialData[]>([]);
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.BACKEND2}/testimonial?_fields=id,title,meta,slug&per_page=100`
        );
        if (response.ok) {
          const testimonialData: testimonialData[] = await response.json();
          setTestimonialData(testimonialData);
        }
      } catch (error) {
        console.error("Internal Server Error", error);
      }
    };
    fetchData();
  }, []);

  const handleLoadMore = (id: number) => {
    setExpandedTestimonial(expandedTestimonial === id ? null : id);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="block py-12"
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="block pb-2 lg:pb-7">
          <h5
            style={{ letterSpacing: "3px" }}
            className="text-[#232c77] text-center pb-8 font-bold uppercase mainPrimary text-4xl lg:text-6xl"
          >
            What our Patients say
          </h5>
        </div>
        <div className="lg:flex flex-wrap px-4 lg:px-10">
          {testimonialData.map((items) => (
            <div className="md:w-1/2 lg:w-1/3 xl:w-1/4 w-full " key={items.id}>
              <div className="px-5">
                <div className="relative">
                  <img
                    className="mb-5"
                    width={"100%"}
                    height={"300px"}
                    src={items.meta.image}
                    alt=""
                  />
                  <h4 className="text-white cursor-pointer text-xl font-semibold text-center py-2 absolute top-0 w-full h-full flex items-center justify-center bg-[#00000066]">
                    <IoPlayCircleSharp
                      onClick={openModal}
                      className="text-7xl"
                    />
                  </h4>
                  <Modal
                    open={isModalOpen}
                    onCancel={closeModal} // Close modal and clear video
                    title={<p className="py-3 px-2">What our Patients say</p>} // Use blog.title directly, not setVideo
                    className="modal"
                    centered
                    width={700}
                    footer={null} // Remove footer
                  >
                    {items.meta.url ? (
                      <iframe
                        width="100%"
                        height="400"
                        src={items.meta.url}
                        title="What our Patients say"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <p>No video available</p>
                    )}
                  </Modal>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialComp;
