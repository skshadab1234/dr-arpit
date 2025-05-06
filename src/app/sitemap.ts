import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch(
    `${process.env.BACKEND}/getAllTreatments?per_page=1000`,
    {
      next: { revalidate: 600 }, // Revalidate every 600 seconds (10 minutes)
    }
  );
  const speciality = await response.json();
  console.log(speciality.length, speciality);

  const specialitys: MetadataRoute.Sitemap = speciality["treatments"].map(
    ({ slug, modified }: any) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/speciality/${slug}`,
      lastModified: modified,
      priority: 0.8,
    })
  );

  const responseexpertise = await fetch(
    `${process.env.BACKEND}/diseases?per_page=1000`,
    {
      next: { revalidate: 600 }, // Revalidate every 10 minutes
    }
  );
  const diseases = await responseexpertise.json();
  // console.log(diseases["Our Expertise"].posts,"Exxxp");

  const disease: MetadataRoute.Sitemap = diseases["diseases"].map(
    ({ slug, modified }: any) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/patients-education/${slug}`,
      lastModified: modified,
      priority: 0.8,
    })
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      lastModified: "2024-11-06T12:33:18+00:00",
      priority: 0.1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
      lastModified: "2024-11-06T12:33:18+00:00",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/gallery`,
      lastModified: "2024-11-06T12:33:18+00:00",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/in-news`,
      lastModified: "2024-11-06T12:33:18+00:00",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/testimonial`,
      lastModified: "2024-11-06T12:33:18+00:00",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/patients-education`,
      lastModified: "2024-11-06T12:33:18+00:00",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/book-appointment`,
      lastModified: "2024-11-06T12:33:18+00:00",
      priority: 0.8,
    },
    ...specialitys,
    ...disease,
  ];
}
