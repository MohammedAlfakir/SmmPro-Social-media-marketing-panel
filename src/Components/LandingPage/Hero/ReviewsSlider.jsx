"use client";
import { FaStar } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import Image from "next/image";
import avatar from "../../../../public/imgs/avatar.png";
import avatar2 from "../../../../public/imgs/avatar2.png";
import avatar3 from "../../../../public/imgs/avatar3.png";
import "./HeroStyle.css";
import "../SectionsStyle.css";
import { useEffect, useRef } from "react";
import { Swiper, autoplay } from "swiper";

import "swiper/css/autoplay";

const TestimonialsSlider = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      slidesPerView: "auto",
      spaceBetween: 30,
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper cursor-pointer">
        <div className="swiper-slide">
          {" "}
          <div className="swiper-slide">
            <div className="review-item">
              <div className="review-item--header">
                <div className="review-item--avatar">
                  <Image src={avatar} alt="avatar" />
                </div>
                <div className="review-item--info">
                  <div className="review-item--name">Robert Williams</div>
                  <div className="review-item--date">February 15, 2024</div>
                </div>
                <div className="label-star">
                  <FaStar className="w-5 h-5 text-[#F47133]" />
                  5.0
                </div>
              </div>
              <div className="review-item--body">
                <div className="review-item--title">Exceptional Service</div>
                <div className="review-item--text">
                  The service provided was beyond my expectations. The team was
                  extremely helpful and responsive. I highly recommend their
                  services to anyone looking to grow their online presence.
                </div>
                <div className="review-item--verify">
                  <MdOutlineVerified className="w-6 h-6" />
                  Verified Customer
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          {" "}
          <div className="swiper-slide">
            <div className="review-item">
              <div className="review-item--header">
                <div className="review-item--avatar">
                  <Image src={avatar3} alt="avatar" />
                </div>
                <div className="review-item--info">
                  <div className="review-item--name">Jessica Davis</div>
                  <div className="review-item--date">April 10, 2024</div>
                </div>
                <div className="label-star">
                  <FaStar className="w-5 h-5 text-[#F47133]" />
                  4.7
                </div>
              </div>
              <div className="review-item--body">
                <div className="review-item--title">Excellent Experience</div>
                <div className="review-item--text">
                  Outstanding experience! The support team was prompt and
                  attentive, and the quality of service exceeded my
                  expectations. Highly recommended!
                </div>
                <div className="review-item--verify">
                  <MdOutlineVerified className="w-6 h-6" />
                  Verified Customer
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          {" "}
          <div className="swiper-slide">
            <div className="review-item">
              <div className="review-item--header">
                <div className="review-item--avatar">
                  <Image src={avatar2} alt="avatar" />
                </div>
                <div className="review-item--info">
                  <div className="review-item--name">David Garcia</div>
                  <div className="review-item--date">March 20, 2024</div>
                </div>
                <div className="label-star">
                  <FaStar className="w-5 h-5 text-[#F47133]" />
                  4.8
                </div>
              </div>
              <div className="review-item--body">
                <div className="review-item--title">Outstanding Support</div>
                <div className="review-item--text">
                  Exceptional service! The team went above and beyond to meet my
                  needs. I'm thrilled with the results and would definitely use
                  their services again.
                </div>
                <div className="review-item--verify">
                  <MdOutlineVerified className="w-6 h-6" />
                  Verified Customer
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          {" "}
          <div className="swiper-slide">
            <div className="review-item">
              <div className="review-item--header">
                <div className="review-item--avatar">
                  <Image src={avatar} alt="avatar" />
                </div>
                <div className="review-item--info">
                  <div className="review-item--name">Robert Williams</div>
                  <div className="review-item--date">February 15, 2024</div>
                </div>
                <div className="label-star">
                  <FaStar className="w-5 h-5 text-[#F47133]" />
                  5.0
                </div>
              </div>
              <div className="review-item--body">
                <div className="review-item--title">Exceptional Service</div>
                <div className="review-item--text">
                  The service provided was beyond my expectations. The team was
                  extremely helpful and responsive. I highly recommend their
                  services to anyone looking to grow their online presence.
                </div>
                <div className="review-item--verify">
                  <MdOutlineVerified className="w-6 h-6" />
                  Verified Customer
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          {" "}
          <div className="swiper-slide">
            <div className="review-item">
              <div className="review-item--header">
                <div className="review-item--avatar">
                  <Image src={avatar3} alt="avatar" />
                </div>
                <div className="review-item--info">
                  <div className="review-item--name">Jessica Davis</div>
                  <div className="review-item--date">April 10, 2024</div>
                </div>
                <div className="label-star">
                  <FaStar className="w-5 h-5 text-[#F47133]" />
                  4.7
                </div>
              </div>
              <div className="review-item--body">
                <div className="review-item--title">Excellent Experience</div>
                <div className="review-item--text">
                  Outstanding experience! The support team was prompt and
                  attentive, and the quality of service exceeded my
                  expectations. Highly recommended!
                </div>
                <div className="review-item--verify">
                  <MdOutlineVerified className="w-6 h-6" />
                  Verified Customer
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          {" "}
          <div className="swiper-slide">
            <div className="review-item">
              <div className="review-item--header">
                <div className="review-item--avatar">
                  <Image src={avatar2} alt="avatar" />
                </div>
                <div className="review-item--info">
                  <div className="review-item--name">David Garcia</div>
                  <div className="review-item--date">March 20, 2024</div>
                </div>
                <div className="label-star">
                  <FaStar className="w-5 h-5 text-[#F47133]" />
                  4.8
                </div>
              </div>
              <div className="review-item--body">
                <div className="review-item--title">Outstanding Support</div>
                <div className="review-item--text">
                  Exceptional service! The team went above and beyond to meet my
                  needs. I'm thrilled with the results and would definitely use
                  their services again.
                </div>
                <div className="review-item--verify">
                  <MdOutlineVerified className="w-6 h-6" />
                  Verified Customer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
