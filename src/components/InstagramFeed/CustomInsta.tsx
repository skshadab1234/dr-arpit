"use client";
import React from "react";
import instaData from "@/data/instaData.json";
import { IoHeart } from "react-icons/io5";
import Image from "next/image";
import { FaRegComment } from "react-icons/fa";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
// import { Grid, Navigation } from "swiper/modules";

const InstaFeed = () => {
  return (
    <Swiper
        // modules={[Grid, Navigation]}
    //   navigation={false}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      //   grid={{
      //     rows: 2,
      //   }}
      //   spaceBetween={16}
      breakpoints={{
        320: {
          slidesPerView: 2, // Mobile: 1 row of 2 cards
          //   grid: {
          //     rows: 2,
          //   },
        },
        768: {
          slidesPerView: 2, // Tablet: 2 rows of 2 cards
          //   grid: {
          //     rows: 2,
          //   },
        },
        1024: {
          slidesPerView: 4, // Desktop: 2 rows of 4 cards
          //   grid: {
          //     rows: 2,
          //   },
        },
      }}
      className="insta-carousel"
    >
      {instaData.payload.map((post: any, index) => (
        <>
          {post.media[0]?.cover?.thumbnail?.url ? (
            <SwiperSlide key={index}>
              <Link href={post.link} target="_blank">
                <div className="relative group bg-white shadow-md overflow-hidden aspect-square">
                  {/* Media (Image or Video) */}
                  <div className="media">
                    {post.media.length > 0 && post.media[0].type === "video" ? (
                      <Image
                        width={500}
                        height={500}
                        src={post.media[0]?.cover?.thumbnail?.url}
                        alt="Instagram Post"
                        className="w-full h-[400px] object-cover object-center"
                      />
                    ) : (
                      ""
                    )}
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white">
                    <div className="interaction flex items-center space-x-2 text-lg">
                      <IoHeart className="text-white text-lg" />
                      <span>{post.likesCount}</span>
                      <FaRegComment className="text-white" />
                      <span>{post.commentsCount}</span>
                    </div>
                    <div className="caption">
                      <span className="text-white text-center line-clamp-4 px-5">
                        {post.caption.split("@drarpitbansal.surgeon")[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ) : (
            ""
          )}
        </>
      ))}
    </Swiper>
  );
};

export default InstaFeed;
