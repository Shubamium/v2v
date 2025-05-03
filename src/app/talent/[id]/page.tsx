import React from "react";

type Props = {};
import "./talent.scss";
import Link from "next/link";
import { FaArrowRight, FaShoppingBag, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsArrowLeft, BsArrowLeftShort } from "react-icons/bs";
import { BiHeart, BiShoppingBag } from "react-icons/bi";

export default function page({}: Props) {
  return (
    <main id="p_talent">
      <div className="confine">
        <div className="circt"></div>
        <div className="circb"></div>
        <div className="art">
          <img src="/g/char1.png" alt="" className="main ni" />
          <img src="/g/char1.png" alt="" className="main ni shadow" />
        </div>
        <div className="info">
          <div className="top">
            <div className="logo-part">
              <img src="/g/logo2.png" alt="" />
            </div>
            <div className="dia">
              <div className="ts"></div>
              <div className="bs"></div>
              <svg
                width="251"
                height="22"
                viewBox="0 0 251 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="talshape"
              >
                <path
                  d="M246.533 0H95.3217L83.9306 15.7584L88.6211 21.3785H238.715L251 5.73033L246.533 0Z"
                  fill="#D8FFFF"
                />
                <path
                  d="M73.9332 0H11.3604L0.00017059 15.7584L4.67789 21.3786H66.137L78.3882 5.73033L73.9332 0Z"
                  fill="#D8FFFF"
                />
              </svg>

              <p>
                “Sitting upon her throne, the ruler of crystal dragons herself,
                is the hamster Milz Malakite. Although she might seem too cool
                for this world, you’ll be quickly charmed by her goofy hamster
                antics.”
              </p>
            </div>
          </div>
          <div className="bot">
            <div className="l">
              <div className="info-list">
                <div className="info">
                  <h3>BIRTHDAY</h3>
                  <p>April 20</p>
                </div>
                <div className="info">
                  <h3>BIRTHDAY</h3>
                  <p>April 20</p>
                </div>
                <div className="info">
                  <h3>BIRTHDAY</h3>
                  <p>April 20</p>
                </div>
              </div>
              <Link href={"/talents"} className="btn btn-ext">
                <BsArrowLeft />
                TALENT LIST
              </Link>
            </div>
            <div className="r">
              <div className="vids">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ash9FVn3trc?si=7-kjot7BqaYrRVhA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="ytembed"
                ></iframe>
              </div>
              <div className="misc">
                <div className="contacts">
                  <a href="#" className="btn">
                    {" "}
                    <FaXTwitter />
                  </a>
                  <a href="#" className="btn">
                    {" "}
                    <FaYoutube />
                  </a>
                </div>
                <div className="external">
                  <a href="#" className="btn btn-ext">
                    {" "}
                    <BiHeart />
                    DONATE
                  </a>
                  <a href="#" className="btn btn-ext">
                    <FaShoppingBag />
                    MERCH
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
