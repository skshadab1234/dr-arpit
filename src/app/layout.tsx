import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // Import Script component from next/script
import "./globals.css";
import NewHeader from "@/components/Layout/NewHeader";
import Announcement from "@/components/Layout/Announcement";
import Footer from "@/components/Layout/Footer";
import FloatingAppointment from "@/components/Layout/FloatingAppointment";
import FloatingButton from "@/components/Layout/FloatingButton";
import metaImage from "@/assets/arpit.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  authors: [{ name: "Dr. Arpit Bansal" }],
  robots: "index, follow",
  publisher: "Dr. Arpit Bansal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="https://drarpitbansal.in/icon.png" />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NXXVRT92');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        <Script
          id="json-ld-script"
          type="application/ld+json"
          strategy="beforeInteractive"
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

        <Script
          id="json-ld-person-script"
          type="application/ld+json"
          strategy="beforeInteractive"
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
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXXVRT92"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Announcement />
        <NewHeader />
        {children}
        <FloatingAppointment />
        <FloatingButton />
        <Footer />
      </body>
    </html>
  );
}
