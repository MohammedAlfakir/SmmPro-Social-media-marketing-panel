"use client";
import "../SectionsStyle.css";

import Image from "next/image";
import ig from "../../../../public/imgs/ig.svg";
import fb from "../../../../public/imgs/fb.svg";
import sp from "../../../../public/imgs/sp.svg";
import tg from "../../../../public/imgs/tg.svg";
import th from "../../../../public/imgs/th.svg";
import tw from "../../../../public/imgs/tw.svg";
import yt from "../../../../public/imgs/yt.svg";
import sc from "../../../../public/imgs/sc.svg";
import { useEffect } from "react";

const ScrollingSocialIcons = ({ speed = 0.4 }) => {
  // Default speed is 0.1
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const leftScrollContainer = document.querySelector(".left-scroll");
      const rightScrollContainer = document.querySelector(".right-scroll");
      const distance = scrollTop * speed; // Use the speed factor

      leftScrollContainer.style.transform = `translateY(-50%) translateX(calc(50px - ${distance}px))`;
      rightScrollContainer.style.transform = `translateY(-50%) translateX(calc(-50px + ${distance}px))`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]); // Depend on the speed

  return (
    <div className="bottom">
      <div className="social-icons left-scroll flex">
        <div className="social-icon">
          <Image src={sp} alt="New Icon" />
        </div>
        <div className="social-icon">
          <Image src={th} alt="New Icon" />
        </div>
        <div className="social-icon">
          <Image src={tw} alt="Instagram" />
        </div>
        <div className="social-icon">
          <Image src={tg} alt="Facebook" />
        </div>
        <div className="social-icon">
          <Image src={yt} alt="Spotify" />
        </div>
        <div className="social-icon">
          <Image src={fb} alt="Telegram" />
        </div>
        <div className="social-icon">
          <Image src={th} alt="New Icon" />
        </div>{" "}
        <div className="social-icon">
          <Image src={sp} alt="New Icon" />
        </div>
        <div className="social-icon">
          <Image src={ig} alt="New Icon" />
        </div>
        <div className="social-icon">
          <Image src={tw} alt="Instagram" />
        </div>
        <div className="social-icon">
          <Image src={tg} alt="Facebook" />
        </div>
        <div className="social-icon">
          <Image src={yt} alt="Spotify" />
        </div>
        <div className="social-icon">
          <Image src={fb} alt="Telegram" />
        </div>
        <div className="social-icon">
          <Image src={ig} alt="New Icon" />
        </div>
        <div className="social-icon">
          <Image src={fb} alt="Telegram" />
        </div>
        <div className="social-icon">
          <Image src={ig} alt="New Icon" />
        </div>{" "}
        <div className="social-icon">
          <Image src={th} alt="New Icon" />
        </div>
        <div className="social-icon">
          <Image src={sp} alt="New Icon" />
        </div>
        <div className="social-icon">
          <Image src={tw} alt="Instagram" />
        </div>
        <div className="social-icon">
          <Image src={sp} alt="Facebook" />
        </div>
        <div className="social-icon">
          <Image src={yt} alt="Spotify" />
        </div>
        <div className="social-icon">
          <Image src={fb} alt="Telegram" />
        </div>
        <div className="social-icon">
          <Image src={ig} alt="New Icon" />
        </div>
        {/* New icon added here */}
      </div>

      <div className="social-icons right-scroll flex">
        <div className="social-icon">
          <Image src={ig} alt="Thumbtack" />
        </div>
        <div className="social-icon">
          <Image src={fb} alt="Twitter" />
        </div>
        <div className="social-icon">
          <Image src={sp} alt="YouTube" />
        </div>
        <div className="social-icon">
          <Image src={tg} alt="Instagram" />
        </div>
        <div className="social-icon">
          <Image src={sc} alt="New Icon" className="w-[3.8rem] h-[3.8rem]" />
        </div>
        <div className="social-icon">
          <Image src={fb} alt="New Icon" />
        </div>
        <div className="social-icon">
          <Image src={yt} alt="Thumbtack" />
        </div>{" "}
        <div className="social-icon">
          <Image src={ig} alt="Thumbtack" />
        </div>
        <div className="social-icon">
          <Image src={fb} alt="Twitter" />
        </div>
        <div className="social-icon">
          <Image src={sp} alt="YouTube" />
        </div>
        <div className="social-icon">
          <Image src={tg} alt="Instagram" />
        </div>
        <div className="social-icon">
          <Image src={tw} alt="New Icon" />
        </div>
        <div className="social-icon">
          <Image src={ig} alt="New Icon" />
        </div>
        <div className="social-icon">
          <Image src={yt} alt="Thumbtack" />
        </div>{" "}
        <div className="social-icon">
          <Image src={yt} alt="Thumbtack" />
        </div>{" "}
        <div className="social-icon">
          <Image src={th} alt="Thumbtack" />
        </div>
        <div className="social-icon">
          <Image src={fb} alt="Twitter" />
        </div>
        <div className="social-icon">
          <Image src={sp} alt="YouTube" />
        </div>
        <div className="social-icon">
          <Image src={tg} alt="Instagram" />
        </div>
        <div className="social-icon">
          <Image src={tw} alt="New Icon" />
        </div>
        <div className="social-icon">
          <Image src={ig} alt="New Icon" />
        </div>
        <div className="social-icon">
          <Image src={yt} alt="Thumbtack" />
        </div>
        {/* New icon added here */}
      </div>
    </div>
  );
};

export default ScrollingSocialIcons;
