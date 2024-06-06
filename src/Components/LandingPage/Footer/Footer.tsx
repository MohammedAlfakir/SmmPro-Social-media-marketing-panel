import React from "react";
import "../SectionsStyle.css";
import { MdMailOutline } from "react-icons/md";
import logo from "../../../../public/imgs/panel-logo.png";
import Image from "next/image";
import payment from "../../../../public/imgs/payment-logos.svg";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-content">
                  <div className="footer-logo">
                    <Image src={logo} alt="logo" width={120} />
                  </div>
                  <div className="footer-description">
                    Elevate Your Social Presence with Grow SMM Panel, the
                    World's #1 Social Media Marketing Tool!
                  </div>
                  <Link
                    href="mailto:official@GrowSMMPanel.com"
                    className="footer-email"
                  >
                    <span className="icon-wrapper">
                      <MdMailOutline className="w-5 h-5" />
                    </span>
                    official@GrowSMMPanel.com
                    <svg className="icon">
                      <use xlinkHref="#arrow-right" />
                    </svg>
                  </Link>
                </div>
              </div>
              {/* /.col-lg-4 */}
              <div className="col-lg-8">
                <div className="row justify-content-between">
                  <div className="col">
                    <div className="footer-menu--wrapper">
                      <div className="footer-menu--title">
                        Snapchat SMM Panel
                      </div>
                      <ul className="footer-menu">
                        <li>
                          <Link href="#">Increase Snapchat Views</Link>
                        </li>
                        <li>
                          <Link href="#">Increase Snapchat Subscribers</Link>
                        </li>
                        <li>
                          <Link href="#">Increase Snapchat Likes</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col">
                    <div className="footer-menu--wrapper">
                      <div className="footer-menu--title">
                        Instagram SMM Panel
                      </div>
                      <ul className="footer-menu">
                        <li>
                          <Link href="#">Increase Instagram Likes</Link>
                        </li>
                        <li>
                          <Link href="#">Increase Instagram Followers</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col">
                    <div className="footer-menu--wrapper">
                      <div className="footer-menu--title">TikTok SMM Panel</div>
                      <ul className="footer-menu">
                        <li>
                          <Link href="#">Increase TikTok Likes</Link>
                        </li>
                        <li>
                          <Link href="#">Increase TikTok Followers</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.footer-body */}
        <div className="footer-bottom">
          <div className="container">
            <div className="copyright">
              2024 ©<Link href="/">Grow SMM Panel</Link> All Rights Reserved.
            </div>
            <div className="payment-methods">
              <Image src={payment} alt="Payment Methods" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
