import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import Treatments from "@/components/Treatments/Treatments";
import { Metadata } from "next";
import React from "react";
import abouts from '@/assets/images/breadcrump/2.jpg'

export const metadata: Metadata = {
  title: "Our Treatments | Dr. Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS Is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
};

const treatments = () => {
  return (
    <>
      <BreadCrumb
        title={"Our Treatments"}
        page={"Our Treatments"}
        img={abouts.src}
        version={false}
      />
      <Treatments title="treatment" />
    </>
  );
};

export default treatments;
