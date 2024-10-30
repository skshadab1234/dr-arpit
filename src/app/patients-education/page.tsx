import Blog from "@/components/Blog/Blog";
import RequestAppointment from "@/components/Contact/RequestAppointment";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import { Metadata } from "next";
import React from "react";
import abouts from "@/assets/images/breadcrump/2.jpg";
import metaImage from "@/assets/arpit.jpg";

export const metadata: Metadata = {
  title: "Patients Education | Dr. Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS and FIBC is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
  keywords: "MBBS | MS | FACS | FMAS | FCS | FIBC",

  // SEO meta tags
  authors: [
    {
      name: "Dr. Arpit Bansal",
      url: "https://drarpitbansal.in/patients-education",
    },
  ],
  robots: "index, follow", // To allow search engine crawling and indexing
  publisher: "Dr. Arpit Bansal",

  // Canonical URL (change it to your actual URL)
  alternates: {
    canonical: "https://drarpitbansal.in/patients-education",
  },

  // Open Graph meta tags
  openGraph: {
    type: "website",
    url: "https://drarpitbansal.in/patients-education",
    title: "Patients Education | Dr. Arpit Bansal",
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
    title: "Patients Education | Dr. Arpit Bansal",
    description:
      "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS and FIBC is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
    images: [metaImage.src],
  },
};
const patientsEducation = () => {
  return (
    <div>
      <BreadCrumb
        title={"Patients Education"}
        page={"Patients Education"}
        img={abouts.src}
        version={false}
      />
      <Blog title="blog" />
      <RequestAppointment />
    </div>
  );
};

export default patientsEducation;
