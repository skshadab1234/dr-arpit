"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

// Define types for props
interface SubMenuItem {
  slug: string;
  name: string;
}

interface ContactItem {
  name: string;
}

interface MenuProps {
  showCatMenu: boolean;
  setShowCatMenu: React.Dispatch<React.SetStateAction<boolean>>;
  subMenuData: SubMenuItem[];
  contactData: ContactItem[];
  setShowContactMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showContactMenu: boolean;
}

interface Treatment {
  id: number;
  image: string;
  title: string;
  description: string;
  slug: string;
}

interface Disease {
  id: number;
  title: string;
  slug: string;
}

const Menu: React.FC<MenuProps> = ({
  showCatMenu,
  setShowCatMenu,
  subMenuData = [],
  contactData = [],
  setShowContactMenu,
  showContactMenu,
}) => {
  const path = usePathname();
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [diseases, setDiseases] = useState<Disease[]>([]); // State for diseases
  const [showSpecialityMenu, setShowSpecialityMenu] = useState(false);
  const [showPatientsEducationMenu, setShowPatientsEducationMenu] =
    useState(false);

  // Fetch treatments from API
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

  // Fetch diseases from API
  useEffect(() => {
    const fetchDiseases = async () => {
      try {
        const response = await fetch(
          `${process.env.BACKEND}/diseases?per_page=1000`
        );
        const data = await response.json();

        if (data?.diseases && Array.isArray(data?.diseases)) {
          setDiseases(data?.diseases);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching diseases:", error);
      }
    };

    fetchDiseases();
  }, []);

  const data = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "About Dr. Arpit",
      url: "/about",
    },
    {
      id: 3,
      name: "His Speciality",
      url: "#",
      hasDropdown: true,
    },
    {
      id: 4,
      name: "Gallery",
      url: "/gallery",
    },
    {
      id: 5,
      name: "In News",
      url: "/in-news",
    },
    {
      id: 6,
      name: "Testimonial",
      url: "/testimonial",
    },
    {
      id: 7,
      name: "Patients Education",
      url: "/patients-education",
      hasDropdown: true,
    },
  ];

  return (
    <>
      <ul className="hidden lg:flex items-center gap-4 xl:gap-5 text-black">
        {data.map((item) => {
          const isActive =
            (item.hasDropdown &&
              item.name === "His Speciality" &&
              path.startsWith("/speciality")) ||
            (item.hasDropdown &&
              item.name === "Patients Education" &&
              path.startsWith("/patients-education")) ||
            path === item.url;

          return (
            <React.Fragment key={item.id}>
              <li
                className={`relative cursor-pointer text-base hover:border-b-2 typetext hover:border-[#00008b] hover:text-primary hover:text-[#171f58] lg:text-xs xl:text-base transition-all ease-in-out duration-500 ${
                  isActive
                    ? "border-primary border-b-2 font-semibold border-[#00008b] text-primary text-[#171f58]"
                    : "border-transparent hover:text-primary group"
                } pb-1`}
                onMouseEnter={() =>
                  item.hasDropdown &&
                  (item.name === "His Speciality"
                    ? setShowSpecialityMenu(true)
                    : setShowPatientsEducationMenu(true))
                }
                onMouseLeave={() =>
                  item.hasDropdown &&
                  (item.name === "His Speciality"
                    ? setShowSpecialityMenu(false)
                    : setShowPatientsEducationMenu(false))
                }
              >
                <Link href={item.url} className="group">
                  {item.name}
                </Link>

                {/* Dropdown for 'His Speciality' */}
                {item.name === "His Speciality" && showSpecialityMenu && (
                  <ul className="absolute left-0 top-full mt-1 pt-3 bg-white shadow-lg rounded-md w-60 overflow-y-auto h-auto">
                    {treatments.map((treatment) => (
                      <li
                        key={treatment.id}
                        className="px-4 py-2 hover:pl-5 duration-300 hover:bg-gray-100"
                      >
                        <Link
                          className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                          href={`/speciality/${treatment.slug}`}
                        >
                          <ArrowRight size={16} className="shrink-0" />
                          <span className="hover:text-primary line-clamp-1">
                            {treatment.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Dropdown for 'Patients Education' */}
                {item.name === "Patients Education" &&
                  showPatientsEducationMenu && (
                    <ul className="absolute left-0 top-full mt-1 pt-3 bg-white shadow-lg rounded-md w-60 overflow-y-auto h-auto">
                      {diseases.map((disease) => (
                        <li
                          key={disease.id}
                          className="px-4 py-2 hover:pl-5 duration-300 hover:bg-gray-100"
                        >
                          <Link
                            className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                            href={`/patients-education/${disease.slug}`}
                          >
                            <ArrowRight size={16} className="shrink-0" />
                            <span className="hover:text-primary line-clamp-1">
                              {disease.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                <span
                  className={`absolute bottom-0 left-1/2 h-[2px] bg-primary transition-all ease-in-out duration-500 transform ${
                    isActive
                      ? "w-full -translate-x-1/2"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};
export default Menu;
