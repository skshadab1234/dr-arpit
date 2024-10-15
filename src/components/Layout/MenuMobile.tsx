"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

// Define types for props
interface SubMenuItem {
  id: number;
  name: string;
  url: string;
}

interface MenuMobileProps {
  showCatMenu: boolean;
  setShowCatMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showContactMenu: boolean;
  setShowContactMenu: React.Dispatch<React.SetStateAction<boolean>>;
  subMenuData: SubMenuItem[] | null; // Allow it to be an array or null
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

const MenuMobile: React.FC<MenuMobileProps> = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  showContactMenu,
  setShowContactMenu,
  subMenuData,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [treatments, setTreatments] = useState<Treatment[]>([]); // State for treatments data
  const [diseases, setDiseases] = useState<Disease[]>([]); // State for diseases data

  // Fetch the treatments data from the API
  useEffect(() => {
    const fetchTreatments = async () => {
      try {
        const response = await fetch(
          `${process.env.BACKEND}/getAllTreatments?per_page=1000`
        );
        const data = await response.json();

        // Ensure we get an array of treatments
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

  // Fetch the diseases data from the API
  useEffect(() => {
    const fetchDiseases = async () => {
      try {
        const response = await fetch(
          `${process.env.BACKEND}/diseases?per_page=1000`
        );
        const data = await response.json();

        // Ensure we get an array of diseases
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

  const menuItems = [
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
      url: "#",
      hasDropdown: true,
    },
    {
      id: 8,
      name: "Contact Us",
      url: "/book-appointment",
    },
  ];

  const handleDropdownToggle = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <div className="flex flex-col lg:hidden w-full font-normal text-lg absolute top-20 h-[100vh] overflow-x-auto left-0 bg-white border-t text-black z-50">
      <ul className="flex flex-col lg:hidden w-full font-normal text-lg h-[85vh] overflow-x-auto left-0 bg-white border-t text-black z-50">
        {menuItems.map((item) => (
          <React.Fragment key={item.id}>
            <li className="py-4 px-5 border-b">
              {item.hasDropdown ? (
                <>
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleDropdownToggle(item.id)}
                  >
                    <span>{item.name}</span>
                    <span>{activeDropdown === item.id ? "-" : "+"}</span>
                  </div>

                  {/* Dropdown for 'His Speciality' */}
                  {activeDropdown === item.id &&
                    item.name === "His Speciality" && (
                      <ul className="pl-3 pt-2">
                        {treatments.map((treatment) => (
                          <li key={treatment.id} className="py-2">
                            <Link
                              className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200"
                              href={`/speciality/${treatment.slug}`}
                            >
                              <ArrowRight size={16} />
                              <span
                                onClick={() => setMobileMenu(false)}
                                className="line-clamp-1"
                              >
                                {treatment.title}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                  {/* Dropdown for 'Patients Education' */}
                  {activeDropdown === item.id &&
                    item.name === "Patients Education" && (
                      <ul className="pl-3 pt-2">
                        <li className="py-2">
                          <Link
                            className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200 line-clamp-1"
                            href={`/patients-education`}
                          >
                            <ArrowRight size={16} />
                            <span onClick={() => setMobileMenu(false)}>
                              All Patients Education
                            </span>
                          </Link>
                        </li>
                        {diseases.map((disease) => (
                          <li key={disease.id} className="py-2">
                            <Link
                              className="flex items-center hover:text-primary gap-1 hover:ml-1 duration-200 line-clamp-1"
                              href={`/patients-education/${disease.slug}`}
                            >
                              <ArrowRight size={16} />
                              <span
                                onClick={() => setMobileMenu(false)}
                                className="line-clamp-1"
                              >
                                {disease.title}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                </>
              ) : (
                <Link href={item.url}>
                  <span onClick={() => setMobileMenu(false)}>{item.name}</span>
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}

        {/* Render subMenuData if it's not null */}
        {subMenuData && subMenuData.length > 0 && (
          <div className="pt-2">
            <h3 className="px-5 text-md font-semibold">Sub Menu</h3>

            {subMenuData.map((subItem) => (
              <li key={subItem.id} className="py-2 px-5 border-b">
                <Link href={subItem.url}>
                  <span onClick={() => setMobileMenu(false)}>
                    {subItem.name}
                  </span>
                </Link>
              </li>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default MenuMobile;
