import Blog from "@/components/Blog/Blog";
import RequestAppointment from "@/components/Contact/RequestAppointment";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import { Metadata } from "next";
import React from "react";
import abouts from '@/assets/images/breadcrump/2.jpg'

export const metadata: Metadata = {
  title: "Patients Education | Dr. Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS Is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
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
