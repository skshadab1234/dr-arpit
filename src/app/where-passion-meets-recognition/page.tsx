import RequestAppointment from "@/components/Contact/RequestAppointment";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import { Metadata } from "next";
import abouts from "@/assets/images/breadcrump/2.jpg";
import Where from "@/components/Gallary/Where";
import metaImage from "@/assets/arpit.jpg";

export const metadata: Metadata = {
  title: "Where Passion Meets Recognition | Dr. Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS and FIBC is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
  keywords: "MBBS | MS | FACS | FMAS | FCS | FIBC",

  // SEO meta tags
  authors: [
    { name: "Dr. Arpit Bansal"},
  ],
  robots: "index, follow", // To allow search engine crawling and indexing
  publisher: "Dr. Arpit Bansal",

  // Canonical URL (change it to your actual URL)
  alternates: {
    canonical: "https://drarpitbansal.in/where-passion-meets-recognition",
  },

  // Open Graph meta tags
  openGraph: {
    type: "website",
    url: "https://drarpitbansal.in/where-passion-meets-recognition",
    title: "Where Passion Meets Recognition | Dr. Arpit Bansal",
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
    title: "Where Passion Meets Recognition | Dr. Arpit Bansal",
    description:
      "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS and FIBC is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
    images: [metaImage.src],
  },
};

const where = () => {
  return (
    <>
      <BreadCrumb
        title={"Awards"}
        page={"Awards"}
        img={abouts.src}
        version={false}
      />
      <Where />
      <RequestAppointment />
    </>
  );
};
export default where;
