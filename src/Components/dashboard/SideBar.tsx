"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiCustomerService2Line,
  RiDashboard2Line,
  RiDashboardHorizontalLine,
  RiExchange2Line,
  RiFile3Line,
  RiListCheck3,
  RiQuestionnaireLine,
  RiRefreshLine,
  RiServerLine,
  RiShoppingBasket2Line,
  RiStarSmileLine,
  RiStore3Line,
  RiTerminalBoxLine,
} from "react-icons/ri";

interface Props {
  open: boolean;
  setOpen: any;
}

const Sidebar: FC<Props> = ({ open, setOpen }): JSX.Element => {
  const route = usePathname();
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Link href="/">
          <Image
            src={"/imgs/panel-logo.png"}
            alt="logo"
            width={135}
            height={45}
          />
        </Link>

        <div className="p-menu-btn" onClick={() => setOpen(!open)}>
          {open ? <RiArrowLeftLine /> : <RiArrowRightLine />}
        </div>
      </div>

      <div className="ps-wrapper my-11">
        <ul className="ps-menu">
          <li id={`${route === "/dashboard" ? "active" : ""}`}>
            <Link href="/dashboard" className="psLink">
              <span>
                <RiDashboard2Line className="text-lg md:text-xl" />
              </span>
              New Order
            </Link>
          </li>
          <li id={`${route === "/dashboard/order-history" ? "active" : ""}`}>
            <Link href="/dashboard/order-history" className="psLink">
              <span>
                <RiShoppingBasket2Line className="text-lg md:text-xl" />
              </span>
              Orders History
            </Link>
          </li>
          <li id={`${route === "/dashboard/add-funds" ? "active" : ""}`}>
            <Link href="/dashboard/add-funds" className="psLink">
              <span>
                <RiExchange2Line className="text-lg md:text-xl" />
              </span>
              Add Funds
            </Link>
          </li>
          <li id={`${route === "/dashboard/tutorial" ? "active" : ""}`}>
            <Link href="/dashboard/tutorial" className="psLink">
              <span>
                <RiFile3Line className="text-lg md:text-xl" />
              </span>
              Tutorial
            </Link>
          </li>
          <li id={`${route === "/dashboard/services" ? "active" : ""}`}>
            <Link href="/dashboard/services" className="psLink">
              <span>
                <RiListCheck3 className="text-lg md:text-xl" />
              </span>
              Services
            </Link>
          </li>
          <li id={`${route === "/dashboard/faq" ? "active" : ""}`}>
            <Link href="/dashboard/faq" className="psLink">
              <span>
                <RiQuestionnaireLine className="text-lg md:text-xl" />
              </span>
              FAQ
            </Link>
          </li>
          <li id={`${route === "/dashboard/updates" ? "active" : ""}`}>
            <Link href="/dashboard/updates" className="psLink">
              <span>
                <RiRefreshLine className="text-lg md:text-xl" />
              </span>
              Updates
            </Link>
          </li>
          <li id={`${route === "/dashboard/child-panel" ? "active" : ""}`}>
            <Link href="/dashboard/child-panel" className="psLink">
              <span>
                <RiStore3Line className="text-lg md:text-xl" />
              </span>
              Resell Services
            </Link>
          </li>
          <li id={`${route === "/dashboard/affiliates" ? "active" : ""}`}>
            <Link href="/dashboard/affiliates" className="psLink">
              <span>
                <RiStarSmileLine className="text-lg md:text-xl" />
              </span>
              Affiliates
            </Link>
          </li>
          <li id={`${route === "/dashboard/mass-order" ? "active" : ""}`}>
            <Link href="/dashboard/mass-order" className="psLink">
              <span>
                <RiDashboardHorizontalLine className="text-lg md:text-xl" />
              </span>
              Mass Order
            </Link>
          </li>
          <li
            className={`${
              route === "/dashboard/api-integration" ? "active" : ""
            }`}
          >
            <Link href="/dashboard/api-integration" className="psLink">
              <span>
                <RiTerminalBoxLine className="text-lg md:text-xl" />
              </span>
              API
            </Link>
          </li>
          <li id={`${route === "/dashboard/terms" ? "active" : ""}`}>
            <Link href="/dashboard/terms" className="psLink">
              <span>
                <RiServerLine className="text-lg md:text-xl" />
              </span>
              Terms
            </Link>
          </li>
          <li id={`${route === "/dashboard/support" ? "active" : ""}`}>
            <Link href="/dashboard/support" className="psLink">
              <span>
                <RiCustomerService2Line className="text-lg md:text-xl" />
              </span>
              Support
            </Link>
          </li>
        </ul>
      </div>

      <div className="p-support">
        <Link href={"/dashboard/support"} className="psSupportLink">
          <span className="psSupportIcon">
            <RiCustomerService2Line />
          </span>
          Support
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
