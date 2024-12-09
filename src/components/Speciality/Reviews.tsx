import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Reviews = ({ reviewsData }: { reviewsData: any[] }) => {
  const [expandedReview, setExpandedReview] = useState<number | null>(null);

  const toggleReadMore = (id: number) => {
    setExpandedReview(expandedReview === id ? null : id);
  };

  const decodeHtmlEntities = (text: string): string => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  };

  return (
    <div className="bg-[#202A75] py-10 ">
      <h5
        style={{ letterSpacing: "3px" }}
        className="text-[#fff] text-center pb-8 font-bold uppercase mainPrimary text-4xl lg:text-6xl"
      >
        What our Patients say
      </h5>
      <div className="container mx-auto px-5 md:px-8">
        <Swiper
          spaceBetween={20}
          allowSlideNext={true}
          allowSlidePrev={true}
          slidesPerView={1} // Default view for mobile
          breakpoints={{
            640: {
              slidesPerView: 2, // Tablet view
            },
            1024: {
              slidesPerView: 5, // Desktop view
            },
          }}
          loop={true}
          autoplay={{
            delay: 2500, // Auto transition every 2.5 seconds
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          {reviewsData?.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg p-4 shadow-lg transition-transform transform duration-300">
                <div className="flex items-center mb-2">
                  <img
                    src={review.profile_image}
                    alt={`${review.name}'s profile`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-base text-gray-800 line-clamp-1">
                      {review.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {new Date(review.date_posted).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "short",
                        }
                      )}
                    </p>
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex mb-2">
                  {Array(Number(review.star_rating))
                    .fill(null)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-500 text-2xl">
                        ★
                      </span>
                    ))}
                </div>

                {/* Review Text */}
                <p
                  className={`text-gray-900 text-sm mb-1 ${
                    expandedReview === index ? "" : "line-clamp-3"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: decodeHtmlEntities(review.review),
                  }}
                />

                {decodeHtmlEntities(review.review).length > 70 && (
                  <span
                    className="text-[#232c77] cursor-pointer"
                    onClick={() => toggleReadMore(index)}
                  >
                    {expandedReview === index ? "Read less" : "Read more"}
                  </span>
                )}

                {/* Source */}
                <div className="flex items-center mt-3">
                  <img
                    src="https://static.elfsight.com/icons/app-all-in-one-reviews-logos-google-logo-multicolor.svg"
                    alt="Google Logo"
                    className="w-20"
                  />
                  {/* <span className="text-gray-500 ml-2">Google</span> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
