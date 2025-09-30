import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import Schedule from "@/components/Schedule/Schedule";
import { Metadata } from "next";
import React from "react";
import abouts from "@/assets/images/breadcrump/2.jpg";
import GoogleFeed from "@/components/InstagramFeed/GoogleFeed";
import TestimonialComp from "@/components/TestimonialComp/TestimonialComp";
import metaImage from "@/assets/arpit.jpg";

export const metadata: Metadata = {
  title: "Testimonial | Dr. Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS and FIBC is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
  keywords: "MBBS | MS | FACS | FMAS | FCS | FIBC",

  // SEO meta tags
  authors: [
    { name: "Dr. Arpit Bansal" },
  ],
  robots: "index, follow", // To allow search engine crawling and indexing
  publisher: "Dr. Arpit Bansal",

  // Canonical URL (change it to your actual URL)
  alternates: {
    canonical: "https://drarpitbansal.in/testimonial",
  },

  // Open Graph meta tags
  openGraph: {
    type: "website",
    url: "https://drarpitbansal.in/testimonial",
    title: "Testimonial | Dr Arpit Bansal",
    description:
      "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS and FIBC is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
    images: [
      {
        url: metaImage.src,
        alt: "Dr. Arpit Bansal - Laparoscopic & Onco Surgeon",
      },
    ],
  },

  // Twitter Card meta tags
  twitter: {
    card: "summary_large_image",
    site: "@DrArpitBansal",
    title: "Testimonial | Dr Arpit Bansal",
    description:
      "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS and FIBC is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
    images: [metaImage.src],
  },
};

const getAllTestimonial = async () => {
  const response = await fetch(`${process.env.BACKEND}/testimonial?_fields=id,title,meta,slug&per_page=100`);
  const data = await response.json();
  return data;
};

const schedule = async () => {
  const allTestimonial = await getAllTestimonial()
  console.log(allTestimonial)
  //
  return (
    <>
      <BreadCrumb
        title={"Testimonial"}
        page={"Testimonial"}
        img={abouts.src}
        version={false}
      />
      <TestimonialComp />
    </>
  );
};

export default schedule;
