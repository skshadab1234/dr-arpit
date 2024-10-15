import RequestAppointment from "@/components/Contact/RequestAppointment";
import InNews from "@/components/Gallary/InNews";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import React from "react";
import abouts from "@/assets/images/breadcrump/2.jpg";
const inNews = () => {
  return (
    <>
      <BreadCrumb
        title={"In News"}
        page={"In News"}
        img={abouts.src}
        version={false}
      />

      <InNews />
      <RequestAppointment />
    </>
  );
};

export default inNews;
