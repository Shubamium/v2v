import Link from "next/link";
import React from "react";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type Props = {};
import "./footer.scss";
export default function Footer({}: Props) {
  return (
    <footer id="footer">
      <img src="/d/glow1.png" alt="" className="glow ni" />
      <div className="tl ni"></div>
      <div className="tr ni"></div>
      <div className="tlr ni"></div>
      <div className="trr ni"></div>
      <img src="/d/fgl.png" alt="" className="fgl ni" />
      <img src="/d/fgr.png" alt="" className="fgr ni" />
      <div className="content">
        <img src="/d/frpo.png" alt="" className="flpo ni" />
        <img src="/d/flpo.png" alt="" className="frpo ni" />
        <div className="confine">
          <div className="chibs">
            <img src="/g/chib1.png" alt="" />
          </div>
          <div className="c">
            <div className="top">
              <h2>NAVIGATION</h2>
              <nav className="mininav">
                <Link href={"/"} className="btn btn-minav">
                  Home
                </Link>
                <Link href={"/talents"} className="btn btn-minav">
                  Talents
                </Link>
                <Link href={"/about"} className="btn btn-minav">
                  About
                </Link>
                <Link href={"/guidelines"} className="btn btn-minav">
                  Guidelines
                </Link>
                <Link href={"/news"} className="btn btn-minav">
                  News
                </Link>
                <Link
                  href={"https://www.vir2alverse.store"}
                  className="btn btn-minav"
                >
                  Merch
                </Link>
                <Link href={"/contacts"} className="btn btn-minav">
                  Contact
                </Link>
              </nav>
            </div>
            <img src="/d/footer-circ.png" alt="" className="fc" />
            <div className="contact">
              <a href="https://x.com/Vir2alVerse" className="btn btn-ct">
                <FaXTwitter />
              </a>
              <a
                href="https://www.discord.gg/wM8wNcUHCm"
                className="btn btn-ct"
              >
                <FaDiscord />
              </a>
              <a
                href="https://www.youtube.com/@Vir2alVerse"
                className="btn btn-ct"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="r">
            <div className="top">
              <img src="/g/logo_w.png" alt="" className="logo" />
              <p className="tagline">From our universe to yours</p>
            </div>
            <div className="b">
              <p className="attribution">
                © 2025 Vir2alverse All Rights Reserved
              </p>
              <a href="https://x.com/shubamium2">
                website design by <strong>SHUBAMIUM</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
