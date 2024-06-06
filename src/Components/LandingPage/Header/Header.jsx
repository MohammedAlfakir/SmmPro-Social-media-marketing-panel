"use client";

import "../SectionsStyle.css";
import "./HeaderStyle.css";

import React, { useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";
import Image from "next/image";
import logo from "../../../../public/imgs/panel-logo.png";
function header() {
  const [drop, setDrop] = useState(false);

  function menuDrop() {
    setDrop(!drop);
  }
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header-box flex justify-between">
            <Link href="/" className="header-logo">
              <Image src={logo} width={120} />
            </Link>

            {/* Menu */}
            <div className="header-menu" id="menu">
              <div className="header-menu--mobile" />
              <ul>
                <li>
                  <Link href="#Features">Features</Link>
                </li>
                <li>
                  <Link href="#Reviews">Reviews</Link>
                </li>
                <li>
                  <Link href="#FAQ">FAQ </Link>
                </li>
                <li>
                  <Link href="#Services">Services</Link>
                </li>
              </ul>
              <div className="header-menu--buttons">
                <SignedOut>
                  <Link href="/sign-in" className="btn btn-secondary">
                    Sign In
                  </Link>
                  <Link href="/sign-up" className="btn btn-primary">
                    Sign Up <AiOutlineUsergroupAdd className="w-5 h-5" />
                  </Link>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                  <Link href="/dashboard" className="btn btn-secondary">
                    Dashboard
                  </Link>
                </SignedIn>
              </div>
            </div>

            {/* Drop Menu */}

            <div class="header-menu--btn">
              <button
                class="btn btn-secondary"
                onClick={() => menuDrop()}
                data-toggle="guest-menu"
              >
                {drop ? (
                  <IoMdClose className="text-3xl text-white" />
                ) : (
                  <IoMenuSharp className="text-3xl text-white" />
                )}
              </button>
            </div>

            {drop && (
              <div className="header-menu active" id="menu">
                <div className="header-menu--mobile" />
                <ul>
                  <li>
                    <Link href="#Features">Features</Link>
                  </li>
                  <li>
                    <Link href="#Reviews">Reviews</Link>
                  </li>
                  <li>
                    <Link href="#FAQ">FAQ </Link>
                  </li>
                  <li>
                    <Link href="#Services">Services</Link>
                  </li>
                </ul>
                <div className="header-menu--buttons">
                  <SignedOut>
                    <Link href="/sign-in" className="btn btn-secondary">
                      Sign In
                    </Link>
                    <Link href="/sign-up" className="btn btn-primary">
                      Sign Up <AiOutlineUsergroupAdd className="w-5 h-5" />
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <Link href="/dashboard" className="btn btn-secondary">
                      Dashboard
                    </Link>
                  </SignedIn>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default header;
