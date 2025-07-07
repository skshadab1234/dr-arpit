import AboutHome from "@/components/About/AboutHome";
import Features from "@/components/About/Features";
import LogoCarousel from "@/components/About/LogoCarousel";
import SpecialityComp from "@/components/About/SpecialityComp";
import Blog from "@/components/Blog/Blog";
import RequestAppointment from "@/components/Contact/RequestAppointment";
import Slider from "@/components/Home/Slider";
import GoogleFeed from "@/components/InstagramFeed/GoogleFeed";
import InstaFeed from "@/components/InstagramFeed/InstaFeed";
import { Metadata } from "next";
import metaImage from "@/assets/arpit.jpg";
import HomeFAQ from "@/components/About/HomeFAQ";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Best oncologist in India | Dr arpit bansal",
  description:
    "Dr. Arpit Bansal is considered the best oncologist. He has an expertise in laser treatment, and advance surgeries along with the experience of 10 years.",
  keywords: "best oncologist in india, advanced laparoscopic surgery",

  // SEO meta tags
  authors: [{ name: "Dr. Arpit Bansal" }],
  robots: "index, follow", // To allow search engine crawling and indexing
  publisher: "Dr. Arpit Bansal",

  // Canonical URL (change it to your actual URL)
  alternates: {
    canonical: "https://drarpitbansal.in",
  },

  // Open Graph meta tags
  openGraph: {
    title: "Best cancer specialist and oncologist in India | Dr arpit bansal",
    description:
      "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS and FIBC is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
    url: "https://drarpitbansal.in",
    type: "website",
    images: [
      {
        url: "https://drarpitbansal.in/logo.png",
        width: 1200,
        height: 630,
        alt: "Dr. Arpit Bansal - Laparoscopic & Onco Surgeon",
      },
    ],
  },

  // Twitter Card meta tags
  twitter: {
    card: "summary_large_image",
    site: "@DrArpitBansal",
    title: "Dr. Arpit Bansal",
    description:
      "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS and FIBC is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
    images: [metaImage.src],
  },
};
export default function Home() {
  // console.log(process.env.BACKEND, "fdsfdsfdsf");
  return (
    <>
      <Head>
        {/* ✅ Google Tag Manager */}
        <script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NXXVRT92');`,
          }}
        />

        {/* ✅ DiagnosticLab JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DiagnosticLab",
              name: "Dr. Arpit Bansal",
              url: "https://drarpitbansal.in/",
              logo: "https://drarpitbansal.in/_next/static/media/arpitlogo.eecce08d.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "8141402111",
                contactType: "reservations",
                contactOption: "TollFree",
                areaServed: "IN",
                availableLanguage: "en",
              },
              sameAs: [
                "https://www.facebook.com/drarpit/",
                "https://www.instagram.com/drarpitbansal.surgeon/",
                "https://www.youtube.com/@DRARPITBANSAL",
                "https://www.linkedin.com/in/dr-arpit-bansal-0b39891b/",
              ],
            }),
          }}
        />

        {/* ✅ FAQ JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is advanced laparoscopic surgery?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Advanced laparoscopic surgery is a minimally invasive technique that uses small incisions and a camera to perform complex procedures. It results in faster recovery, reduced pain, and minimal scarring.",
                  },
                },
                {
                  "@type": "Question",
                  name: "When do I need an oncologist?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You should consult an oncologist if you’ve been diagnosed with cancer or notice symptoms like unexplained lumps, weight loss, or persistent pain. An oncologist specializes in diagnosing and treating cancer effectively.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who is the best oncologist in India?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "India has many leading cancer specialists. Dr. Arpit Bansal is considered one of the best oncologists in India, known for his expertise in surgical oncology and personalized cancer care.",
                  },
                },
              ],
            }),
          }}
        />

        {/* ✅ Person JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Person",
              name: "Dr Arpit Bansal",
              url: "https://drarpitbansal.in/",
              image:
                "https://drarpitbansal.in/_next/static/media/270.358eb863.png",
              sameAs: [
                "https://www.facebook.com/drarpit/",
                "https://www.instagram.com/drarpitbansal.surgeon/",
                "https://www.youtube.com/@DRARPITBANSAL",
                "https://www.linkedin.com/in/dr-arpit-bansal-0b39891b/",
              ],
              jobTitle: "Doctor",
              review: {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Patient Name",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                },
                reviewBody:
                  "Dr. Arpit Bansal provided excellent care and was very professional.",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "120",
              },
            }),
          }}
        />
      </Head>

      <Slider />
      <AboutHome />
      <SpecialityComp />
      <Blog title="home" />
      <Features />
      <InstaFeed />
      <GoogleFeed />
      <LogoCarousel />
      <RequestAppointment />
      <HomeFAQ />
      {/* <FloatingAppointment /> */}
    </>
  );
}
