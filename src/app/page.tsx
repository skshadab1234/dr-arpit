import AboutHome from "@/components/About/AboutHome";
import China from "@/components/About/China";
import Features from "@/components/About/Features";
import LogoCarousel from "@/components/About/LogoCarousel";
import Passion from "@/components/About/Passion";
import Sample from "@/components/About/Sample";
import SpecialityComp from "@/components/About/SpecialityComp";
import SpecialityCompOld from "@/components/About/SpecialityCompOld";
import Blog from "@/components/Blog/Blog";
import RequestAppointment from "@/components/Contact/RequestAppointment";
import Slider from "@/components/Home/Slider";
import GoogleFeed from "@/components/InstagramFeed/GoogleFeed";
import InstaFeed from "@/components/InstagramFeed/InstaFeed";
import FloatingAppointment from "@/components/Layout/FloatingAppointment";
import Treatments from "@/components/Treatments/Treatments";
import { Metadata } from "next";
import metaImage from "@/assets/arpit.jpg";
import HomeFAQ from "@/components/About/HomeFAQ";

export const metadata: Metadata = {
  title: "Best Cancer Specialist in India | Top Oncologist | Dr Arpit Bansal",
  description:
    "Dr. Arpit Bansal is considered the best oncologist/cancer specialist. He has an expertise in laser treatment, and advance surgeries along with the experience of 10 years.",
  keywords: "MBBS | MS | FACS | FMAS | FCS | FIBC",

  // SEO meta tags
  authors: [{ name: "Dr. Arpit Bansal" }],
  robots: "index, follow", // To allow search engine crawling and indexing
  publisher: "Dr. Arpit Bansal",

  // Canonical URL (change it to your actual URL)
  alternates: {
    canonical: "https://drarpitbansal.in",
  },

  // Open Graph meta tags
  openGraph: {
    type: "website",
    url: "https://drarpitbansal.in",
    title: "Dr. Arpit Bansal",
    description:
      "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS and FIBC is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
    images: [
      {
        url: "https://drarpitbansal.in/icon.png",
        width: 500,
        height: 500,
        alt: "Dr. Arpit Bansal - Laparoscopic & Onco Surgeon",
      },
    ],
  },

  // Twitter Card meta tags
  twitter: {
    card: "summary_large_image",
    site: "@DrArpitBansal",
    title: "Dr. Arpit Bansal",
    description:
      "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS and FIBC is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
    images: [metaImage.src],
  },
};
export default function Home() {
  // console.log(process.env.BACKEND, "fdsfdsfdsf");
  return (
    <>
      <Slider />
      <AboutHome />
      <SpecialityComp />
      <Blog title="home" />
      <Features />
      <InstaFeed />
      <GoogleFeed />
      <LogoCarousel />
      <RequestAppointment />
      <HomeFAQ />
      {/* <FloatingAppointment /> */}
    </>
  );
}
