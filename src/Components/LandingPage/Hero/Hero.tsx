import React from "react";
import Image from "next/image";
import miniLogo from "../../../../public/minilogo.png";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import "./HeroStyle.css";
import ScrollingSocialIcons from "@/Components/LandingPage/Hero/CardScroling";
import FAQ from "@/Components/LandingPage/Hero/Faq";
import "../SectionsStyle.css";
import { LuHeartHandshake } from "react-icons/lu";
import ReviewsSlider from "@/Components/LandingPage/Hero/ReviewsSlider";

import {
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaCheck,
} from "react-icons/fa6";
import { FaBoxArchive } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { IoFlashOutline } from "react-icons/io5";
import { PiLinkBreakBold } from "react-icons/pi";
import { GiSellCard } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import logo from "../../../../public/imgs/panel-logo.png";
import avatars from "../../../../public/imgs/hero-avatars.png";
import ig from "../../../../public/imgs/brands/ig.svg";
import fb from "../../../../public/imgs/brands/fb.svg";
import tw from "../../../../public/imgs/brands/tw.svg";
import yt from "../../../../public/imgs/brands/yt.svg";
import tt from "../../../../public/imgs/brands/tt.svg";
import card4 from "../../../../public/imgs/first-card-4.png";
import card5 from "../../../../public/imgs/first-card-5.png";
import card6 from "../../../../public/imgs/first-card-6.png";
import faqBrowser from "../../../../public/imgs/faq-browser.png";
import avatar from "../../../../public/imgs/avatar.png";
import avatar2 from "../../../../public/imgs/avatar2.png";
import avatar3 from "../../../../public/imgs/avatar3.png";
function Hero() {
  return (
    <>
      <main className="pb-0 md:pb-28">
        <div data-page="signin">
          <section className="hero">
            <div className="hero-particles" id="hero-particles" />
            <div className="container">
              <div className="hero-body">
                <div className="hero-title">
                  <div className="label-main">
                    <div className="label-main--content">
                      <span className="icon flex justify-center items-center">
                        <Image src={miniLogo} alt="Logo" className="w-5 h-5" />
                      </span>
                      World's Cheap SMM Panel & Provider
                    </div>
                  </div>
                  {/* /.label-main */}
                  <h1 className="hero-title--title">
                    All In One
                    <span> SMM Panel</span> Platform🚀
                  </h1>
                  <p className="hero-title--subtitle">
                    GROW SMM PANEL is currently the leading SMM provider,
                    offering high-quality services. We strive to deliver
                    NON-DROP results with a Lifetime Guarantee on all our
                    services.
                  </p>
                </div>
                {/* /.hero-title */}
                <div className="label-main hero--label-main">
                  <div className="label-main--content">
                    <span className="icon flex justify-center items-center">
                      <Image src={miniLogo} alt="Logo" className="w-8 h-8" />
                    </span>
                    <span className="d-none d-md-inline">
                      Sign Up & Succeed!
                    </span>
                    <Link href="/sign-up" className="btn btn-primary">
                      Begin for Free!
                      <GoArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                {/* /.label-main */}
                <div className="hero-review">
                  <Image src={avatars} alt="Hero Avatars" />

                  <div className="text flex gap-1">
                    <FaStar className=" text-[#F47133] w-5 h-5 mr-1" />
                    <span>Trusted by </span> 30K+ Customers.
                  </div>
                </div>
              </div>
              {/* /.hero-body */}
            </div>
            <div className="hero-bottom">
              <div className="container">
                <div className="hero-bottom--marquee">
                  <div className="hero-bottom--marquee--inner">
                    <div className="hero-bottom--marquee--item">
                      <Image src={ig} alt="ig" />
                    </div>
                    <div className="hero-bottom--marquee--item">
                      <Image src={tt} alt="tt" />
                    </div>
                    <div className="hero-bottom--marquee--item">
                      <Image src={fb} alt="fb" />
                    </div>
                    <div className="hero-bottom--marquee--item">
                      <Image src={yt} alt="yt" />
                    </div>
                    <div className="hero-bottom--marquee--item">
                      <Image src={tw} alt="tw" />
                    </div>
                    {/* Duplicate the items */}
                    <div className="hero-bottom--marquee--item">
                      <Image src={ig} alt="ig" />
                    </div>
                    <div className="hero-bottom--marquee--item">
                      <Image src={tt} alt="tt" />
                    </div>
                    <div className="hero-bottom--marquee--item">
                      <Image src={fb} alt="fb" />
                    </div>
                    <div className="hero-bottom--marquee--item">
                      <Image src={yt} alt="yt" />
                    </div>
                    <div className="hero-bottom--marquee--item">
                      <Image src={tw} alt="tw" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="home-section section-first">
            <div className="container">
              <div className="section-title">
                <div className="section-title--content">
                  <div className="label-main">
                    <div className="label-main--content">
                      <span className="icon flex justify-center items-center">
                        <Image src={miniLogo} alt="Logo" className="w-5 h-5" />
                      </span>
                      Focused on Customer Experience
                    </div>
                  </div>
                  <h2 className="section-title--title">
                    World’s Cheap
                    <span>SMM Panel</span> Provides Services.
                  </h2>
                  <p className="section-title--text">
                    We offer 24/7 customer support through platforms like Skype,
                    Telegram, and more. Our panel is mobile-friendly, enabling
                    you to enhance your profiles on the fly! We guarantee
                    top-notch quality in all our services.
                  </p>
                </div>
              </div>
              {/* /.section-title */}
              <div className="first-cards">
                <div className="first-item first-item--1">
                  <div className="first-card">
                    <div className="first-circle" />
                    <div className="first-circle" />
                    <div className="first-shadow" />
                    <div className="first-card--body">
                      <div className="first-content">
                        <div className="label">
                          <LuHeartHandshake className="w-5 h-5" /> Select,
                          Engage & Purchase
                        </div>
                        <h3 className="title">Supported 50+ Platforms...</h3>
                        <p className="text">
                          Our exceptional support team resolves your queries
                          within 24 hours.
                        </p>
                      </div>
                      {/* /.first-card--content */}
                    </div>
                    {/* /.first-card--body */}
                    <ScrollingSocialIcons />
                  </div>
                  {/* /.first-card */}
                </div>
                {/* /.first-item */}
                <div className="first-item first-item--2">
                  <div className="first-card">
                    <div className="first-circle" />
                    <div className="first-circle" />
                    <div className="first-shadow" />
                    <div className="first-card--body">
                      <div className="first-content">
                        <div className="label">
                          <LuHeartHandshake className="w-5 h-5" />
                          The Best SMM Marketing
                        </div>
                        <h3 className="title">Elevate Your Social Presence</h3>
                        <p className="text">
                          Our dedicated support team ensures your issues are
                          resolved within 24 hours.
                        </p>
                      </div>
                      {/* /.first-card--content */}
                    </div>
                    {/* /.first-card--body */}
                  </div>
                  {/* /.first-card */}
                </div>
                {/* /.first-item (2) */}
                <div className="first-item first-item--3">
                  <div className="first-card">
                    <div className="first-circle" />
                    <div className="first-circle" />
                    <div className="first-shadow" />
                    <div className="first-card--body">
                      <span className="icon-wrapper">
                        <LuHeartHandshake className="w-48 h-48 text-[#1E45D0] icon_heart" />
                      </span>
                      <h3 className="title">4,507+</h3>
                      <p className="text">Over Satisfied Customers</p>
                    </div>
                  </div>
                </div>
                {/* /.first-item (3) */}
                <div className="first-item first-item--4">
                  <div className="first-card">
                    <div className="first-circle" />
                    <div className="first-circle" />
                    <div className="first-shadow" />
                    <div className="first-image">
                      <Image src={card4} alt="First Card Image" />
                    </div>
                    <div className="first-card--body">
                      <div className="first-content">
                        <div className="label">
                          <span className="fab fa-tiktok" />
                          <FaTiktok className="h-5 w-5" /> Follower, Likes &amp;
                          Beyond
                        </div>
                        <h3 className="title">Stand Out on TikTok</h3>
                        <p className="text">
                          Empower yourself or your customers to connect with a
                          vast and fresh audience using our TikTok SMM panel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.first-item (4) */}
                <div className="first-item first-item--5">
                  <div className="first-card">
                    <div className="first-circle" />
                    <div className="first-shadow" />
                    <div className="first-card--body">
                      <div className="first-visual">
                        <Image
                          src={card5}
                          alt="First Card Image"
                          width={424}
                          height={302}
                        />
                      </div>
                      <div className="first-content">
                        <div className="label">
                          <FaInstagram className="w-6 h-6" />
                          Followers, Likes & More
                        </div>
                        <h3 className="title">Best Instagram Services</h3>
                        <p className="text c_p">
                          Boost your clients' social media influence by
                          providing them exposure on platforms like LinkedIn,
                          Reddit, Pinterest, Spotify, and more through our
                          comprehensive SEO services.
                        </p>
                      </div>
                      {/* /.first-card--content */}
                    </div>
                    {/* /.first-card--body */}
                  </div>
                  {/* /.first-card */}
                </div>
                {/* /.first-item */}
                <div className="first-item first-item--5">
                  <div className="first-card">
                    <div className="first-circle" />
                    <div className="first-shadow" />
                    <div className="first-card--body">
                      <div className="first-visual ">
                        <div className="twitter-cards twitter-cards-wrapper">
                          <div className="twitter-card">
                            <span className="icon flex justify-center items-center">
                              <FaTiktok className="w-6 h-6" />
                            </span>

                            <div className="content">
                              <div>Tiktok Followers</div>
                              <div className="content-box" />
                            </div>
                            {/* create number 0.0 - 0.5 */}
                            <div className="visual-label">$0.40</div>
                          </div>
                          <div className="twitter-card">
                            <span className="icon flex justify-center items-center">
                              <FaTiktok className="w-6 h-6" />
                            </span>
                            <div className="content">
                              <div>Tiktok Followers</div>
                              <div className="content-box" />
                            </div>
                            {/* create number 0.0 - 0.5 */}
                            <div className="visual-label">$0.70</div>
                          </div>
                          <div className="twitter-card hidden md:visible">
                            <span className="icon flex justify-center items-center">
                              <FaTiktok className="w-6 h-6" />
                            </span>
                            <div className="content">
                              <div>Tiktok Followers</div>
                              <div className="content-box" />
                            </div>
                            {/* create number 0.0 - 0.5 */}
                            <div className="visual-label">$0.80</div>
                          </div>
                          <div className="twitter-card hidden md:visible">
                            <span className="icon flex justify-center items-center">
                              <FaTiktok className="w-6 h-6" />
                            </span>
                            <div className="content">
                              <div>Tiktok Followers</div>
                              <div className="content-box" />
                            </div>
                            {/* create number 0.0 - 0.5 */}
                            <div className="visual-label">$0.70</div>
                          </div>
                          <div className="twitter-card hidden md:visible">
                            <span className="icon flex justify-center items-center">
                              <FaTiktok className="w-6 h-6" />
                            </span>
                            <div className="content">
                              <div>Tiktok Followers</div>
                              <div className="content-box" />
                            </div>
                            {/* create number 0.0 - 0.5 */}
                            <div className="visual-label">$0.30</div>
                          </div>
                        </div>
                      </div>
                      <div className="first-content">
                        <div className="label">
                          <FaTiktok className="w-6 h-6" />
                          Likes, Followers & More
                        </div>
                        <h3 className="title">Tiktok Services</h3>
                        <p className="text c_p">
                          Provide your clients' TikTok handles with genuine
                          visibility against their competitors. Secure the most
                          TikToks, favorites, and an amplified follower count!
                        </p>
                      </div>
                      {/* /.first-card--content */}
                    </div>
                    {/* /.first-card--body */}
                  </div>
                  {/* /.first-card */}
                </div>
                {/* /.first-item */}
                <div className="first-item first-item--6">
                  <div className="first-card">
                    <div className="first-image">
                      <Image src={card6} alt="First Card Image" />
                    </div>
                    <div className="first-card--body">
                      <div className="first-content">
                        <div className="label">
                          <FaYoutube className="w-6 h-6" /> Subscribers & More
                        </div>
                        <h3 className="title">Reliable YouTube Panel</h3>
                        <p className="text">
                          Elevate your customers' channels to fame. Amplify
                          views, likes, subscribers, comments, and shares on
                          their videos—all achievable with our YouTube SMM
                          Panel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="home-section section-features" id="Features">
            <div className="container">
              <div className="section-features--box">
                <div className="section-title">
                  <div className="section-title--content">
                    <div className="label-main">
                      <div className="label-main--content">
                        <span className="icon flex justify-center items-center">
                          <Image
                            src={miniLogo}
                            alt="Logo"
                            className="w-5 h-5"
                          />
                        </span>
                        Features of GROW SMM PANEL
                      </div>
                    </div>
                    <h2 className="section-title--title">
                      Easy to Use GROW SMM PANEL
                    </h2>
                    <p className="section-title--text">
                      With a global network of partner companies and customers,
                      we offer swift support and premium services. Grow SMM
                      Panel delivers authentic organic SMM Panel Services,
                      prioritizing top-notch quality at every step.
                    </p>
                  </div>
                </div>
                {/* /.section-title */}
                <div className="section-features--marquee-wrapper">
                  <div
                    className="section-features--marquee"
                    data-smmspot="marquee"
                  >
                    <div className="marquee-container">
                      <div className="marquee-content">
                        <div className="item">
                          <FaCheck className="w-3 h-3 text-[#003DFD]" />
                          Boost Engagement
                        </div>
                        <div className="item">
                          <FaCheck className="w-3 h-3 text-[#003DFD]" />
                          Targeted Reach
                        </div>
                        <div className="item">
                          <FaCheck className="w-3 h-3 text-[#003DFD]" />
                          Instant Results
                        </div>
                        <div className="item">
                          <FaCheck className="w-3 h-3 text-[#003DFD]" />
                          Global Exposure
                        </div>
                        <div className="item">
                          <FaCheck className="w-3 h-3 text-[#003DFD]" />
                          Mobile Accessibility
                        </div>
                        <div className="item">
                          <FaCheck className="w-3 h-3 text-[#003DFD]" />
                          Competitive Pricing
                        </div>
                        <div className="item">
                          <FaCheck className="w-3 h-3 text-[#003DFD]" />
                          Authentic Results
                        </div>
                        {/* Duplicate the items for infinite scrolling */}
                        <div className="item">
                          <FaCheck className="w-3 h-3 text-[#003DFD]" />
                          Boost Engagement
                        </div>
                        <div className="item">
                          <FaCheck className="w-3 h-3 text-[#003DFD]" />
                          Targeted Reach
                        </div>
                        <div className="item">
                          <FaCheck className="w-3 h-3 text-[#003DFD]" />
                          Instant Results
                        </div>
                        <div className="item">
                          <FaCheck className="w-3 h-3 text-[#003DFD]" />
                          Global Exposure
                        </div>
                        <div className="item">
                          <FaCheck className="w-3 h-3 text-[#003DFD]" />
                          Mobile Accessibility
                        </div>
                        <div className="item">
                          <FaCheck className="w-3 h-3 text-[#003DFD]" />
                          Competitive Pricing
                        </div>
                        <div className="item">
                          <FaCheck className="w-3 h-3 text-[#003DFD]" />
                          Authentic Results
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features">
                  <div className="feature-item">
                    <div className="feature-item--icon">
                      <FaBoxArchive className="w-6 h-6" />
                    </div>
                    <h3 className="feature-item--title text-sm">Mass Orders</h3>
                    <p className="feature-item--text">
                      Our mission revolves around enabling your business to
                      excel in social media marketing.
                    </p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-item--icon">
                      <IoCodeSlash className="w-6 h-6" />
                    </div>
                    <h3 className="feature-item--title text-sm">
                      API Integration
                    </h3>
                    <p className="feature-item--text">
                      The fully integrated API provides seamless experience in
                      setting up and selling our services.
                    </p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-item--icon">
                      <LuHeartHandshake className="w-6 h-6" />
                    </div>
                    <h3 className="feature-item--title text-sm">
                      Monthly Subscriptions
                    </h3>
                    <p className="feature-item--text">
                      Empowering your business to thrive with our monthly social
                      media marketing subscriptions.
                    </p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-item--icon">
                      <IoFlashOutline className="w-6 h-6" />
                    </div>
                    <h3 className="feature-item--title text-sm">
                      Fast Delivery
                    </h3>
                    <p className="feature-item--text">
                      Helping your business succeed with our fast delivery
                      service.
                    </p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-item--icon">
                      <PiLinkBreakBold className="w-6 h-6" />
                    </div>
                    <h3 className="feature-item--title text-sm">
                      Affiliate Program
                    </h3>
                    <p className="feature-item--text">
                      Boosting your business success through our affiliate
                      program.
                    </p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-item--icon">
                      <GiSellCard className="w-6 h-6" />
                    </div>
                    <h3 className="feature-item--title text-sm">
                      Reseller Program
                    </h3>
                    <p className="feature-item--text">
                      Expanding your business opportunities with our reseller
                      program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="home-section section-reviews" id="Reviews">
            <div className="container">
              <div className="section-title">
                <div className="section-title--content">
                  <div className="label-main">
                    <div className="label-main--content">
                      <span className="icon flex justify-center items-center">
                        <Image src={miniLogo} alt="Logo" className="w-5 h-5" />
                      </span>
                      Client Reviews
                    </div>
                  </div>
                  <h2 className="section-title--title">
                    What do users of
                    <span> GROW SMM PANEL</span> say?
                  </h2>
                  <p className="section-title--text">
                    Our extensive network of partner companies and clients spans
                    globally. We offer prompt support and deliver top-notch
                    services.
                  </p>
                </div>
              </div>
              {/* /.section-title */}

              <div className="swiper home-review-swiper">
                {/* Additional required wrapper */}
                <ReviewsSlider />

                {/* If we need pagination */}
                <div className="swiper-pagination" />
              </div>
            </div>
          </section>
          <section className="home-section section-faq" id="FAQ">
            <div className="container">
              <div className="section-title">
                <div className="section-title--content">
                  <div className="label-main">
                    <div className="label-main--content">
                      <span className="icon flex justify-center items-center">
                        <Image src={miniLogo} alt="Logo" className="w-5 h-5" />
                      </span>
                      FAQs
                    </div>
                  </div>
                  <h2 className="section-title--title">
                    Frequently Asked Questions
                  </h2>
                  <p className="section-title--text">
                    We collaborate with numerous partner companies and serve
                    customers globally. Our commitment includes swift support
                    and delivering top-notch service quality.
                  </p>
                </div>
              </div>
              {/* /.section-title */}
              <FAQ />
              <div className="faq-bottom">
                <div className="faq-bottom--image">
                  <Image src={faqBrowser} alt="FAQ Browser" />
                </div>
                <div className="message-pop">
                  How can i add balance to my account ?
                </div>
                <div className="faq-bottom--content">
                  <h3 className="faq-bottom--title">
                    Do you have additional questions?
                  </h3>
                  <p className="faq-bottom--text">
                    We collaborate with numerous partner companies and serve
                    customers globally. Our commitment includes swift support
                    and delivering top-notch service quality.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="member-layout modal-layout" id="member-layout">
            <div className="member-layout--header">
              <div className="header-wrapper">
                <div className="header-start">
                  <Link className="btn btn-primary" href="/">
                    <svg className="icon">
                      <use xlinkHref="#arrow-left" />
                    </svg>
                    <span className="d-none d-lg-block">
                      Go Back to Grow SMM Panel
                    </span>
                  </Link>
                </div>
                {/* /.header-start */}
                <div className="header-logo">
                  <Link href="/">
                    <Image src={logo} alt="Logo" />
                  </Link>
                </div>
                <div className="header-end d-none d-lg-block">
                  <Link href="#" className="btn btn-secondary">
                    Having trouble? Contact
                    <svg className="icon">
                      <use xlinkHref="#comments" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* /.member-layout--header */}
            <div className="member-layout--content">
              <div className="container">
                <div className="member-layout--head">
                  <div className="icon-box">
                    <svg className="icon">
                      <use xlinkHref="#users-add" />
                    </svg>
                  </div>
                  <h2 className="title">Let’s Get Started</h2>
                  <p className="text">
                    Signin to Grow SMM Panel &amp; Rise in social Media!
                  </p>
                </div>
                <form method="post" action="">
                  <div className="form-group">
                    <label htmlFor="username" className="control-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control fc-2"
                      id="username"
                      name="LoginForm[username]"
                    />
                  </div>
                  <div className="form-group form-group__password">
                    <label htmlFor="password" className="control-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control fc-2"
                      id="password"
                      name="LoginForm[password]"
                    />
                    <div className="pt-3 text-center">
                      <Link href="/resetpassword" className="forgot-password">
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input
                        type="checkbox"
                        name="LoginForm[remember]"
                        defaultValue={1}
                        id="remember"
                      />
                      <div className="checkbox-icon" />
                      Remember me
                    </label>
                  </div>
                  <input
                    type="hidden"
                    name="_csrf"
                    defaultValue="EcVYxfptA_a_7r4s0MBXy3JHkg1WvHR_Ad2czd5bdTh7pzGOrzJrxNK07n79tSefQzToNHvTFzlt6Pf4uxc7Uw=="
                  />
                  <button
                    type="submit"
                    className="btn btn-primary btn-norounded btn-block"
                  >
                    Sign in
                  </button>
                  <div className="signup-text">
                    Already have an account?
                    <Link href="/signup">Sign up</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
