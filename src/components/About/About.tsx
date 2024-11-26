"use client";
import { Modal } from "antd";
import React, { useState } from "react";
import ContactForm from "../Contact/ContactForm";
import about from "@/assets/images/gallery/1.png";
// import about from "@/assets/images/gallery/about.jpg";
import "animate.css/animate.min.css";
import { useInView } from "react-intersection-observer";

const About = () => {
  const bg = "./white bg.png";
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers every time the section is in view
    threshold: 0.1, // Section is considered in view when 10% of it is visible
  });


  
  const SkeletonLoader = () => {
    return (
      <div className="space-y-4 p-7">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-4 bg-gray-300 rounded-md animate-pulse"
          ></div>
        ))}
      </div>
    );
  };

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <section
        ref={ref}
        style={{
          backgroundImage: `url('${bg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`about py-20 ${
          inView ? "animate__animated animate__fadeIn" : ""
        }`}
        id="about"
      >
        <div className="xl:container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div
              className={`relative flex justify-center item-center w-full lg:w-1/3 mb-10 ${
                inView ? "animate__animated animate__fadeInLeft" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={about.src}
                  alt="Profile"
                  className="w-full -mt-12 lg:-mt-0 xl:-mt-12 relative z-20 scale-x-[-1]"
                  // className="w-full  relative z-20 rounded-lg"

                  // className="md:w-full  w-80  relative z-20 "
                />
                {/* <div className="absolute w-80 md:w-96 h-[380px] md:h-[450px] bg-gray-300 -top-8 -right-8 rounded-lg border-b-4 border-[#171f56]"></div>
                <div className="absolute w-16 h-16 bg-[#171f56] -top-4 -right-4 rounded-lg"></div> */}
              </div>
            </div>

            <div
              className={`lg:pl-8  px-3 w-full lg:w-1/2 xl:w-2/3 ${
                inView ? "animate__animated animate__fadeInRight" : ""
              }`}
            >
              <h1 className="text-3xl font-bold text-left mb-2 relative">
                <span
                  style={{ letterSpacing: "3px" }}
                  className="text-[#232c77] font-bold uppercase mainPrimary text-4xl lg:text-6xl"
                >
                  About Dr. Arpit Bansal
                </span>
                <div className="absolute top-0 right-0 w-10 h-7 bg-[#171f56] opacity-20 rotate-45"></div>
              </h1>
              {/* <span className="text-xl mt-0 lg:mt-2 mb-2">
                MBBS, MS - General Surgery
              </span> */}
              <p className="text-lg text-[#444] my-4 text-left font-normal">
                Dr. Arpit Bansal, an Advanced Laparoscopy and Cancer Surgeon,
                has mastered an art that many struggle to understand. As a
                surgeon, he operates skilfully, doing his best to be his best.
                As a man of varied interests, he has created a fine balance
                between his profession and his passions. His journey stands as a
                testament to his extraordinary talent and unyielding
                determination.
              </p>
              <p className="text-lg hidden xl:block text-[#444] mb-4 text-left font-normal">
                Growing up in Prayagraj, Dr. Arpit Bansal always aspired to be a
                doctor, owing to his empathetic nature. He is the Director of
                the 200-bed NABH Accredited Multi-Specialty Jeevan Jyoti
                Hospital in Prayagraj, Uttar Pradesh. With a Fellowship from the
                UK, he is future-ready for robotic surgeries. Dr. Arpit Bansal
                has trained under some of the finest surgeons in India and has
                emerged as an iconic figure in the field of medicine.
              </p>
            </div>
          </div>

          <div
            className={`px-3 duration-1000 ${
              inView ? "animate__animated animate__fadeInRight" : ""
            }`}
            style={{ animationDelay: "1s" }}
          >
            <p className="text-lg xl:hidden text-[#444] mb-4 text-left font-normal">
              Growing up in Prayagraj, Dr. Arpit Bansal always aspired to be a
              doctor, owing to his empathetic nature. He is the Director of the
              200-bed NABH Accredited Multi-Specialty Jeevan Jyoti Hospital in
              Prayagraj, Uttar Pradesh. With a Fellowship from the UK, he is
              future-ready for robotic surgeries. Dr. Arpit Bansal has trained
              under some of the finest surgeons in India and has emerged as an
              iconic figure in the field of medicine.
            </p>
            <p className="text-lg text-[#444] my-4 text-left font-normal">
              Dr. Bansal is also among the biggest names in wildlife bird
              photography, both in India and globally. Out of the 1,349 species
              of birds found in the country, Dr. Bansal has already captured
              1,145 through his dynamic lens. There are only 25 bird
              photographers who have accomplished this feat, placing him in 6th
              position on the world-famous website, www.Ebird.org.
            </p>
            <p className="text-lg text-[#444] my-4 text-left font-normal">
              As a healthcare professional, Dr. Arpit Bansal is always focused
              on cures rather than merely treating symptoms. Interested in
              promoting lifestyle changes as a form of medicine, he launched his
              online social media presence via Instagram and YouTube in 2023.
              With 68K organic followers and growing rapidly, his videos are
              spreading valuable health information for people to benefit from.
              His engagement with his followers is enviable.
            </p>

            <p className="text-lg text-[#444] my-4 text-left font-normal">
              Dr. Arpit Bansal conducts Cancer Awareness Programmes, especially
              in schools and colleges, to educate the youth about the importance
              of the Cervical Cancer Vaccine. He was also a proactive voice in
              the fight against COVID-19. Additionally, he devotes time to
              motivational speeches, talks on environmental and wildlife
              conservation, and encourages students to make choices that benefit
              Mother Earth.
            </p>

            <p className="text-lg text-[#444] my-4 text-left font-normal">
              So captivated by the Blue Mind Movement, introduced by Dr. Wallace
              J. Nichols, Dr. Bansal took up the 100-day challenge to be in, on,
              near, or under water. He then launched the Blue Mind India
              chapter, promoting the idea that being in your “Blue
              Mind”—joyfully in the moment—is the key to living healthily,
              happily, and successfully.
            </p>

            <p className="text-lg text-[#444] my-4 text-left font-normal">
              A TEDx speaker, a doctor committed to prevention and cure,
              meditative by nature, it's no wonder that Dr. Bansal is involved
              in longevity research, healthy aging, and stem cell advancements.
              The latest feather in his cap was being the opening speaker at the
              9th IASRM Longevity Revolution Conference in New Delhi. His talk
              on hydration and aging focused on the importance of structured
              water in living to one's highest potential as a human being.
            </p>

            <p className="text-lg text-[#444] my-4 text-left font-normal">
              An active runner, a tree saver, an underwater meditation and water
              enthusiast, Dr. Arpit Bansal embodies the Blue Mind philosophy
              24/7. He leads by example in both his profession and his passions.
            </p>
            <p className="text-lg text-[#444] my-4 text-left font-normal">
              His future goals include expanding his work in longevity,
              functional medicine, robotic surgeries, and stem cell regenerative
              medicine. He also aims to spread awareness about gut health and
              the Blue Mind movement to the youth and the masses through his
              channel. Dr. Bansal is determined to age healthily, energetically,
              and to be the best human being he can be during his time on planet
              Earth.
            </p>
            <div className="flex gap-4">
              <a
                onClick={showLoading}
                className="flex items-center text-lg cursor-pointer bg-[#232c77] text-white py-2 px-4 rounded-lg hover:bg-[#171f56] transition"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
        <Modal
          title={
            <span className="relative top-3 left-5 mx-3 my-3 text-[#232c77] text-xl font-bold uppercase">
              Book Appointment
            </span>
          }
          centered
          footer={false}
          open={open}
          onCancel={() => setOpen(false)}
        >
          {loading ? <SkeletonLoader /> : <ContactForm />}
        </Modal>
      </section>
    </>
  );
};

export default About;
