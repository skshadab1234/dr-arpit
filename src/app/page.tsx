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

export const metadata: Metadata = {
  title: "Dr Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS Is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
};
export default function Home() {
   console.log(process.env.BACKEND, "fdsfdsfdsf");
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
      {/* <FloatingAppointment /> */}
    </>
  );
}

