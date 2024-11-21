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
  title: "Best Cancer Specialist in India | Top Oncologist in India",
  description:
    "Dr. Arpit Bansal is considered the best oncologist/cancer specialist. He has an expertise in laser treatment, and advance surgeries along with the experience of 10 years.",
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
