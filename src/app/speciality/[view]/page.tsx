"use client";

import Speciality from "@/components/Speciality/Speciality";
import React, { useEffect, useState } from "react";
import abouts from "@/assets/images/breadcrump/2.jpg";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import RequestAppointment from "@/components/Contact/RequestAppointment";

const SpecialityPage = ({ params }: { params: { view: string } }) => {
  const [title, setTitle] = useState<string>(params.view.replace("-", " "));
  const [treatment, setTreatment] = useState<any>(null);

  useEffect(() => {
    // Fetch the treatment data for the selected view
    const fetchTreatmentData = async () => {
      try {
        const response = await fetch(
          `${process.env.BACKEND}/getTreatmentBySlug/${params.view}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch treatment data");
        }
        const data = await response.json();
        setTreatment(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTreatmentData();
  }, [params.view]);

  if (!treatment) {
    // Render a loading state while treatment data is being fetched
    return <p>Loading...</p>;
  }

  return (
    <>
      <BreadCrumb title={title} page={title} img={abouts.src} version={false} />
      <Speciality title={params.view} BreadTitle={setTitle} />
      <RequestAppointment />
    </>
  );
};

export default SpecialityPage;
