import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import Schedule from "@/components/Schedule/Schedule";
import { Metadata } from "next";
import React from "react";
import abouts from "@/assets/images/breadcrump/2.jpg";
import GoogleFeed from "@/components/InstagramFeed/GoogleFeed";
import TestimonialComp from "@/components/TestimonialComp/TestimonialComp";

export const metadata: Metadata = {
  title: "Schedule | Dr. Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS Is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
};

const schedule = () => {
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
