import BlogSingle from "@/components/Blog/BlogSingle";
import RequestAppointment from "@/components/Contact/RequestAppointment";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import abouts from "@/assets/images/breadcrump/2.jpg";

// Safe fetch helper to avoid JSON parse errors when backend returns HTML/error
async function fetchBlog(slug: string) {
  try {
    const res = await fetch(`${process.env.BACKEND}/disease/${slug}` as string, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) return null;
    const data = await res.json();
    // Basic validation
    if (!data || typeof data !== "object") return null;
    return data;
  } catch {
    return null;
  }
}

// ✅ Dynamic metadata with fallback if data is unavailable
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const blog = await fetchBlog(params?.view);

  if (!blog) {
    return {
      title: "Patients Education | Dr. Arpit Bansal",
      description: "Read informative articles on patient education and treatments.",
      robots: "index, follow",
      alternates: {
        canonical: `https://drarpitbansal.in/patients-education/${params?.view}`,
      },
    };
  }

  return {
    title: `${blog.meta_title || blog.title || "Patients Education"} | Dr. Arpit Bansal`,
    description: blog.meta_description || "Read informative articles on patient education and treatments.",
    keywords: blog.meta_keyword,
    authors: [{ name: "Dr. Arpit Bansal" }],
    robots: "index, follow",
    publisher: "Dr. Arpit Bansal",
    alternates: {
      canonical: `https://drarpitbansal.in/patients-education/${blog.slug || params?.view}`,
    },
    openGraph: {
      type: "website",
      url: `https://drarpitbansal.in/patients-education/${blog.slug || params?.view}`,
      title: `${blog.meta_title || blog.title || "Patients Education"} | Dr. Arpit Bansal`,
      description: blog.meta_description || "Read informative articles on patient education and treatments.",
      images: blog.image ? [{ url: blog.image, alt: blog.title || "Patients Education" }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      site: "@DrArpitBansal",
      title: `${blog.meta_title || blog.title || "Patients Education"} | Dr. Arpit Bansal`,
      description: blog.meta_description || "Read informative articles on patient education and treatments.",
      images: blog.image ? [blog.image] : undefined,
    },
  };
}

const PatientsEducationDetail = async ({ params }: any) => {
  const blog = await fetchBlog(params?.view);
  if (!blog) {
    // Show 404 if backend doesn't return valid JSON/data
    notFound();
  }

  return (
    <>
      <BreadCrumb
        title="Patients Education Detail"
        page="Patients Education Detail"
        img={abouts.src}
        version={false}
      />
      <BlogSingle params={params?.view} blog={blog} />
      <RequestAppointment />
    </>
  );
};

export default PatientsEducationDetail;
