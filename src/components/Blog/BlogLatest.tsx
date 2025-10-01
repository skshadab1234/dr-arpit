"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Disease {
  ID: number;
  title: string;
  image: string;
  slug: string;
}

const BlogLatestSkeleton = () => (
  <aside className="widget bg-white p-4 rounded-md shadow-md animate-pulse">
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-3 rounded-md border border-gray-200"
        >
          <div className="w-16 h-16 bg-gray-300 rounded-lg shrink-0"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  </aside>
);

const BlogLatest = ({ params }: { params: string }) => {
  const [diseases, setDiseases] = useState<Disease[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchDiseases = async () => {
      try {
        const res = await fetch(`${process.env.BACKEND}/latestDiseases?per_page=10`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch diseases");
        const data = await res.json();
        if (isMounted) {
          setDiseases(data || []);
          setLoading(false);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchDiseases();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <BlogLatestSkeleton />;
  if (error) {
    return (
      <aside className="widget bg-white p-4 rounded-md shadow-md">
        <p className="text-red-500 text-sm">Error: {error}</p>
      </aside>
    );
  }

  return (
    <aside className="widget bg-white p-4 rounded-md shadow-md">
      <h3 className="widget-title text-lg font-semibold mb-4">Latest Blogs</h3>
      <div className="latest-content space-y-4">
        {diseases.map((disease) => {
          const isActive = params === disease.slug;
          return (
            <Link
              key={disease.ID}
              href={`/patients-education/${disease.slug}`}
              className={`flex items-center gap-4 p-3 rounded-md border transition duration-200 
                ${isActive ? "bg-gray-200 border-[#232c77]" : "bg-white hover:bg-gray-50 border-gray-200"}`}
            >
              {/* Fixed image box */}
              <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={disease.image}
                  alt={disease.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Equal size text block */}
              <div className="flex-1 min-h-[48px] flex items-center">
                <h5
                  className={`text-sm md:text-base font-medium line-clamp-2 leading-snug ${isActive ? "text-[#232c77]" : "text-gray-800"
                    }`}
                >
                  {disease.title}
                </h5>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default BlogLatest;
