import BlogSingle from "@/components/Blog/BlogSingle";
import RequestAppointment from "@/components/Contact/RequestAppointment";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import { Metadata } from "next";
import abouts from "@/assets/images/breadcrump/2.jpg";

const PatientsEducationDetail = async ({ params }: any) => {
  // Fetch the blog data based on the provided params
  const response = await fetch(
    `${process.env.BACKEND}/disease/${params?.view}`
  );
  const blog = await response.json();
  // console.log(blog, "dfssf");

  // Define metadata using fetched blog data
  const metadata: Metadata = {
    title: `${blog.meta_title} | Dr. Arpit Bansal`,
    description: blog.meta_description,
    keywords: blog.meta_keyword,
    authors: [
      {
        name: "Dr. Arpit Bansal",
        url: `https://drarpitbansal.in/patients-education/${blog.slug}`,
      },
    ],
    robots: "index, follow",
    publisher: "Dr. Arpit Bansal",
    alternates: {
      canonical: `https://drarpitbansal.in/patients-education/${blog.slug}`,
    },
    openGraph: {
      type: "website",
      url: `https://drarpitbansal.in/patients-education/${blog.slug}`,
      title: `${blog.meta_title} | Dr. Arpit Bansal`,
      description: blog.meta_description,
      images: [
        {
          url: blog.image,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@DrArpitBansal",
      title: `${blog.meta_title} | Dr. Arpit Bansal`,
      description: blog.meta_description,
      images: [blog.image],
    },
  };

  return (
    <>
      <BreadCrumb
        title={"Patients Education Detail"}
        page={"Patients Education Detail"}
        img={abouts.src}
        version={false}
      />
      <BlogSingle params={params?.view} blog={blog} />{" "}
      {/* Pass the blog data directly */}
      <RequestAppointment />
    </>
  );
};


export default PatientsEducationDetail;
