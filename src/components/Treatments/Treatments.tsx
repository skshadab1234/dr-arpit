"use client";
import React, { useEffect, useState } from "react";

// Array of treatments post data
// const treatmentsPosts = [
//   {
//     title: "Using the latest medical technology",
//     date: "18 June",
//     author: "adminol",
//     timeAgo: "10 minutes ago",
//     comments: "4 Comments",
//     imageUrl:
//       "https://media.istockphoto.com/id/1188058985/photo/diverse-group-of-medical-professionals-smiling-together.jpg?s=612x612&w=0&k=20&c=YEAkSbscVc58pOBqpHfnJrFTuJoVitaehUdmzp_6qp4=",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
//   },
//   {
//     title: "Advancements in AI technology",
//     date: "22 July",
//     author: "techwriter",
//     timeAgo: "2 days ago",
//     comments: "2 Comments",
//     imageUrl:
//       "https://images.pexels.com/photos/3184307/pexels-photo-3184307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     description:
//       "AI is transforming industries. Explore how the latest advancements are impacting our daily lives.",
//   },
//   {
//     title: "The future of renewable energy",
//     date: "1 August",
//     author: "energyguru",
//     timeAgo: "1 week ago",
//     comments: "10 Comments",
//     imageUrl:
//       "https://t4.ftcdn.net/jpg/06/44/46/61/360_F_644466113_EP9z2kXACTCtII0XXv1p0ATBbTj79pUC.jpg",
//     description:
//       "Renewable energy sources are the key to a sustainable future. Here's what you need to know.",
//   },
//   {
//     title: "Exploring the depths of the ocean",
//     date: "5 September",
//     author: "oceandiver",
//     timeAgo: "3 weeks ago",
//     comments: "7 Comments",
//     imageUrl:
//       "https://images.unsplash.com/photo-1534531688091-c31ed2b3c6d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     description:
//       "The ocean is a mysterious place full of wonders. Dive deep into the unknown with us.",
//   },
// ];

// treatments post component
const TreatmentsPost = ({ post, loading }: any) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      {loading ? (
        <div className="animate-pulse">
          <div className="relative overflow-hidden rounded-lg w-full h-64 bg-gray-300"></div>
          <div className="p-6 relative -top-16 bg-white shadow-lg">
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-lg animate-fade-in-right">
          <a href={`/treatments/${post.slug}`} title={post.title}>
            <img
              src={post.image}
              alt="treatments"
              className="w-full h-64 object-cover shadow-lg"
            />
          </a>
          <div className="p-6 relative -top-16 bg-white w-80 m-auto shadow-lg ">
            <h3 className="text-xl font-bold mb-4">
              <a
                href={`/treatments/${post.slug}`}
                title={post.title}
                className="text-gray-800 hover:text-gray-600 line-clamp-2 h-14"
              >
                {post.title}
              </a>
            </h3>

            <p
              className="text-gray-700 mb-4 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.description }}
            ></p>
            <a
              href={`/treatments/${post.slug}`}
              title="Read More"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Read More
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

// Main component rendering all treatments posts
const Treatments = ({ title }: { title: string }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [treatmentsPosts, setTreatmentsPosts] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const countSkeleton = title === "home" ?  3 :   6

  useEffect(() => {
    const fetchTreatments = async () => {
      setLoading(true); // Start loading
      const response = await fetch(
        `https://drarpitbck.demo-web.live/wp-json/custom/v1/getAllTreatments?per_page=${itemsPerPage}&page=${currentPage}`
      );
      const data = await response.json();
      setTreatmentsPosts(data.treatments);
      setTotalPages(data.pagination.total_pages);
      setLoading(false); // End loading
    };

    fetchTreatments();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const data = title === "home" ? treatmentsPosts.slice(3) : treatmentsPosts;

  return (
    <div
      className={`container mx-auto px-4 ${
        title === "home" ? "py-0 pt-14" : "py-16"
      }`}
    >
      <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-center pb-5 lg:pb-7 text-[#232c77]">
        Our Treatments
      </h5>

      <div className="flex flex-wrap -mx-4">
        {loading
          ? [...Array(countSkeleton)].map((_, index) => (
              <TreatmentsPost key={index} loading={true} />
            ))
          : data.map((post, index) => (
              <TreatmentsPost key={index} post={post} loading={false} />
            ))}
      </div>

      {title === "home" && !loading && (
        <div className="flex justify-center ">
          <a
            href="/treatments"
            className="flex items-center bg-[#171f56] text-white py-2 px-4 rounded-lg hover:bg-[#171f56] transition"
          >
            View More
          </a>
        </div>
      )}

      {title !== "home" && totalPages > 1 && (
        <div className="flex justify-between items-center mt-8 space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center py-2 px-4 rounded-lg transition ${
              currentPage === 1
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-[#171f56] text-white hover:bg-[#171f56]"
            }`}
          >
            Previous
          </button>
          <span className="text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center py-2 px-4 rounded-lg transition ${
              currentPage === totalPages
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-[#171f56] text-white hover:bg-[#171f56]"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Treatments;
