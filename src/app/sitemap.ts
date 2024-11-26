import { MetadataRoute } from "next";

export default async function sitemap() : Promise<MetadataRoute.Sitemap> {
    const response = await fetch(`${process.env.BACKEND}/getAllTreatments?per_page=1000`)
    const speciality = await response.json()
    console.log(speciality.length,speciality)

    const storiesEntries: MetadataRoute.Sitemap = speciality["treatments"].map(({slug}:any) => ({
        url:`${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${slug.slug}`,
        lastModified: slug.modified
        // priority:
    }))

    const responseexpertise = await fetch(`${process.env.BACKEND}/diseases?per_page=1000`)
    const diseases = await responseexpertise.json()
    console.log(diseases["Our Expertise"].posts,"Exxxp");
    
    const expertiseEntries: MetadataRoute.Sitemap = diseases["diseases"].map(({slug}:any) => ({
        url:`${process.env.WEBSITE_URL}/expertise/${slug.slug}`,
        lastModified: slug.modified
        // priority:
    }))

    
  
    return [
        {
            url: `${process.env.WEBSITE_URL}/about-us`,
            lastModified: new Date()
        },
        ...storiesEntries, ...expertiseEntries
    ]
}