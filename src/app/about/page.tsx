import About from "@/components/About/About";
import RequestAppointment from "@/components/Contact/RequestAppointment";
import GoogleFeed from "@/components/InstagramFeed/GoogleFeed";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import { Metadata } from "next";
import React from "react";
import abouts from "@/assets/images/breadcrump/2.jpg";
import Counter from "@/components/About/Counter";
import Passion from "@/components/About/Passion";
import metaImage from "@/assets/arpit.jpg";

export const metadata: Metadata = {
  title: "About | Dr Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS and FIBC is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
  keywords: "MBBS | MS | FACS | FMAS | FCS | FIBC",

  // SEO meta tags
  authors: [{ name: "Dr. Arpit Bansal" }],
  robots: "index, follow", // To allow search engine crawling and indexing
  publisher: "Dr. Arpit Bansal",

  // Canonical URL (change it to your actual URL)
  alternates: {
    canonical: "https://drarpitbansal.in/about",
  },

  // Open Graph meta tags
  openGraph: {
    type: "website",
    url: "https://drarpitbansal.in/about",
    title: "About | Dr Arpit Bansal",
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
    title: "About | Dr Arpit Bansal",
    description:
      "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS and FIBC is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
    images: [metaImage.src],
  },
};
const about = () => {
  return (
    <>
      <BreadCrumb
        title={""}
        page={"About Dr. Arpit Bansal"}
        img={abouts.src}
        version={false}
      />
      <About />
      <Passion />
      <div className="bg-white">
        <Counter />
      </div>

      <RequestAppointment />
    </>
  );
};

export default about;
