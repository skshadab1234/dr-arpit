import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import TreatmentSingle from "@/components/Treatments/TreatmentSingle";
import { Metadata } from "next";
import React from "react";
import abouts from '@/assets/images/breadcrump/2.jpg'

export const metadata: Metadata = {
  title: "Our Treatments | Dr Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS Is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
};

const treatmentDetails = ({params}:any) => {
  return (
    <>
      <BreadCrumb
        title={"Our Treatments"}
        page={"Our Treatments"}
        img={abouts.src}
        version={false}
      />
      <TreatmentSingle params={params?.view}/>
    </>
  );
};

export default treatmentDetails;
