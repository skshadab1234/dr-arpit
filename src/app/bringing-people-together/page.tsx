import RequestAppointment from "@/components/Contact/RequestAppointment";
import Gallery from "@/components/Gallary/Gallery";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import { Metadata } from "next";
import abouts from '@/assets/images/breadcrump/2.jpg'
import Bringing from "@/components/Gallary/Bringing";

export const metadata: Metadata = {
  title: "Bringing People Together | Dr. Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS Is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
};
const bringing = () => {
  return (
    <>
      <BreadCrumb
        title={"Events"}
        page={"Events"}
        img={abouts.src}
        version={false}
      />
      <Bringing />
      <RequestAppointment />
    </>
  );
};

export default bringing