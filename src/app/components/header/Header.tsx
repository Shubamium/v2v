"use client";
import Link from "next/link";
import React from "react";

type Props = {};
import "./header.scss";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Header({}: Props) {
  return (
    <>
      <header id="header">
        <div className="rgb-line"></div>
        <div className="side-l"></div>
        <div className="side-r"></div>
        <div className="logo-part btn">
          <div className="wrapper ">
            <img src="/g/logo_w.png" alt="" className="logo" />
          </div>
        </div>
        <nav id="main-nav">
          <Link href="/" className="btn btn-mnav act">
            TALENTS
          </Link>
          <Link href="/about" className="btn btn-mnav">
            ABOUT
          </Link>
          <Link href="/news" className="btn btn-mnav">
            NEWS
          </Link>
          <Link href="/guidelines" className="btn btn-mnav">
            GUIDELINES
          </Link>
          <Link href="#" target="_blank" className="btn btn-mnav">
            MERC
          </Link>
          <Link href="/contact" className="btn btn-mnav">
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
