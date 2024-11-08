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
  title: "Dr Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS and FIBC is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
  keywords: "MBBS | MS | FACS | FMAS | FCS | FIBC",
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
        <Script
          id="json-ld-script"
          type="application/ld+json"
          strategy="beforeInteractive" // Load before content to help with SEO
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
