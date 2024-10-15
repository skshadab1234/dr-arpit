import RequestAppointment from "@/components/Contact/RequestAppointment";
import Gallery from "@/components/Gallary/Gallery";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";
import { Metadata } from "next";
import abouts from '@/assets/images/breadcrump/2.jpg'

export const metadata: Metadata = {
  title: "Gallery | Dr. Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS Is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
};
const testimonial = () => {
  return (
    <>
      <BreadCrumb
        title={"Gallery"}
        page={"Gallery"}
        img={abouts.src}
        version={false}
      />
      <Gallery />
      <RequestAppointment />
    </>
  );
};

export default testimonial;
