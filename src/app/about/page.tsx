import About from "@/components/About/About";
import RequestAppointment from "@/components/Contact/RequestAppointment";
import GoogleFeed from "@/components/InstagramFeed/GoogleFeed";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import { Metadata } from "next";
import React from "react";
import abouts from "@/assets/images/breadcrump/2.jpg";
import Counter from "@/components/About/Counter";
import Passion from "@/components/About/Passion";

export const metadata: Metadata = {
  title: "About | Dr. Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS Is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
    keywords:'MBBS, MS, FMAS, FCS'
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
      <Passion/>
      <div className="bg-white">
        <Counter />
      </div>

      <RequestAppointment />
    </>
  );
};

export default about;
