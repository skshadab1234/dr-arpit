"use client";
import React, { useEffect, useState } from "react";
import "animate.css";

interface BlogPost {
  ID: number;
  title: string;
  image: string;
  slug: string;
  description?: string;
}

interface BlogProps {
  title: string; // "home" or "blog"
  allDiseases: { diseases: BlogPost[]; pagination: { total_pages: any } };
}

const BlogPostComponent = ({ post }: { post: BlogPost }) => (
  <div className="duration-1000 animate__animated animate__fadeInRight">
    <div className="rounded-xl shadow-md" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
      <div className="relative overflow-hidden bg-white rounded-lg shadow-lg">
        <a href={`/patients-education/${post.slug}`} title={post.title} aria-label={post.title}>
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
        </a>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 line-clamp-1">
          <a
            href={`/patients-education/${post.slug}`}
            className="text-[#232c77] hover:text-black inline-block min-h-[44px] px-3 py-2 rounded-md"
          >
            {post.title}
          </a>
        </h3>
        {post.description && (
          <p className="mb-4 line-clamp-3 text-justify text-black" dangerouslySetInnerHTML={{ __html: post.description }} />
        )}
        <a
          href={`/patients-education/${post.slug}`}
          className="inline-flex items-center justify-center text-[#232c77] hover:text-blue-700 font-semibold min-h-[44px] px-4 py-2 rounded-md"
          aria-label={`Read more about ${post.title}`}
        >
          Read more: {post.title}
        </a>
      </div>
    </div>
  </div>
);

const Blog = ({ title, allDiseases }: BlogProps) => {
  const bg = "./white bg.png";
  const itemsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(title === "home" ? allDiseases.diseases.slice(0, 3) : allDiseases.diseases);
  const [totalPages, setTotalPages] = useState(allDiseases?.pagination?.total_pages as any);
  const [loading, setLoading] = useState(false);
  const [initialRenderDone, setInitialRenderDone] = useState(false); // detect first render

  useEffect(() => {
    if (title === "home") return;

    // Skip API if it's initial render on page 1
    if (!initialRenderDone && currentPage === 1) {
      setInitialRenderDone(true);
      return;
    }

    const fetchBlogPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${process.env.BACKEND}/diseases?per_page=${itemsPerPage}&page=${currentPage}`);
        const data = await response.json();
        setBlogPosts(data.diseases);
        setTotalPages(data.pagination.total_pages);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    initialRenderDone && fetchBlogPosts();
  }, [currentPage, title]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    // If going back to page 1, we still want API fetch to run next time
    if (page === 1 && initialRenderDone) {
      setInitialRenderDone(true); // ensures useEffect will fetch
    }
  };

  const data = title === "home" ? allDiseases.diseases.slice(0, 3) : blogPosts;

  return (
    <div style={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover", backgroundPosition: "center" }} className={title === "home" ? "bg-white" : ""}>
      <div className={`container mx-auto px-4 ${title === "home" ? "py-10 pt-10" : "py-16"}`}>
        <h5 style={{ letterSpacing: "3px" }} className="text-[#232c77] text-center pb-5 font-bold uppercase text-4xl lg:text-6xl">
          Patients Education
        </h5>

        <div className="flex flex-wrap -mx-4">
          {loading
            ? Array.from({ length: title === "home" ? 3 : itemsPerPage }).map((_, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="rounded-xl bg-gray-200 animate-pulse">
                  <div className="relative overflow-hidden bg-gray-300 h-64 rounded-lg"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            ))
            : data.map((post, index) => (
              <div key={post.ID} className="w-full md:w-1/2 lg:w-1/3 p-4" data-id={index}>
                <BlogPostComponent post={post} />
              </div>
            ))}
        </div>

        {title === "home" && !loading && (
          <div className="flex justify-center mt-8">
            <a href="/patients-education" className="flex items-center text-lg bg-[#232c77] text-white py-2 px-4 rounded-lg hover:bg-[#171f56] transition">
              View More
            </a>
          </div>
        )}

        {title !== "home" && totalPages > 1 && !loading && (
          <div className="flex justify-between items-center mt-8 space-x-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center py-2 px-4 text-lg rounded-lg transition ${currentPage === 1 ? "bg-gray-400 cursor-not-allowed text-white" : "bg-[#171f56] text-white hover:bg-[#171f56]"}`}
            >
              Previous
            </button>
            <span className="text-lg">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center py-2 px-4 text-lg rounded-lg transition ${currentPage === totalPages ? "bg-gray-400 cursor-not-allowed text-white" : "bg-[#171f56] text-white hover:bg-[#171f56]"}`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
