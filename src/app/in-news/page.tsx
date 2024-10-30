import RequestAppointment from "@/components/Contact/RequestAppointment";
import InNews from "@/components/Gallary/InNews";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import React from "react";
import abouts from "@/assets/images/breadcrump/2.jpg";
import metaImage from "@/assets/arpit.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "In News | Dr Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS and FIBC is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
  keywords: "MBBS | MS | FACS | FMAS | FCS | FIBC",

  // SEO meta tags
  authors: [
    { name: "Dr. Arpit Bansal", url: "https://drarpitbansal.in/in-news" },
  ],
  robots: "index, follow", // To allow search engine crawling and indexing
  publisher: "Dr. Arpit Bansal",

  // Canonical URL (change it to your actual URL)
  alternates: {
    canonical: "https://drarpitbansal.in/in-news",
  },

  // Open Graph meta tags
  openGraph: {
    type: "website",
    url: "https://drarpitbansal.in/in-news",
    title: "In News | Dr Arpit Bansal",
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
    title: "In News | Dr Arpit Bansal",
    description:
      "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS and FIBC is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
    images: [metaImage.src],
  },
};
const inNews = () => {
  return (
    <>
      <BreadCrumb
        title={"In News"}
        page={"In News"}
        img={abouts.src}
        version={false}
      />

      <InNews />
      <RequestAppointment />
    </>
  );
};

export default inNews;
