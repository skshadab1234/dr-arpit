import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NewHeader from "@/components/Layout/NewHeader";
import Announcement from "@/components/Layout/Announcement";
import Footer from "@/components/Layout/Footer";
import FloatingAppointment from "@/components/Layout/FloatingAppointment";
import FloatingButton from "@/components/Layout/FloatingButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr Arpit Bansal",
  description:
    "Dr. Arpit Bansal - MBBS, MS, FMAS, FCS Is one of the renowned & Advanced Laparoscopic & Onco Surgeon & Male Infertility consultant.",
  openGraph: {
    title: "Dr Arpit Bansal - Cancer Specialist",
    description:
      "Dr. Arpit Bansal is one of the renowned Advanced Laparoscopic & Onco Surgeons and Male Infertility Consultants.",
    url: "https://www.drarpitbansal.com",
    type: "website",
    locale: "en_US",
    siteName: "Dr Arpit Bansal",
    images: [
      {
        url: "./icon.png",
        width: 500,
        height: 500,
        alt: "Dr Arpit Bansal - Cancer Specialist",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
