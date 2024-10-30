import Speciality from "@/components/Speciality/Speciality";
import React from "react";
import abouts from "@/assets/images/breadcrump/2.jpg";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import RequestAppointment from "@/components/Contact/RequestAppointment";
import { Metadata } from "next";

const speciality = async ({ params }: any) => {
  const title = params.view.replace("-", " ");

  // Fetch the treatment data for the selected view
  const response = await fetch(
    `${process.env.BACKEND}/getTreatmentBySlug/${params.view}`
  );
  const treatment = await response.json();

  // Define metadata based on fetched treatment data
  const metadata: Metadata = {
    title: `${treatment.meta_title} | Dr. Arpit Bansal`,
    description: treatment.meta_description,
    keywords: treatment.meta_keyword,
    authors: [
      {
        name: "Dr. Arpit Bansal",
        url: `https://drarpitbansal.in/speciality/${params.view}`,
      },
    ],
    robots: "index, follow",
    publisher: "Dr. Arpit Bansal",
    alternates: {
      canonical: `https://drarpitbansal.in/speciality/${params.view}`,
    },
    openGraph: {
      type: "website",
      url: `https://drarpitbansal.in/speciality/${params.view}`,
      title: `${treatment.meta_title} | Dr. Arpit Bansal`,
      description: treatment.meta_description,
      images: [
        {
          url: treatment.image,
          alt: treatment.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@DrArpitBansal",
      title: `${treatment.meta_title} | Dr. Arpit Bansal`,
      description: treatment.meta_description,
      images: [treatment.image],
    },
  };

  return (
    <>
      <BreadCrumb title={title} page={title} img={abouts.src} version={false} />
      <Speciality title={params.view} /> {/* Pass data here if needed */}
      <RequestAppointment />
    </>
  );
};

export default speciality;
