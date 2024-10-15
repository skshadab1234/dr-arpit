import RequestAppointment from "@/components/Contact/RequestAppointment";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import { Metadata } from "next";
import abouts from "@/assets/images/breadcrump/2.jpg";
import Where from "@/components/Gallary/Where";

export const metadata: Metadata = {
  title: "Where Passion Meets Recognition | Dr. Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS Is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
};
const where = () => {
  return (
    <>
      <BreadCrumb
        title={"Awards"}
        page={"Awards"}
        img={abouts.src}
        version={false}
      />
      <Where />
      <RequestAppointment />
    </>
  );
};
export default where;
