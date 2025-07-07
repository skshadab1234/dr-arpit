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
import ScrollToTop from "@/components/Layout/ScrollToTop";
import ScreenTop from "@/components/Layout/ScreenTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  authors: [{ name: "Dr. Arpit Bansal" }],
  robots: "index, follow",
  publisher: "Dr. Arpit Bansal",

  // openGraph: {
  //   title: "Dr. Arpit Bansal",
  //   description:
  //     "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS and FIBC is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
  //   url: "https://drarpitbansal.in",
  //   type: "website",
  //   images: [
  //     {
  //       url: "https://drarpitbansal.in/logo.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Dr. Arpit Bansal - Laparoscopic & Onco Surgeon",
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        {/* <ScrollToTop /> */}
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
        <ScreenTop />
        {children}
        <FloatingAppointment />
        <FloatingButton />
        <Footer />
      </body>
    </html>
  );
}
