import React from "react";
import "../SectionsStyle.css";
import Image from "next/image";
import miniLogo from "../../../../public/minilogo.png";
import { GoArrowRight } from "react-icons/go";
import ctaLeft from "../../../../public/imgs/cta-left.png";
import ctaRight from "../../../../public/imgs/cta-right.png";
import Link from "next/link";
function Cta() {
  return (
    <>
      <section className="section-cta" id="Services">
        <div className="circle" />
        <div className="circle" />
        <div className="section-cta--images">
          <Image src={ctaLeft} alt="Youtube views chart" className="cta-left" />
          <Image src={ctaRight} alt="Twitter(X) Growth" className="cta-right" />
        </div>
        <div className="container">
          <div className="section-title">
            <div className="section-title--content">
              <div className="label-main">
                <div className="label-main--content">
                  <span className="icon flex justify-center items-center">
                    <Image src={miniLogo} alt="Logo" className="w-5 h-5" />
                  </span>
                  Start with Grow SMM Panel today
                </div>
              </div>
              <h2 className="section-title--title">
                World’s Leading
                <span> SMM Panel</span> Offering Services.
              </h2>
              <p className="section-title--text mb-3">
                We also offer 24/7 customer support through various channels
                like Skype, Telegram, etc. Our panel is mobile-friendly,
                allowing you to enhance your profiles on the move! We assure you
                of our high-quality services.
              </p>
              <Link href="/sign-up" className="btn btn-primary">
                Begin Boost Your Social
                <GoArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
          {/* /.section-title */}
        </div>
      </section>
    </>
  );
}

export default Cta;
