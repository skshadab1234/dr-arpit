import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NewHeader from "@/components/Layout/NewHeader";
import Announcement from "@/components/Layout/Announcement";
import Footer from "@/components/Layout/Footer";
import FloatingAppointment from "@/components/Layout/FloatingAppointment";
import FloatingButton from "@/components/Layout/FloatingButton";
import ScreenTop from "@/components/Layout/ScreenTop";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  authors: [{ name: "Dr. Arpit Bansal" }],
  robots: "index, follow",
  publisher: "Dr. Arpit Bansal",
};

// ✅ Server-side fetch with caching
async function getTreatments() {
  const res = await fetch(`${process.env.BACKEND}/getMenuTreatments`, {
    next: { revalidate: 60 },
    // revalidate = 60 seconds → cache data for all users
    // Agar per-user cache chahiye toh 'force-cache' bhi use kar sakte ho
  });

  if (!res.ok) throw new Error("Failed to fetch treatments");
  return res.json();
}


async function getDiseases() {
  const res = await fetch(`${process.env.BACKEND}/diseasesMenu`, {
    cache: "force-cache",
    // Cached until next build or revalidate manually
  });

  if (!res.ok) throw new Error("Failed to fetch diseasesMenu");
  return res.json();
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ✅ Run server-side only once (SSR + cache)
  const [treatments, diseases] = await Promise.all([
    getTreatments(),
    getDiseases(),
  ]);


  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=SJ7B7X390R`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SJ7B7X390R');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <NextTopLoader color="#fff" />
        <Announcement />
        <NewHeader treatments={treatments} diseases={diseases} />
        <ScreenTop />
        {children}
        <FloatingAppointment />
        <FloatingButton />
        <Footer treatments={treatments} />
      </body>
    </html>
  );
}
