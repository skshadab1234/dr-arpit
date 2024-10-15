import Contact from "@/components/Contact/Contact";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Book Appointment | Dr. Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS Is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
};

const bookAppointment = () => {
  return (
    <>
      <BreadCrumb
        title={"Contact Us"}
        page={"Contact Us"}
        img="https://www.fcps.edu/sites/default/files/styles/hero_desktop_1x/public/media/hero/medical-retiree.jpg?h=bb7ee3f0&itok=ONGOOHrf"
        version={false}
      />
      <Contact />
    </>
  );
};

export default bookAppointment;
