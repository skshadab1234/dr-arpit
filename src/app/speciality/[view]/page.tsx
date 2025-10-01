import Speciality from "@/components/Speciality/Speciality";
import abouts from "@/assets/images/breadcrump/2.jpg";
import RequestAppointment from "@/components/Contact/RequestAppointment";
import BreadCrumb from "@/components/Layout/BreadCrump/BreadCrump";

// 🔹 Fetch treatment data on server side
async function getTreatment(slug: string) {
  const res = await fetch(`${process.env.BACKEND}/getTreatmentBySlug/${slug}`, {
    next: { revalidate: 60 }, // ISR: revalidate every 60s
  });

  if (!res.ok) throw new Error("Failed to fetch treatment data");

  return res.json();
}

// 🔹 Dynamic Metadata from server
export async function generateMetadata({ params }: { params: { view: string } }) {
  const treatment = await getTreatment(params.view);

  return {
    title: treatment.meta_title || "Default Page Title",
    description: treatment.meta_description || "Default description for the page.",
    keywords: treatment.meta_keyword || "default, keywords, here",
    alternates: {
      canonical: `https://drarpitbansal.in/speciality/${params.view}`,
    },
    openGraph: {
      title: treatment.meta_title || "Default Page Title",
      description: treatment.meta_description || "Default description for the page.",
      url: `https://drarpitbansal.in/speciality/${params.view}`,
      images: ["https://drarpitbansal.in/icon.png"],
      type: "website",
    },
  };
}

// 🔹 Page Component (Server Component by default)
const SpecialityPage = async ({ params }: { params: { view: string } }) => {
  const treatment = await getTreatment(params.view);

  return (
    <>
      <BreadCrumb title={treatment.title} page={treatment.title} img={abouts.src} version={false} />
      <Speciality title={params.view} treatment={treatment} />
      <RequestAppointment />
    </>
  );
};

export default SpecialityPage;
