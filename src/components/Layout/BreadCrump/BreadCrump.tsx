'use client'
import { useEffect, useState } from "react";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import bread from "@/assets/images/breadcrump/2.jpg";

interface BreadCrumbProps {
  title: string;
  page: string;
  img: any;
  version?: boolean; // Make this optional with default as false
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  title,
  page,
  img,
  version = false, // Default value set to false
}) => {
  const [backgroundPosition, setBackgroundPosition] = useState("top center");

  useEffect(() => {
    // Run only on the client side
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setBackgroundPosition(
          window.innerWidth < 640 ? "70% center" : "top center"
        );
      };

      // Set the initial background position
      handleResize();

      // Add resize event listener
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div
      className={`relative bg-bottom h-auto py-16 sm:py-24 object-cover ${
        version ? "bg-gradient-to-r from-primary to-secondary" : ""
      }`}
      style={
        version
          ? undefined
          : {
              backgroundImage: `url(${bread.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition, // Apply the responsive background position here
            }
      }
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          version ? "bg-gradient-to-r from-primary to-secondary" : "bg-black/50"
        }`}
      ></div>

      <div className="flex flex-col items-start justify-center relative px-5 md:px-10 lg:px-16 z-10">
        <div className="flex items-center justify-between w-full">
          <div>
            <h1
              style={{ letterSpacing: "3px" }}
              className="text-2xl lg:text-5xl text-white mainPrimary uppercase"
            >
              {title}
            </h1>
            <div>
              <ul className="flex items-center text-sm justify-start gap-1 pt-2">
                <Link href="/">
                  <Home size={17} className="-mt-1" color="white" />
                </Link>
                <li>
                  <Link href={"/"}>
                    <span className="text-white font-medium">Home</span>
                  </Link>
                </li>
                <ChevronRight size={19} color="white" />
                <li className="text-white capitalize">{page}</li>
              </ul>
            </div>
          </div>
          {version && (
            <div>
              <img
                src="/betlogo.png"
                className="min-w-24 max-w-24 md:min-w-48 md:max-w-48"
                alt="Logo"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
