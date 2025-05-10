"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};
import "./header.scss";
import { FaDiscord, FaEnvelope, FaNewspaper, FaYoutube } from "react-icons/fa";
import { FaHouse, FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import {
  GiAngelWings,
  GiFairyWings,
  GiHamburgerMenu,
  GiHeartWings,
} from "react-icons/gi";
import { CgArrowRightO, CgClose, CgList } from "react-icons/cg";
import { AnimatePresence, stagger, useAnimate } from "motion/react";
import { BsArrowRight } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
export default function Header({}: Props) {
  const path = usePathname();
  const [fsNav, setFsNav] = useState(false);

  const [scope, animate] = useAnimate();
  const animateIn = async () => {
    await animate(
      ".btn-mnav",
      { scaleX: [0, 1], x: [500, 0] },
      { duration: 0.05, delay: stagger(0.1) }
    );
  };

  const animateOut = async () => {
    await animate(
      ".btn-mnav",
      { scaleX: 1, x: 500 },
      { duration: 0.05, delay: stagger(0.05, { from: "last" }) }
    );
  };
  useEffect(() => {
    if (fsNav) {
      animateIn();
    } else {
      animateOut();
    }
  }, [fsNav]);

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
            className={`btn btn-mnav ${path.includes("/news") ? "act" : ""}`}
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
            href="/contacts"
            className={`btn btn-mnav ${
              path.includes("/contacts") ? "act" : ""
            }`}
          >
            CONTACT
          </Link>
        </nav>
        <button
          className="btn fs-btn"
          onClick={() => {
            setFsNav(!fsNav);
          }}
        >
          <GiHamburgerMenu />
        </button>
      </header>
      <nav
        id="fs-nav"
        className={fsNav ? "act" : "closed"}
        onClick={() => {
          setFsNav(false);
        }}
        ref={scope}
      >
        <Link
          href="/"
          className={`btn btn-mnav ${path.includes("/") ? "act" : ""}`}
        >
          HOME <FaHouse />
        </Link>
        <Link
          href="/talents"
          className={`btn btn-mnav ${path.includes("/talent") ? "act" : ""}`}
        >
          TALENTS <GiHeartWings />
        </Link>
        <Link
          href="/about"
          className={`btn btn-mnav ${path.includes("/about") ? "act" : ""}`}
        >
          ABOUT{" "}
          <img
            src="/g/logo_b.png"
            width={40}
            height={50}
            style={{ objectFit: "contain" }}
            alt=""
          />
        </Link>
        <Link
          href="/news"
          className={`btn btn-mnav ${path.includes("/news") ? "act" : ""}`}
        >
          NEWS <FaNewspaper />
        </Link>
        <Link
          href="/guidelines"
          className={`btn btn-mnav ${
            path.includes("/guidelines") ? "act" : ""
          }`}
        >
          GUIDELINES <CgList />
        </Link>
        <Link
          href="#"
          target="_blank"
          className={`btn btn-mnav ${path.includes("/merch") ? "act" : ""}`}
        >
          MERCH <BiShoppingBag />
        </Link>
        <Link
          href="/contacts"
          className={`btn btn-mnav ${path.includes("/contacts") ? "act" : ""}`}
        >
          CONTACT <FaEnvelope />
        </Link>
        <div
          className={`btn btn-mnav ${path.includes("/contacts") ? "act" : ""}`}
        >
          CLOSE <CgArrowRightO />
        </div>
      </nav>
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
      <img src="/d/glow1.png" alt="" className="rgb-light" />
    </>
  );
}
