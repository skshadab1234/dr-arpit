"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, PhoneCall, MailIcon } from "lucide-react";
import logo from "@/assets/arpitlogo.png";
import { LuClock } from "react-icons/lu";

interface Treatment {
  id: number;
  image: string;
  title: string;
  description: string;
  slug: string;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [treatments, setTreatments] = useState<Treatment[]>([]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const response = await fetch(
          `${process.env.BACKEND}/getAllTreatments?per_page=1000`
        );
        const data = await response.json();

        if (data?.treatments && Array.isArray(data.treatments)) {
          setTreatments(data.treatments);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching treatments:", error);
      }
    };

    fetchTreatments();
  }, []);

  // useEffect(() => {
  //   // Define the Tawk API and load start time
  //   var Tawk_API: any = Tawk_API || {};
  //   var Tawk_LoadStart = new Date();

  //   // Create the script element
  //   const s1 = document.createElement("script");
  //   const s0: any = document.getElementsByTagName("script")[0];

  //   s1.async = true;
  //   s1.src = "https://embed.tawk.to/673339434304e3196ae0d27d/1icg1fclg";
  //   s1.charset = "UTF-8";
  //   s1.setAttribute("crossorigin", "*");

  //   // Insert the script before any other scripts
  //   s0.parentNode.insertBefore(s1, s0);

  //   // Cleanup on component unmount
  //   return () => {
  //     if (s1 && s1.parentNode) {
  //       s1.parentNode.removeChild(s1);
  //     }
  //   };
  // }, []);

  return (
    <footer className="bg-gray-100 text-gray-800 border-t pt-5">
      <div className="px-4 pt-10 pb-5 mx-auto sm:px-6 lg:px-16 space-y-8">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          {/* About Section */}
          <div>
            <img className="w-60" src={logo.src} alt="Dr Arpit Bansal" />

            <p className="mt-5 text-base font-medium text-justify text-[#000]">
              Dr. Arpit Bansal, an Advanced Laparoscopy and Cancer Surgeon, has
              mastered an art, which many struggle to understand.
            </p>
            <div className="md:w-full flex justify-center items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14412.230957483418!2d81.8466334!3d25.4363331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3985353001028a4d%3A0x42a30fe2226fa5e5!2sDr%20Arpit%20Bansal%20%7C%20Laproscopy%20Doctor%2Fhernia%20Doctor%2Flaser%20Piles%20Doctor%2FVaricose%20Vein%20Doctor%20In%20Prayagraj!5e0!3m2!1sen!2sin!4v1725442881878!5m2!1sen!2sin"
                width="100%"
                height="180"
                className="rounded-lg border-4 border-solid"
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Speciality Section */}
          <div className="grid grid-cols-1 gap-5 px-3 lg:px-10 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <p className="font-bold text-xl text-black">His Speciality</p>
              <div className="w-20 h-0.5 bg-primary rounded-full"></div>
              <ul className="flex flex-col mt-4 space-y-2 text-base text-black">
                {treatments.slice(0, 7).map((treatment) => (
                  <li key={treatment.id}>
                    <Link
                      className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                      href={`/speciality/${treatment.slug}`}
                    >
                      <ArrowRight size={16} />
                      <span>{treatment.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-2">
              <p className="font-bold text-xl text-black">Quick Links</p>
              <div className="w-20 h-0.5 bg-primary rounded-full"></div>
              <ul className="flex flex-col mt-4 space-y-2 text-base text-black">
                <li>
                  <Link
                    className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                    href={"/"}
                  >
                    <ArrowRight size={16} />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                    href={"/about"}
                  >
                    <ArrowRight size={16} />
                    <span>About Dr. Arpit</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                    href={"/gallery"}
                  >
                    <ArrowRight size={16} />
                    <span>Gallery</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                    href={"/in-news"}
                  >
                    <ArrowRight size={16} />
                    <span>In News</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                    href={"/testimonial"}
                  >
                    <ArrowRight size={16} />
                    <span>Testimonial</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                    href={"/patients-education"}
                  >
                    <ArrowRight size={16} />
                    <span>Patients Education</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                    href={"/book-appointment"}
                  >
                    <ArrowRight size={16} />
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info Section */}
            <div className="space-y-2">
              <p className="font-bold text-xl text-black">Contact Info</p>
              <div className="w-20 h-0.5 bg-primary rounded-full"></div>
              <div className="space-y-3 mt-4 text-base text-black">
                <div className="flex items-start gap-2 ">
                  <div className="flex-shrink-0">
                    <MapPin
                      size={20}
                      style={{ width: "30px" }}
                      color="#00008b"
                    />
                  </div>
                  <h6 className="text-justify">
                    <a
                      target="_blank"
                      href="https://www.google.com/maps?sca_esv=9783522cabc36d5f&sxsrf=ADLYWIIq8DgeJ3WC8yuIto4Ny0mNMvFSoA:1726059590343&lsig=AB86z5W8LVVMCDKPemXbeL-hE1XF&shndl=-1&shem=lsde,vslcca&kgs=5f63309b8c4d9278&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KU2KAgEwNYU5MeWlbyLiD6NC&daddr=ROOM+NO+23,+JEEVAN+JYOTI+HOSPITAL+CAMPUS,+162,+Himmat+Ganj,+Bai+Ka+Bagh,+Prayagraj,+Uttar+Pradesh+211003"
                    >
                      Jeevan Jyoti Hospital, 162 Bai Ka Bagh, Prayagraj 211003,
                      India.
                    </a>
                  </h6>
                </div>

                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0">
                    <MapPin
                      size={20}
                      style={{ width: "30px" }}
                      color="#00008b"
                    />
                  </div>
                  <h6 className="text-justify">
                    <a
                      target="_blank"
                      href="https://maps.app.goo.gl/dS3durLe8cdBshKM8"
                    >
                      Ground Floor 106A/5A Malviya Road George Town Prayagraj
                    </a>
                  </h6>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0">
                    <PhoneCall
                      size={20}
                      style={{ width: "30px" }}
                      color="#00008b"
                    />
                  </div>
                  <a href="tel:+918141402111">+91 81414 02111</a>
                </div>

                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0">
                    <PhoneCall
                      size={20}
                      style={{ width: "30px" }}
                      color="#00008b"
                    />
                  </div>
                  <a href="tel:+919129310111">+91 91293 10111</a>
                </div>

                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0">
                    <MailIcon
                      size={20}
                      style={{ width: "30px" }}
                      color="#00008b"
                    />
                  </div>
                  <a href="mailto:drarpitbansal@gmail.com">
                    drarpitbansal@gmail.com
                  </a>
                </div>

                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0">
                    <LuClock
                      size={20}
                      style={{ width: "30px" }}
                      color="#00008b"
                    />
                  </div>
                  <a>11am to 5pm at JJH (Monday to Saturday)</a>
                </div>

                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0">
                    <LuClock
                      size={20}
                      style={{ width: "30px" }}
                      color="#00008b"
                    />
                  </div>
                  <a>
                    6pm to 8pm at Gut and Longevity Clinic (Monday to Saturday)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-base text-center">
          © {currentYear} All Rights Reserved{" "}
          <a
            href="/"
            className="text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dr. Arpit Bansal
          </a>
        </p>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 left-4 p-3 bg-[#232c77] text-white rounded-full shadow-md z-50"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
