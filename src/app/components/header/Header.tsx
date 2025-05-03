"use client";
import Link from "next/link";
import React from "react";

type Props = {};
import "./header.scss";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";
export default function Header({}: Props) {
  const path = usePathname();

  return (
    <>
      <header id="header">
        <div className="rgb-line"></div>
        <div className="side-l"></div>
        <div className="side-r"></div>
        <div className="logo-part btn">
          <div className="wrapper ">
            <Link href={"/"}>
              <img src="/g/logo_w.png" alt="" className="logo" />
            </Link>
          </div>
        </div>
        <nav id="main-nav">
          <Link
            href="/talents"
            className={`btn btn-mnav ${path.includes("/talent") ? "act" : ""}`}
          >
            TALENTS
          </Link>
          <Link
            href="/about"
            className={`btn btn-mnav ${path.includes("/about") ? "act" : ""}`}
          >
            ABOUT
          </Link>
          <Link
            href="/news"
            className={`btn btn-mnav ${path.includes("/bews") ? "act" : ""}`}
          >
            NEWS
          </Link>
          <Link
            href="/guidelines"
            className={`btn btn-mnav ${
              path.includes("/guidelines") ? "act" : ""
            }`}
          >
            GUIDELINES
          </Link>
          <Link
            href="#"
            target="_blank"
            className={`btn btn-mnav ${path.includes("/merch") ? "act" : ""}`}
          >
            MERCH
          </Link>
          <Link
            href="/contact"
            className={`btn btn-mnav ${path.includes("/contact") ? "act" : ""}`}
          >
            CONTACT
          </Link>
        </nav>
      </header>
      <div id="side-contact">
        <a href="#" className="btn btn-sc">
          {" "}
          <FaXTwitter />
        </a>
        <a href="#" className="btn btn-sc">
          {" "}
          <FaYoutube />
        </a>
        <a href="#" className="btn btn-sc">
          {" "}
          <FaDiscord />
        </a>
      </div>
      <img src="/d/glow.svg" alt="" className="rgb-light" />
    </>
  );
}
