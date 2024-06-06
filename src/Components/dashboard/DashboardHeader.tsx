"use client";
import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiMoneyDollarCircleLine,
  RiMoonFill,
  RiSunFill,
} from "react-icons/ri";

interface Props {
  open: boolean;
  setOpen: any;
}

const DashboardHeader: FC<Props> = ({ open, setOpen }): JSX.Element => {
  const [show, setShow] = useState<Boolean>(false);
  const [showAccount, setShowAccount] = useState<Boolean>(false);
  const [isFixed, setIsFixed] = useState<Boolean>(false);
  const route = usePathname();

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 5) {
        // You can adjust the scroll threshold
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`p-header ${isFixed ? "p-fixed" : ""}`}>
      <div className="p-header-list">
        <Link href="/">
          <Image
            src={"/imgs/panel-logo.png"}
            alt="logo"
            width={135}
            height={45}
          />
        </Link>
        <button
          className="p-menu-btn"
          aria-label="Toggle"
          onClick={() => setOpen(!open)}
        >
          {open ? <RiArrowLeftLine /> : <RiArrowRightLine />}
        </button>
      </div>

      <div className="p-header-group">
        <div className="currency relative">
          <button className="currency-btn" onClick={() => setShow(!show)}>
            <RiMoneyDollarCircleLine className="text-2xl text-[#fff]" />
          </button>
          {show && (
            <ul className="currency-list">
              <li>USD $</li>
              <li>EUR €</li>
              <li>MAD €</li>
            </ul>
          )}
        </div>

        <div className="p-profile" onClick={() => setShowAccount(!showAccount)}>
          <UserButton />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
