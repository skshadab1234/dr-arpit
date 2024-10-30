"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, PhoneCall, MailIcon } from "lucide-react";
import logo from "@/assets/arpitlogo.png";

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

  return (
    <footer className="bg-gray-100 text-gray-800 border-t pt-5">
      <div className="px-4 pt-10 pb-5 mx-auto sm:px-6 lg:px-16 space-y-8">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          {/* About Section */}
          <div>
            <img className="w-60 mb-2" src={logo.src} alt="Dr Arpit Bansal" />

            <p className="mt-5 text-base font-medium text-justify">
              Dr. Arpit Bansal, an Advanced Laparoscopy and Cancer Surgeon, has
              mastered an art, which many struggle to understand. A man of
              varied interests, he has created a fine balance between his
              profession and passion. According to Dr. Arpit Bansal, with time
              management and focus, one can excel in both fields. His journey
              stands testament to his extraordinary talent and unyielding
              determination.
            </p>
          </div>

          {/* Speciality Section */}
          <div className="grid grid-cols-1 gap-5 px-3 lg:px-10 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <p className="font-bold text-xl">His Speciality</p>
              <div className="w-20 h-0.5 bg-primary rounded-full"></div>
              <ul className="flex flex-col mt-4 space-y-2 text-base">
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
              <p className="font-bold text-xl">Quick Links</p>
              <div className="w-20 h-0.5 bg-primary rounded-full"></div>
              <ul className="flex flex-col mt-4 space-y-2 text-base">
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
              <p className="font-bold text-xl">Contact Info</p>
              <div className="w-20 h-0.5 bg-primary rounded-full"></div>
              <div className="space-y-3 mt-4 text-sm">
                <div className="flex  items-start gap-2">
                  <div>
                    <MapPin size={20} color="#00008b" />
                  </div>
                  <h6 className="text-justify">
                    <a
                      target="_blank"
                      href="https://www.google.com/maps?sca_esv=9783522cabc36d5f&sxsrf=ADLYWIIq8DgeJ3WC8yuIto4Ny0mNMvFSoA:1726059590343&lsig=AB86z5W8LVVMCDKPemXbeL-hE1XF&shndl=-1&shem=lsde,vslcca&kgs=5f63309b8c4d9278&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KU2KAgEwNYU5MeWlbyLiD6NC&daddr=ROOM+NO+23,+JEEVAN+JYOTI+HOSPITAL+CAMPUS,+162,+Himmat+Ganj,+Bai+Ka+Bagh,+Prayagraj,+Uttar+Pradesh+211003"
                    >
                      {" "}
                      Jeevan Jyoti Hospital, 162 Bai Ka Bagh, Prayagraj 211003,
                      India.{" "}
                    </a>
                  </h6>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall size={20} color="#00008b" />
                  <a href="tel:+918141402111">+91 81414 02111</a>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon size={20} color="#00008b" />
                  <a href="mailto:drarpitbansal@gmail.com">
                    drarpitbansal@gmail.com
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
    </footer>
  );
};

export default Footer;
