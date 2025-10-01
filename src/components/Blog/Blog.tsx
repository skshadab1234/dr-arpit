"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "animate.css";
import Link from "next/link";

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
  <article
    className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
    itemScope
    itemType="https://schema.org/BlogPosting"
  >
    {/* Image */}
    <Link href={`/patients-education/${post.slug}`} aria-label={post.title}>
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          itemProp="image"
        />
      </div>
    </Link>

    {/* Content */}
    <div className="flex flex-col flex-1 p-6">
      <header className="mb-3">
        <h2
          className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-[#232c77] transition-colors"
          itemProp="headline"
        >
          <Link href={`/patients-education/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
      </header>

      <p
        className="text-sm text-gray-600 line-clamp-3 flex-1 mb-4"
        dangerouslySetInnerHTML={{ __html: post.description || "" }}
        itemProp="description"
      />

      {/* CTA always aligned bottom */}
      <footer className="mt-auto">
        <Link
          href={`/patients-education/${post.slug}`}
          className="inline-flex items-center text-[#232c77] font-medium hover:text-blue-700 transition-colors"
          aria-label={`Read more about ${post.title}`}
          itemProp="url"
        >
          Read More →
        </Link>
      </footer>
    </div>
  </article>
);


const Blog = ({ title, allDiseases }: BlogProps) => {
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
    <div className={title === "home" ? "bg-white" : "bg-white"}>
      <div className={`container mx-auto px-4 ${title === "home" ? "py-10 pt-10" : "py-16"}`}>
        <h5 style={{ letterSpacing: "3px" }} className="text-[#232c77] text-center pb-5 font-bold uppercase text-4xl lg:text-6xl">
          Patients Education
        </h5>


        {loading
          ?
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: title === "home" ? 3 : itemsPerPage }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden "
              >
                {/* Image Skeleton */}
                <div className="relative w-full h-56 bg-gray-300" />

                {/* Content Skeleton */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="h-6 bg-gray-300 rounded mb-4 w-3/4" />
                  <div className="h-4 bg-gray-300 rounded mb-2 w-full" />
                  <div className="h-4 bg-gray-300 rounded mb-2 w-5/6" />
                  <div className="h-4 bg-gray-300 rounded w-2/3" />

                  {/* CTA Placeholder (aligned bottom) */}
                  <div className=" h-5 w-24 bg-gray-300 rounded mt-2" />
                </div>
              </div>
            ))}
          </div>
          :
          <div className="flex flex-wrap -mx-4">
            {data.map((post, index) => (
              <div key={post.ID} className="w-full md:w-1/2 lg:w-1/3 p-4" data-id={index}>
                <BlogPostComponent post={post} />
              </div>
            ))}
          </div>
        }

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
    </div >
  );
};

export default Blog;
