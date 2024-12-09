import RequestAppointment from "@/components/Contact/RequestAppointment";
import Gallery from "@/components/Gallary/Gallery";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import { Metadata } from "next";
import abouts from '@/assets/images/breadcrump/2.jpg'
import Bringing from "@/components/Gallary/Bringing";
import metaImage from "@/assets/arpit.jpg";

export const metadata: Metadata = {
  title: "Bringing People Together | Dr. Arpit Bansal",
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
    canonical: "https://drarpitbansal.in/bringing-people-together",
  },

  // Open Graph meta tags
  openGraph: {
    type: "website",
    url: "https://drarpitbansal.in/bringing-people-together",
    title: "Bringing People Together | Dr. Arpit Bansal",
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
    title: "Bringing People Together | Dr. Arpit Bansal",
    description:
      "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS and FIBC is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
    images: [metaImage.src],
  },
};
const bringing = () => {
  return (
    <>
      <BreadCrumb
        title={"Events"}
        page={"Events"}
        img={abouts.src}
        version={false}
      />
      <Bringing />
      <RequestAppointment />
    </>
  );
};

export default bringing